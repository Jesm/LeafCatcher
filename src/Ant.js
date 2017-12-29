import { CAPTURED_VIEW, MOVED, CATCH, DROP, ACTION_FAILED } from './events';
import { CARRY, GOTO } from './goals';
import { UP, DOWN, LEFT, RIGHT, CATCH as CATCH_ACTION, DROP as DROP_ACTION, cost } from './actions';
import { randomNumber, canonicalPosition } from './utils';
import Agent from './Agent.js';
import Leaf from './Leaf.js';
import Hole from './Hole.js';
import Event from './Event.js';

const actionMovementIndex = {
    [UP]: [0, -1],
    [RIGHT]: [1, 0],
    [DOWN]: [0, 1],
    [LEFT]: [-1, 0]
};

export default class Ant extends Agent {
    _getInitialState(){
        return {
            world: {},
            carries: null
        }
    }

    _beforeReasoning(){
        if(!this.state.environment)
            return;

        const view = this.state.environment.getViewFor(this);
        const event = new Event(this, CAPTURED_VIEW, view);
        this.perceive(event);
    }

    _getStateReducers(){
        return [
            this._setStateEnvironment,
            this._updateStatePosition,
            this._clearCurrentSequenceIfActionFailed,
            this._updateWorldModel,
            this._updateCarriedObject,
            this._updateDroppedObject
        ];
    }

    _setStateEnvironment(state, event){
        if(event.typeIs(MOVED) && !state.environment)
            return Object.assign({}, state, { environment: event.getSender() });

        return state;
    }

    _updateStatePosition(state, event){
        if(event.typeIs(MOVED)){
            const { position } = event.getData();
            return Object.assign({}, state, { position });
        }

        return state;
    }

    _clearCurrentSequenceIfActionFailed(state, event){
        if(event.typeIs(ACTION_FAILED) && event.getData() === this.currentAction){
            this.currentActionSequence = [];
            this.currentAction = null;
        }

        return state;
    }

    _updateWorldModel(state, event){
        if(event.typeIs(CAPTURED_VIEW)){
            const view = event.getData();
            const index = view.reduce((carry, square) => {
                const key = canonicalPosition(...square.getPosition());
                carry[key] = { square, timestamp: Date.now() };
                return carry;
            }, {});

            const world = Object.assign({}, state.world, index);
            return Object.assign({}, state, { world });
        }

        return state;
    }

    _updateCarriedObject(state, event){
        if(event.typeIs(CATCH))
            return Object.assign({}, state, { carries: event.getData().object });

        return state;
    }

    _updateDroppedObject(state, event){
        if(event.typeIs(DROP) && event.getData().object === state.carries)
            return Object.assign({}, state, { carries: null });

        return state;
    }

    _getGoalEvaluationChain(){
        return [
            this._shouldDropLeaf,
            this._shouldCatchLeaf,
            this._shouldMoveTowardsHole,
            this._shouldMoveTowardsLeaf,
            this._shouldExploreWorld,
            this._shouldVisitOldSquares
        ];
    }

    _shouldDropLeaf(state){
        if(!(state.carries && state.carries instanceof Leaf))
            return;

        const squares = this._squaresContaining(state.world, Hole);
        const closest = this._closestSquare(state.position, squares);
        if(closest && this._distanceTo(state.position, closest.getPosition()) === 0)
            return { type: CARRY, carry: false };
    }

    _shouldCatchLeaf(state){
        if(state.carries)
            return;

        const squares = this._squaresContaining(state.world, Leaf);
        const closest = this._closestSquare(state.position, squares);
        if(closest && this._distanceTo(state.position, closest.getPosition()) === 0)
            return { type: CARRY, carry: true };
    }

    _shouldMoveTowardsHole(state){
        let squares;
        if(state.carries && state.carries instanceof Leaf && (squares = this._squaresContaining(state.world, Hole)).length){
            const closest = this._closestSquare(state.position, squares);
            if(closest)
                return { type: GOTO, position: closest.getPosition() };
        }
    }

    _shouldMoveTowardsLeaf(state){
        let squares;
        if(state.carries === null && (squares = this._squaresContaining(state.world, Leaf)).length){
            const closest = this._closestSquare(state.position, squares);
            if(closest)
                return { type: GOTO, position: closest.getPosition() };
        }
    }

