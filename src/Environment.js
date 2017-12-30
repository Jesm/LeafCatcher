import { positionString, randomNumber } from './utils';
import * as events from './events';
import * as actions from './actions';
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
            width: 30,
            height: 30,
            cycleDuration: 400,
            viewRadius: 2
        }, args);

        this.positions = makePositionsIndex(this.width(), this.height());
        this.leaves = [];
    }

    width(){
        return this.config.width;
    }

    height(){
        return this.config.height;
    }

    objects(){
        return Object.values(this.positions)
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
        const positions = Object.values(this.positions)
            .filter(pos => pos.objects.length === 0)
            .map(pos => pos.value);

        return positions.length ? positions[randomNumber(positions.length)] : null;
    }

    add(object, ...position){
        this._moveObject(object, ...position);
    }

    getViewFor(agent){
        return this.getViewPositionsFor(agent)
            .map(pos => this.positions[positionString(...pos)]);
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

    up(){
        this.intervalRef = setInterval(() => this._cycle(), this.config.cycleDuration);
        this._cycle();
    }

    _cycle(){
        this._progressActions();
    }

    _progressActions(){
        this.agents().forEach(agent => this._progressAction(agent));
    }

    _progressAction(agent){
        const action = agent.act();
        if(action === null)
            return;

        const success = this._executeAction(agent, action);

        const { ACTION_FAILED, ACTION_PROGRESSED, ACTION_COMPLETE } = events;
        const eventType = success ? (actions.isComplete(action) ? ACTION_COMPLETE : ACTION_PROGRESSED) : ACTION_FAILED;
        const event = events.factory(eventType, this, action);
        agent.perceive(event);
    }

    _executeAction(agent, action){
        switch(true){
            case actions.isMovement(action):
                return this._executeDisplacementAction(agent, action);
            case actions.typeIs(action, actions.CATCH):
                return this._executeCatchAction(agent, action);
            case actions.typeIs(action, actions.DROP):
                return this._executeDropAction(agent, action);
        }
    }

    _executeDisplacementAction(agent, action){
        const position = agent.getPosition();
        const newPosition = actions.applyActionToPosition(action.type, position);

        if(this._isInBound(...newPosition)){
            this._moveObject(agent, ...newPosition);
            actions.increaseProgress(action);
            return true;
        }

        return false;
    }

    _executeCatchAction(agent, action){
        if(agent.carriesSomething())
            return false;

        const leaves = this._objectsInSamePosition(agent)
            .filter(object => object instanceof Leaf)
            .filter(object => !object.beingCarried());

        if(leaves.length){
            actions.increaseProgress(action);
            if(actions.isComplete(action))
                this._attachTo(leaves[0], agent);

            return true;
        }

        return false;
    }

    _executeDropAction(agent, action){
        if(!agent.carriesSomething())
            return false;

        const holes = this._objectsInSamePosition(agent)
            .filter(object => object instanceof Hole);

        if(holes.length){
            actions.increaseProgress(action);
            if(actions.isComplete(action)){
                const object = agent.getCarriedObject();
                this._dettachFrom(object, agent);

                if(object instanceof Leaf)
                    this._consumeLeaf(object);
            }

            return true;
        }

        return false;
    }

    _isInBound(...position){
        const limits = [this.width(), this.height()];
        return position.every((value, index) => value >= 0 && value < limits[index]);
    }

    _objectsInSamePosition(object){
        const position = object.getPosition();
        const key = positionString(...position);
        return this.positions[key].objects.filter(obj => obj != object);
    }

    _moveObject(object, ...position){
        const currentPosition = object.getPosition();
        if(currentPosition != null)
            this._removeFromPosition(object, ...currentPosition);

        this._addToPosition(object, ...position);
        object.setPosition(...position);

        if(object instanceof Agent){
            const event = events.factory(events.MOVED, this, { object, position });
            object.perceive(event);
        }

        if(object.carriesSomething())
            this._moveObject(object.getCarriedObject(), ...position);
    }

    _removeFromPosition(object, ...position){
        this._alterPositionObjects(position, objs => objs.filter(obj => obj != object));
    }

    _addToPosition(object, ...position){
        this._alterPositionObjects(position, objs => [...objs, object]);
    }

    _alterPositionObjects(position, callback){
        const key = positionString(...position);
        const obj = this.positions[key];
        const objects = callback(obj.objects);
        this.positions[key] = Object.assign({}, obj, { objects });
    }

    _attachTo(object, agent){
        object.setCarrierObject(agent);
        agent.setCarriedObject(object);

        if(agent instanceof Agent){
            const event = events.factory(events.CATCH, this, { object });
            agent.perceive(event);
        }
    }

    _dettachFrom(object, agent){
        object.setCarrierObject(null);
        agent.setCarriedObject(null);

        if(agent instanceof Agent){
            const event = events.factory(events.DROP, this, { object });
            agent.perceive(event);
        }
    }

    _consumeLeaf(leaf){
        this._removeFromPosition(leaf, ...leaf.getPosition());
        this.leaves = [...this.leaves, leaf];
    }
}
