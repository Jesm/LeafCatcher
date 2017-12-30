import search from './search/aStar';
import { typeIs, ACTION_FAILED } from './events';
import { isComplete, factory as makeAction } from './actions';
import Thing from './Thing.js';

export default class Agent extends Thing {
    constructor(config = {}){
        super();

        this.state = this._getInitialState();
        this.eventQueue = [];
        this.currentActionSequence = [];
        this.currentAction = null;

        this.intervalRef = null;

        this.config = Object.assign({
            reasoningInterval: 200
        }, config);
    }

    _getInitialState(){
        return {};
    }

    perceive(event){
        this.eventQueue = [...this.eventQueue, event];
    }

    act(){
        return this.currentAction;
    }

    up(){
        this.intervalRef = setInterval(() => this._reason(), this.config.reasoningInterval);
        this._reason();
    }

    _reason(){
        this._beforeReasoning();

        const percepts = this.eventQueue;
        this.eventQueue = [];
        this.state = this._updateState(this.state, percepts);

        if(this.currentAction){
            if(isComplete(this.currentAction))
                this.currentAction = null;
            else
                return;
        }

        if(this.currentActionSequence.length === 0){
            const goal = this._formulateGoal(this.state);
            const problem = goal && this._formulateProblem(this.state, goal);
            const sequence = problem && search(problem);
            if(sequence)
                this.currentActionSequence = sequence;
        }

        if(this.currentActionSequence.length > 0){
            const actionType = this.currentActionSequence.shift();
            this.currentAction = makeAction(actionType);
        }
    }

    _beforeReasoning(){}

    _updateState(state, events){
        const reducers = [this._clearCurrentSequenceIfActionFailed, ...this._getStateReducers()];

        return events.reduce((state, event) => {
            return reducers.reduce((state, reducer) => reducer.call(this, state, event), state);
        }, state);
    }

    _clearCurrentSequenceIfActionFailed(state, event){
        if(typeIs(event, ACTION_FAILED) && event.data === this.currentAction){
            this.currentActionSequence = [];
            this.currentAction = null;
        }

        return state;
    }

    _getStateReducers(){
        return [];
    }

    _formulateGoal(state){
        const chain = this._getGoalEvaluationChain();
        for(let fun of chain){
            const goal = fun.call(this, state);
            if(goal)
                return goal;
        }

        return null;
    }

    _getGoalEvaluationChain(){
        return [];
    }

    _formulateProblem(state, goal){
        return null;
    }
}
