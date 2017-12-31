import { positionString, randomNumber } from './utils';
import * as events from './events';
import * as actions from './actions';
import * as rules from './rules';
import Agent from './Agent.js';
import Leaf from './Leaf.js';
import Hole from './Hole.js';

const makePositionsIndex = (width, height) => {
    const index = {};
    for(let len = width * height; len--;){
        const x = len % width;
        const y = Math.floor(len / width);

        let blockedSides = 0;
        if(x === 0 || x === width - 1)
            blockedSides++;
        if(y === 0 || y === height - 1)
            blockedSides++;

        const key = positionString(x, y);
        index[key] = {
            key,
            blockedSides,
            value: [x, y],
            objects: []
        };
    }

    return index;
};

export default class Environment {
    constructor(args = {}){
        this.config = Object.assign({
            width: 32,
            height: 32,
            cycleDuration: 200,
            viewRadius: 8
        }, args);

        this.squares = makePositionsIndex(this.width(), this.height());
        this.leaves = [];
    }

    width(){
        return this.config.width;
    }

    height(){
        return this.config.height;
    }

    objects(){
        return Object.values(this.squares)
            .filter(pos => pos.objects.length > 0)
            .reduce((carry, pos) => [...carry, ...pos.objects], []);
    }

    agents(){
        return this.objects().filter(obj => obj instanceof Agent);
    }

    addAtRandom(object){
        const position = this._getAvailableRandomPosition();
        if(position)
            this.add(object, ...position);
    }

    _getAvailableRandomPosition(){
        const positions = Object.values(this.squares)
            .filter(pos => pos.objects.length === 0)
            .map(pos => pos.value);

        return positions.length ? positions[randomNumber(positions.length)] : null;
    }

    add(object, ...position){
        const key = positionString(...position);
        return this._executeDirectly(object, rules.MOVE_TO, this.squares[key]);
    }

    _executeDirectly(...args){
        if(rules.can(...args)){
            this._resolveOperation(...args);
            return true;
        }

        return false;
    }

    executeAgentPassiveAction(agent, action){
        if(actions.typeIs(action, actions.OBSERVE))
            this._executeAgentAction(agent, action);
    }

    up(){
        this.intervalRef = setInterval(() => this._cycle(), this.config.cycleDuration);
        this._cycle();
    }

    _cycle(){
        this._progressActions();
    }

    _progressActions(){
        // Randomize agent order
        return this.agents()
            .map(agent => ({ agent, cmp: Math.random() }))
            .sort((a, b) => a.cmp - b.cmp)
            .map(obj => obj.agent)
            .forEach(agent => this._progressAction(agent));
    }

    _progressAction(agent){
        const action = agent.act();
        if(action !== null)
            this._executeAgentAction(agent, action);
    }

    _executeAgentAction(agent, action){
        const params = this._mapActionToOperation(agent, action);
        const allowed = rules.can(...params);

        if(allowed){
            actions.increaseProgress(action);
            if(actions.isComplete(action))
                this._resolveOperation(...params);
        }

        this._notifyAgent(agent, action, allowed);
    }

    _mapActionToOperation(agent, action){
        switch(true){
            case actions.isMovement(action):
                return this._mapMovementAction(agent, action);

            case actions.typeIs(action, actions.CATCH):
                return this._mapToOperationUsingCorrectObject(agent, rules.CATCH);

            case actions.typeIs(action, actions.DROP):
                return this._mapToOperationUsingCorrectObject(agent, rules.DROP);

            case actions.typeIs(action, actions.OBSERVE):
                return [agent, rules.OBSERVE];
        }
    }

    _mapMovementAction(agent, action){
        const position = agent.getPosition();
        const newPosition = actions.applyActionToPosition(action.type, position);
        const key = positionString(...newPosition);

        return [agent, rules.MOVE_TO, this.squares[key]];
    }

    _mapToOperationUsingCorrectObject(agent, operation){
        const objects = this._objectsInSamePosition(agent)
            .filter(obj => rules.can(agent, operation, obj));

        return [agent, operation, objects[0]];
    }

    _objectsInSamePosition(object){
        const position = object.getPosition();
        const key = positionString(...position);
        return this.squares[key].objects.filter(obj => obj != object);
    }

    _resolveOperation(object, operation, ...args){
        switch(operation){
            case rules.MOVE_TO:
                return this._resolveMoveTo(object, ...args);
            case rules.CATCH:
                return this._resolveCatch(object, ...args);
            case rules.DROP:
                return this._resolveDrop(object, ...args);
            case rules.OBSERVE:
                return this._resolveObserve(object, ...args);
        }
    }

    _resolveMoveTo(object, square){
        const currentPosition = object.getPosition();
        if(currentPosition != null)
            this._removeFromPosition(object, ...currentPosition);

        const position = square.value;
        this._addToPosition(object, ...position);
        object.setPosition(...position);

        if(object instanceof Agent){
            const event = events.factory(events.DISPLACEMENT, this, { object, position });
            object.perceive(event);
        }

        if(object.carriesSomething())
            this._resolveMoveTo(object.getCarriedObject(), square);
    }

    _removeFromPosition(object, ...position){
        this._alterPositionObjects(position, objs => objs.filter(obj => obj != object));
    }

    _addToPosition(object, ...position){
        this._alterPositionObjects(position, objs => [...objs, object]);
    }

    _alterPositionObjects(position, callback){
        const key = positionString(...position);
        const obj = this.squares[key];
        const objects = callback(obj.objects);
        this.squares[key] = Object.assign({}, obj, { objects });
    }

    _resolveCatch(carrier, object){
        carrier.setCarriedObject(object);
        object.setCarrierObject(carrier);

        if(carrier instanceof Agent){
            const event = events.factory(events.CATCH, this, { object });
            carrier.perceive(event);
        }
    }

    _resolveDrop(carrier, hole){
        const object = carrier.getCarriedObject();

        carrier.setCarriedObject(null);
        object.setCarrierObject(null);

        if(carrier instanceof Agent){
            const event = events.factory(events.DROP, this, { object });
            carrier.perceive(event);
        }

        if(object instanceof Leaf)
            this._consumeLeaf(object);
    }

    _consumeLeaf(leaf){
        this._removeFromPosition(leaf, ...leaf.getPosition());
        this.leaves = [...this.leaves, leaf];
    }

    _resolveObserve(object){
        const view = this.getViewPositionsFor(object)
            .map(pos => this.squares[positionString(...pos)]);

        const event = events.factory(events.VIEW, this, view);
        object.perceive(event);
    }

    getViewPositionsFor(agent){
        const arr = [];
        const width = this.width();
        const height = this.height();
        const { viewRadius: radius } = this.config;
        const [agentX, agentY] = agent.getPosition();
        const toX = Math.min(agentX + radius + 1, width);

        for(let x = Math.max(agentX - radius, 0); x < toX; x++){
            const valueY = Math.sqrt(Math.pow(radius, 2) - Math.pow(x - agentX, 2));
            const roundedY = Math.floor(valueY);
            const toY = Math.min(agentY + roundedY + 1, height);
            for(let y = Math.max(agentY - roundedY, 0); y < toY; y++)
                arr.push([x, y]);
        }

        return arr;
    }

    _notifyAgent(agent, action, done){
        const { ACTION_FAILED, ACTION_PROGRESSED, ACTION_COMPLETE } = events;
        const type = done ? (actions.isComplete(action) ? ACTION_COMPLETE : ACTION_PROGRESSED) : ACTION_FAILED;
        const event = events.factory(type, this, action);
        agent.perceive(event);
    }
}
