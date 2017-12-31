import { VIEW, DISPLACEMENT, CATCH, DROP, factory as makeEvent, typeIs } from './events';
import { CARRY, GOTO, factory as makeGoal } from './goals';
import * as actions from './actions';
import { positionString, randomNumber } from './utils';
import Agent from './Agent.js';
import Leaf from './Leaf.js';
import Hole from './Hole.js';

const containsObj = (square, objectClass) => square.objects.some(obj => obj instanceof objectClass);
const distance = (from, to) => Math.sqrt(from.reduce((sum, value, index) => sum + Math.pow(value - to[index], 2), 0));

export default class Ant extends Agent {
    _getInitialState(){
        return {
            environment: null,
            position: null,
            world: {},
            carries: null
        }
    }

    _beforeReasoning(){
        if(this.state.environment === null)
            return;

        const action = actions.factory(actions.OBSERVE);
        this.state.environment.executeAgentPassiveAction(this, action);
    }

    _getStateReducers(){
        return [
            this._updateEnvironment,
            this._updatePosition,
            this._updateWorld,
            this._updateCarriedObject,
            this._updateDroppedObject
        ];
    }

    _updateEnvironment(state, event){
        if(typeIs(event, DISPLACEMENT) && state.environment === null)
            return Object.assign({}, state, { environment: event.sender });

        return state;
    }

    _updatePosition(state, event){
        if(typeIs(event, DISPLACEMENT)){
            const { position } = event.data;
            return Object.assign({}, state, { position });
        }

        return state;
    }

    _updateWorld(state, event){
        if(typeIs(event, VIEW)){
            const view = event.data;
            const timestamp = Date.now();
            const index = view.reduce((carry, square) => {
                carry[square.key] = Object.assign({ timestamp }, square);
                return carry;
            }, {});

            const world = Object.assign({}, state.world, index);
            return Object.assign({}, state, { world });
        }

        return state;
    }

    _updateCarriedObject(state, event){
        if(typeIs(event, CATCH))
            return Object.assign({}, state, { carries: event.data.object });

        return state;
    }

    _updateDroppedObject(state, event){
        if(typeIs(event, DROP) && event.data.object === state.carries)
            return Object.assign({}, state, { carries: null });

        return state;
    }

    _getGoalEvaluationChain(){
        return [
            this._shouldDrop,
            this._shouldCatch,
            this._shouldMoveTowardsHole,
            this._shouldMoveTowardsLeaf,
            this._shouldExploreWorld,
            this._shouldVisitOldSquares
        ];
    }

    _shouldDrop(state){
        if(!state.carries)
            return;

        const square = state.world[positionString(...state.position)];
        if(square && containsObj(square, Hole))
            return makeGoal(CARRY, { carry: false });
    }

    _shouldCatch(state){
        if(state.carries)
            return;

        const square = state.world[positionString(...state.position)];
        if(square && containsObj(square, Leaf))
            return makeGoal(CARRY, { carry: true });
    }

    _shouldMoveTowardsHole(state){
        if(!state.carries)
            return;

        const squares = this._squaresContaining(state.world, Hole);
        const closest = this._closestSquare(state.position, squares);
        if(closest)
            return makeGoal(GOTO, { position: closest.value });
    }

    _shouldMoveTowardsLeaf(state){
        if(state.carries)
            return;

        const squares = this._squaresContaining(state.world, Leaf)
            .filter(square => !containsObj(square, Ant));
        const closest = this._closestSquare(state.position, squares);
        if(closest)
            return makeGoal(GOTO, { position: closest.value });
    }

    _squaresContaining(world, objectClass){
        return Object.values(world).filter(square => containsObj(square, objectClass));
    }

    _closestSquare(position, squares){
        const sortedSquares = squares.map(square => ({ square, distance: distance(position, square.value) }))
            .sort((a, b) => a.distance - b.distance)
            .map(obj => obj.square);

        return sortedSquares.length ? sortedSquares[0] : null;
    }

    _shouldExploreWorld(state){
        const squares = this._squaresWithUnknowNeighbours(state.world);
        const closest = this._closestSquare(state.position, squares);
        if(closest)
            return makeGoal(GOTO, { position: closest.value });
    }

    _squaresWithUnknowNeighbours(world){
        const values = Object.values(world);
        const knowNeighboursIndex = values.reduce((carry, square) => {
            if(!carry[square.key])
                carry[square.key] = 0;

            carry[square.key] += square.blockedSides;

            const { UP, DOWN, LEFT, RIGHT, applyActionToPosition } = actions;
            [UP, DOWN, LEFT, RIGHT].forEach(action => {
                const position = applyActionToPosition(action, square.value);
                const key = positionString(...position);

                if(world[key]){
                    if(!carry[key])
                        carry[key] = 0;

                    carry[key]++;
                }
            });

            return carry;
        }, {});

        return Object.keys(knowNeighboursIndex)
            .map(key => ({ cmp: knowNeighboursIndex[key], square: world[key] }))
            .filter(obj => obj.cmp < 4)
            .sort((a, b) => a.cmp - b.cmp)
            .map(obj => obj.square);
    }

    _shouldVisitOldSquares(state){
        const squares = Object.values(state.world)
            .sort((a, b) => a.timestamp - b.timestamp)
            .slice(0, 10);

        if(squares.length){
            const index = randomNumber(squares.length);
            return makeGoal(GOTO, { position: squares[index].value });
        }
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
        const { CATCH, DROP, cost } = actions;

        const result = (bool, action) => {
            switch(action){
                case CATCH:
                    return true;
                case DROP:
                    return false;
            }
        };

        const initialState = !!state.carries;
        const problemActions = bool => [bool ? DROP : CATCH];
        const goalTest = bool => bool === carry;
        const pathCost = (from, action, to) => cost(action);
        const heuristic = bool => bool === carry ? 0 : 1;

        return {
            initialState,
            actions: problemActions,
            result,
            goalTest,
            pathCost,
            heuristic
        };
    }

    _generateGotoProblem(state, position){
        const { UP, DOWN, LEFT, RIGHT, cost, applyActionToPosition } = actions;

        const problemActions = pos => {
            return [UP, DOWN, LEFT, RIGHT].filter(action => {
                const position = result(pos, action);
                const square = state.world[canonical(position)];
                return !!(square && !containsObj(square, Ant));
            });
        };

        const result = (pos, action) => applyActionToPosition(action, pos);
        const initialState = state.position;
        const goalTest = pos => pos.every((num, index) => num === position[index]);
        const pathCost = (from, action, to) => cost(action);
        const heuristic = pos => distance(pos, position);
        const canonical = pos => positionString(...pos);

        return {
            initialState,
            actions: problemActions,
            result,
            goalTest,
            pathCost,
            heuristic,
            canonical
        };
    }
}
