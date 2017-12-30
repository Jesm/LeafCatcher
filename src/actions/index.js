export const UP = Symbol('up');
export const RIGHT = Symbol('right');
export const DOWN = Symbol('down');
export const LEFT = Symbol('left');
export const CATCH = Symbol('catch');
export const DROP = Symbol('drop');

export const cost = action => {
    switch(action){
    case UP: case RIGHT: case DOWN: case LEFT:
        return 1;
    case DROP:
        return 2;
    case CATCH:
        return 3;
    }
}

const positionTransformations = {
    [UP]: [0, -1],
    [DOWN]: [0, 1],
    [RIGHT]: [1, 0],
    [LEFT]: [-1, 0]
};

export const applyActionToPosition = (type, position) => positionTransformations[type]
    .map((num, index) => num + position[index]);

export const factory = type => ({ type, progress: 0 });
export const increaseProgress = action => action.progress++;
export const isComplete = action => action.progress === cost(action.type);
export const typeIs = (action, ...types) => types.includes(action.type);
export const isMovement = action => typeIs(action, UP, RIGHT, DOWN, LEFT);
