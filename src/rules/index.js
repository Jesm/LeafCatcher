import Thing from '../Thing.js';
import Agent from '../Agent.js';
import Ant from '../Ant.js';
import Leaf from '../Leaf.js';
import Hole from '../Hole.js';
import Rock from '../Rock.js';

export const OBSERVE = Symbol('observe');
export const MOVE_TO = Symbol('move_to');
export const CATCH = Symbol('catch');
export const DROP = Symbol('drop');

const rules = [
    { objectClass: Thing, operations: {
        [MOVE_TO]: [
            (object, square) => square != null,
            (object, square) => square.objects.every(obj => obj.constructor !== object.constructor),
            (object, square) => !square.objects.some(obj => obj instanceof Rock)
        ],
        [CATCH]: [
            (object, obj) => obj != null,
            (object, obj) => object != obj,
            (object, obj) => !object.carriesSomething(),
            (object, obj) => !obj.beingCarried()
        ],
        [DROP]: [
            (object, into) => object.carriesSomething(),
            (object, into) => into != null,
            (object, into) => into instanceof Hole
        ],
        [OBSERVE]: [
            object => object instanceof Agent
        ]
    }},
    { objectClass: Ant, operations: {
        [CATCH]: [
            (object, obj) => obj instanceof Leaf
        ]
    }},
    { objectClass: Rock, operations: {
        [MOVE_TO]: [
            (object, square) => square.objects.length === 0
        ]
    }}
];

export const can = (object, operation, ...args) => {
    return rules.every(rule => {
        if(!(object instanceof rule.objectClass))
            return true;

        const operations = rule.operations[operation] || [];
        return operations.every(operation => operation(object, ...args));
    });
};
