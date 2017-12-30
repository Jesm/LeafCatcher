import search from './search/aStar';
import { typeIs, ACTION_FAILED, ACTION_COMPLETE } from './events';
import { factory as makeAction } from './actions';
import Thing from './Thing.js';

export default class Agent extends Thing {
    constructor(config = {}){
        super();

        this.state = this._getInitialState();
        this.eventQueue = [];
        this.currentGoal = null;
        this.currentSequence = [];
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

        // If we have a better goal to pursue than the current one
        const goalIndex = this.currentGoal ? this.currentGoal.index : null;
        const goal = this._formulateGoal(this.state, goalIndex);
        if(goal !== null){
            const problem = this._formulateProblem(this.state, goal);
            const sequence = problem && search(problem);
            if(sequence){
                this.currentGoal = goal;
                this.currentSequence = sequence;
                this.currentAction = null;
            }
        }

        if(this.currentAction === null && this.currentSequence.length > 0){
            const [type, ...tail] = this.currentSequence;
            this.currentSequence = tail;
            this.currentAction = makeAction(type);
        }
    }

    _beforeReasoning(){}

    _updateState(state, events){
        const reducers = [this._verifyCurrentActionStatus, ...this._getStateReducers()];

        return events.reduce((state, event) => {
            return reducers.reduce((state, reducer) => reducer.call(this, state, event), state);
        }, state);
    }

    _verifyCurrentActionStatus(state, event){
        if(event.data === this.currentAction){
            switch(event.type){
                case ACTION_FAILED:
                    this.currentGoal = null;
                    this.currentSequence = [];
                    this.currentAction = null;
                break;
                case ACTION_COMPLETE:
                    this.currentAction = null;
                    if(this.currentSequence.length === 0)
                        this.currentGoal = null;
                break;
            }
        }

        return state;
    }

    _getStateReducers(){
        return [];
    }

    _formulateGoal(state, maxIndex = null){
        let index = 0;
        const chain = this._getGoalEvaluationChain();
        for(let fun of chain){
            if(maxIndex !== null && index >= maxIndex)
                return null;

            const goal = fun.call(this, state);
            if(goal)
                return Object.assign({ index }, goal);

            index++;
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
