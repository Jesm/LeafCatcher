import { canonicalPosition, randomNumber } from './utils';
import { ACTION_COMPLETE, ACTION_PROGRESSED, ACTION_FAILED, MOVED, CATCH, DROP } from './events';
import { UP, DOWN, LEFT, RIGHT, CATCH as CATCH_ACTION, DROP as DROP_ACTION } from './actions';
import Square from './Square.js';
import Event from './Event.js';
import Leaf from './Leaf.js';
import Hole from './Hole.js';
import Agent from './Agent.js';

export default class Environment {
    constructor(config = {}){
        this.objects = [];
        this.leaves = [];

        this.config = Object.assign({
            width: 30,
            height: 30,
            cycleDuration: 400,
            viewRadius: 2
        }, config);
    }

    addAtRandom(object){
        const position = this._getAvailableRandomPosition();
        if(position)
            this.add(object, ...position);
    }

    _getAvailableRandomPosition(){
        const positionsIndex = {};
        const width = this.getWidth();
        const height = this.getHeight();

        for(let len = width * height; len--;){
            const x = len % width;
            const y = Math.floor(len / width);
            const key = canonicalPosition(x, y);
            positionsIndex[key] = [x, y];
        }

        this.objects.forEach(object => {
            const position = object.getPosition();
            const key = canonicalPosition(...position);
            delete positionsIndex[key];
        });

        const positions = Object.values(positionsIndex);
        return positions.length ? positions[randomNumber(positions.length)] : null;
    }

    add(object, ...position){
        this.objects.push(object);
        this._moveObject(object, ...position);
    }

    getViewFor(agent){
        const positions = this.getViewPositionsFor(agent);
        return this._getSquaresFor(positions);
    }

    getViewPositionsFor(agent){
        const arr = [];
        const radius = this.config.viewRadius;
        const [agentX, agentY] = agent.getPosition();
        const toX = Math.min(agentX + radius + 1, this.config.width);
        for(let x = Math.max(agentX - radius, 0); x < toX; x++){
            const valueY = Math.sqrt(Math.pow(radius, 2) - Math.pow(x - agentX, 2));
            const roundedY = Math.floor(valueY);
            const toY = Math.min(agentY + roundedY + 1, this.config.height);
            for(let y = Math.max(agentY - roundedY, 0); y < toY; y++)
                arr.push([x, y]);
        }

        return arr;
    }

    _getSquaresFor(positions){
        const squares = positions.reduce((obj, [x, y]) => {
            const key = canonicalPosition(x, y);

            let blockedSideQuantity = 0;
            if(x === 0 || x === this.getWidth() - 1)
                blockedSideQuantity++;

            if(y === 0 || y === this.getHeight() - 1)
                blockedSideQuantity++;

            obj[key] = new Square(x, y, blockedSideQuantity);
            return obj;
        }, {});

        this.objects.forEach(object => {
            const key = canonicalPosition(...object.getPosition());
            if(squares[key])
                squares[key].add(object);
        });

        return Object.values(squares);
    }

    up(){
        this.intervalRef = setInterval(() => this._execCycle(), this.config.cycleDuration);
        this._execCycle();
    }

    _execCycle(){
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

        const eventType = success ? (action.isComplete() ? ACTION_COMPLETE : ACTION_PROGRESSED) : ACTION_FAILED;
        const event = new Event(this, eventType, action);
        agent.perceive(event);
    }

    _executeAction(agent, action){
        switch(true){
            case action.isMovement():
                return this._executeMovementAction(agent, action);
            case action.typeIs(CATCH_ACTION):
                return this._executeCatchAction(agent, action);
            case action.typeIs(DROP_ACTION):
                return this._executeDropAction(agent, action);
        }
    }

    _executeMovementAction(agent, action){
        const newPosition = this._getNewPositionFromActionType(action.getType(), agent.getPosition());
        if(this._isInBound(...newPosition)){
            this._moveObject(agent, ...newPosition);
            action.increaseProgress();
            return true;
        }

        return false;
    }

    _executeCatchAction(agent, action){
        if(agent.carriesSomething())
            return false;

        const objects = this._objectsInSamePosition(agent);
        const leaves = objects.filter(object => object instanceof Leaf)
            .filter(object => !object.beingCarried());

        if(leaves.length){
            action.increaseProgress();
            if(action.isComplete())
                this._attachTo(leaves[0], agent);

            return true;
        }

        return false;
    }

    _executeDropAction(agent, action){
        if(!agent.carriesSomething())
            return false;

        const objects = this._objectsInSamePosition(agent);
        const holes = objects.filter(object => object instanceof Hole);

        if(holes.length){
            action.increaseProgress();
            if(action.isComplete()){
                const object = agent.getCarriedObject();
                this._dettachFrom(object, agent);

                if(object instanceof Leaf)
                    this._consumeLeaf(object);
            }

            return true;
        }

        return false;
    }

    _getNewPositionFromActionType(type, positionArr){
         const movements = {
            [UP]: [0, -1],
            [DOWN]: [0, 1],
            [RIGHT]: [1, 0],
            [LEFT]: [-1, 0]
        };
        const add = movements[type];
        const newPosition = positionArr.map((value, index) => value + add[index]);

        return newPosition;
    }

    _isInBound(...position){
        const limits = [this.getWidth(), this.getHeight()];
        return position.every((value, index) => value >= 0 && value < limits[index]);
    }

    _moveObject(object, ...position){
        object.setPosition(...position);

        if(object instanceof Agent){
            const data = {object, position};
            const ev = new Event(this, MOVED, data);
            object.perceive(ev);
        }

        if(object.carriesSomething())
            this._moveObject(object.getCarriedObject(), ...position);
    }

    _objectsInSamePosition(object){
        const position = object.getPosition();
        const sameValue = (value, index) => value === position[index];
        return this.objects.filter(object => object.getPosition().every(sameValue))
            .filter(obj => obj != object);
    }

    _attachTo(object, agent){
        object.setCarrierObject(agent);
        agent.setCarriedObject(object);

        if(agent instanceof Agent){
            const event = new Event(this, CATCH, {object});
            agent.perceive(event);
        }
    }

    _dettachFrom(object, agent){
        object.setCarrierObject(null);
        agent.setCarriedObject(null);

        if(agent instanceof Agent){
            const event = new Event(this, DROP, {object});
            agent.perceive(event);
        }
    }

    _consumeLeaf(leaf){
        const index = this.objects.indexOf(leaf);
        this.objects.splice(index, 1);

        this.leaves.push(leaf);
    }

    getObjects(){
        return this.objects.slice();
    }

    agents(){
        return this.objects.filter(obj => obj instanceof Agent);
    }

    getWidth(){
        return this.config.width;
    }

    getHeight(){
        return this.config.height;
    }
}