    _shouldExploreWorld(state){
        const squares = this._squaresWithUnknowNeighbours(state.world);
        const closest = this._closestSquare(state.position, squares);
        if(closest)
            return { type: GOTO, position: closest.getPosition() };
    }

    _shouldVisitOldSquares(state){
        const squares = this._squaresForVisit(state.world);
        if(squares.length){
            const index = randomNumber(squares.length);
            return { type: GOTO, position: squares[index].getPosition() };
        }
    }

    _squaresWithUnknowNeighbours(world){
        const additionMatrix = Object.getOwnPropertySymbols(actionMovementIndex)
            .map(sym => actionMovementIndex[sym]);

        const values = Object.values(world);
        const knowNeighboursIndex = values.reduce((carry, obj) => {
            const squarePosition = obj.square.getPosition();
            const squareKey = canonicalPosition(...squarePosition);

            if(!carry[squareKey])
                carry[squareKey] = 0;
            carry[squareKey] += obj.square.getBlockedSideQuantity();

            additionMatrix.forEach(arr => {
                const position = squarePosition.map((value, index) => value + arr[index]);
                const key = canonicalPosition(...position);

                if(world[key]){
                    if(!carry[key])
                        carry[key] = 0;

                    carry[key]++;
                }
            });

            return carry;
        }, {});

        return Object.keys(knowNeighboursIndex)
            .map(key => ({ knowNeighbours: knowNeighboursIndex[key], square: world[key] }))
            .filter(obj => obj.knowNeighbours < 4)
            .sort((a, b) => a.knowNeighbours - b.knowNeighbours)
            .map(obj => obj.square.square);
    }

    _squaresForVisit(world){
        const squares = Object.values(world);
        const sortedSquares = squares.sort((a, b) => a.timestamp - b.timestamp);

        if(sortedSquares.length){
            const limit = sortedSquares[0].timestamp;
            const oldestSquares = sortedSquares.filter(obj => obj.timestamp === limit);
            return oldestSquares.map(obj => obj.square);
        }

        return sortedSquares.map(obj => obj.square);
    }

    _squaresContaining(world, objectClass){
        const squares = Object.values(world);
        return squares.filter(obj => obj.square.objects.some(object => object instanceof objectClass))
            .map(obj => obj.square);
    }

    _closestSquare(position, squares){
        const sortedSquares = squares.map(square => ({square, distance: this._distanceTo(position, square.getPosition())}))
            .sort((a, b) => a.distance - b.distance)
            .map(obj => obj.square);

        return sortedSquares.length ? sortedSquares[0] : null;
    }

    _distanceTo(from, to){
        const value = from.reduce((sum, value, index) => sum + Math.pow(value - to[index], 2), 0);
        return Math.sqrt(value);
    }

    _formulateProblem(state, goal){
        switch(goal.type){
            case CARRY:
                return this._generateCarryProblem(state, goal.carry);
            case GOTO:
                return this._generateGotoProblem(state, goal.position);
            default:
                return null;
        }
    }

    _generateCarryProblem(state, carry){
        const initialState = !!state.carries;

        const result = (bool, action) => {
            switch(action){
                case CATCH_ACTION:
                    return true;
                case DROP_ACTION:
                    return false;
            }
        };

        const actions = bool => [bool ? DROP_ACTION : CATCH_ACTION];
        const goalTest = bool => bool === carry;
        const pathCost = (from, action, to) => cost(action);
        const heuristic = bool => bool === carry ? 0 : 1;

        return {
            initialState,
            actions,
            result,
            goalTest,
            pathCost,
            heuristic
        };
    }

    _generateGotoProblem(state, position){
        const initialState = state.position;

        const result = (pos, action) => {
            const addArr = actionMovementIndex[action];
            return pos.map((num, index) => num + addArr[index]);
        };

        const actions = pos => {
            const actions = Object.getOwnPropertySymbols(actionMovementIndex);
            return actions.filter(action => {
                const position = result(pos, action);
                return !!state.world[canonicalForm(position)];
            });
        };

        const goalTest = pos => pos.every((num, index) => num === position[index]);
        const pathCost = (from, action, to) => cost(action);
        const heuristic = pos => this._distanceTo(pos, position);
        const canonicalForm = pos => canonicalPosition(...pos);

        return {
            initialState,
            actions,
            result,
            goalTest,
            pathCost,
            heuristic,
            canonicalForm
        };
    }
}
