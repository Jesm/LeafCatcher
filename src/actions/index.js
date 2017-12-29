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
