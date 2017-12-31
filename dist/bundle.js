/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Thing {
    constructor(){
        this.position = null;
        this.carries = null;
        this.carrier = null;
    }

    getPosition(){
        return this.position;
    }

    setPosition(...arr){
        this.position = arr;
    }

    setCarriedObject(object){
        this.carries = object;
    }

    setCarrierObject(object){
        this.carrier = object;
    }

    getCarriedObject(){
        return this.carries;
    }

    getCarrierObject(){
        return this.carrier;
    }

    carriesSomething(){
        return !!this.carries;
    }

    beingCarried(){
        return !!this.carrier;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Thing;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Thing_js__ = __webpack_require__(0);


class Leaf extends __WEBPACK_IMPORTED_MODULE_0__Thing_js__["a" /* default */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Leaf;
;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Thing_js__ = __webpack_require__(0);


class Hole extends __WEBPACK_IMPORTED_MODULE_0__Thing_js__["a" /* default */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Hole;
;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Thing_js__ = __webpack_require__(0);


class Rock extends __WEBPACK_IMPORTED_MODULE_0__Thing_js__["a" /* default */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Rock;
;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const positionString = (...arr) => arr.join(' ');
/* harmony export (immutable) */ __webpack_exports__["a"] = positionString;

const randomNumber = number => Math.floor(Math.random() * number);
/* harmony export (immutable) */ __webpack_exports__["b"] = randomNumber;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const ACTION_COMPLETE = Symbol('action_complete');
/* harmony export (immutable) */ __webpack_exports__["ACTION_COMPLETE"] = ACTION_COMPLETE;

const ACTION_FAILED = Symbol('action_failed');
/* harmony export (immutable) */ __webpack_exports__["ACTION_FAILED"] = ACTION_FAILED;

const ACTION_PROGRESSED = Symbol('action_progressed');
/* harmony export (immutable) */ __webpack_exports__["ACTION_PROGRESSED"] = ACTION_PROGRESSED;

const VIEW = Symbol('view');
/* harmony export (immutable) */ __webpack_exports__["VIEW"] = VIEW;

const DISPLACEMENT = Symbol('displacement');
/* harmony export (immutable) */ __webpack_exports__["DISPLACEMENT"] = DISPLACEMENT;

const CATCH = Symbol('catch');
/* harmony export (immutable) */ __webpack_exports__["CATCH"] = CATCH;

const DROP = Symbol('drop');
/* harmony export (immutable) */ __webpack_exports__["DROP"] = DROP;


const factory = (type, sender, data) => ({ type, sender, data });
/* harmony export (immutable) */ __webpack_exports__["factory"] = factory;

const typeIs = (event, ...types) => types.includes(event.type);
/* harmony export (immutable) */ __webpack_exports__["typeIs"] = typeIs;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const UP = Symbol('up');
/* harmony export (immutable) */ __webpack_exports__["UP"] = UP;

const RIGHT = Symbol('right');
/* harmony export (immutable) */ __webpack_exports__["RIGHT"] = RIGHT;

const DOWN = Symbol('down');
/* harmony export (immutable) */ __webpack_exports__["DOWN"] = DOWN;

const LEFT = Symbol('left');
/* harmony export (immutable) */ __webpack_exports__["LEFT"] = LEFT;

const CATCH = Symbol('catch');
/* harmony export (immutable) */ __webpack_exports__["CATCH"] = CATCH;

const DROP = Symbol('drop');
/* harmony export (immutable) */ __webpack_exports__["DROP"] = DROP;

const OBSERVE = Symbol('observe');
/* harmony export (immutable) */ __webpack_exports__["OBSERVE"] = OBSERVE;


const costs = {
    [UP]: 1,
    [DOWN]: 1,
    [LEFT]: 1,
    [RIGHT]: 1,
    [OBSERVE]: 1,
    [DROP]: 2,
    [CATCH]: 3
};
const cost = type => costs[type];
/* harmony export (immutable) */ __webpack_exports__["cost"] = cost;


const positionTransformations = {
    [UP]: [0, -1],
    [DOWN]: [0, 1],
    [RIGHT]: [1, 0],
    [LEFT]: [-1, 0]
};

const applyActionToPosition = (type, position) => positionTransformations[type]
    .map((num, index) => num + position[index]);
/* harmony export (immutable) */ __webpack_exports__["applyActionToPosition"] = applyActionToPosition;


const factory = type => ({ type, progress: 0 });
/* harmony export (immutable) */ __webpack_exports__["factory"] = factory;

const increaseProgress = action => action.progress++;
/* harmony export (immutable) */ __webpack_exports__["increaseProgress"] = increaseProgress;

const isComplete = action => action.progress === cost(action.type);
/* harmony export (immutable) */ __webpack_exports__["isComplete"] = isComplete;

const typeIs = (action, ...types) => types.includes(action.type);
/* harmony export (immutable) */ __webpack_exports__["typeIs"] = typeIs;

const isMovement = action => typeIs(action, UP, RIGHT, DOWN, LEFT);
/* harmony export (immutable) */ __webpack_exports__["isMovement"] = isMovement;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_aStar__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Thing_js__ = __webpack_require__(0);





class Agent extends __WEBPACK_IMPORTED_MODULE_3__Thing_js__["a" /* default */] {
    constructor(config = {}){
        super();

        this.state = this._getInitialState();
        this.eventQueue = [];
        this.currentGoal = null;
        this.currentSequence = [];
        this.currentAction = null;

        this.intervalRef = null;

        this.config = Object.assign({
            reasoningInterval: 100
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
            const sequence = problem && Object(__WEBPACK_IMPORTED_MODULE_0__search_aStar__["a" /* default */])(problem);
            if(sequence){
                this.currentGoal = goal;
                this.currentSequence = sequence;
                this.currentAction = null;
            }
        }

        if(this.currentAction === null && this.currentSequence.length > 0){
            const [type, ...tail] = this.currentSequence;
            this.currentSequence = tail;
            this.currentAction = Object(__WEBPACK_IMPORTED_MODULE_2__actions__["factory"])(type);
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
                case __WEBPACK_IMPORTED_MODULE_1__events__["ACTION_FAILED"]:
                    this.currentGoal = null;
                    this.currentSequence = [];
                    this.currentAction = null;
                break;
                case __WEBPACK_IMPORTED_MODULE_1__events__["ACTION_COMPLETE"]:
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Agent;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__goals__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Agent_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Leaf_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Hole_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Rock_js__ = __webpack_require__(3);









const containsSome = (square, ...classes) => square.objects.some(obj => classes.some(objClass => obj instanceof objClass));
const distance = (from, to) => Math.sqrt(from.reduce((sum, value, index) => sum + Math.pow(value - to[index], 2), 0));

class Ant extends __WEBPACK_IMPORTED_MODULE_4__Agent_js__["a" /* default */] {
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

        const action = __WEBPACK_IMPORTED_MODULE_2__actions__["factory"](__WEBPACK_IMPORTED_MODULE_2__actions__["OBSERVE"]);
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
        if(Object(__WEBPACK_IMPORTED_MODULE_0__events__["typeIs"])(event, __WEBPACK_IMPORTED_MODULE_0__events__["DISPLACEMENT"]) && state.environment === null)
            return Object.assign({}, state, { environment: event.sender });

        return state;
    }

    _updatePosition(state, event){
        if(Object(__WEBPACK_IMPORTED_MODULE_0__events__["typeIs"])(event, __WEBPACK_IMPORTED_MODULE_0__events__["DISPLACEMENT"])){
            const { position } = event.data;
            return Object.assign({}, state, { position });
        }

        return state;
    }

    _updateWorld(state, event){
        if(Object(__WEBPACK_IMPORTED_MODULE_0__events__["typeIs"])(event, __WEBPACK_IMPORTED_MODULE_0__events__["VIEW"])){
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
        if(Object(__WEBPACK_IMPORTED_MODULE_0__events__["typeIs"])(event, __WEBPACK_IMPORTED_MODULE_0__events__["CATCH"]))
            return Object.assign({}, state, { carries: event.data.object });

        return state;
    }

    _updateDroppedObject(state, event){
        if(Object(__WEBPACK_IMPORTED_MODULE_0__events__["typeIs"])(event, __WEBPACK_IMPORTED_MODULE_0__events__["DROP"]) && event.data.object === state.carries)
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

        const square = state.world[Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* positionString */])(...state.position)];
        if(square && containsSome(square, __WEBPACK_IMPORTED_MODULE_6__Hole_js__["a" /* default */]))
            return Object(__WEBPACK_IMPORTED_MODULE_1__goals__["c" /* factory */])(__WEBPACK_IMPORTED_MODULE_1__goals__["a" /* CARRY */], { carry: false });
    }

    _shouldCatch(state){
        if(state.carries)
            return;

        const square = state.world[Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* positionString */])(...state.position)];
        if(square && containsSome(square, __WEBPACK_IMPORTED_MODULE_5__Leaf_js__["a" /* default */]))
            return Object(__WEBPACK_IMPORTED_MODULE_1__goals__["c" /* factory */])(__WEBPACK_IMPORTED_MODULE_1__goals__["a" /* CARRY */], { carry: true });
    }

    _shouldMoveTowardsHole(state){
        if(!state.carries)
            return;

        const squares = this._squaresContaining(state.world, __WEBPACK_IMPORTED_MODULE_6__Hole_js__["a" /* default */]);
        const closest = this._closestSquare(state.position, squares);
        if(closest)
            return Object(__WEBPACK_IMPORTED_MODULE_1__goals__["c" /* factory */])(__WEBPACK_IMPORTED_MODULE_1__goals__["b" /* GOTO */], { position: closest.value });
    }

    _shouldMoveTowardsLeaf(state){
        if(state.carries)
            return;

        const squares = this._squaresContaining(state.world, __WEBPACK_IMPORTED_MODULE_5__Leaf_js__["a" /* default */])
            .filter(square => !containsSome(square, Ant));
        const closest = this._closestSquare(state.position, squares);
        if(closest)
            return Object(__WEBPACK_IMPORTED_MODULE_1__goals__["c" /* factory */])(__WEBPACK_IMPORTED_MODULE_1__goals__["b" /* GOTO */], { position: closest.value });
    }

    _squaresContaining(world, objectClass){
        return Object.values(world).filter(square => containsSome(square, objectClass));
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
            return Object(__WEBPACK_IMPORTED_MODULE_1__goals__["c" /* factory */])(__WEBPACK_IMPORTED_MODULE_1__goals__["b" /* GOTO */], { position: closest.value });
    }

    _squaresWithUnknowNeighbours(world){
        const values = Object.values(world);
        const knowNeighboursIndex = values.reduce((carry, square) => {
            if(!carry[square.key])
                carry[square.key] = 0;

            carry[square.key] += square.blockedSides;

            const { UP, DOWN, LEFT, RIGHT, applyActionToPosition } = __WEBPACK_IMPORTED_MODULE_2__actions__;
            [UP, DOWN, LEFT, RIGHT].forEach(action => {
                const position = applyActionToPosition(action, square.value);
                const key = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* positionString */])(...position);

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
            const index = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* randomNumber */])(squares.length);
            return Object(__WEBPACK_IMPORTED_MODULE_1__goals__["c" /* factory */])(__WEBPACK_IMPORTED_MODULE_1__goals__["b" /* GOTO */], { position: squares[index].value });
        }
    }

    _formulateProblem(state, goal){
        switch(goal.type){
            case __WEBPACK_IMPORTED_MODULE_1__goals__["a" /* CARRY */]:
                return this._generateCarryProblem(state, goal.carry);
            case __WEBPACK_IMPORTED_MODULE_1__goals__["b" /* GOTO */]:
                return this._generateGotoProblem(state, goal.position);
            default:
                return null;
        }
    }

    _generateCarryProblem(state, carry){
        const { CATCH, DROP, cost } = __WEBPACK_IMPORTED_MODULE_2__actions__;

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
        const { UP, DOWN, LEFT, RIGHT, cost, applyActionToPosition } = __WEBPACK_IMPORTED_MODULE_2__actions__;

        const problemActions = pos => {
            return [UP, DOWN, LEFT, RIGHT].filter(action => {
                const position = result(pos, action);
                const square = state.world[canonical(position)];
                return !!(square && !containsSome(square, Ant, __WEBPACK_IMPORTED_MODULE_7__Rock_js__["a" /* default */]));
            });
        };

        const result = (pos, action) => applyActionToPosition(action, pos);
        const initialState = state.position;
        const goalTest = pos => pos.every((num, index) => num === position[index]);
        const pathCost = (from, action, to) => cost(action);
        const heuristic = pos => distance(pos, position);
        const canonical = pos => Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* positionString */])(...pos);

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
/* harmony export (immutable) */ __webpack_exports__["a"] = Ant;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_js__ = __webpack_require__(10);


(doc => {
    const app = new __WEBPACK_IMPORTED_MODULE_0__App_js__["a" /* default */](doc.body);
})(document);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Environment_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Ant_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Hole_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Leaf_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Rock_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Render_js__ = __webpack_require__(15);







const makeElement = str => document.createElement(str);

class App {
    constructor(root){
        this._setupEnvironment();
        this._setupRender(root);
        this._setupControls(root);
    }

    _setupEnvironment(){
        const unitOrder = 8;
        const viewRadius = 2;

        this.environment = new __WEBPACK_IMPORTED_MODULE_0__Environment_js__["a" /* default */]({
            width: unitOrder,
            height: unitOrder,
            viewRadius
        });
        this.environment.up();

        const ant = new __WEBPACK_IMPORTED_MODULE_1__Ant_js__["a" /* default */]();
        this.environment.addAtRandom(ant);
        ant.up();
    }

    _setupRender(root){
        const unitSizePx = 40;

        const canvas = makeElement('canvas');
        canvas.width = unitSizePx * this.environment.width();
        canvas.height = unitSizePx * this.environment.height();
        root.appendChild(canvas);

        this.render = new __WEBPACK_IMPORTED_MODULE_5__Render_js__["a" /* default */](this.environment, canvas);
        this.render.up();
    }

    _setupControls(root){
        const ul = document.createElement('ul');

        this.buttons = [__WEBPACK_IMPORTED_MODULE_2__Hole_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__Leaf_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__Rock_js__["a" /* default */]].map(objectClass => {
            const li = makeElement('li');

            const button = makeElement('button');
            button.innerText = objectClass.name;
            button.addEventListener('click', event => this._addObject(objectClass));

            li.appendChild(button);
            ul.appendChild(li);

            return button;
        });

        root.appendChild(ul);
    }

    _addObject(objectClass){
        this.buttons.forEach(button => button.disabled = true);

        this.render.nextPositionSelection((...position) => {
            const object = new objectClass();
            this.environment.add(object, ...position);

            this.buttons.forEach(button => button.disabled = false);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = App;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rules__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Agent_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Leaf_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Hole_js__ = __webpack_require__(2);








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

        const key = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* positionString */])(x, y);
        index[key] = {
            key,
            blockedSides,
            value: [x, y],
            objects: []
        };
    }

    return index;
};

class Environment {
    constructor(args = {}){
        this.config = Object.assign({
            width: 32,
            height: 32,
            cycleDuration: 200,
            viewRadius: 8
        }, args);

        this.squares = makePositionsIndex(this.width(), this.height());
        this.leaves = [];
    }

    width(){
        return this.config.width;
    }

    height(){
        return this.config.height;
    }

    objects(){
        return Object.values(this.squares)
            .filter(pos => pos.objects.length > 0)
            .reduce((carry, pos) => [...carry, ...pos.objects], []);
    }

    agents(){
        return this.objects().filter(obj => obj instanceof __WEBPACK_IMPORTED_MODULE_4__Agent_js__["a" /* default */]);
    }

    addAtRandom(object){
        const squares = Object.values(this.squares)
            .filter(square => square.objects.length === 0);

        const square = squares.length ? squares[Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* randomNumber */])(squares.length)] : null;
        if(square)
            this.add(object, ...square.value);
    }

    add(object, ...position){
        const key = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* positionString */])(...position);
        return this._executeDirectly(object, __WEBPACK_IMPORTED_MODULE_3__rules__["c" /* MOVE_TO */], this.squares[key]);
    }

    _executeDirectly(...args){
        if(__WEBPACK_IMPORTED_MODULE_3__rules__["e" /* can */](...args)){
            this._resolveOperation(...args);
            return true;
        }

        return false;
    }

    executeAgentPassiveAction(agent, action){
        if(__WEBPACK_IMPORTED_MODULE_2__actions__["typeIs"](action, __WEBPACK_IMPORTED_MODULE_2__actions__["OBSERVE"]))
            this._executeAgentAction(agent, action);
    }

    up(){
        this.intervalRef = setInterval(() => this._cycle(), this.config.cycleDuration);
        this._cycle();
    }

    _cycle(){
        this._progressActions();
    }

    _progressActions(){
        // Randomize agent order
        return this.agents()
            .map(agent => ({ agent, cmp: Math.random() }))
            .sort((a, b) => a.cmp - b.cmp)
            .map(obj => obj.agent)
            .forEach(agent => this._progressAction(agent));
    }

    _progressAction(agent){
        const action = agent.act();
        if(action !== null)
            this._executeAgentAction(agent, action);
    }

    _executeAgentAction(agent, action){
        const params = this._mapActionToOperation(agent, action);
        const allowed = __WEBPACK_IMPORTED_MODULE_3__rules__["e" /* can */](...params);

        if(allowed){
            __WEBPACK_IMPORTED_MODULE_2__actions__["increaseProgress"](action);
            if(__WEBPACK_IMPORTED_MODULE_2__actions__["isComplete"](action))
                this._resolveOperation(...params);
        }

        this._notifyAgent(agent, action, allowed);
    }

    _mapActionToOperation(agent, action){
        switch(true){
            case __WEBPACK_IMPORTED_MODULE_2__actions__["isMovement"](action):
                return this._mapMovementAction(agent, action);

            case __WEBPACK_IMPORTED_MODULE_2__actions__["typeIs"](action, __WEBPACK_IMPORTED_MODULE_2__actions__["CATCH"]):
                return this._mapToOperationUsingCorrectObject(agent, __WEBPACK_IMPORTED_MODULE_3__rules__["a" /* CATCH */]);

            case __WEBPACK_IMPORTED_MODULE_2__actions__["typeIs"](action, __WEBPACK_IMPORTED_MODULE_2__actions__["DROP"]):
                return this._mapToOperationUsingCorrectObject(agent, __WEBPACK_IMPORTED_MODULE_3__rules__["b" /* DROP */]);

            case __WEBPACK_IMPORTED_MODULE_2__actions__["typeIs"](action, __WEBPACK_IMPORTED_MODULE_2__actions__["OBSERVE"]):
                return [agent, __WEBPACK_IMPORTED_MODULE_3__rules__["d" /* OBSERVE */]];
        }
    }

    _mapMovementAction(agent, action){
        const position = agent.getPosition();
        const newPosition = __WEBPACK_IMPORTED_MODULE_2__actions__["applyActionToPosition"](action.type, position);
        const key = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* positionString */])(...newPosition);

        return [agent, __WEBPACK_IMPORTED_MODULE_3__rules__["c" /* MOVE_TO */], this.squares[key]];
    }

    _mapToOperationUsingCorrectObject(agent, operation){
        const objects = this._objectsInSamePosition(agent)
            .filter(obj => __WEBPACK_IMPORTED_MODULE_3__rules__["e" /* can */](agent, operation, obj));

        return [agent, operation, objects[0]];
    }

    _objectsInSamePosition(object){
        const position = object.getPosition();
        const key = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* positionString */])(...position);
        return this.squares[key].objects.filter(obj => obj != object);
    }

    _resolveOperation(object, operation, ...args){
        switch(operation){
            case __WEBPACK_IMPORTED_MODULE_3__rules__["c" /* MOVE_TO */]:
                return this._resolveMoveTo(object, ...args);
            case __WEBPACK_IMPORTED_MODULE_3__rules__["a" /* CATCH */]:
                return this._resolveCatch(object, ...args);
            case __WEBPACK_IMPORTED_MODULE_3__rules__["b" /* DROP */]:
                return this._resolveDrop(object, ...args);
            case __WEBPACK_IMPORTED_MODULE_3__rules__["d" /* OBSERVE */]:
                return this._resolveObserve(object, ...args);
        }
    }

    _resolveMoveTo(object, square){
        const currentPosition = object.getPosition();
        if(currentPosition != null)
            this._removeFromPosition(object, ...currentPosition);

        const position = square.value;
        this._addToPosition(object, ...position);
        object.setPosition(...position);

        if(object instanceof __WEBPACK_IMPORTED_MODULE_4__Agent_js__["a" /* default */]){
            const event = __WEBPACK_IMPORTED_MODULE_1__events__["factory"](__WEBPACK_IMPORTED_MODULE_1__events__["DISPLACEMENT"], this, { object, position });
            object.perceive(event);
        }

        if(object.carriesSomething())
            this._resolveMoveTo(object.getCarriedObject(), square);
    }

    _removeFromPosition(object, ...position){
        this._alterPositionObjects(position, objs => objs.filter(obj => obj != object));
    }

    _addToPosition(object, ...position){
        this._alterPositionObjects(position, objs => [...objs, object]);
    }

    _alterPositionObjects(position, callback){
        const key = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* positionString */])(...position);
        const obj = this.squares[key];
        const objects = callback(obj.objects);
        this.squares[key] = Object.assign({}, obj, { objects });
    }

    _resolveCatch(carrier, object){
        carrier.setCarriedObject(object);
        object.setCarrierObject(carrier);

        if(carrier instanceof __WEBPACK_IMPORTED_MODULE_4__Agent_js__["a" /* default */]){
            const event = __WEBPACK_IMPORTED_MODULE_1__events__["factory"](__WEBPACK_IMPORTED_MODULE_1__events__["CATCH"], this, { object });
            carrier.perceive(event);
        }
    }

    _resolveDrop(carrier, hole){
        const object = carrier.getCarriedObject();

        carrier.setCarriedObject(null);
        object.setCarrierObject(null);

        if(carrier instanceof __WEBPACK_IMPORTED_MODULE_4__Agent_js__["a" /* default */]){
            const event = __WEBPACK_IMPORTED_MODULE_1__events__["factory"](__WEBPACK_IMPORTED_MODULE_1__events__["DROP"], this, { object });
            carrier.perceive(event);
        }

        if(object instanceof __WEBPACK_IMPORTED_MODULE_5__Leaf_js__["a" /* default */])
            this._consumeLeaf(object);
    }

    _consumeLeaf(leaf){
        this._removeFromPosition(leaf, ...leaf.getPosition());
        this.leaves = [...this.leaves, leaf];
    }

    _resolveObserve(object){
        const view = this.getViewPositionsFor(object)
            .map(pos => this.squares[Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* positionString */])(...pos)]);

        const event = __WEBPACK_IMPORTED_MODULE_1__events__["factory"](__WEBPACK_IMPORTED_MODULE_1__events__["VIEW"], this, view);
        object.perceive(event);
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

    _notifyAgent(agent, action, done){
        const { ACTION_FAILED, ACTION_PROGRESSED, ACTION_COMPLETE } = __WEBPACK_IMPORTED_MODULE_1__events__;
        const type = done ? (__WEBPACK_IMPORTED_MODULE_2__actions__["isComplete"](action) ? ACTION_COMPLETE : ACTION_PROGRESSED) : ACTION_FAILED;
        const event = __WEBPACK_IMPORTED_MODULE_1__events__["factory"](type, this, action);
        agent.perceive(event);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Environment;



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Thing_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Agent_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Ant_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Leaf_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Hole_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Rock_js__ = __webpack_require__(3);







const OBSERVE = Symbol('observe');
/* harmony export (immutable) */ __webpack_exports__["d"] = OBSERVE;

const MOVE_TO = Symbol('move_to');
/* harmony export (immutable) */ __webpack_exports__["c"] = MOVE_TO;

const CATCH = Symbol('catch');
/* harmony export (immutable) */ __webpack_exports__["a"] = CATCH;

const DROP = Symbol('drop');
/* harmony export (immutable) */ __webpack_exports__["b"] = DROP;


const rules = [
    { objectClass: __WEBPACK_IMPORTED_MODULE_0__Thing_js__["a" /* default */], operations: {
        [MOVE_TO]: [
            (object, square) => square != null,
            (object, square) => square.objects.every(obj => obj.constructor !== object.constructor),
            (object, square) => !square.objects.some(obj => obj instanceof __WEBPACK_IMPORTED_MODULE_5__Rock_js__["a" /* default */])
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
            (object, into) => into instanceof __WEBPACK_IMPORTED_MODULE_4__Hole_js__["a" /* default */]
        ],
        [OBSERVE]: [
            object => object instanceof __WEBPACK_IMPORTED_MODULE_1__Agent_js__["a" /* default */]
        ]
    }},
    { objectClass: __WEBPACK_IMPORTED_MODULE_2__Ant_js__["a" /* default */], operations: {
        [CATCH]: [
            (object, obj) => obj instanceof __WEBPACK_IMPORTED_MODULE_3__Leaf_js__["a" /* default */]
        ]
    }},
    { objectClass: __WEBPACK_IMPORTED_MODULE_5__Rock_js__["a" /* default */], operations: {
        [MOVE_TO]: [
            (object, square) => square.objects.length === 0
        ]
    }}
];

const can = (object, operation, ...args) => {
    return rules.every(rule => {
        if(!(object instanceof rule.objectClass))
            return true;

        const operations = rule.operations[operation] || [];
        return operations.every(operation => operation(object, ...args));
    });
};
/* harmony export (immutable) */ __webpack_exports__["e"] = can;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (args => {
    const problem = Object.assign({
        canonical: JSON.stringify
    }, args);

    const { initialState, canonical, pathCost, heuristic } = problem;
    const makeNode = nodeMakerFactory(canonical, heuristic);

    const frontier = makeFrontier();
    const explored = {};
    insert(frontier, makeNode(initialState));

    for(let node; node = pop(frontier);){
        if(problem.goalTest(node.state))
            return node.sequence;

        explored[node.hash] = true;

        problem.actions(node.state)
            .map(action => {
                const state = problem.result(node.state, action);
                const cost = pathCost(node.state, action, state);
                return makeNode(state, node.cost + cost, [...node.sequence, action]);
            })
            .filter(child => !explored[child.hash])
            .forEach(child => insert(frontier, child));
    }

    return null;
});

const makeFrontier = () => ({ index: {}, queue: [] });

const nodeMakerFactory = (canonical, heuristic) => {
    return (state, cost = 0, sequence = []) => {
        return {
            state,
            hash: canonical(state),
            cost,
            estimate: cost + heuristic(state),
            sequence
        };
    };
}

const insert = (frontier, node) => {
    const index = frontier.index[node.hash];
    if(index != null){
        if(frontier.queue[index].cost > node.cost){
            frontier.queue.splice(index, 1);
            updateIndex(frontier, index);
        }
        else
            return;
    }

    let idx = 0;
    while(idx < frontier.queue.length && frontier.queue[idx].estimate <= node.estimate)
        idx++;

    frontier.index[node.hash] = idx;
    if(idx === frontier.queue.length)
        frontier.queue = [...frontier.queue, node];
    else
        frontier.queue.splice(idx, 0, node);

    updateIndex(frontier, idx + 1);
}

const pop = frontier => {
    if(!frontier.queue.length)
        return null;

    const [node, ...tail] = frontier.queue;
    delete frontier.index[node.hash];
    frontier.queue = tail;

    updateIndex(frontier);

    return node;
}

const updateIndex = (frontier, index = 0, count = null) => {
    count = count || frontier.queue.length;
    for(; index < count; index++)
        frontier.index[frontier.queue[index].hash] = index;
};


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CARRY = Symbol('carry');
/* harmony export (immutable) */ __webpack_exports__["a"] = CARRY;

const GOTO = Symbol('goto');
/* harmony export (immutable) */ __webpack_exports__["b"] = GOTO;


const factory = (type, data = {}) => Object.assign({ type }, data);
/* harmony export (immutable) */ __webpack_exports__["c"] = factory;



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Ant_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Hole_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Leaf_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Rock_js__ = __webpack_require__(3);






class Render {
    constructor(environment, element, config = {}){
        this.environment = environment;

        this.canvas = element;
        this.context = this.canvas.getContext('2d');
        this.animationFrameReq = null;

        this.canvas.addEventListener('mousemove', event => this._handleMouseMove(event));
        this.canvas.addEventListener('click', event => this._handleClick(event));
        this.positionSelectionCallbacks = [];
        this.mousePosition = null;

        this.config = Object.assign({
            unitSizePx: null,
            unitStrokePx: 2,
            backgroundColor: '#947064',
            backgroundStrokeColor: '#836053',
            antColor: '#CD511D',
            leafColor: '#80FF00',
            leafStemColor: '#60DD00',
            unobservedColor: 'rgba(0, 0, 0, .5)',
            holeColor: '#444',
            holeBorderColor: '#725042',
            highlightColor: 'rgba(255, 255, 255, .5)',
            rockColor: '#B2AA9F'
        }, config);

        if(this.config.unitSizePx === null)
            this.config.unitSizePx = this.canvas.width / this.environment.width();
    }

    up(){
        const frame = () => {
            this.animationFrameReq = requestAnimationFrame(frame);
            this._draw();
        };
        frame();
    }

    _draw(){
        this.context.strokeStyle = '#222';

        this._drawBackground(this.environment);
        this._drawObjects(this.environment.objects());
        this._drawObservedArea(this.environment.agents());
        this._drawMouseHighlight();
    }

    _drawBackground(environment){
        this.context.save();

        const unitSizePx = this.config.unitSizePx;
        const width = environment.width();
        const height = environment.height();
        this.context.clearRect(0, 0, width * unitSizePx, height * unitSizePx);

        this.context.fillStyle = this.config.backgroundColor;
        this.context.strokeStyle = this.config.backgroundStrokeColor;
        this.context.lineWidth = this.config.unitStrokePx;

        this._iteratePositions((x, y) => {
            const args = [...this._getPixelPosition(x, y), unitSizePx, unitSizePx];
            this.context.fillRect(...args);
            this.context.strokeRect(...args);
        });

        this.context.restore();
    }

    _iteratePositions(callback){
        const width = this.environment.width();
        const height = this.environment.height();
        for(let x = 0; x < width; x++){
            for(let y = 0; y < height; y++)
                callback.call(this, x, y);
        }
    }

    _getPixelPosition(...position){
        return position.map(value => value * this.config.unitSizePx);
    }

    _drawObjects(objects){
        objects.map(object => ({object, zIndex: this._getZIndexFor(object)}))
            .sort((a, b) => a.zIndex - b.zIndex)
            .map(obj => obj.object)
            .forEach(object => this._drawObject(object));
    }

    _getZIndexFor(object){
        switch(true){
            case object instanceof __WEBPACK_IMPORTED_MODULE_1__Ant_js__["a" /* default */]:
                return 2;
            case object instanceof __WEBPACK_IMPORTED_MODULE_3__Leaf_js__["a" /* default */]:
                return 1;
            default:
                return 0;
        }
    }

    _drawObject(object){
        const position = object.getPosition();
        const pixelPosition = this._getPixelPosition(...position);

        this.context.save();
        this.context.translate(...pixelPosition);

        if(object.beingCarried()){
            this.context.translate(this.config.unitSizePx * .66, 0);
            this.context.scale(.33, .33);
        }

        this._drawSpecificObject(object);

        this.context.restore();
    }

    _drawSpecificObject(object){
        switch(true){
            case object instanceof __WEBPACK_IMPORTED_MODULE_1__Ant_js__["a" /* default */]:
                return this._drawAnt(object);
            case object instanceof __WEBPACK_IMPORTED_MODULE_2__Hole_js__["a" /* default */]:
                return this._drawHole(object);
            case object instanceof __WEBPACK_IMPORTED_MODULE_3__Leaf_js__["a" /* default */]:
                return this._drawLeaf(object);
            case object instanceof __WEBPACK_IMPORTED_MODULE_4__Rock_js__["a" /* default */]:
                return this._drawRock(object);
        }
    }

    _drawAnt(ant){
        const halfUnit = this.config.unitSizePx / 2;
        const radius = halfUnit * .30;
        const deviation = radius * Math.sqrt(2);

        this.context.strokeStyle = this.config.antColor;
        const legSize = halfUnit * .66;
        const degree = Math.PI / 180;
        for(let len = 3; len--;){
            this.context.save();

            this.context.translate(halfUnit, halfUnit);
            this.context.rotate(-degree * (len * 35 + 10));

            this.context.beginPath();
            this.context.moveTo(-legSize, 0);
            this.context.lineTo(legSize, 0);
            this.context.stroke();

            this.context.restore();
        }

        for(let x = -1; x <= 1; x++){
            const pos = halfUnit + deviation * x;
            this._drawCircle(pos, pos, radius, this.config.antColor);
        }
    }

    _drawHole(hole){
        const halfUnit = this.config.unitSizePx / 2;

        this.context.beginPath();
        this.context.arc(halfUnit, halfUnit, halfUnit / 1.8, 0, Math.PI * 2);
        this.context.clip();

        this._drawCircle(halfUnit, halfUnit, halfUnit / 1.8, this.config.holeBorderColor);
        const deviation = 4;
        this._drawCircle(halfUnit + deviation, halfUnit + deviation, halfUnit / 1.8, this.config.holeColor);
    }

    _drawLeaf(leaf){
        const halfUnit = this.config.unitSizePx / 2;
        const circleRadius = halfUnit / 2;
        const leafHalfWidth = circleRadius * .8;
        const leafHalfHeight = Math.sqrt(Math.pow(circleRadius, 2) - Math.pow(circleRadius - leafHalfWidth, 2));

        for(let len = 2; len--;){
            this.context.save();

            this.context.beginPath();
            this.context.rect(halfUnit - leafHalfWidth * len, halfUnit - leafHalfHeight, leafHalfWidth, leafHalfHeight * 2);
            this.context.clip();

            const x = (circleRadius - leafHalfWidth) * [-1, 1][len];
            this._drawCircle(halfUnit + x, halfUnit, circleRadius, this.config.leafColor);

            this.context.restore();
        }

        this.context.strokeStyle = this.config.leafStemColor;
        this.context.beginPath();
        this.context.moveTo(halfUnit, halfUnit - leafHalfHeight);
        this.context.lineTo(halfUnit, halfUnit + leafHalfHeight * 1.4);
        this.context.stroke();
    }

    _drawRock(rock){
        const halfUnit = this.config.unitSizePx / 2;

        const path = new Path2D();
        path.moveTo(halfUnit, halfUnit * .5);
        path.lineTo(halfUnit * 1.7, halfUnit * .9);
        path.lineTo(halfUnit * 1.5, halfUnit * 1.5);
        path.lineTo(halfUnit * .8, halfUnit * 1.7);
        path.lineTo(halfUnit * .4, halfUnit * .8);
        path.closePath();

        this.context.fillStyle = this.config.rockColor;
        this.context.fill(path);
        this.context.stroke(path);
    }

    _drawCircle(x, y, radius, color){
        const path = new Path2D();
        path.arc(x, y, radius, 0, Math.PI * 2);
        this.context.fillStyle = color;
        this.context.fill(path);
    }

    _drawObservedArea(agents){
        this.context.save();

        const observedPositions = agents.reduce((carry, agent) => this._addObservedPositionsFromAgent(carry, agent), {});

        this.context.fillStyle = this.config.unobservedColor;
        this._iteratePositions((x, y) => this._drawUnobservedSquares(observedPositions, x, y));

        this.context.restore();
    }

    _addObservedPositionsFromAgent(obj, agent){
        const positions = this.environment.getViewPositionsFor(agent);
        positions.forEach(arr => obj[Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* positionString */])(...arr)] = true);

        return obj;
    }

    _drawUnobservedSquares(observedPositions, x, y){
        const key = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* positionString */])(x, y);
        if(observedPositions[key])
            return;

        const pixels = this._getPixelPosition(x, y);
        this.context.fillRect(...pixels, this.config.unitSizePx, this.config.unitSizePx);
   }

    _drawMouseHighlight(){
        if(this.mousePosition === null || this.positionSelectionCallbacks.length === 0)
            return;

        this.context.save();

        const position = this._getHighlightPosition();
        const pixels = this._getPixelPosition(...position);
        this.context.fillStyle = this.config.highlightColor;
        this.context.fillRect(...pixels, this.config.unitSizePx, this.config.unitSizePx);

        this.context.restore();
    }

    _getHighlightPosition(){
        if(this.mousePosition === null)
            return null;

        const { x, y } = this.canvas.getClientRects()[0];
        const offsets = [x, y];
        return this.mousePosition.map((num, index) => Math.floor((num - offsets[index]) / this.config.unitSizePx));
    }

    nextPositionSelection(callback){
        this.positionSelectionCallbacks = [...this.positionSelectionCallbacks, callback];
    }

    _handleMouseMove(event){
        this.mousePosition = [event.clientX, event.clientY];
    }

    _handleClick(event){
        const highlight = this._getHighlightPosition();
        const callbacks = this.positionSelectionCallbacks;
        this.positionSelectionCallbacks = [];
        callbacks.forEach(callback => callback(...highlight));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Render;



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODk4MmExZDg0NDEyZTM5OTFjN2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RoaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9MZWFmLmpzIiwid2VicGFjazovLy8uL3NyYy9Ib2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9Sb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9BZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQW50LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlYXJjaC9hU3Rhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ29hbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlbmRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7QUN0Q0E7O0FBRUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNGQTs7QUFFQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ0ZBOztBQUVBO0FBQUE7QUFBQTs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ0RBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFFQSwwQ0FBaUQscUJBQXFCO0FBQUE7QUFBQTtBQUN0RTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUVBLDBCQUFpQyxvQkFBb0I7QUFBQTtBQUFBO0FBQ3JEO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ2lEO0FBQ2pCO0FBQ2hDOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTs7QUFFOUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSHdFO0FBQzdCO0FBQzNDO0FBQ3VDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxVQUFVLDRCQUE0Qjs7QUFFekU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLFdBQVc7QUFDOUIsbUNBQW1DLFVBQVUsV0FBVztBQUN4RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsWUFBWTtBQUMvRDtBQUNBLGFBQWEsSUFBSTs7QUFFakIsMENBQTBDO0FBQzFDLG1DQUFtQyxVQUFVLFFBQVE7QUFDckQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLFVBQVUsNkJBQTZCOztBQUUxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsVUFBVSxnQkFBZ0I7O0FBRTdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwySUFBb0MsZUFBZTtBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJJQUFvQyxjQUFjO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwSUFBbUMsMEJBQTBCO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBJQUFtQywwQkFBMEI7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0RBQXNELHFEQUFxRDtBQUMzRztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSUFBbUMsMEJBQTBCO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLCtDQUErQztBQUNsRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0EsU0FBUyxJQUFJOztBQUViO0FBQ0EsMEJBQTBCLG9EQUFvRDtBQUM5RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMElBQW1DLGlDQUFpQztBQUNwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxvQkFBb0I7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFEQUFxRDs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUN4UUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDSkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUN6RXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLE9BQU87QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNEJBQTRCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5SUFBcUUsbUJBQW1CO0FBQ3hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUSxVQUFVO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtJQUE4RCxTQUFTO0FBQ3ZFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpSUFBNkQsU0FBUztBQUN0RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxQkFBcUI7QUFDcEM7QUFDQTs7QUFFQSxpREFBaUQsU0FBUztBQUMxRDtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsU0FBUztBQUNoRTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLG9EQUFvRDtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUNsUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFBQTtBQUFBOzs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLFdBQVcsK0NBQStDO0FBQzFEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw2QkFBNkIsVUFBVSxhQUFhOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLGVBQWU7QUFDeEI7QUFDQTs7Ozs7Ozs7QUN0RkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUVBLGdDQUF1QyxvQkFBb0IsT0FBTztBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNIekM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQ7QUFDakQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixXQUFXO0FBQ2pDLDBCQUEwQixZQUFZO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsMkNBQTJDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixPQUFPO0FBQy9COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUhBQXVIOztBQUV2SDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDg5ODJhMWQ4NDQxMmUzOTkxYzdjIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhpbmcge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLmNhcnJpZXMgPSBudWxsO1xuICAgICAgICB0aGlzLmNhcnJpZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGdldFBvc2l0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICAgIH1cblxuICAgIHNldFBvc2l0aW9uKC4uLmFycil7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBhcnI7XG4gICAgfVxuXG4gICAgc2V0Q2FycmllZE9iamVjdChvYmplY3Qpe1xuICAgICAgICB0aGlzLmNhcnJpZXMgPSBvYmplY3Q7XG4gICAgfVxuXG4gICAgc2V0Q2Fycmllck9iamVjdChvYmplY3Qpe1xuICAgICAgICB0aGlzLmNhcnJpZXIgPSBvYmplY3Q7XG4gICAgfVxuXG4gICAgZ2V0Q2FycmllZE9iamVjdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5jYXJyaWVzO1xuICAgIH1cblxuICAgIGdldENhcnJpZXJPYmplY3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FycmllcjtcbiAgICB9XG5cbiAgICBjYXJyaWVzU29tZXRoaW5nKCl7XG4gICAgICAgIHJldHVybiAhIXRoaXMuY2FycmllcztcbiAgICB9XG5cbiAgICBiZWluZ0NhcnJpZWQoKXtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5jYXJyaWVyO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1RoaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBUaGluZyBmcm9tICcuL1RoaW5nLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhZiBleHRlbmRzIFRoaW5nIHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvTGVhZi5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVGhpbmcgZnJvbSAnLi9UaGluZy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbGUgZXh0ZW5kcyBUaGluZyB7fTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0hvbGUuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFRoaW5nIGZyb20gJy4vVGhpbmcuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2NrIGV4dGVuZHMgVGhpbmcge307XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Sb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBwb3NpdGlvblN0cmluZyA9ICguLi5hcnIpID0+IGFyci5qb2luKCcgJyk7XG5leHBvcnQgY29uc3QgcmFuZG9tTnVtYmVyID0gbnVtYmVyID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG51bWJlcik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy91dGlscy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgQUNUSU9OX0NPTVBMRVRFID0gU3ltYm9sKCdhY3Rpb25fY29tcGxldGUnKTtcbmV4cG9ydCBjb25zdCBBQ1RJT05fRkFJTEVEID0gU3ltYm9sKCdhY3Rpb25fZmFpbGVkJyk7XG5leHBvcnQgY29uc3QgQUNUSU9OX1BST0dSRVNTRUQgPSBTeW1ib2woJ2FjdGlvbl9wcm9ncmVzc2VkJyk7XG5leHBvcnQgY29uc3QgVklFVyA9IFN5bWJvbCgndmlldycpO1xuZXhwb3J0IGNvbnN0IERJU1BMQUNFTUVOVCA9IFN5bWJvbCgnZGlzcGxhY2VtZW50Jyk7XG5leHBvcnQgY29uc3QgQ0FUQ0ggPSBTeW1ib2woJ2NhdGNoJyk7XG5leHBvcnQgY29uc3QgRFJPUCA9IFN5bWJvbCgnZHJvcCcpO1xuXG5leHBvcnQgY29uc3QgZmFjdG9yeSA9ICh0eXBlLCBzZW5kZXIsIGRhdGEpID0+ICh7IHR5cGUsIHNlbmRlciwgZGF0YSB9KTtcbmV4cG9ydCBjb25zdCB0eXBlSXMgPSAoZXZlbnQsIC4uLnR5cGVzKSA9PiB0eXBlcy5pbmNsdWRlcyhldmVudC50eXBlKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2V2ZW50cy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgVVAgPSBTeW1ib2woJ3VwJyk7XG5leHBvcnQgY29uc3QgUklHSFQgPSBTeW1ib2woJ3JpZ2h0Jyk7XG5leHBvcnQgY29uc3QgRE9XTiA9IFN5bWJvbCgnZG93bicpO1xuZXhwb3J0IGNvbnN0IExFRlQgPSBTeW1ib2woJ2xlZnQnKTtcbmV4cG9ydCBjb25zdCBDQVRDSCA9IFN5bWJvbCgnY2F0Y2gnKTtcbmV4cG9ydCBjb25zdCBEUk9QID0gU3ltYm9sKCdkcm9wJyk7XG5leHBvcnQgY29uc3QgT0JTRVJWRSA9IFN5bWJvbCgnb2JzZXJ2ZScpO1xuXG5jb25zdCBjb3N0cyA9IHtcbiAgICBbVVBdOiAxLFxuICAgIFtET1dOXTogMSxcbiAgICBbTEVGVF06IDEsXG4gICAgW1JJR0hUXTogMSxcbiAgICBbT0JTRVJWRV06IDEsXG4gICAgW0RST1BdOiAyLFxuICAgIFtDQVRDSF06IDNcbn07XG5leHBvcnQgY29uc3QgY29zdCA9IHR5cGUgPT4gY29zdHNbdHlwZV07XG5cbmNvbnN0IHBvc2l0aW9uVHJhbnNmb3JtYXRpb25zID0ge1xuICAgIFtVUF06IFswLCAtMV0sXG4gICAgW0RPV05dOiBbMCwgMV0sXG4gICAgW1JJR0hUXTogWzEsIDBdLFxuICAgIFtMRUZUXTogWy0xLCAwXVxufTtcblxuZXhwb3J0IGNvbnN0IGFwcGx5QWN0aW9uVG9Qb3NpdGlvbiA9ICh0eXBlLCBwb3NpdGlvbikgPT4gcG9zaXRpb25UcmFuc2Zvcm1hdGlvbnNbdHlwZV1cbiAgICAubWFwKChudW0sIGluZGV4KSA9PiBudW0gKyBwb3NpdGlvbltpbmRleF0pO1xuXG5leHBvcnQgY29uc3QgZmFjdG9yeSA9IHR5cGUgPT4gKHsgdHlwZSwgcHJvZ3Jlc3M6IDAgfSk7XG5leHBvcnQgY29uc3QgaW5jcmVhc2VQcm9ncmVzcyA9IGFjdGlvbiA9PiBhY3Rpb24ucHJvZ3Jlc3MrKztcbmV4cG9ydCBjb25zdCBpc0NvbXBsZXRlID0gYWN0aW9uID0+IGFjdGlvbi5wcm9ncmVzcyA9PT0gY29zdChhY3Rpb24udHlwZSk7XG5leHBvcnQgY29uc3QgdHlwZUlzID0gKGFjdGlvbiwgLi4udHlwZXMpID0+IHR5cGVzLmluY2x1ZGVzKGFjdGlvbi50eXBlKTtcbmV4cG9ydCBjb25zdCBpc01vdmVtZW50ID0gYWN0aW9uID0+IHR5cGVJcyhhY3Rpb24sIFVQLCBSSUdIVCwgRE9XTiwgTEVGVCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY3Rpb25zL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBzZWFyY2ggZnJvbSAnLi9zZWFyY2gvYVN0YXInO1xuaW1wb3J0IHsgdHlwZUlzLCBBQ1RJT05fRkFJTEVELCBBQ1RJT05fQ09NUExFVEUgfSBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgeyBmYWN0b3J5IGFzIG1ha2VBY3Rpb24gfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IFRoaW5nIGZyb20gJy4vVGhpbmcuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZ2VudCBleHRlbmRzIFRoaW5nIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSl7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuX2dldEluaXRpYWxTdGF0ZSgpO1xuICAgICAgICB0aGlzLmV2ZW50UXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJyZW50R29hbCA9IG51bGw7XG4gICAgICAgIHRoaXMuY3VycmVudFNlcXVlbmNlID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5pbnRlcnZhbFJlZiA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHJlYXNvbmluZ0ludGVydmFsOiAxMDBcbiAgICAgICAgfSwgY29uZmlnKTtcbiAgICB9XG5cbiAgICBfZ2V0SW5pdGlhbFN0YXRlKCl7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBwZXJjZWl2ZShldmVudCl7XG4gICAgICAgIHRoaXMuZXZlbnRRdWV1ZSA9IFsuLi50aGlzLmV2ZW50UXVldWUsIGV2ZW50XTtcbiAgICB9XG5cbiAgICBhY3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEFjdGlvbjtcbiAgICB9XG5cbiAgICB1cCgpe1xuICAgICAgICB0aGlzLmludGVydmFsUmVmID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5fcmVhc29uKCksIHRoaXMuY29uZmlnLnJlYXNvbmluZ0ludGVydmFsKTtcbiAgICAgICAgdGhpcy5fcmVhc29uKCk7XG4gICAgfVxuXG4gICAgX3JlYXNvbigpe1xuICAgICAgICB0aGlzLl9iZWZvcmVSZWFzb25pbmcoKTtcblxuICAgICAgICBjb25zdCBwZXJjZXB0cyA9IHRoaXMuZXZlbnRRdWV1ZTtcbiAgICAgICAgdGhpcy5ldmVudFF1ZXVlID0gW107XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLl91cGRhdGVTdGF0ZSh0aGlzLnN0YXRlLCBwZXJjZXB0cyk7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIGJldHRlciBnb2FsIHRvIHB1cnN1ZSB0aGFuIHRoZSBjdXJyZW50IG9uZVxuICAgICAgICBjb25zdCBnb2FsSW5kZXggPSB0aGlzLmN1cnJlbnRHb2FsID8gdGhpcy5jdXJyZW50R29hbC5pbmRleCA6IG51bGw7XG4gICAgICAgIGNvbnN0IGdvYWwgPSB0aGlzLl9mb3JtdWxhdGVHb2FsKHRoaXMuc3RhdGUsIGdvYWxJbmRleCk7XG4gICAgICAgIGlmKGdvYWwgIT09IG51bGwpe1xuICAgICAgICAgICAgY29uc3QgcHJvYmxlbSA9IHRoaXMuX2Zvcm11bGF0ZVByb2JsZW0odGhpcy5zdGF0ZSwgZ29hbCk7XG4gICAgICAgICAgICBjb25zdCBzZXF1ZW5jZSA9IHByb2JsZW0gJiYgc2VhcmNoKHByb2JsZW0pO1xuICAgICAgICAgICAgaWYoc2VxdWVuY2Upe1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEdvYWwgPSBnb2FsO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNlcXVlbmNlID0gc2VxdWVuY2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuY3VycmVudEFjdGlvbiA9PT0gbnVsbCAmJiB0aGlzLmN1cnJlbnRTZXF1ZW5jZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGNvbnN0IFt0eXBlLCAuLi50YWlsXSA9IHRoaXMuY3VycmVudFNlcXVlbmNlO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2VxdWVuY2UgPSB0YWlsO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uID0gbWFrZUFjdGlvbih0eXBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9iZWZvcmVSZWFzb25pbmcoKXt9XG5cbiAgICBfdXBkYXRlU3RhdGUoc3RhdGUsIGV2ZW50cyl7XG4gICAgICAgIGNvbnN0IHJlZHVjZXJzID0gW3RoaXMuX3ZlcmlmeUN1cnJlbnRBY3Rpb25TdGF0dXMsIC4uLnRoaXMuX2dldFN0YXRlUmVkdWNlcnMoKV07XG5cbiAgICAgICAgcmV0dXJuIGV2ZW50cy5yZWR1Y2UoKHN0YXRlLCBldmVudCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlZHVjZXJzLnJlZHVjZSgoc3RhdGUsIHJlZHVjZXIpID0+IHJlZHVjZXIuY2FsbCh0aGlzLCBzdGF0ZSwgZXZlbnQpLCBzdGF0ZSk7XG4gICAgICAgIH0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBfdmVyaWZ5Q3VycmVudEFjdGlvblN0YXR1cyhzdGF0ZSwgZXZlbnQpe1xuICAgICAgICBpZihldmVudC5kYXRhID09PSB0aGlzLmN1cnJlbnRBY3Rpb24pe1xuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LnR5cGUpe1xuICAgICAgICAgICAgICAgIGNhc2UgQUNUSU9OX0ZBSUxFRDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50R29hbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNlcXVlbmNlID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBBQ1RJT05fQ09NUExFVEU6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudFNlcXVlbmNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEdvYWwgPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxuICAgIF9nZXRTdGF0ZVJlZHVjZXJzKCl7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBfZm9ybXVsYXRlR29hbChzdGF0ZSwgbWF4SW5kZXggPSBudWxsKXtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgY29uc3QgY2hhaW4gPSB0aGlzLl9nZXRHb2FsRXZhbHVhdGlvbkNoYWluKCk7XG4gICAgICAgIGZvcihsZXQgZnVuIG9mIGNoYWluKXtcbiAgICAgICAgICAgIGlmKG1heEluZGV4ICE9PSBudWxsICYmIGluZGV4ID49IG1heEluZGV4KVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICBjb25zdCBnb2FsID0gZnVuLmNhbGwodGhpcywgc3RhdGUpO1xuICAgICAgICAgICAgaWYoZ29hbClcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IGluZGV4IH0sIGdvYWwpO1xuXG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgX2dldEdvYWxFdmFsdWF0aW9uQ2hhaW4oKXtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIF9mb3JtdWxhdGVQcm9ibGVtKHN0YXRlLCBnb2FsKXtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvQWdlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgVklFVywgRElTUExBQ0VNRU5ULCBDQVRDSCwgRFJPUCwgZmFjdG9yeSBhcyBtYWtlRXZlbnQsIHR5cGVJcyB9IGZyb20gJy4vZXZlbnRzJztcclxuaW1wb3J0IHsgQ0FSUlksIEdPVE8sIGZhY3RvcnkgYXMgbWFrZUdvYWwgfSBmcm9tICcuL2dvYWxzJztcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBwb3NpdGlvblN0cmluZywgcmFuZG9tTnVtYmVyIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCBBZ2VudCBmcm9tICcuL0FnZW50LmpzJztcclxuaW1wb3J0IExlYWYgZnJvbSAnLi9MZWFmLmpzJztcclxuaW1wb3J0IEhvbGUgZnJvbSAnLi9Ib2xlLmpzJztcclxuaW1wb3J0IFJvY2sgZnJvbSAnLi9Sb2NrLmpzJztcclxuXHJcbmNvbnN0IGNvbnRhaW5zU29tZSA9IChzcXVhcmUsIC4uLmNsYXNzZXMpID0+IHNxdWFyZS5vYmplY3RzLnNvbWUob2JqID0+IGNsYXNzZXMuc29tZShvYmpDbGFzcyA9PiBvYmogaW5zdGFuY2VvZiBvYmpDbGFzcykpO1xyXG5jb25zdCBkaXN0YW5jZSA9IChmcm9tLCB0bykgPT4gTWF0aC5zcXJ0KGZyb20ucmVkdWNlKChzdW0sIHZhbHVlLCBpbmRleCkgPT4gc3VtICsgTWF0aC5wb3codmFsdWUgLSB0b1tpbmRleF0sIDIpLCAwKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbnQgZXh0ZW5kcyBBZ2VudCB7XHJcbiAgICBfZ2V0SW5pdGlhbFN0YXRlKCl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZW52aXJvbm1lbnQ6IG51bGwsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICB3b3JsZDoge30sXHJcbiAgICAgICAgICAgIGNhcnJpZXM6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2JlZm9yZVJlYXNvbmluZygpe1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuZW52aXJvbm1lbnQgPT09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0gYWN0aW9ucy5mYWN0b3J5KGFjdGlvbnMuT0JTRVJWRSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5lbnZpcm9ubWVudC5leGVjdXRlQWdlbnRQYXNzaXZlQWN0aW9uKHRoaXMsIGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldFN0YXRlUmVkdWNlcnMoKXtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVFbnZpcm9ubWVudCxcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVdvcmxkLFxyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVDYXJyaWVkT2JqZWN0LFxyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVEcm9wcGVkT2JqZWN0XHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBfdXBkYXRlRW52aXJvbm1lbnQoc3RhdGUsIGV2ZW50KXtcclxuICAgICAgICBpZih0eXBlSXMoZXZlbnQsIERJU1BMQUNFTUVOVCkgJiYgc3RhdGUuZW52aXJvbm1lbnQgPT09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBlbnZpcm9ubWVudDogZXZlbnQuc2VuZGVyIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgX3VwZGF0ZVBvc2l0aW9uKHN0YXRlLCBldmVudCl7XHJcbiAgICAgICAgaWYodHlwZUlzKGV2ZW50LCBESVNQTEFDRU1FTlQpKXtcclxuICAgICAgICAgICAgY29uc3QgeyBwb3NpdGlvbiB9ID0gZXZlbnQuZGF0YTtcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHBvc2l0aW9uIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVXb3JsZChzdGF0ZSwgZXZlbnQpe1xyXG4gICAgICAgIGlmKHR5cGVJcyhldmVudCwgVklFVykpe1xyXG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gZXZlbnQuZGF0YTtcclxuICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB2aWV3LnJlZHVjZSgoY2FycnksIHNxdWFyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2Fycnlbc3F1YXJlLmtleV0gPSBPYmplY3QuYXNzaWduKHsgdGltZXN0YW1wIH0sIHNxdWFyZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2Fycnk7XHJcbiAgICAgICAgICAgIH0sIHt9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmxkID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUud29ybGQsIGluZGV4KTtcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHdvcmxkIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVDYXJyaWVkT2JqZWN0KHN0YXRlLCBldmVudCl7XHJcbiAgICAgICAgaWYodHlwZUlzKGV2ZW50LCBDQVRDSCkpXHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBjYXJyaWVzOiBldmVudC5kYXRhLm9iamVjdCB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVEcm9wcGVkT2JqZWN0KHN0YXRlLCBldmVudCl7XHJcbiAgICAgICAgaWYodHlwZUlzKGV2ZW50LCBEUk9QKSAmJiBldmVudC5kYXRhLm9iamVjdCA9PT0gc3RhdGUuY2FycmllcylcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcnJpZXM6IG51bGwgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0R29hbEV2YWx1YXRpb25DaGFpbigpe1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3VsZERyb3AsXHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3VsZENhdGNoLFxyXG4gICAgICAgICAgICB0aGlzLl9zaG91bGRNb3ZlVG93YXJkc0hvbGUsXHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3VsZE1vdmVUb3dhcmRzTGVhZixcclxuICAgICAgICAgICAgdGhpcy5fc2hvdWxkRXhwbG9yZVdvcmxkLFxyXG4gICAgICAgICAgICB0aGlzLl9zaG91bGRWaXNpdE9sZFNxdWFyZXNcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIF9zaG91bGREcm9wKHN0YXRlKXtcclxuICAgICAgICBpZighc3RhdGUuY2FycmllcylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBzcXVhcmUgPSBzdGF0ZS53b3JsZFtwb3NpdGlvblN0cmluZyguLi5zdGF0ZS5wb3NpdGlvbildO1xyXG4gICAgICAgIGlmKHNxdWFyZSAmJiBjb250YWluc1NvbWUoc3F1YXJlLCBIb2xlKSlcclxuICAgICAgICAgICAgcmV0dXJuIG1ha2VHb2FsKENBUlJZLCB7IGNhcnJ5OiBmYWxzZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2hvdWxkQ2F0Y2goc3RhdGUpe1xyXG4gICAgICAgIGlmKHN0YXRlLmNhcnJpZXMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gc3RhdGUud29ybGRbcG9zaXRpb25TdHJpbmcoLi4uc3RhdGUucG9zaXRpb24pXTtcclxuICAgICAgICBpZihzcXVhcmUgJiYgY29udGFpbnNTb21lKHNxdWFyZSwgTGVhZikpXHJcbiAgICAgICAgICAgIHJldHVybiBtYWtlR29hbChDQVJSWSwgeyBjYXJyeTogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2hvdWxkTW92ZVRvd2FyZHNIb2xlKHN0YXRlKXtcclxuICAgICAgICBpZighc3RhdGUuY2FycmllcylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBzcXVhcmVzID0gdGhpcy5fc3F1YXJlc0NvbnRhaW5pbmcoc3RhdGUud29ybGQsIEhvbGUpO1xyXG4gICAgICAgIGNvbnN0IGNsb3Nlc3QgPSB0aGlzLl9jbG9zZXN0U3F1YXJlKHN0YXRlLnBvc2l0aW9uLCBzcXVhcmVzKTtcclxuICAgICAgICBpZihjbG9zZXN0KVxyXG4gICAgICAgICAgICByZXR1cm4gbWFrZUdvYWwoR09UTywgeyBwb3NpdGlvbjogY2xvc2VzdC52YWx1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2hvdWxkTW92ZVRvd2FyZHNMZWFmKHN0YXRlKXtcclxuICAgICAgICBpZihzdGF0ZS5jYXJyaWVzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHNxdWFyZXMgPSB0aGlzLl9zcXVhcmVzQ29udGFpbmluZyhzdGF0ZS53b3JsZCwgTGVhZilcclxuICAgICAgICAgICAgLmZpbHRlcihzcXVhcmUgPT4gIWNvbnRhaW5zU29tZShzcXVhcmUsIEFudCkpO1xyXG4gICAgICAgIGNvbnN0IGNsb3Nlc3QgPSB0aGlzLl9jbG9zZXN0U3F1YXJlKHN0YXRlLnBvc2l0aW9uLCBzcXVhcmVzKTtcclxuICAgICAgICBpZihjbG9zZXN0KVxyXG4gICAgICAgICAgICByZXR1cm4gbWFrZUdvYWwoR09UTywgeyBwb3NpdGlvbjogY2xvc2VzdC52YWx1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc3F1YXJlc0NvbnRhaW5pbmcod29ybGQsIG9iamVjdENsYXNzKXtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh3b3JsZCkuZmlsdGVyKHNxdWFyZSA9PiBjb250YWluc1NvbWUoc3F1YXJlLCBvYmplY3RDbGFzcykpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jbG9zZXN0U3F1YXJlKHBvc2l0aW9uLCBzcXVhcmVzKXtcclxuICAgICAgICBjb25zdCBzb3J0ZWRTcXVhcmVzID0gc3F1YXJlcy5tYXAoc3F1YXJlID0+ICh7IHNxdWFyZSwgZGlzdGFuY2U6IGRpc3RhbmNlKHBvc2l0aW9uLCBzcXVhcmUudmFsdWUpIH0pKVxyXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5kaXN0YW5jZSAtIGIuZGlzdGFuY2UpXHJcbiAgICAgICAgICAgIC5tYXAob2JqID0+IG9iai5zcXVhcmUpO1xyXG5cclxuICAgICAgICByZXR1cm4gc29ydGVkU3F1YXJlcy5sZW5ndGggPyBzb3J0ZWRTcXVhcmVzWzBdIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBfc2hvdWxkRXhwbG9yZVdvcmxkKHN0YXRlKXtcclxuICAgICAgICBjb25zdCBzcXVhcmVzID0gdGhpcy5fc3F1YXJlc1dpdGhVbmtub3dOZWlnaGJvdXJzKHN0YXRlLndvcmxkKTtcclxuICAgICAgICBjb25zdCBjbG9zZXN0ID0gdGhpcy5fY2xvc2VzdFNxdWFyZShzdGF0ZS5wb3NpdGlvbiwgc3F1YXJlcyk7XHJcbiAgICAgICAgaWYoY2xvc2VzdClcclxuICAgICAgICAgICAgcmV0dXJuIG1ha2VHb2FsKEdPVE8sIHsgcG9zaXRpb246IGNsb3Nlc3QudmFsdWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NxdWFyZXNXaXRoVW5rbm93TmVpZ2hib3Vycyh3b3JsZCl7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyh3b3JsZCk7XHJcbiAgICAgICAgY29uc3Qga25vd05laWdoYm91cnNJbmRleCA9IHZhbHVlcy5yZWR1Y2UoKGNhcnJ5LCBzcXVhcmUpID0+IHtcclxuICAgICAgICAgICAgaWYoIWNhcnJ5W3NxdWFyZS5rZXldKVxyXG4gICAgICAgICAgICAgICAgY2Fycnlbc3F1YXJlLmtleV0gPSAwO1xyXG5cclxuICAgICAgICAgICAgY2Fycnlbc3F1YXJlLmtleV0gKz0gc3F1YXJlLmJsb2NrZWRTaWRlcztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHsgVVAsIERPV04sIExFRlQsIFJJR0hULCBhcHBseUFjdGlvblRvUG9zaXRpb24gfSA9IGFjdGlvbnM7XHJcbiAgICAgICAgICAgIFtVUCwgRE9XTiwgTEVGVCwgUklHSFRdLmZvckVhY2goYWN0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gYXBwbHlBY3Rpb25Ub1Bvc2l0aW9uKGFjdGlvbiwgc3F1YXJlLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHBvc2l0aW9uU3RyaW5nKC4uLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih3b3JsZFtrZXldKXtcclxuICAgICAgICAgICAgICAgICAgICBpZighY2Fycnlba2V5XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Fycnlba2V5XSA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhcnJ5W2tleV0rKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY2Fycnk7XHJcbiAgICAgICAgfSwge30pO1xyXG5cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoa25vd05laWdoYm91cnNJbmRleClcclxuICAgICAgICAgICAgLm1hcChrZXkgPT4gKHsgY21wOiBrbm93TmVpZ2hib3Vyc0luZGV4W2tleV0sIHNxdWFyZTogd29ybGRba2V5XSB9KSlcclxuICAgICAgICAgICAgLmZpbHRlcihvYmogPT4gb2JqLmNtcCA8IDQpXHJcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmNtcCAtIGIuY21wKVxyXG4gICAgICAgICAgICAubWFwKG9iaiA9PiBvYmouc3F1YXJlKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2hvdWxkVmlzaXRPbGRTcXVhcmVzKHN0YXRlKXtcclxuICAgICAgICBjb25zdCBzcXVhcmVzID0gT2JqZWN0LnZhbHVlcyhzdGF0ZS53b3JsZClcclxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEudGltZXN0YW1wIC0gYi50aW1lc3RhbXApXHJcbiAgICAgICAgICAgIC5zbGljZSgwLCAxMCk7XHJcblxyXG4gICAgICAgIGlmKHNxdWFyZXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSByYW5kb21OdW1iZXIoc3F1YXJlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbWFrZUdvYWwoR09UTywgeyBwb3NpdGlvbjogc3F1YXJlc1tpbmRleF0udmFsdWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9mb3JtdWxhdGVQcm9ibGVtKHN0YXRlLCBnb2FsKXtcclxuICAgICAgICBzd2l0Y2goZ29hbC50eXBlKXtcclxuICAgICAgICAgICAgY2FzZSBDQVJSWTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZW5lcmF0ZUNhcnJ5UHJvYmxlbShzdGF0ZSwgZ29hbC5jYXJyeSk7XHJcbiAgICAgICAgICAgIGNhc2UgR09UTzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZW5lcmF0ZUdvdG9Qcm9ibGVtKHN0YXRlLCBnb2FsLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfZ2VuZXJhdGVDYXJyeVByb2JsZW0oc3RhdGUsIGNhcnJ5KXtcclxuICAgICAgICBjb25zdCB7IENBVENILCBEUk9QLCBjb3N0IH0gPSBhY3Rpb25zO1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSAoYm9vbCwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaChhY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgY2FzZSBDQVRDSDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgRFJPUDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBpbml0aWFsU3RhdGUgPSAhIXN0YXRlLmNhcnJpZXM7XHJcbiAgICAgICAgY29uc3QgcHJvYmxlbUFjdGlvbnMgPSBib29sID0+IFtib29sID8gRFJPUCA6IENBVENIXTtcclxuICAgICAgICBjb25zdCBnb2FsVGVzdCA9IGJvb2wgPT4gYm9vbCA9PT0gY2Fycnk7XHJcbiAgICAgICAgY29uc3QgcGF0aENvc3QgPSAoZnJvbSwgYWN0aW9uLCB0bykgPT4gY29zdChhY3Rpb24pO1xyXG4gICAgICAgIGNvbnN0IGhldXJpc3RpYyA9IGJvb2wgPT4gYm9vbCA9PT0gY2FycnkgPyAwIDogMTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgICAgICAgICBhY3Rpb25zOiBwcm9ibGVtQWN0aW9ucyxcclxuICAgICAgICAgICAgcmVzdWx0LFxyXG4gICAgICAgICAgICBnb2FsVGVzdCxcclxuICAgICAgICAgICAgcGF0aENvc3QsXHJcbiAgICAgICAgICAgIGhldXJpc3RpY1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgX2dlbmVyYXRlR290b1Byb2JsZW0oc3RhdGUsIHBvc2l0aW9uKXtcclxuICAgICAgICBjb25zdCB7IFVQLCBET1dOLCBMRUZULCBSSUdIVCwgY29zdCwgYXBwbHlBY3Rpb25Ub1Bvc2l0aW9uIH0gPSBhY3Rpb25zO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9ibGVtQWN0aW9ucyA9IHBvcyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBbVVAsIERPV04sIExFRlQsIFJJR0hUXS5maWx0ZXIoYWN0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gcmVzdWx0KHBvcywgYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IHN0YXRlLndvcmxkW2Nhbm9uaWNhbChwb3NpdGlvbildO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICEhKHNxdWFyZSAmJiAhY29udGFpbnNTb21lKHNxdWFyZSwgQW50LCBSb2NrKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IChwb3MsIGFjdGlvbikgPT4gYXBwbHlBY3Rpb25Ub1Bvc2l0aW9uKGFjdGlvbiwgcG9zKTtcclxuICAgICAgICBjb25zdCBpbml0aWFsU3RhdGUgPSBzdGF0ZS5wb3NpdGlvbjtcclxuICAgICAgICBjb25zdCBnb2FsVGVzdCA9IHBvcyA9PiBwb3MuZXZlcnkoKG51bSwgaW5kZXgpID0+IG51bSA9PT0gcG9zaXRpb25baW5kZXhdKTtcclxuICAgICAgICBjb25zdCBwYXRoQ29zdCA9IChmcm9tLCBhY3Rpb24sIHRvKSA9PiBjb3N0KGFjdGlvbik7XHJcbiAgICAgICAgY29uc3QgaGV1cmlzdGljID0gcG9zID0+IGRpc3RhbmNlKHBvcywgcG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGNhbm9uaWNhbCA9IHBvcyA9PiBwb3NpdGlvblN0cmluZyguLi5wb3MpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUsXHJcbiAgICAgICAgICAgIGFjdGlvbnM6IHByb2JsZW1BY3Rpb25zLFxyXG4gICAgICAgICAgICByZXN1bHQsXHJcbiAgICAgICAgICAgIGdvYWxUZXN0LFxyXG4gICAgICAgICAgICBwYXRoQ29zdCxcclxuICAgICAgICAgICAgaGV1cmlzdGljLFxyXG4gICAgICAgICAgICBjYW5vbmljYWxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0FudC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQXBwIGZyb20gJy4vQXBwLmpzJztcblxuKGRvYyA9PiB7XG4gICAgY29uc3QgYXBwID0gbmV3IEFwcChkb2MuYm9keSk7XG59KShkb2N1bWVudCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgRW52aXJvbm1lbnQgZnJvbSAnLi9FbnZpcm9ubWVudC5qcyc7XG5pbXBvcnQgQW50IGZyb20gJy4vQW50LmpzJztcbmltcG9ydCBIb2xlIGZyb20gJy4vSG9sZS5qcyc7XG5pbXBvcnQgTGVhZiBmcm9tICcuL0xlYWYuanMnO1xuaW1wb3J0IFJvY2sgZnJvbSAnLi9Sb2NrLmpzJztcbmltcG9ydCBSZW5kZXIgZnJvbSAnLi9SZW5kZXIuanMnO1xuXG5jb25zdCBtYWtlRWxlbWVudCA9IHN0ciA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0cik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3Iocm9vdCl7XG4gICAgICAgIHRoaXMuX3NldHVwRW52aXJvbm1lbnQoKTtcbiAgICAgICAgdGhpcy5fc2V0dXBSZW5kZXIocm9vdCk7XG4gICAgICAgIHRoaXMuX3NldHVwQ29udHJvbHMocm9vdCk7XG4gICAgfVxuXG4gICAgX3NldHVwRW52aXJvbm1lbnQoKXtcbiAgICAgICAgY29uc3QgdW5pdE9yZGVyID0gODtcbiAgICAgICAgY29uc3Qgdmlld1JhZGl1cyA9IDI7XG5cbiAgICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCh7XG4gICAgICAgICAgICB3aWR0aDogdW5pdE9yZGVyLFxuICAgICAgICAgICAgaGVpZ2h0OiB1bml0T3JkZXIsXG4gICAgICAgICAgICB2aWV3UmFkaXVzXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVudmlyb25tZW50LnVwKCk7XG5cbiAgICAgICAgY29uc3QgYW50ID0gbmV3IEFudCgpO1xuICAgICAgICB0aGlzLmVudmlyb25tZW50LmFkZEF0UmFuZG9tKGFudCk7XG4gICAgICAgIGFudC51cCgpO1xuICAgIH1cblxuICAgIF9zZXR1cFJlbmRlcihyb290KXtcbiAgICAgICAgY29uc3QgdW5pdFNpemVQeCA9IDQwO1xuXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IG1ha2VFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gdW5pdFNpemVQeCAqIHRoaXMuZW52aXJvbm1lbnQud2lkdGgoKTtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHVuaXRTaXplUHggKiB0aGlzLmVudmlyb25tZW50LmhlaWdodCgpO1xuICAgICAgICByb290LmFwcGVuZENoaWxkKGNhbnZhcyk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXIgPSBuZXcgUmVuZGVyKHRoaXMuZW52aXJvbm1lbnQsIGNhbnZhcyk7XG4gICAgICAgIHRoaXMucmVuZGVyLnVwKCk7XG4gICAgfVxuXG4gICAgX3NldHVwQ29udHJvbHMocm9vdCl7XG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgICAgICB0aGlzLmJ1dHRvbnMgPSBbSG9sZSwgTGVhZiwgUm9ja10ubWFwKG9iamVjdENsYXNzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gbWFrZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IG1ha2VFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBvYmplY3RDbGFzcy5uYW1lO1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5fYWRkT2JqZWN0KG9iamVjdENsYXNzKSk7XG5cbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG5cbiAgICAgICAgICAgIHJldHVybiBidXR0b247XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQodWwpO1xuICAgIH1cblxuICAgIF9hZGRPYmplY3Qob2JqZWN0Q2xhc3Mpe1xuICAgICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmRpc2FibGVkID0gdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXIubmV4dFBvc2l0aW9uU2VsZWN0aW9uKCguLi5wb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0gbmV3IG9iamVjdENsYXNzKCk7XG4gICAgICAgICAgICB0aGlzLmVudmlyb25tZW50LmFkZChvYmplY3QsIC4uLnBvc2l0aW9uKTtcblxuICAgICAgICAgICAgdGhpcy5idXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvQXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBwb3NpdGlvblN0cmluZywgcmFuZG9tTnVtYmVyIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgKiBhcyBldmVudHMgZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0ICogYXMgcnVsZXMgZnJvbSAnLi9ydWxlcyc7XG5pbXBvcnQgQWdlbnQgZnJvbSAnLi9BZ2VudC5qcyc7XG5pbXBvcnQgTGVhZiBmcm9tICcuL0xlYWYuanMnO1xuaW1wb3J0IEhvbGUgZnJvbSAnLi9Ib2xlLmpzJztcblxuY29uc3QgbWFrZVBvc2l0aW9uc0luZGV4ID0gKHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHt9O1xuICAgIGZvcihsZXQgbGVuID0gd2lkdGggKiBoZWlnaHQ7IGxlbi0tOyl7XG4gICAgICAgIGNvbnN0IHggPSBsZW4gJSB3aWR0aDtcbiAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IobGVuIC8gd2lkdGgpO1xuXG4gICAgICAgIGxldCBibG9ja2VkU2lkZXMgPSAwO1xuICAgICAgICBpZih4ID09PSAwIHx8IHggPT09IHdpZHRoIC0gMSlcbiAgICAgICAgICAgIGJsb2NrZWRTaWRlcysrO1xuICAgICAgICBpZih5ID09PSAwIHx8IHkgPT09IGhlaWdodCAtIDEpXG4gICAgICAgICAgICBibG9ja2VkU2lkZXMrKztcblxuICAgICAgICBjb25zdCBrZXkgPSBwb3NpdGlvblN0cmluZyh4LCB5KTtcbiAgICAgICAgaW5kZXhba2V5XSA9IHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGJsb2NrZWRTaWRlcyxcbiAgICAgICAgICAgIHZhbHVlOiBbeCwgeV0sXG4gICAgICAgICAgICBvYmplY3RzOiBbXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudmlyb25tZW50IHtcbiAgICBjb25zdHJ1Y3RvcihhcmdzID0ge30pe1xuICAgICAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgd2lkdGg6IDMyLFxuICAgICAgICAgICAgaGVpZ2h0OiAzMixcbiAgICAgICAgICAgIGN5Y2xlRHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgIHZpZXdSYWRpdXM6IDhcbiAgICAgICAgfSwgYXJncyk7XG5cbiAgICAgICAgdGhpcy5zcXVhcmVzID0gbWFrZVBvc2l0aW9uc0luZGV4KHRoaXMud2lkdGgoKSwgdGhpcy5oZWlnaHQoKSk7XG4gICAgICAgIHRoaXMubGVhdmVzID0gW107XG4gICAgfVxuXG4gICAgd2lkdGgoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLndpZHRoO1xuICAgIH1cblxuICAgIGhlaWdodCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuaGVpZ2h0O1xuICAgIH1cblxuICAgIG9iamVjdHMoKXtcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5zcXVhcmVzKVxuICAgICAgICAgICAgLmZpbHRlcihwb3MgPT4gcG9zLm9iamVjdHMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIC5yZWR1Y2UoKGNhcnJ5LCBwb3MpID0+IFsuLi5jYXJyeSwgLi4ucG9zLm9iamVjdHNdLCBbXSk7XG4gICAgfVxuXG4gICAgYWdlbnRzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm9iamVjdHMoKS5maWx0ZXIob2JqID0+IG9iaiBpbnN0YW5jZW9mIEFnZW50KTtcbiAgICB9XG5cbiAgICBhZGRBdFJhbmRvbShvYmplY3Qpe1xuICAgICAgICBjb25zdCBzcXVhcmVzID0gT2JqZWN0LnZhbHVlcyh0aGlzLnNxdWFyZXMpXG4gICAgICAgICAgICAuZmlsdGVyKHNxdWFyZSA9PiBzcXVhcmUub2JqZWN0cy5sZW5ndGggPT09IDApO1xuXG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IHNxdWFyZXMubGVuZ3RoID8gc3F1YXJlc1tyYW5kb21OdW1iZXIoc3F1YXJlcy5sZW5ndGgpXSA6IG51bGw7XG4gICAgICAgIGlmKHNxdWFyZSlcbiAgICAgICAgICAgIHRoaXMuYWRkKG9iamVjdCwgLi4uc3F1YXJlLnZhbHVlKTtcbiAgICB9XG5cbiAgICBhZGQob2JqZWN0LCAuLi5wb3NpdGlvbil7XG4gICAgICAgIGNvbnN0IGtleSA9IHBvc2l0aW9uU3RyaW5nKC4uLnBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4ZWN1dGVEaXJlY3RseShvYmplY3QsIHJ1bGVzLk1PVkVfVE8sIHRoaXMuc3F1YXJlc1trZXldKTtcbiAgICB9XG5cbiAgICBfZXhlY3V0ZURpcmVjdGx5KC4uLmFyZ3Mpe1xuICAgICAgICBpZihydWxlcy5jYW4oLi4uYXJncykpe1xuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZU9wZXJhdGlvbiguLi5hcmdzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGV4ZWN1dGVBZ2VudFBhc3NpdmVBY3Rpb24oYWdlbnQsIGFjdGlvbil7XG4gICAgICAgIGlmKGFjdGlvbnMudHlwZUlzKGFjdGlvbiwgYWN0aW9ucy5PQlNFUlZFKSlcbiAgICAgICAgICAgIHRoaXMuX2V4ZWN1dGVBZ2VudEFjdGlvbihhZ2VudCwgYWN0aW9uKTtcbiAgICB9XG5cbiAgICB1cCgpe1xuICAgICAgICB0aGlzLmludGVydmFsUmVmID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5fY3ljbGUoKSwgdGhpcy5jb25maWcuY3ljbGVEdXJhdGlvbik7XG4gICAgICAgIHRoaXMuX2N5Y2xlKCk7XG4gICAgfVxuXG4gICAgX2N5Y2xlKCl7XG4gICAgICAgIHRoaXMuX3Byb2dyZXNzQWN0aW9ucygpO1xuICAgIH1cblxuICAgIF9wcm9ncmVzc0FjdGlvbnMoKXtcbiAgICAgICAgLy8gUmFuZG9taXplIGFnZW50IG9yZGVyXG4gICAgICAgIHJldHVybiB0aGlzLmFnZW50cygpXG4gICAgICAgICAgICAubWFwKGFnZW50ID0+ICh7IGFnZW50LCBjbXA6IE1hdGgucmFuZG9tKCkgfSkpXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5jbXAgLSBiLmNtcClcbiAgICAgICAgICAgIC5tYXAob2JqID0+IG9iai5hZ2VudClcbiAgICAgICAgICAgIC5mb3JFYWNoKGFnZW50ID0+IHRoaXMuX3Byb2dyZXNzQWN0aW9uKGFnZW50KSk7XG4gICAgfVxuXG4gICAgX3Byb2dyZXNzQWN0aW9uKGFnZW50KXtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gYWdlbnQuYWN0KCk7XG4gICAgICAgIGlmKGFjdGlvbiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuX2V4ZWN1dGVBZ2VudEFjdGlvbihhZ2VudCwgYWN0aW9uKTtcbiAgICB9XG5cbiAgICBfZXhlY3V0ZUFnZW50QWN0aW9uKGFnZW50LCBhY3Rpb24pe1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB0aGlzLl9tYXBBY3Rpb25Ub09wZXJhdGlvbihhZ2VudCwgYWN0aW9uKTtcbiAgICAgICAgY29uc3QgYWxsb3dlZCA9IHJ1bGVzLmNhbiguLi5wYXJhbXMpO1xuXG4gICAgICAgIGlmKGFsbG93ZWQpe1xuICAgICAgICAgICAgYWN0aW9ucy5pbmNyZWFzZVByb2dyZXNzKGFjdGlvbik7XG4gICAgICAgICAgICBpZihhY3Rpb25zLmlzQ29tcGxldGUoYWN0aW9uKSlcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNvbHZlT3BlcmF0aW9uKC4uLnBhcmFtcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9ub3RpZnlBZ2VudChhZ2VudCwgYWN0aW9uLCBhbGxvd2VkKTtcbiAgICB9XG5cbiAgICBfbWFwQWN0aW9uVG9PcGVyYXRpb24oYWdlbnQsIGFjdGlvbil7XG4gICAgICAgIHN3aXRjaCh0cnVlKXtcbiAgICAgICAgICAgIGNhc2UgYWN0aW9ucy5pc01vdmVtZW50KGFjdGlvbik6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21hcE1vdmVtZW50QWN0aW9uKGFnZW50LCBhY3Rpb24pO1xuXG4gICAgICAgICAgICBjYXNlIGFjdGlvbnMudHlwZUlzKGFjdGlvbiwgYWN0aW9ucy5DQVRDSCk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21hcFRvT3BlcmF0aW9uVXNpbmdDb3JyZWN0T2JqZWN0KGFnZW50LCBydWxlcy5DQVRDSCk7XG5cbiAgICAgICAgICAgIGNhc2UgYWN0aW9ucy50eXBlSXMoYWN0aW9uLCBhY3Rpb25zLkRST1ApOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXBUb09wZXJhdGlvblVzaW5nQ29ycmVjdE9iamVjdChhZ2VudCwgcnVsZXMuRFJPUCk7XG5cbiAgICAgICAgICAgIGNhc2UgYWN0aW9ucy50eXBlSXMoYWN0aW9uLCBhY3Rpb25zLk9CU0VSVkUpOlxuICAgICAgICAgICAgICAgIHJldHVybiBbYWdlbnQsIHJ1bGVzLk9CU0VSVkVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX21hcE1vdmVtZW50QWN0aW9uKGFnZW50LCBhY3Rpb24pe1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGFnZW50LmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gYWN0aW9ucy5hcHBseUFjdGlvblRvUG9zaXRpb24oYWN0aW9uLnR5cGUsIHBvc2l0aW9uKTtcbiAgICAgICAgY29uc3Qga2V5ID0gcG9zaXRpb25TdHJpbmcoLi4ubmV3UG9zaXRpb24pO1xuXG4gICAgICAgIHJldHVybiBbYWdlbnQsIHJ1bGVzLk1PVkVfVE8sIHRoaXMuc3F1YXJlc1trZXldXTtcbiAgICB9XG5cbiAgICBfbWFwVG9PcGVyYXRpb25Vc2luZ0NvcnJlY3RPYmplY3QoYWdlbnQsIG9wZXJhdGlvbil7XG4gICAgICAgIGNvbnN0IG9iamVjdHMgPSB0aGlzLl9vYmplY3RzSW5TYW1lUG9zaXRpb24oYWdlbnQpXG4gICAgICAgICAgICAuZmlsdGVyKG9iaiA9PiBydWxlcy5jYW4oYWdlbnQsIG9wZXJhdGlvbiwgb2JqKSk7XG5cbiAgICAgICAgcmV0dXJuIFthZ2VudCwgb3BlcmF0aW9uLCBvYmplY3RzWzBdXTtcbiAgICB9XG5cbiAgICBfb2JqZWN0c0luU2FtZVBvc2l0aW9uKG9iamVjdCl7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gb2JqZWN0LmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IGtleSA9IHBvc2l0aW9uU3RyaW5nKC4uLnBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3F1YXJlc1trZXldLm9iamVjdHMuZmlsdGVyKG9iaiA9PiBvYmogIT0gb2JqZWN0KTtcbiAgICB9XG5cbiAgICBfcmVzb2x2ZU9wZXJhdGlvbihvYmplY3QsIG9wZXJhdGlvbiwgLi4uYXJncyl7XG4gICAgICAgIHN3aXRjaChvcGVyYXRpb24pe1xuICAgICAgICAgICAgY2FzZSBydWxlcy5NT1ZFX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXNvbHZlTW92ZVRvKG9iamVjdCwgLi4uYXJncyk7XG4gICAgICAgICAgICBjYXNlIHJ1bGVzLkNBVENIOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXNvbHZlQ2F0Y2gob2JqZWN0LCAuLi5hcmdzKTtcbiAgICAgICAgICAgIGNhc2UgcnVsZXMuRFJPUDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzb2x2ZURyb3Aob2JqZWN0LCAuLi5hcmdzKTtcbiAgICAgICAgICAgIGNhc2UgcnVsZXMuT0JTRVJWRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzb2x2ZU9ic2VydmUob2JqZWN0LCAuLi5hcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9yZXNvbHZlTW92ZVRvKG9iamVjdCwgc3F1YXJlKXtcbiAgICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gb2JqZWN0LmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGlmKGN1cnJlbnRQb3NpdGlvbiAhPSBudWxsKVxuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlRnJvbVBvc2l0aW9uKG9iamVjdCwgLi4uY3VycmVudFBvc2l0aW9uKTtcblxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHNxdWFyZS52YWx1ZTtcbiAgICAgICAgdGhpcy5fYWRkVG9Qb3NpdGlvbihvYmplY3QsIC4uLnBvc2l0aW9uKTtcbiAgICAgICAgb2JqZWN0LnNldFBvc2l0aW9uKC4uLnBvc2l0aW9uKTtcblxuICAgICAgICBpZihvYmplY3QgaW5zdGFuY2VvZiBBZ2VudCl7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGV2ZW50cy5mYWN0b3J5KGV2ZW50cy5ESVNQTEFDRU1FTlQsIHRoaXMsIHsgb2JqZWN0LCBwb3NpdGlvbiB9KTtcbiAgICAgICAgICAgIG9iamVjdC5wZXJjZWl2ZShldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihvYmplY3QuY2Fycmllc1NvbWV0aGluZygpKVxuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZU1vdmVUbyhvYmplY3QuZ2V0Q2FycmllZE9iamVjdCgpLCBzcXVhcmUpO1xuICAgIH1cblxuICAgIF9yZW1vdmVGcm9tUG9zaXRpb24ob2JqZWN0LCAuLi5wb3NpdGlvbil7XG4gICAgICAgIHRoaXMuX2FsdGVyUG9zaXRpb25PYmplY3RzKHBvc2l0aW9uLCBvYmpzID0+IG9ianMuZmlsdGVyKG9iaiA9PiBvYmogIT0gb2JqZWN0KSk7XG4gICAgfVxuXG4gICAgX2FkZFRvUG9zaXRpb24ob2JqZWN0LCAuLi5wb3NpdGlvbil7XG4gICAgICAgIHRoaXMuX2FsdGVyUG9zaXRpb25PYmplY3RzKHBvc2l0aW9uLCBvYmpzID0+IFsuLi5vYmpzLCBvYmplY3RdKTtcbiAgICB9XG5cbiAgICBfYWx0ZXJQb3NpdGlvbk9iamVjdHMocG9zaXRpb24sIGNhbGxiYWNrKXtcbiAgICAgICAgY29uc3Qga2V5ID0gcG9zaXRpb25TdHJpbmcoLi4ucG9zaXRpb24pO1xuICAgICAgICBjb25zdCBvYmogPSB0aGlzLnNxdWFyZXNba2V5XTtcbiAgICAgICAgY29uc3Qgb2JqZWN0cyA9IGNhbGxiYWNrKG9iai5vYmplY3RzKTtcbiAgICAgICAgdGhpcy5zcXVhcmVzW2tleV0gPSBPYmplY3QuYXNzaWduKHt9LCBvYmosIHsgb2JqZWN0cyB9KTtcbiAgICB9XG5cbiAgICBfcmVzb2x2ZUNhdGNoKGNhcnJpZXIsIG9iamVjdCl7XG4gICAgICAgIGNhcnJpZXIuc2V0Q2FycmllZE9iamVjdChvYmplY3QpO1xuICAgICAgICBvYmplY3Quc2V0Q2Fycmllck9iamVjdChjYXJyaWVyKTtcblxuICAgICAgICBpZihjYXJyaWVyIGluc3RhbmNlb2YgQWdlbnQpe1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBldmVudHMuZmFjdG9yeShldmVudHMuQ0FUQ0gsIHRoaXMsIHsgb2JqZWN0IH0pO1xuICAgICAgICAgICAgY2Fycmllci5wZXJjZWl2ZShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcmVzb2x2ZURyb3AoY2FycmllciwgaG9sZSl7XG4gICAgICAgIGNvbnN0IG9iamVjdCA9IGNhcnJpZXIuZ2V0Q2FycmllZE9iamVjdCgpO1xuXG4gICAgICAgIGNhcnJpZXIuc2V0Q2FycmllZE9iamVjdChudWxsKTtcbiAgICAgICAgb2JqZWN0LnNldENhcnJpZXJPYmplY3QobnVsbCk7XG5cbiAgICAgICAgaWYoY2FycmllciBpbnN0YW5jZW9mIEFnZW50KXtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzLmZhY3RvcnkoZXZlbnRzLkRST1AsIHRoaXMsIHsgb2JqZWN0IH0pO1xuICAgICAgICAgICAgY2Fycmllci5wZXJjZWl2ZShldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihvYmplY3QgaW5zdGFuY2VvZiBMZWFmKVxuICAgICAgICAgICAgdGhpcy5fY29uc3VtZUxlYWYob2JqZWN0KTtcbiAgICB9XG5cbiAgICBfY29uc3VtZUxlYWYobGVhZil7XG4gICAgICAgIHRoaXMuX3JlbW92ZUZyb21Qb3NpdGlvbihsZWFmLCAuLi5sZWFmLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICB0aGlzLmxlYXZlcyA9IFsuLi50aGlzLmxlYXZlcywgbGVhZl07XG4gICAgfVxuXG4gICAgX3Jlc29sdmVPYnNlcnZlKG9iamVjdCl7XG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLmdldFZpZXdQb3NpdGlvbnNGb3Iob2JqZWN0KVxuICAgICAgICAgICAgLm1hcChwb3MgPT4gdGhpcy5zcXVhcmVzW3Bvc2l0aW9uU3RyaW5nKC4uLnBvcyldKTtcblxuICAgICAgICBjb25zdCBldmVudCA9IGV2ZW50cy5mYWN0b3J5KGV2ZW50cy5WSUVXLCB0aGlzLCB2aWV3KTtcbiAgICAgICAgb2JqZWN0LnBlcmNlaXZlKGV2ZW50KTtcbiAgICB9XG5cbiAgICBnZXRWaWV3UG9zaXRpb25zRm9yKGFnZW50KXtcbiAgICAgICAgY29uc3QgYXJyID0gW107XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy53aWR0aCgpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmhlaWdodCgpO1xuICAgICAgICBjb25zdCB7IHZpZXdSYWRpdXM6IHJhZGl1cyB9ID0gdGhpcy5jb25maWc7XG4gICAgICAgIGNvbnN0IFthZ2VudFgsIGFnZW50WV0gPSBhZ2VudC5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCB0b1ggPSBNYXRoLm1pbihhZ2VudFggKyByYWRpdXMgKyAxLCB3aWR0aCk7XG5cbiAgICAgICAgZm9yKGxldCB4ID0gTWF0aC5tYXgoYWdlbnRYIC0gcmFkaXVzLCAwKTsgeCA8IHRvWDsgeCsrKXtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlWSA9IE1hdGguc3FydChNYXRoLnBvdyhyYWRpdXMsIDIpIC0gTWF0aC5wb3coeCAtIGFnZW50WCwgMikpO1xuICAgICAgICAgICAgY29uc3Qgcm91bmRlZFkgPSBNYXRoLmZsb29yKHZhbHVlWSk7XG4gICAgICAgICAgICBjb25zdCB0b1kgPSBNYXRoLm1pbihhZ2VudFkgKyByb3VuZGVkWSArIDEsIGhlaWdodCk7XG4gICAgICAgICAgICBmb3IobGV0IHkgPSBNYXRoLm1heChhZ2VudFkgLSByb3VuZGVkWSwgMCk7IHkgPCB0b1k7IHkrKylcbiAgICAgICAgICAgICAgICBhcnIucHVzaChbeCwgeV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBfbm90aWZ5QWdlbnQoYWdlbnQsIGFjdGlvbiwgZG9uZSl7XG4gICAgICAgIGNvbnN0IHsgQUNUSU9OX0ZBSUxFRCwgQUNUSU9OX1BST0dSRVNTRUQsIEFDVElPTl9DT01QTEVURSB9ID0gZXZlbnRzO1xuICAgICAgICBjb25zdCB0eXBlID0gZG9uZSA/IChhY3Rpb25zLmlzQ29tcGxldGUoYWN0aW9uKSA/IEFDVElPTl9DT01QTEVURSA6IEFDVElPTl9QUk9HUkVTU0VEKSA6IEFDVElPTl9GQUlMRUQ7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzLmZhY3RvcnkodHlwZSwgdGhpcywgYWN0aW9uKTtcbiAgICAgICAgYWdlbnQucGVyY2VpdmUoZXZlbnQpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0Vudmlyb25tZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVGhpbmcgZnJvbSAnLi4vVGhpbmcuanMnO1xuaW1wb3J0IEFnZW50IGZyb20gJy4uL0FnZW50LmpzJztcbmltcG9ydCBBbnQgZnJvbSAnLi4vQW50LmpzJztcbmltcG9ydCBMZWFmIGZyb20gJy4uL0xlYWYuanMnO1xuaW1wb3J0IEhvbGUgZnJvbSAnLi4vSG9sZS5qcyc7XG5pbXBvcnQgUm9jayBmcm9tICcuLi9Sb2NrLmpzJztcblxuZXhwb3J0IGNvbnN0IE9CU0VSVkUgPSBTeW1ib2woJ29ic2VydmUnKTtcbmV4cG9ydCBjb25zdCBNT1ZFX1RPID0gU3ltYm9sKCdtb3ZlX3RvJyk7XG5leHBvcnQgY29uc3QgQ0FUQ0ggPSBTeW1ib2woJ2NhdGNoJyk7XG5leHBvcnQgY29uc3QgRFJPUCA9IFN5bWJvbCgnZHJvcCcpO1xuXG5jb25zdCBydWxlcyA9IFtcbiAgICB7IG9iamVjdENsYXNzOiBUaGluZywgb3BlcmF0aW9uczoge1xuICAgICAgICBbTU9WRV9UT106IFtcbiAgICAgICAgICAgIChvYmplY3QsIHNxdWFyZSkgPT4gc3F1YXJlICE9IG51bGwsXG4gICAgICAgICAgICAob2JqZWN0LCBzcXVhcmUpID0+IHNxdWFyZS5vYmplY3RzLmV2ZXJ5KG9iaiA9PiBvYmouY29uc3RydWN0b3IgIT09IG9iamVjdC5jb25zdHJ1Y3RvciksXG4gICAgICAgICAgICAob2JqZWN0LCBzcXVhcmUpID0+ICFzcXVhcmUub2JqZWN0cy5zb21lKG9iaiA9PiBvYmogaW5zdGFuY2VvZiBSb2NrKVxuICAgICAgICBdLFxuICAgICAgICBbQ0FUQ0hdOiBbXG4gICAgICAgICAgICAob2JqZWN0LCBvYmopID0+IG9iaiAhPSBudWxsLFxuICAgICAgICAgICAgKG9iamVjdCwgb2JqKSA9PiBvYmplY3QgIT0gb2JqLFxuICAgICAgICAgICAgKG9iamVjdCwgb2JqKSA9PiAhb2JqZWN0LmNhcnJpZXNTb21ldGhpbmcoKSxcbiAgICAgICAgICAgIChvYmplY3QsIG9iaikgPT4gIW9iai5iZWluZ0NhcnJpZWQoKVxuICAgICAgICBdLFxuICAgICAgICBbRFJPUF06IFtcbiAgICAgICAgICAgIChvYmplY3QsIGludG8pID0+IG9iamVjdC5jYXJyaWVzU29tZXRoaW5nKCksXG4gICAgICAgICAgICAob2JqZWN0LCBpbnRvKSA9PiBpbnRvICE9IG51bGwsXG4gICAgICAgICAgICAob2JqZWN0LCBpbnRvKSA9PiBpbnRvIGluc3RhbmNlb2YgSG9sZVxuICAgICAgICBdLFxuICAgICAgICBbT0JTRVJWRV06IFtcbiAgICAgICAgICAgIG9iamVjdCA9PiBvYmplY3QgaW5zdGFuY2VvZiBBZ2VudFxuICAgICAgICBdXG4gICAgfX0sXG4gICAgeyBvYmplY3RDbGFzczogQW50LCBvcGVyYXRpb25zOiB7XG4gICAgICAgIFtDQVRDSF06IFtcbiAgICAgICAgICAgIChvYmplY3QsIG9iaikgPT4gb2JqIGluc3RhbmNlb2YgTGVhZlxuICAgICAgICBdXG4gICAgfX0sXG4gICAgeyBvYmplY3RDbGFzczogUm9jaywgb3BlcmF0aW9uczoge1xuICAgICAgICBbTU9WRV9UT106IFtcbiAgICAgICAgICAgIChvYmplY3QsIHNxdWFyZSkgPT4gc3F1YXJlLm9iamVjdHMubGVuZ3RoID09PSAwXG4gICAgICAgIF1cbiAgICB9fVxuXTtcblxuZXhwb3J0IGNvbnN0IGNhbiA9IChvYmplY3QsIG9wZXJhdGlvbiwgLi4uYXJncykgPT4ge1xuICAgIHJldHVybiBydWxlcy5ldmVyeShydWxlID0+IHtcbiAgICAgICAgaWYoIShvYmplY3QgaW5zdGFuY2VvZiBydWxlLm9iamVjdENsYXNzKSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgIGNvbnN0IG9wZXJhdGlvbnMgPSBydWxlLm9wZXJhdGlvbnNbb3BlcmF0aW9uXSB8fCBbXTtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnMuZXZlcnkob3BlcmF0aW9uID0+IG9wZXJhdGlvbihvYmplY3QsIC4uLmFyZ3MpKTtcbiAgICB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ydWxlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgYXJncyA9PiB7XG4gICAgY29uc3QgcHJvYmxlbSA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBjYW5vbmljYWw6IEpTT04uc3RyaW5naWZ5XG4gICAgfSwgYXJncyk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxTdGF0ZSwgY2Fub25pY2FsLCBwYXRoQ29zdCwgaGV1cmlzdGljIH0gPSBwcm9ibGVtO1xuICAgIGNvbnN0IG1ha2VOb2RlID0gbm9kZU1ha2VyRmFjdG9yeShjYW5vbmljYWwsIGhldXJpc3RpYyk7XG5cbiAgICBjb25zdCBmcm9udGllciA9IG1ha2VGcm9udGllcigpO1xuICAgIGNvbnN0IGV4cGxvcmVkID0ge307XG4gICAgaW5zZXJ0KGZyb250aWVyLCBtYWtlTm9kZShpbml0aWFsU3RhdGUpKTtcblxuICAgIGZvcihsZXQgbm9kZTsgbm9kZSA9IHBvcChmcm9udGllcik7KXtcbiAgICAgICAgaWYocHJvYmxlbS5nb2FsVGVzdChub2RlLnN0YXRlKSlcbiAgICAgICAgICAgIHJldHVybiBub2RlLnNlcXVlbmNlO1xuXG4gICAgICAgIGV4cGxvcmVkW25vZGUuaGFzaF0gPSB0cnVlO1xuXG4gICAgICAgIHByb2JsZW0uYWN0aW9ucyhub2RlLnN0YXRlKVxuICAgICAgICAgICAgLm1hcChhY3Rpb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gcHJvYmxlbS5yZXN1bHQobm9kZS5zdGF0ZSwgYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3N0ID0gcGF0aENvc3Qobm9kZS5zdGF0ZSwgYWN0aW9uLCBzdGF0ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VOb2RlKHN0YXRlLCBub2RlLmNvc3QgKyBjb3N0LCBbLi4ubm9kZS5zZXF1ZW5jZSwgYWN0aW9uXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcihjaGlsZCA9PiAhZXhwbG9yZWRbY2hpbGQuaGFzaF0pXG4gICAgICAgICAgICAuZm9yRWFjaChjaGlsZCA9PiBpbnNlcnQoZnJvbnRpZXIsIGNoaWxkKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBtYWtlRnJvbnRpZXIgPSAoKSA9PiAoeyBpbmRleDoge30sIHF1ZXVlOiBbXSB9KTtcblxuY29uc3Qgbm9kZU1ha2VyRmFjdG9yeSA9IChjYW5vbmljYWwsIGhldXJpc3RpYykgPT4ge1xuICAgIHJldHVybiAoc3RhdGUsIGNvc3QgPSAwLCBzZXF1ZW5jZSA9IFtdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICAgIGhhc2g6IGNhbm9uaWNhbChzdGF0ZSksXG4gICAgICAgICAgICBjb3N0LFxuICAgICAgICAgICAgZXN0aW1hdGU6IGNvc3QgKyBoZXVyaXN0aWMoc3RhdGUpLFxuICAgICAgICAgICAgc2VxdWVuY2VcbiAgICAgICAgfTtcbiAgICB9O1xufVxuXG5jb25zdCBpbnNlcnQgPSAoZnJvbnRpZXIsIG5vZGUpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGZyb250aWVyLmluZGV4W25vZGUuaGFzaF07XG4gICAgaWYoaW5kZXggIT0gbnVsbCl7XG4gICAgICAgIGlmKGZyb250aWVyLnF1ZXVlW2luZGV4XS5jb3N0ID4gbm9kZS5jb3N0KXtcbiAgICAgICAgICAgIGZyb250aWVyLnF1ZXVlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB1cGRhdGVJbmRleChmcm9udGllciwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgaWR4ID0gMDtcbiAgICB3aGlsZShpZHggPCBmcm9udGllci5xdWV1ZS5sZW5ndGggJiYgZnJvbnRpZXIucXVldWVbaWR4XS5lc3RpbWF0ZSA8PSBub2RlLmVzdGltYXRlKVxuICAgICAgICBpZHgrKztcblxuICAgIGZyb250aWVyLmluZGV4W25vZGUuaGFzaF0gPSBpZHg7XG4gICAgaWYoaWR4ID09PSBmcm9udGllci5xdWV1ZS5sZW5ndGgpXG4gICAgICAgIGZyb250aWVyLnF1ZXVlID0gWy4uLmZyb250aWVyLnF1ZXVlLCBub2RlXTtcbiAgICBlbHNlXG4gICAgICAgIGZyb250aWVyLnF1ZXVlLnNwbGljZShpZHgsIDAsIG5vZGUpO1xuXG4gICAgdXBkYXRlSW5kZXgoZnJvbnRpZXIsIGlkeCArIDEpO1xufVxuXG5jb25zdCBwb3AgPSBmcm9udGllciA9PiB7XG4gICAgaWYoIWZyb250aWVyLnF1ZXVlLmxlbmd0aClcbiAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBbbm9kZSwgLi4udGFpbF0gPSBmcm9udGllci5xdWV1ZTtcbiAgICBkZWxldGUgZnJvbnRpZXIuaW5kZXhbbm9kZS5oYXNoXTtcbiAgICBmcm9udGllci5xdWV1ZSA9IHRhaWw7XG5cbiAgICB1cGRhdGVJbmRleChmcm9udGllcik7XG5cbiAgICByZXR1cm4gbm9kZTtcbn1cblxuY29uc3QgdXBkYXRlSW5kZXggPSAoZnJvbnRpZXIsIGluZGV4ID0gMCwgY291bnQgPSBudWxsKSA9PiB7XG4gICAgY291bnQgPSBjb3VudCB8fCBmcm9udGllci5xdWV1ZS5sZW5ndGg7XG4gICAgZm9yKDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKylcbiAgICAgICAgZnJvbnRpZXIuaW5kZXhbZnJvbnRpZXIucXVldWVbaW5kZXhdLmhhc2hdID0gaW5kZXg7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2VhcmNoL2FTdGFyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgQ0FSUlkgPSBTeW1ib2woJ2NhcnJ5Jyk7XG5leHBvcnQgY29uc3QgR09UTyA9IFN5bWJvbCgnZ290bycpO1xuXG5leHBvcnQgY29uc3QgZmFjdG9yeSA9ICh0eXBlLCBkYXRhID0ge30pID0+IE9iamVjdC5hc3NpZ24oeyB0eXBlIH0sIGRhdGEpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ29hbHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IHBvc2l0aW9uU3RyaW5nIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgQW50IGZyb20gJy4vQW50LmpzJztcbmltcG9ydCBIb2xlIGZyb20gJy4vSG9sZS5qcyc7XG5pbXBvcnQgTGVhZiBmcm9tICcuL0xlYWYuanMnO1xuaW1wb3J0IFJvY2sgZnJvbSAnLi9Sb2NrLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbnZpcm9ubWVudCwgZWxlbWVudCwgY29uZmlnID0ge30pe1xuICAgICAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG5cbiAgICAgICAgdGhpcy5jYW52YXMgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lUmVxID0gbnVsbDtcblxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBldmVudCA9PiB0aGlzLl9oYW5kbGVNb3VzZU1vdmUoZXZlbnQpKTtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB0aGlzLl9oYW5kbGVDbGljayhldmVudCkpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uU2VsZWN0aW9uQ2FsbGJhY2tzID0gW107XG4gICAgICAgIHRoaXMubW91c2VQb3NpdGlvbiA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHVuaXRTaXplUHg6IG51bGwsXG4gICAgICAgICAgICB1bml0U3Ryb2tlUHg6IDIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjOTQ3MDY0JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRTdHJva2VDb2xvcjogJyM4MzYwNTMnLFxuICAgICAgICAgICAgYW50Q29sb3I6ICcjQ0Q1MTFEJyxcbiAgICAgICAgICAgIGxlYWZDb2xvcjogJyM4MEZGMDAnLFxuICAgICAgICAgICAgbGVhZlN0ZW1Db2xvcjogJyM2MEREMDAnLFxuICAgICAgICAgICAgdW5vYnNlcnZlZENvbG9yOiAncmdiYSgwLCAwLCAwLCAuNSknLFxuICAgICAgICAgICAgaG9sZUNvbG9yOiAnIzQ0NCcsXG4gICAgICAgICAgICBob2xlQm9yZGVyQ29sb3I6ICcjNzI1MDQyJyxcbiAgICAgICAgICAgIGhpZ2hsaWdodENvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAuNSknLFxuICAgICAgICAgICAgcm9ja0NvbG9yOiAnI0IyQUE5RidcbiAgICAgICAgfSwgY29uZmlnKTtcblxuICAgICAgICBpZih0aGlzLmNvbmZpZy51bml0U2l6ZVB4ID09PSBudWxsKVxuICAgICAgICAgICAgdGhpcy5jb25maWcudW5pdFNpemVQeCA9IHRoaXMuY2FudmFzLndpZHRoIC8gdGhpcy5lbnZpcm9ubWVudC53aWR0aCgpO1xuICAgIH1cblxuICAgIHVwKCl7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25GcmFtZVJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmcmFtZSk7XG4gICAgICAgICAgICB0aGlzLl9kcmF3KCk7XG4gICAgICAgIH07XG4gICAgICAgIGZyYW1lKCk7XG4gICAgfVxuXG4gICAgX2RyYXcoKXtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gJyMyMjInO1xuXG4gICAgICAgIHRoaXMuX2RyYXdCYWNrZ3JvdW5kKHRoaXMuZW52aXJvbm1lbnQpO1xuICAgICAgICB0aGlzLl9kcmF3T2JqZWN0cyh0aGlzLmVudmlyb25tZW50Lm9iamVjdHMoKSk7XG4gICAgICAgIHRoaXMuX2RyYXdPYnNlcnZlZEFyZWEodGhpcy5lbnZpcm9ubWVudC5hZ2VudHMoKSk7XG4gICAgICAgIHRoaXMuX2RyYXdNb3VzZUhpZ2hsaWdodCgpO1xuICAgIH1cblxuICAgIF9kcmF3QmFja2dyb3VuZChlbnZpcm9ubWVudCl7XG4gICAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XG5cbiAgICAgICAgY29uc3QgdW5pdFNpemVQeCA9IHRoaXMuY29uZmlnLnVuaXRTaXplUHg7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gZW52aXJvbm1lbnQud2lkdGgoKTtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gZW52aXJvbm1lbnQuaGVpZ2h0KCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGggKiB1bml0U2l6ZVB4LCBoZWlnaHQgKiB1bml0U2l6ZVB4KTtcblxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb25maWcuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbmZpZy5iYWNrZ3JvdW5kU3Ryb2tlQ29sb3I7XG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSB0aGlzLmNvbmZpZy51bml0U3Ryb2tlUHg7XG5cbiAgICAgICAgdGhpcy5faXRlcmF0ZVBvc2l0aW9ucygoeCwgeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXJncyA9IFsuLi50aGlzLl9nZXRQaXhlbFBvc2l0aW9uKHgsIHkpLCB1bml0U2l6ZVB4LCB1bml0U2l6ZVB4XTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCguLi5hcmdzKTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VSZWN0KC4uLmFyZ3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIF9pdGVyYXRlUG9zaXRpb25zKGNhbGxiYWNrKXtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmVudmlyb25tZW50LndpZHRoKCk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZW52aXJvbm1lbnQuaGVpZ2h0KCk7XG4gICAgICAgIGZvcihsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKylcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIHgsIHkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2dldFBpeGVsUG9zaXRpb24oLi4ucG9zaXRpb24pe1xuICAgICAgICByZXR1cm4gcG9zaXRpb24ubWFwKHZhbHVlID0+IHZhbHVlICogdGhpcy5jb25maWcudW5pdFNpemVQeCk7XG4gICAgfVxuXG4gICAgX2RyYXdPYmplY3RzKG9iamVjdHMpe1xuICAgICAgICBvYmplY3RzLm1hcChvYmplY3QgPT4gKHtvYmplY3QsIHpJbmRleDogdGhpcy5fZ2V0WkluZGV4Rm9yKG9iamVjdCl9KSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnpJbmRleCAtIGIuekluZGV4KVxuICAgICAgICAgICAgLm1hcChvYmogPT4gb2JqLm9iamVjdClcbiAgICAgICAgICAgIC5mb3JFYWNoKG9iamVjdCA9PiB0aGlzLl9kcmF3T2JqZWN0KG9iamVjdCkpO1xuICAgIH1cblxuICAgIF9nZXRaSW5kZXhGb3Iob2JqZWN0KXtcbiAgICAgICAgc3dpdGNoKHRydWUpe1xuICAgICAgICAgICAgY2FzZSBvYmplY3QgaW5zdGFuY2VvZiBBbnQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgICAgICBjYXNlIG9iamVjdCBpbnN0YW5jZW9mIExlYWY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2RyYXdPYmplY3Qob2JqZWN0KXtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBvYmplY3QuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgY29uc3QgcGl4ZWxQb3NpdGlvbiA9IHRoaXMuX2dldFBpeGVsUG9zaXRpb24oLi4ucG9zaXRpb24pO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUoLi4ucGl4ZWxQb3NpdGlvbik7XG5cbiAgICAgICAgaWYob2JqZWN0LmJlaW5nQ2FycmllZCgpKXtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUodGhpcy5jb25maWcudW5pdFNpemVQeCAqIC42NiwgMCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc2NhbGUoLjMzLCAuMzMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZHJhd1NwZWNpZmljT2JqZWN0KG9iamVjdCk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBfZHJhd1NwZWNpZmljT2JqZWN0KG9iamVjdCl7XG4gICAgICAgIHN3aXRjaCh0cnVlKXtcbiAgICAgICAgICAgIGNhc2Ugb2JqZWN0IGluc3RhbmNlb2YgQW50OlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kcmF3QW50KG9iamVjdCk7XG4gICAgICAgICAgICBjYXNlIG9iamVjdCBpbnN0YW5jZW9mIEhvbGU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdIb2xlKG9iamVjdCk7XG4gICAgICAgICAgICBjYXNlIG9iamVjdCBpbnN0YW5jZW9mIExlYWY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdMZWFmKG9iamVjdCk7XG4gICAgICAgICAgICBjYXNlIG9iamVjdCBpbnN0YW5jZW9mIFJvY2s6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdSb2NrKG9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZHJhd0FudChhbnQpe1xuICAgICAgICBjb25zdCBoYWxmVW5pdCA9IHRoaXMuY29uZmlnLnVuaXRTaXplUHggLyAyO1xuICAgICAgICBjb25zdCByYWRpdXMgPSBoYWxmVW5pdCAqIC4zMDtcbiAgICAgICAgY29uc3QgZGV2aWF0aW9uID0gcmFkaXVzICogTWF0aC5zcXJ0KDIpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuY29uZmlnLmFudENvbG9yO1xuICAgICAgICBjb25zdCBsZWdTaXplID0gaGFsZlVuaXQgKiAuNjY7XG4gICAgICAgIGNvbnN0IGRlZ3JlZSA9IE1hdGguUEkgLyAxODA7XG4gICAgICAgIGZvcihsZXQgbGVuID0gMzsgbGVuLS07KXtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUoaGFsZlVuaXQsIGhhbGZVbml0KTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5yb3RhdGUoLWRlZ3JlZSAqIChsZW4gKiAzNSArIDEwKSk7XG5cbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8oLWxlZ1NpemUsIDApO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyhsZWdTaXplLCAwKTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcblxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgeCA9IC0xOyB4IDw9IDE7IHgrKyl7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSBoYWxmVW5pdCArIGRldmlhdGlvbiAqIHg7XG4gICAgICAgICAgICB0aGlzLl9kcmF3Q2lyY2xlKHBvcywgcG9zLCByYWRpdXMsIHRoaXMuY29uZmlnLmFudENvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9kcmF3SG9sZShob2xlKXtcbiAgICAgICAgY29uc3QgaGFsZlVuaXQgPSB0aGlzLmNvbmZpZy51bml0U2l6ZVB4IC8gMjtcblxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5hcmMoaGFsZlVuaXQsIGhhbGZVbml0LCBoYWxmVW5pdCAvIDEuOCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xpcCgpO1xuXG4gICAgICAgIHRoaXMuX2RyYXdDaXJjbGUoaGFsZlVuaXQsIGhhbGZVbml0LCBoYWxmVW5pdCAvIDEuOCwgdGhpcy5jb25maWcuaG9sZUJvcmRlckNvbG9yKTtcbiAgICAgICAgY29uc3QgZGV2aWF0aW9uID0gNDtcbiAgICAgICAgdGhpcy5fZHJhd0NpcmNsZShoYWxmVW5pdCArIGRldmlhdGlvbiwgaGFsZlVuaXQgKyBkZXZpYXRpb24sIGhhbGZVbml0IC8gMS44LCB0aGlzLmNvbmZpZy5ob2xlQ29sb3IpO1xuICAgIH1cblxuICAgIF9kcmF3TGVhZihsZWFmKXtcbiAgICAgICAgY29uc3QgaGFsZlVuaXQgPSB0aGlzLmNvbmZpZy51bml0U2l6ZVB4IC8gMjtcbiAgICAgICAgY29uc3QgY2lyY2xlUmFkaXVzID0gaGFsZlVuaXQgLyAyO1xuICAgICAgICBjb25zdCBsZWFmSGFsZldpZHRoID0gY2lyY2xlUmFkaXVzICogLjg7XG4gICAgICAgIGNvbnN0IGxlYWZIYWxmSGVpZ2h0ID0gTWF0aC5zcXJ0KE1hdGgucG93KGNpcmNsZVJhZGl1cywgMikgLSBNYXRoLnBvdyhjaXJjbGVSYWRpdXMgLSBsZWFmSGFsZldpZHRoLCAyKSk7XG5cbiAgICAgICAgZm9yKGxldCBsZW4gPSAyOyBsZW4tLTspe1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcblxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnJlY3QoaGFsZlVuaXQgLSBsZWFmSGFsZldpZHRoICogbGVuLCBoYWxmVW5pdCAtIGxlYWZIYWxmSGVpZ2h0LCBsZWFmSGFsZldpZHRoLCBsZWFmSGFsZkhlaWdodCAqIDIpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmNsaXAoKTtcblxuICAgICAgICAgICAgY29uc3QgeCA9IChjaXJjbGVSYWRpdXMgLSBsZWFmSGFsZldpZHRoKSAqIFstMSwgMV1bbGVuXTtcbiAgICAgICAgICAgIHRoaXMuX2RyYXdDaXJjbGUoaGFsZlVuaXQgKyB4LCBoYWxmVW5pdCwgY2lyY2xlUmFkaXVzLCB0aGlzLmNvbmZpZy5sZWFmQ29sb3IpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5jb25maWcubGVhZlN0ZW1Db2xvcjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQubW92ZVRvKGhhbGZVbml0LCBoYWxmVW5pdCAtIGxlYWZIYWxmSGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyhoYWxmVW5pdCwgaGFsZlVuaXQgKyBsZWFmSGFsZkhlaWdodCAqIDEuNCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBfZHJhd1JvY2socm9jayl7XG4gICAgICAgIGNvbnN0IGhhbGZVbml0ID0gdGhpcy5jb25maWcudW5pdFNpemVQeCAvIDI7XG5cbiAgICAgICAgY29uc3QgcGF0aCA9IG5ldyBQYXRoMkQoKTtcbiAgICAgICAgcGF0aC5tb3ZlVG8oaGFsZlVuaXQsIGhhbGZVbml0ICogLjUpO1xuICAgICAgICBwYXRoLmxpbmVUbyhoYWxmVW5pdCAqIDEuNywgaGFsZlVuaXQgKiAuOSk7XG4gICAgICAgIHBhdGgubGluZVRvKGhhbGZVbml0ICogMS41LCBoYWxmVW5pdCAqIDEuNSk7XG4gICAgICAgIHBhdGgubGluZVRvKGhhbGZVbml0ICogLjgsIGhhbGZVbml0ICogMS43KTtcbiAgICAgICAgcGF0aC5saW5lVG8oaGFsZlVuaXQgKiAuNCwgaGFsZlVuaXQgKiAuOCk7XG4gICAgICAgIHBhdGguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuY29uZmlnLnJvY2tDb2xvcjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwocGF0aCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UocGF0aCk7XG4gICAgfVxuXG4gICAgX2RyYXdDaXJjbGUoeCwgeSwgcmFkaXVzLCBjb2xvcil7XG4gICAgICAgIGNvbnN0IHBhdGggPSBuZXcgUGF0aDJEKCk7XG4gICAgICAgIHBhdGguYXJjKHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKHBhdGgpO1xuICAgIH1cblxuICAgIF9kcmF3T2JzZXJ2ZWRBcmVhKGFnZW50cyl7XG4gICAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZWRQb3NpdGlvbnMgPSBhZ2VudHMucmVkdWNlKChjYXJyeSwgYWdlbnQpID0+IHRoaXMuX2FkZE9ic2VydmVkUG9zaXRpb25zRnJvbUFnZW50KGNhcnJ5LCBhZ2VudCksIHt9KTtcblxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb25maWcudW5vYnNlcnZlZENvbG9yO1xuICAgICAgICB0aGlzLl9pdGVyYXRlUG9zaXRpb25zKCh4LCB5KSA9PiB0aGlzLl9kcmF3VW5vYnNlcnZlZFNxdWFyZXMob2JzZXJ2ZWRQb3NpdGlvbnMsIHgsIHkpKTtcblxuICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIF9hZGRPYnNlcnZlZFBvc2l0aW9uc0Zyb21BZ2VudChvYmosIGFnZW50KXtcbiAgICAgICAgY29uc3QgcG9zaXRpb25zID0gdGhpcy5lbnZpcm9ubWVudC5nZXRWaWV3UG9zaXRpb25zRm9yKGFnZW50KTtcbiAgICAgICAgcG9zaXRpb25zLmZvckVhY2goYXJyID0+IG9ialtwb3NpdGlvblN0cmluZyguLi5hcnIpXSA9IHRydWUpO1xuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgX2RyYXdVbm9ic2VydmVkU3F1YXJlcyhvYnNlcnZlZFBvc2l0aW9ucywgeCwgeSl7XG4gICAgICAgIGNvbnN0IGtleSA9IHBvc2l0aW9uU3RyaW5nKHgsIHkpO1xuICAgICAgICBpZihvYnNlcnZlZFBvc2l0aW9uc1trZXldKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHBpeGVscyA9IHRoaXMuX2dldFBpeGVsUG9zaXRpb24oeCwgeSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCguLi5waXhlbHMsIHRoaXMuY29uZmlnLnVuaXRTaXplUHgsIHRoaXMuY29uZmlnLnVuaXRTaXplUHgpO1xuICAgfVxuXG4gICAgX2RyYXdNb3VzZUhpZ2hsaWdodCgpe1xuICAgICAgICBpZih0aGlzLm1vdXNlUG9zaXRpb24gPT09IG51bGwgfHwgdGhpcy5wb3NpdGlvblNlbGVjdGlvbkNhbGxiYWNrcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcblxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuX2dldEhpZ2hsaWdodFBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IHBpeGVscyA9IHRoaXMuX2dldFBpeGVsUG9zaXRpb24oLi4ucG9zaXRpb24pO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb25maWcuaGlnaGxpZ2h0Q29sb3I7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCguLi5waXhlbHMsIHRoaXMuY29uZmlnLnVuaXRTaXplUHgsIHRoaXMuY29uZmlnLnVuaXRTaXplUHgpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgX2dldEhpZ2hsaWdodFBvc2l0aW9uKCl7XG4gICAgICAgIGlmKHRoaXMubW91c2VQb3NpdGlvbiA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50UmVjdHMoKVswXTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0cyA9IFt4LCB5XTtcbiAgICAgICAgcmV0dXJuIHRoaXMubW91c2VQb3NpdGlvbi5tYXAoKG51bSwgaW5kZXgpID0+IE1hdGguZmxvb3IoKG51bSAtIG9mZnNldHNbaW5kZXhdKSAvIHRoaXMuY29uZmlnLnVuaXRTaXplUHgpKTtcbiAgICB9XG5cbiAgICBuZXh0UG9zaXRpb25TZWxlY3Rpb24oY2FsbGJhY2spe1xuICAgICAgICB0aGlzLnBvc2l0aW9uU2VsZWN0aW9uQ2FsbGJhY2tzID0gWy4uLnRoaXMucG9zaXRpb25TZWxlY3Rpb25DYWxsYmFja3MsIGNhbGxiYWNrXTtcbiAgICB9XG5cbiAgICBfaGFuZGxlTW91c2VNb3ZlKGV2ZW50KXtcbiAgICAgICAgdGhpcy5tb3VzZVBvc2l0aW9uID0gW2V2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFldO1xuICAgIH1cblxuICAgIF9oYW5kbGVDbGljayhldmVudCl7XG4gICAgICAgIGNvbnN0IGhpZ2hsaWdodCA9IHRoaXMuX2dldEhpZ2hsaWdodFBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMucG9zaXRpb25TZWxlY3Rpb25DYWxsYmFja3M7XG4gICAgICAgIHRoaXMucG9zaXRpb25TZWxlY3Rpb25DYWxsYmFja3MgPSBbXTtcbiAgICAgICAgY2FsbGJhY2tzLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soLi4uaGlnaGxpZ2h0KSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvUmVuZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9