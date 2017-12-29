import { UP, DOWN, LEFT, RIGHT, CATCH, DROP, cost } from './actions';

export default class Action {
    constructor(type){
        this.type = type;
        this.progress = 0;
    }

    increaseProgress(){
        this.progress++;
    }

    isComplete(){
        return this.progress === cost(this.type);
    }

    isMovement(){
        return this.typeIs(UP, RIGHT, DOWN, LEFT);
    }

    typeIs(...types){
        return types.includes(this.type);
    }

    getType(){
        return this.type;
    }
}
