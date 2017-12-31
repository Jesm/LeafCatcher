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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Thing_js__ = __webpack_require__(2);


class Leaf extends __WEBPACK_IMPORTED_MODULE_0__Thing_js__["a" /* default */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Leaf;
;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Thing_js__ = __webpack_require__(2);


class Hole extends __WEBPACK_IMPORTED_MODULE_0__Thing_js__["a" /* default */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Hole;
;


/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_aStar__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Thing_js__ = __webpack_require__(2);





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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__goals__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Agent_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Leaf_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Hole_js__ = __webpack_require__(1);








const containsObj = (square, objectClass) => square.objects.some(obj => obj instanceof objectClass);
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
        if(square && containsObj(square, __WEBPACK_IMPORTED_MODULE_6__Hole_js__["a" /* default */]))
            return Object(__WEBPACK_IMPORTED_MODULE_1__goals__["c" /* factory */])(__WEBPACK_IMPORTED_MODULE_1__goals__["a" /* CARRY */], { carry: false });
    }

    _shouldCatch(state){
        if(state.carries)
            return;

        const square = state.world[Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* positionString */])(...state.position)];
        if(square && containsObj(square, __WEBPACK_IMPORTED_MODULE_5__Leaf_js__["a" /* default */]))
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
            .filter(square => !containsObj(square, Ant));
        const closest = this._closestSquare(state.position, squares);
        if(closest)
            return Object(__WEBPACK_IMPORTED_MODULE_1__goals__["c" /* factory */])(__WEBPACK_IMPORTED_MODULE_1__goals__["b" /* GOTO */], { position: closest.value });
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
                return !!(square && !containsObj(square, Ant));
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_js__ = __webpack_require__(9);


(doc => {
    const app = new __WEBPACK_IMPORTED_MODULE_0__App_js__["a" /* default */](doc.body);
})(document);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Environment_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Agent_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Ant_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Hole_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Leaf_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Render_js__ = __webpack_require__(14);







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

        this.buttons = [__WEBPACK_IMPORTED_MODULE_2__Ant_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__Hole_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__Leaf_js__["a" /* default */]].map(objectClass => {
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
            if(this.environment.add(object, ...position) && object instanceof __WEBPACK_IMPORTED_MODULE_1__Agent_js__["a" /* default */])
                object.up();

            this.buttons.forEach(button => button.disabled = false);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = App;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rules__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Agent_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Leaf_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Hole_js__ = __webpack_require__(1);








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
        const position = this._getAvailableRandomPosition();
        if(position)
            this.add(object, ...position);
    }

    _getAvailableRandomPosition(){
        const positions = Object.values(this.squares)
            .filter(pos => pos.objects.length === 0)
            .map(pos => pos.value);

        return positions.length ? positions[Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* randomNumber */])(positions.length)] : null;
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Thing_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Agent_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Ant_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Leaf_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Hole_js__ = __webpack_require__(1);






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
            (object, square) => square.objects.every(obj => obj.constructor !== object.constructor)
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
/* 12 */
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CARRY = Symbol('carry');
/* harmony export (immutable) */ __webpack_exports__["a"] = CARRY;

const GOTO = Symbol('goto');
/* harmony export (immutable) */ __webpack_exports__["b"] = GOTO;


const factory = (type, data = {}) => Object.assign({ type }, data);
/* harmony export (immutable) */ __webpack_exports__["c"] = factory;



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Ant_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Hole_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Leaf_js__ = __webpack_require__(0);





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTE0ZjdmZTY4MjdmODU2OWE2YjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xlYWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RoaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9BZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQW50LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcnVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlYXJjaC9hU3Rhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ29hbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlbmRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzdEQTs7QUFFQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ0ZBOztBQUVBO0FBQUE7QUFBQTs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ2lEO0FBQ2pCO0FBQ2hDOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTs7QUFFOUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDM0hBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUVBLDBDQUFpRCxxQkFBcUI7QUFBQTtBQUFBO0FBQ3RFO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBRUEsMEJBQWlDLG9CQUFvQjtBQUFBO0FBQUE7QUFDckQ7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQ3dFO0FBQzdCO0FBQzNDO0FBQ3VDO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsVUFBVSw0QkFBNEI7O0FBRXpFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixXQUFXO0FBQzlCLG1DQUFtQyxVQUFVLFdBQVc7QUFDeEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFlBQVk7QUFDL0Q7QUFDQSxhQUFhLElBQUk7O0FBRWpCLDBDQUEwQztBQUMxQyxtQ0FBbUMsVUFBVSxRQUFRO0FBQ3JEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxVQUFVLDZCQUE2Qjs7QUFFMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLFVBQVUsZ0JBQWdCOztBQUU3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMklBQW9DLGVBQWU7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwySUFBb0MsY0FBYztBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMElBQW1DLDBCQUEwQjtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSUFBbUMsMEJBQTBCO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNEQUFzRCxxREFBcUQ7QUFDM0c7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMElBQW1DLDBCQUEwQjtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQiwrQ0FBK0M7QUFDbEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBLFNBQVMsSUFBSTs7QUFFYjtBQUNBLDBCQUEwQixvREFBb0Q7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBJQUFtQyxpQ0FBaUM7QUFDcEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsb0JBQW9COztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxREFBcUQ7O0FBRXBFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FDdlFBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ0pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ3RFdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTztBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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O0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFdBQVc7QUFDakMsMEJBQTBCLFlBQVk7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQywyQ0FBMkM7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsT0FBTztBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1SEFBdUg7O0FBRXZIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTE0ZjdmZTY4MjdmODU2OWE2YjMiLCJpbXBvcnQgVGhpbmcgZnJvbSAnLi9UaGluZy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlYWYgZXh0ZW5kcyBUaGluZyB7fTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0xlYWYuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFRoaW5nIGZyb20gJy4vVGhpbmcuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb2xlIGV4dGVuZHMgVGhpbmcge307XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Ib2xlLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRoaW5nIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYXJyaWVzID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYXJyaWVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgICB9XG5cbiAgICBzZXRQb3NpdGlvbiguLi5hcnIpe1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gYXJyO1xuICAgIH1cblxuICAgIHNldENhcnJpZWRPYmplY3Qob2JqZWN0KXtcbiAgICAgICAgdGhpcy5jYXJyaWVzID0gb2JqZWN0O1xuICAgIH1cblxuICAgIHNldENhcnJpZXJPYmplY3Qob2JqZWN0KXtcbiAgICAgICAgdGhpcy5jYXJyaWVyID0gb2JqZWN0O1xuICAgIH1cblxuICAgIGdldENhcnJpZWRPYmplY3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FycmllcztcbiAgICB9XG5cbiAgICBnZXRDYXJyaWVyT2JqZWN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcnJpZXI7XG4gICAgfVxuXG4gICAgY2Fycmllc1NvbWV0aGluZygpe1xuICAgICAgICByZXR1cm4gISF0aGlzLmNhcnJpZXM7XG4gICAgfVxuXG4gICAgYmVpbmdDYXJyaWVkKCl7XG4gICAgICAgIHJldHVybiAhIXRoaXMuY2FycmllcjtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9UaGluZy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgc2VhcmNoIGZyb20gJy4vc2VhcmNoL2FTdGFyJztcbmltcG9ydCB7IHR5cGVJcywgQUNUSU9OX0ZBSUxFRCwgQUNUSU9OX0NPTVBMRVRFIH0gZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0IHsgZmFjdG9yeSBhcyBtYWtlQWN0aW9uIH0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCBUaGluZyBmcm9tICcuL1RoaW5nLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWdlbnQgZXh0ZW5kcyBUaGluZyB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge30pe1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLl9nZXRJbml0aWFsU3RhdGUoKTtcbiAgICAgICAgdGhpcy5ldmVudFF1ZXVlID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudEdvYWwgPSBudWxsO1xuICAgICAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZSA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSBudWxsO1xuXG4gICAgICAgIHRoaXMuaW50ZXJ2YWxSZWYgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICByZWFzb25pbmdJbnRlcnZhbDogMTAwXG4gICAgICAgIH0sIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgX2dldEluaXRpYWxTdGF0ZSgpe1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgcGVyY2VpdmUoZXZlbnQpe1xuICAgICAgICB0aGlzLmV2ZW50UXVldWUgPSBbLi4udGhpcy5ldmVudFF1ZXVlLCBldmVudF07XG4gICAgfVxuXG4gICAgYWN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRBY3Rpb247XG4gICAgfVxuXG4gICAgdXAoKXtcbiAgICAgICAgdGhpcy5pbnRlcnZhbFJlZiA9IHNldEludGVydmFsKCgpID0+IHRoaXMuX3JlYXNvbigpLCB0aGlzLmNvbmZpZy5yZWFzb25pbmdJbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuX3JlYXNvbigpO1xuICAgIH1cblxuICAgIF9yZWFzb24oKXtcbiAgICAgICAgdGhpcy5fYmVmb3JlUmVhc29uaW5nKCk7XG5cbiAgICAgICAgY29uc3QgcGVyY2VwdHMgPSB0aGlzLmV2ZW50UXVldWU7XG4gICAgICAgIHRoaXMuZXZlbnRRdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5fdXBkYXRlU3RhdGUodGhpcy5zdGF0ZSwgcGVyY2VwdHMpO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSBiZXR0ZXIgZ29hbCB0byBwdXJzdWUgdGhhbiB0aGUgY3VycmVudCBvbmVcbiAgICAgICAgY29uc3QgZ29hbEluZGV4ID0gdGhpcy5jdXJyZW50R29hbCA/IHRoaXMuY3VycmVudEdvYWwuaW5kZXggOiBudWxsO1xuICAgICAgICBjb25zdCBnb2FsID0gdGhpcy5fZm9ybXVsYXRlR29hbCh0aGlzLnN0YXRlLCBnb2FsSW5kZXgpO1xuICAgICAgICBpZihnb2FsICE9PSBudWxsKXtcbiAgICAgICAgICAgIGNvbnN0IHByb2JsZW0gPSB0aGlzLl9mb3JtdWxhdGVQcm9ibGVtKHRoaXMuc3RhdGUsIGdvYWwpO1xuICAgICAgICAgICAgY29uc3Qgc2VxdWVuY2UgPSBwcm9ibGVtICYmIHNlYXJjaChwcm9ibGVtKTtcbiAgICAgICAgICAgIGlmKHNlcXVlbmNlKXtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRHb2FsID0gZ29hbDtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZSA9IHNlcXVlbmNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmN1cnJlbnRBY3Rpb24gPT09IG51bGwgJiYgdGhpcy5jdXJyZW50U2VxdWVuY2UubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBjb25zdCBbdHlwZSwgLi4udGFpbF0gPSB0aGlzLmN1cnJlbnRTZXF1ZW5jZTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNlcXVlbmNlID0gdGFpbDtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IG1ha2VBY3Rpb24odHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfYmVmb3JlUmVhc29uaW5nKCl7fVxuXG4gICAgX3VwZGF0ZVN0YXRlKHN0YXRlLCBldmVudHMpe1xuICAgICAgICBjb25zdCByZWR1Y2VycyA9IFt0aGlzLl92ZXJpZnlDdXJyZW50QWN0aW9uU3RhdHVzLCAuLi50aGlzLl9nZXRTdGF0ZVJlZHVjZXJzKCldO1xuXG4gICAgICAgIHJldHVybiBldmVudHMucmVkdWNlKChzdGF0ZSwgZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZWR1Y2Vycy5yZWR1Y2UoKHN0YXRlLCByZWR1Y2VyKSA9PiByZWR1Y2VyLmNhbGwodGhpcywgc3RhdGUsIGV2ZW50KSwgc3RhdGUpO1xuICAgICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgX3ZlcmlmeUN1cnJlbnRBY3Rpb25TdGF0dXMoc3RhdGUsIGV2ZW50KXtcbiAgICAgICAgaWYoZXZlbnQuZGF0YSA9PT0gdGhpcy5jdXJyZW50QWN0aW9uKXtcbiAgICAgICAgICAgIHN3aXRjaChldmVudC50eXBlKXtcbiAgICAgICAgICAgICAgICBjYXNlIEFDVElPTl9GQUlMRUQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEdvYWwgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQUNUSU9OX0NPTVBMRVRFOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmN1cnJlbnRTZXF1ZW5jZS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRHb2FsID0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICBfZ2V0U3RhdGVSZWR1Y2Vycygpe1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgX2Zvcm11bGF0ZUdvYWwoc3RhdGUsIG1heEluZGV4ID0gbnVsbCl7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGNvbnN0IGNoYWluID0gdGhpcy5fZ2V0R29hbEV2YWx1YXRpb25DaGFpbigpO1xuICAgICAgICBmb3IobGV0IGZ1biBvZiBjaGFpbil7XG4gICAgICAgICAgICBpZihtYXhJbmRleCAhPT0gbnVsbCAmJiBpbmRleCA+PSBtYXhJbmRleClcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgY29uc3QgZ29hbCA9IGZ1bi5jYWxsKHRoaXMsIHN0YXRlKTtcbiAgICAgICAgICAgIGlmKGdvYWwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyBpbmRleCB9LCBnb2FsKTtcblxuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIF9nZXRHb2FsRXZhbHVhdGlvbkNoYWluKCl7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBfZm9ybXVsYXRlUHJvYmxlbShzdGF0ZSwgZ29hbCl7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0FnZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBwb3NpdGlvblN0cmluZyA9ICguLi5hcnIpID0+IGFyci5qb2luKCcgJyk7XG5leHBvcnQgY29uc3QgcmFuZG9tTnVtYmVyID0gbnVtYmVyID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG51bWJlcik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy91dGlscy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgQUNUSU9OX0NPTVBMRVRFID0gU3ltYm9sKCdhY3Rpb25fY29tcGxldGUnKTtcbmV4cG9ydCBjb25zdCBBQ1RJT05fRkFJTEVEID0gU3ltYm9sKCdhY3Rpb25fZmFpbGVkJyk7XG5leHBvcnQgY29uc3QgQUNUSU9OX1BST0dSRVNTRUQgPSBTeW1ib2woJ2FjdGlvbl9wcm9ncmVzc2VkJyk7XG5leHBvcnQgY29uc3QgVklFVyA9IFN5bWJvbCgndmlldycpO1xuZXhwb3J0IGNvbnN0IERJU1BMQUNFTUVOVCA9IFN5bWJvbCgnZGlzcGxhY2VtZW50Jyk7XG5leHBvcnQgY29uc3QgQ0FUQ0ggPSBTeW1ib2woJ2NhdGNoJyk7XG5leHBvcnQgY29uc3QgRFJPUCA9IFN5bWJvbCgnZHJvcCcpO1xuXG5leHBvcnQgY29uc3QgZmFjdG9yeSA9ICh0eXBlLCBzZW5kZXIsIGRhdGEpID0+ICh7IHR5cGUsIHNlbmRlciwgZGF0YSB9KTtcbmV4cG9ydCBjb25zdCB0eXBlSXMgPSAoZXZlbnQsIC4uLnR5cGVzKSA9PiB0eXBlcy5pbmNsdWRlcyhldmVudC50eXBlKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2V2ZW50cy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgVVAgPSBTeW1ib2woJ3VwJyk7XG5leHBvcnQgY29uc3QgUklHSFQgPSBTeW1ib2woJ3JpZ2h0Jyk7XG5leHBvcnQgY29uc3QgRE9XTiA9IFN5bWJvbCgnZG93bicpO1xuZXhwb3J0IGNvbnN0IExFRlQgPSBTeW1ib2woJ2xlZnQnKTtcbmV4cG9ydCBjb25zdCBDQVRDSCA9IFN5bWJvbCgnY2F0Y2gnKTtcbmV4cG9ydCBjb25zdCBEUk9QID0gU3ltYm9sKCdkcm9wJyk7XG5leHBvcnQgY29uc3QgT0JTRVJWRSA9IFN5bWJvbCgnb2JzZXJ2ZScpO1xuXG5jb25zdCBjb3N0cyA9IHtcbiAgICBbVVBdOiAxLFxuICAgIFtET1dOXTogMSxcbiAgICBbTEVGVF06IDEsXG4gICAgW1JJR0hUXTogMSxcbiAgICBbT0JTRVJWRV06IDEsXG4gICAgW0RST1BdOiAyLFxuICAgIFtDQVRDSF06IDNcbn07XG5leHBvcnQgY29uc3QgY29zdCA9IHR5cGUgPT4gY29zdHNbdHlwZV07XG5cbmNvbnN0IHBvc2l0aW9uVHJhbnNmb3JtYXRpb25zID0ge1xuICAgIFtVUF06IFswLCAtMV0sXG4gICAgW0RPV05dOiBbMCwgMV0sXG4gICAgW1JJR0hUXTogWzEsIDBdLFxuICAgIFtMRUZUXTogWy0xLCAwXVxufTtcblxuZXhwb3J0IGNvbnN0IGFwcGx5QWN0aW9uVG9Qb3NpdGlvbiA9ICh0eXBlLCBwb3NpdGlvbikgPT4gcG9zaXRpb25UcmFuc2Zvcm1hdGlvbnNbdHlwZV1cbiAgICAubWFwKChudW0sIGluZGV4KSA9PiBudW0gKyBwb3NpdGlvbltpbmRleF0pO1xuXG5leHBvcnQgY29uc3QgZmFjdG9yeSA9IHR5cGUgPT4gKHsgdHlwZSwgcHJvZ3Jlc3M6IDAgfSk7XG5leHBvcnQgY29uc3QgaW5jcmVhc2VQcm9ncmVzcyA9IGFjdGlvbiA9PiBhY3Rpb24ucHJvZ3Jlc3MrKztcbmV4cG9ydCBjb25zdCBpc0NvbXBsZXRlID0gYWN0aW9uID0+IGFjdGlvbi5wcm9ncmVzcyA9PT0gY29zdChhY3Rpb24udHlwZSk7XG5leHBvcnQgY29uc3QgdHlwZUlzID0gKGFjdGlvbiwgLi4udHlwZXMpID0+IHR5cGVzLmluY2x1ZGVzKGFjdGlvbi50eXBlKTtcbmV4cG9ydCBjb25zdCBpc01vdmVtZW50ID0gYWN0aW9uID0+IHR5cGVJcyhhY3Rpb24sIFVQLCBSSUdIVCwgRE9XTiwgTEVGVCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY3Rpb25zL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFZJRVcsIERJU1BMQUNFTUVOVCwgQ0FUQ0gsIERST1AsIGZhY3RvcnkgYXMgbWFrZUV2ZW50LCB0eXBlSXMgfSBmcm9tICcuL2V2ZW50cyc7XHJcbmltcG9ydCB7IENBUlJZLCBHT1RPLCBmYWN0b3J5IGFzIG1ha2VHb2FsIH0gZnJvbSAnLi9nb2Fscyc7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgcG9zaXRpb25TdHJpbmcsIHJhbmRvbU51bWJlciB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgQWdlbnQgZnJvbSAnLi9BZ2VudC5qcyc7XHJcbmltcG9ydCBMZWFmIGZyb20gJy4vTGVhZi5qcyc7XHJcbmltcG9ydCBIb2xlIGZyb20gJy4vSG9sZS5qcyc7XHJcblxyXG5jb25zdCBjb250YWluc09iaiA9IChzcXVhcmUsIG9iamVjdENsYXNzKSA9PiBzcXVhcmUub2JqZWN0cy5zb21lKG9iaiA9PiBvYmogaW5zdGFuY2VvZiBvYmplY3RDbGFzcyk7XHJcbmNvbnN0IGRpc3RhbmNlID0gKGZyb20sIHRvKSA9PiBNYXRoLnNxcnQoZnJvbS5yZWR1Y2UoKHN1bSwgdmFsdWUsIGluZGV4KSA9PiBzdW0gKyBNYXRoLnBvdyh2YWx1ZSAtIHRvW2luZGV4XSwgMiksIDApKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFudCBleHRlbmRzIEFnZW50IHtcclxuICAgIF9nZXRJbml0aWFsU3RhdGUoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlbnZpcm9ubWVudDogbnVsbCxcclxuICAgICAgICAgICAgcG9zaXRpb246IG51bGwsXHJcbiAgICAgICAgICAgIHdvcmxkOiB7fSxcclxuICAgICAgICAgICAgY2FycmllczogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfYmVmb3JlUmVhc29uaW5nKCl7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5lbnZpcm9ubWVudCA9PT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25zLmZhY3RvcnkoYWN0aW9ucy5PQlNFUlZFKTtcclxuICAgICAgICB0aGlzLnN0YXRlLmVudmlyb25tZW50LmV4ZWN1dGVBZ2VudFBhc3NpdmVBY3Rpb24odGhpcywgYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0U3RhdGVSZWR1Y2Vycygpe1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUVudmlyb25tZW50LFxyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVQb3NpdGlvbixcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlV29ybGQsXHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNhcnJpZWRPYmplY3QsXHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURyb3BwZWRPYmplY3RcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVFbnZpcm9ubWVudChzdGF0ZSwgZXZlbnQpe1xyXG4gICAgICAgIGlmKHR5cGVJcyhldmVudCwgRElTUExBQ0VNRU5UKSAmJiBzdGF0ZS5lbnZpcm9ubWVudCA9PT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGVudmlyb25tZW50OiBldmVudC5zZW5kZXIgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBfdXBkYXRlUG9zaXRpb24oc3RhdGUsIGV2ZW50KXtcclxuICAgICAgICBpZih0eXBlSXMoZXZlbnQsIERJU1BMQUNFTUVOVCkpe1xyXG4gICAgICAgICAgICBjb25zdCB7IHBvc2l0aW9uIH0gPSBldmVudC5kYXRhO1xyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgcG9zaXRpb24gfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgX3VwZGF0ZVdvcmxkKHN0YXRlLCBldmVudCl7XHJcbiAgICAgICAgaWYodHlwZUlzKGV2ZW50LCBWSUVXKSl7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBldmVudC5kYXRhO1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHZpZXcucmVkdWNlKChjYXJyeSwgc3F1YXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYXJyeVtzcXVhcmUua2V5XSA9IE9iamVjdC5hc3NpZ24oeyB0aW1lc3RhbXAgfSwgc3F1YXJlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYXJyeTtcclxuICAgICAgICAgICAgfSwge30pO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgd29ybGQgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS53b3JsZCwgaW5kZXgpO1xyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgd29ybGQgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgX3VwZGF0ZUNhcnJpZWRPYmplY3Qoc3RhdGUsIGV2ZW50KXtcclxuICAgICAgICBpZih0eXBlSXMoZXZlbnQsIENBVENIKSlcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcnJpZXM6IGV2ZW50LmRhdGEub2JqZWN0IH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgX3VwZGF0ZURyb3BwZWRPYmplY3Qoc3RhdGUsIGV2ZW50KXtcclxuICAgICAgICBpZih0eXBlSXMoZXZlbnQsIERST1ApICYmIGV2ZW50LmRhdGEub2JqZWN0ID09PSBzdGF0ZS5jYXJyaWVzKVxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgY2FycmllczogbnVsbCB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRHb2FsRXZhbHVhdGlvbkNoYWluKCl7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgdGhpcy5fc2hvdWxkRHJvcCxcclxuICAgICAgICAgICAgdGhpcy5fc2hvdWxkQ2F0Y2gsXHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3VsZE1vdmVUb3dhcmRzSG9sZSxcclxuICAgICAgICAgICAgdGhpcy5fc2hvdWxkTW92ZVRvd2FyZHNMZWFmLFxyXG4gICAgICAgICAgICB0aGlzLl9zaG91bGRFeHBsb3JlV29ybGQsXHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3VsZFZpc2l0T2xkU3F1YXJlc1xyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgX3Nob3VsZERyb3Aoc3RhdGUpe1xyXG4gICAgICAgIGlmKCFzdGF0ZS5jYXJyaWVzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IHN0YXRlLndvcmxkW3Bvc2l0aW9uU3RyaW5nKC4uLnN0YXRlLnBvc2l0aW9uKV07XHJcbiAgICAgICAgaWYoc3F1YXJlICYmIGNvbnRhaW5zT2JqKHNxdWFyZSwgSG9sZSkpXHJcbiAgICAgICAgICAgIHJldHVybiBtYWtlR29hbChDQVJSWSwgeyBjYXJyeTogZmFsc2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Nob3VsZENhdGNoKHN0YXRlKXtcclxuICAgICAgICBpZihzdGF0ZS5jYXJyaWVzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IHN0YXRlLndvcmxkW3Bvc2l0aW9uU3RyaW5nKC4uLnN0YXRlLnBvc2l0aW9uKV07XHJcbiAgICAgICAgaWYoc3F1YXJlICYmIGNvbnRhaW5zT2JqKHNxdWFyZSwgTGVhZikpXHJcbiAgICAgICAgICAgIHJldHVybiBtYWtlR29hbChDQVJSWSwgeyBjYXJyeTogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2hvdWxkTW92ZVRvd2FyZHNIb2xlKHN0YXRlKXtcclxuICAgICAgICBpZighc3RhdGUuY2FycmllcylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBzcXVhcmVzID0gdGhpcy5fc3F1YXJlc0NvbnRhaW5pbmcoc3RhdGUud29ybGQsIEhvbGUpO1xyXG4gICAgICAgIGNvbnN0IGNsb3Nlc3QgPSB0aGlzLl9jbG9zZXN0U3F1YXJlKHN0YXRlLnBvc2l0aW9uLCBzcXVhcmVzKTtcclxuICAgICAgICBpZihjbG9zZXN0KVxyXG4gICAgICAgICAgICByZXR1cm4gbWFrZUdvYWwoR09UTywgeyBwb3NpdGlvbjogY2xvc2VzdC52YWx1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2hvdWxkTW92ZVRvd2FyZHNMZWFmKHN0YXRlKXtcclxuICAgICAgICBpZihzdGF0ZS5jYXJyaWVzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHNxdWFyZXMgPSB0aGlzLl9zcXVhcmVzQ29udGFpbmluZyhzdGF0ZS53b3JsZCwgTGVhZilcclxuICAgICAgICAgICAgLmZpbHRlcihzcXVhcmUgPT4gIWNvbnRhaW5zT2JqKHNxdWFyZSwgQW50KSk7XHJcbiAgICAgICAgY29uc3QgY2xvc2VzdCA9IHRoaXMuX2Nsb3Nlc3RTcXVhcmUoc3RhdGUucG9zaXRpb24sIHNxdWFyZXMpO1xyXG4gICAgICAgIGlmKGNsb3Nlc3QpXHJcbiAgICAgICAgICAgIHJldHVybiBtYWtlR29hbChHT1RPLCB7IHBvc2l0aW9uOiBjbG9zZXN0LnZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9zcXVhcmVzQ29udGFpbmluZyh3b3JsZCwgb2JqZWN0Q2xhc3Mpe1xyXG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHdvcmxkKS5maWx0ZXIoc3F1YXJlID0+IGNvbnRhaW5zT2JqKHNxdWFyZSwgb2JqZWN0Q2xhc3MpKTtcclxuICAgIH1cclxuXHJcbiAgICBfY2xvc2VzdFNxdWFyZShwb3NpdGlvbiwgc3F1YXJlcyl7XHJcbiAgICAgICAgY29uc3Qgc29ydGVkU3F1YXJlcyA9IHNxdWFyZXMubWFwKHNxdWFyZSA9PiAoeyBzcXVhcmUsIGRpc3RhbmNlOiBkaXN0YW5jZShwb3NpdGlvbiwgc3F1YXJlLnZhbHVlKSB9KSlcclxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuZGlzdGFuY2UgLSBiLmRpc3RhbmNlKVxyXG4gICAgICAgICAgICAubWFwKG9iaiA9PiBvYmouc3F1YXJlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNvcnRlZFNxdWFyZXMubGVuZ3RoID8gc29ydGVkU3F1YXJlc1swXSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgX3Nob3VsZEV4cGxvcmVXb3JsZChzdGF0ZSl7XHJcbiAgICAgICAgY29uc3Qgc3F1YXJlcyA9IHRoaXMuX3NxdWFyZXNXaXRoVW5rbm93TmVpZ2hib3VycyhzdGF0ZS53b3JsZCk7XHJcbiAgICAgICAgY29uc3QgY2xvc2VzdCA9IHRoaXMuX2Nsb3Nlc3RTcXVhcmUoc3RhdGUucG9zaXRpb24sIHNxdWFyZXMpO1xyXG4gICAgICAgIGlmKGNsb3Nlc3QpXHJcbiAgICAgICAgICAgIHJldHVybiBtYWtlR29hbChHT1RPLCB7IHBvc2l0aW9uOiBjbG9zZXN0LnZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9zcXVhcmVzV2l0aFVua25vd05laWdoYm91cnMod29ybGQpe1xyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMod29ybGQpO1xyXG4gICAgICAgIGNvbnN0IGtub3dOZWlnaGJvdXJzSW5kZXggPSB2YWx1ZXMucmVkdWNlKChjYXJyeSwgc3F1YXJlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFjYXJyeVtzcXVhcmUua2V5XSlcclxuICAgICAgICAgICAgICAgIGNhcnJ5W3NxdWFyZS5rZXldID0gMDtcclxuXHJcbiAgICAgICAgICAgIGNhcnJ5W3NxdWFyZS5rZXldICs9IHNxdWFyZS5ibG9ja2VkU2lkZXM7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB7IFVQLCBET1dOLCBMRUZULCBSSUdIVCwgYXBwbHlBY3Rpb25Ub1Bvc2l0aW9uIH0gPSBhY3Rpb25zO1xyXG4gICAgICAgICAgICBbVVAsIERPV04sIExFRlQsIFJJR0hUXS5mb3JFYWNoKGFjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGFwcGx5QWN0aW9uVG9Qb3NpdGlvbihhY3Rpb24sIHNxdWFyZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBwb3NpdGlvblN0cmluZyguLi5wb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYod29ybGRba2V5XSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWNhcnJ5W2tleV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJ5W2tleV0gPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXJyeVtrZXldKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNhcnJ5O1xyXG4gICAgICAgIH0sIHt9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGtub3dOZWlnaGJvdXJzSW5kZXgpXHJcbiAgICAgICAgICAgIC5tYXAoa2V5ID0+ICh7IGNtcDoga25vd05laWdoYm91cnNJbmRleFtrZXldLCBzcXVhcmU6IHdvcmxkW2tleV0gfSkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIob2JqID0+IG9iai5jbXAgPCA0KVxyXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5jbXAgLSBiLmNtcClcclxuICAgICAgICAgICAgLm1hcChvYmogPT4gb2JqLnNxdWFyZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Nob3VsZFZpc2l0T2xkU3F1YXJlcyhzdGF0ZSl7XHJcbiAgICAgICAgY29uc3Qgc3F1YXJlcyA9IE9iamVjdC52YWx1ZXMoc3RhdGUud29ybGQpXHJcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnRpbWVzdGFtcCAtIGIudGltZXN0YW1wKVxyXG4gICAgICAgICAgICAuc2xpY2UoMCwgMTApO1xyXG5cclxuICAgICAgICBpZihzcXVhcmVzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcmFuZG9tTnVtYmVyKHNxdWFyZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG1ha2VHb2FsKEdPVE8sIHsgcG9zaXRpb246IHNxdWFyZXNbaW5kZXhdLnZhbHVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfZm9ybXVsYXRlUHJvYmxlbShzdGF0ZSwgZ29hbCl7XHJcbiAgICAgICAgc3dpdGNoKGdvYWwudHlwZSl7XHJcbiAgICAgICAgICAgIGNhc2UgQ0FSUlk6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2VuZXJhdGVDYXJyeVByb2JsZW0oc3RhdGUsIGdvYWwuY2FycnkpO1xyXG4gICAgICAgICAgICBjYXNlIEdPVE86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2VuZXJhdGVHb3RvUHJvYmxlbShzdGF0ZSwgZ29hbC5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2dlbmVyYXRlQ2FycnlQcm9ibGVtKHN0YXRlLCBjYXJyeSl7XHJcbiAgICAgICAgY29uc3QgeyBDQVRDSCwgRFJPUCwgY29zdCB9ID0gYWN0aW9ucztcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gKGJvb2wsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2goYWN0aW9uKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgQ0FUQ0g6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIERST1A6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5pdGlhbFN0YXRlID0gISFzdGF0ZS5jYXJyaWVzO1xyXG4gICAgICAgIGNvbnN0IHByb2JsZW1BY3Rpb25zID0gYm9vbCA9PiBbYm9vbCA/IERST1AgOiBDQVRDSF07XHJcbiAgICAgICAgY29uc3QgZ29hbFRlc3QgPSBib29sID0+IGJvb2wgPT09IGNhcnJ5O1xyXG4gICAgICAgIGNvbnN0IHBhdGhDb3N0ID0gKGZyb20sIGFjdGlvbiwgdG8pID0+IGNvc3QoYWN0aW9uKTtcclxuICAgICAgICBjb25zdCBoZXVyaXN0aWMgPSBib29sID0+IGJvb2wgPT09IGNhcnJ5ID8gMCA6IDE7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSxcclxuICAgICAgICAgICAgYWN0aW9uczogcHJvYmxlbUFjdGlvbnMsXHJcbiAgICAgICAgICAgIHJlc3VsdCxcclxuICAgICAgICAgICAgZ29hbFRlc3QsXHJcbiAgICAgICAgICAgIHBhdGhDb3N0LFxyXG4gICAgICAgICAgICBoZXVyaXN0aWNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIF9nZW5lcmF0ZUdvdG9Qcm9ibGVtKHN0YXRlLCBwb3NpdGlvbil7XHJcbiAgICAgICAgY29uc3QgeyBVUCwgRE9XTiwgTEVGVCwgUklHSFQsIGNvc3QsIGFwcGx5QWN0aW9uVG9Qb3NpdGlvbiB9ID0gYWN0aW9ucztcclxuXHJcbiAgICAgICAgY29uc3QgcHJvYmxlbUFjdGlvbnMgPSBwb3MgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gW1VQLCBET1dOLCBMRUZULCBSSUdIVF0uZmlsdGVyKGFjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHJlc3VsdChwb3MsIGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBzdGF0ZS53b3JsZFtjYW5vbmljYWwocG9zaXRpb24pXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhIShzcXVhcmUgJiYgIWNvbnRhaW5zT2JqKHNxdWFyZSwgQW50KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IChwb3MsIGFjdGlvbikgPT4gYXBwbHlBY3Rpb25Ub1Bvc2l0aW9uKGFjdGlvbiwgcG9zKTtcclxuICAgICAgICBjb25zdCBpbml0aWFsU3RhdGUgPSBzdGF0ZS5wb3NpdGlvbjtcclxuICAgICAgICBjb25zdCBnb2FsVGVzdCA9IHBvcyA9PiBwb3MuZXZlcnkoKG51bSwgaW5kZXgpID0+IG51bSA9PT0gcG9zaXRpb25baW5kZXhdKTtcclxuICAgICAgICBjb25zdCBwYXRoQ29zdCA9IChmcm9tLCBhY3Rpb24sIHRvKSA9PiBjb3N0KGFjdGlvbik7XHJcbiAgICAgICAgY29uc3QgaGV1cmlzdGljID0gcG9zID0+IGRpc3RhbmNlKHBvcywgcG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGNhbm9uaWNhbCA9IHBvcyA9PiBwb3NpdGlvblN0cmluZyguLi5wb3MpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUsXHJcbiAgICAgICAgICAgIGFjdGlvbnM6IHByb2JsZW1BY3Rpb25zLFxyXG4gICAgICAgICAgICByZXN1bHQsXHJcbiAgICAgICAgICAgIGdvYWxUZXN0LFxyXG4gICAgICAgICAgICBwYXRoQ29zdCxcclxuICAgICAgICAgICAgaGV1cmlzdGljLFxyXG4gICAgICAgICAgICBjYW5vbmljYWxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0FudC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQXBwIGZyb20gJy4vQXBwLmpzJztcblxuKGRvYyA9PiB7XG4gICAgY29uc3QgYXBwID0gbmV3IEFwcChkb2MuYm9keSk7XG59KShkb2N1bWVudCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgRW52aXJvbm1lbnQgZnJvbSAnLi9FbnZpcm9ubWVudC5qcyc7XG5pbXBvcnQgQWdlbnQgZnJvbSAnLi9BZ2VudC5qcyc7XG5pbXBvcnQgQW50IGZyb20gJy4vQW50LmpzJztcbmltcG9ydCBIb2xlIGZyb20gJy4vSG9sZS5qcyc7XG5pbXBvcnQgTGVhZiBmcm9tICcuL0xlYWYuanMnO1xuaW1wb3J0IFJlbmRlciBmcm9tICcuL1JlbmRlci5qcyc7XG5cbmNvbnN0IG1ha2VFbGVtZW50ID0gc3RyID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3RyKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3Rvcihyb290KXtcbiAgICAgICAgdGhpcy5fc2V0dXBFbnZpcm9ubWVudCgpO1xuICAgICAgICB0aGlzLl9zZXR1cFJlbmRlcihyb290KTtcbiAgICAgICAgdGhpcy5fc2V0dXBDb250cm9scyhyb290KTtcbiAgICB9XG5cbiAgICBfc2V0dXBFbnZpcm9ubWVudCgpe1xuICAgICAgICBjb25zdCB1bml0T3JkZXIgPSA4O1xuICAgICAgICBjb25zdCB2aWV3UmFkaXVzID0gMjtcblxuICAgICAgICB0aGlzLmVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHtcbiAgICAgICAgICAgIHdpZHRoOiB1bml0T3JkZXIsXG4gICAgICAgICAgICBoZWlnaHQ6IHVuaXRPcmRlcixcbiAgICAgICAgICAgIHZpZXdSYWRpdXNcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQudXAoKTtcbiAgICB9XG5cbiAgICBfc2V0dXBSZW5kZXIocm9vdCl7XG4gICAgICAgIGNvbnN0IHVuaXRTaXplUHggPSA0MDtcblxuICAgICAgICBjb25zdCBjYW52YXMgPSBtYWtlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHVuaXRTaXplUHggKiB0aGlzLmVudmlyb25tZW50LndpZHRoKCk7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB1bml0U2l6ZVB4ICogdGhpcy5lbnZpcm9ubWVudC5oZWlnaHQoKTtcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyID0gbmV3IFJlbmRlcih0aGlzLmVudmlyb25tZW50LCBjYW52YXMpO1xuICAgICAgICB0aGlzLnJlbmRlci51cCgpO1xuICAgIH1cblxuICAgIF9zZXR1cENvbnRyb2xzKHJvb3Qpe1xuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICAgICAgdGhpcy5idXR0b25zID0gW0FudCwgSG9sZSwgTGVhZl0ubWFwKG9iamVjdENsYXNzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gbWFrZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IG1ha2VFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBvYmplY3RDbGFzcy5uYW1lO1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5fYWRkT2JqZWN0KG9iamVjdENsYXNzKSk7XG5cbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG5cbiAgICAgICAgICAgIHJldHVybiBidXR0b247XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQodWwpO1xuICAgIH1cblxuICAgIF9hZGRPYmplY3Qob2JqZWN0Q2xhc3Mpe1xuICAgICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmRpc2FibGVkID0gdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXIubmV4dFBvc2l0aW9uU2VsZWN0aW9uKCguLi5wb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0gbmV3IG9iamVjdENsYXNzKCk7XG4gICAgICAgICAgICBpZih0aGlzLmVudmlyb25tZW50LmFkZChvYmplY3QsIC4uLnBvc2l0aW9uKSAmJiBvYmplY3QgaW5zdGFuY2VvZiBBZ2VudClcbiAgICAgICAgICAgICAgICBvYmplY3QudXAoKTtcblxuICAgICAgICAgICAgdGhpcy5idXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvQXBwLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IHBvc2l0aW9uU3RyaW5nLCByYW5kb21OdW1iZXIgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCAqIGFzIGV2ZW50cyBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBydWxlcyBmcm9tICcuL3J1bGVzJztcbmltcG9ydCBBZ2VudCBmcm9tICcuL0FnZW50LmpzJztcbmltcG9ydCBMZWFmIGZyb20gJy4vTGVhZi5qcyc7XG5pbXBvcnQgSG9sZSBmcm9tICcuL0hvbGUuanMnO1xuXG5jb25zdCBtYWtlUG9zaXRpb25zSW5kZXggPSAod2lkdGgsIGhlaWdodCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0ge307XG4gICAgZm9yKGxldCBsZW4gPSB3aWR0aCAqIGhlaWdodDsgbGVuLS07KXtcbiAgICAgICAgY29uc3QgeCA9IGxlbiAlIHdpZHRoO1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihsZW4gLyB3aWR0aCk7XG5cbiAgICAgICAgbGV0IGJsb2NrZWRTaWRlcyA9IDA7XG4gICAgICAgIGlmKHggPT09IDAgfHwgeCA9PT0gd2lkdGggLSAxKVxuICAgICAgICAgICAgYmxvY2tlZFNpZGVzKys7XG4gICAgICAgIGlmKHkgPT09IDAgfHwgeSA9PT0gaGVpZ2h0IC0gMSlcbiAgICAgICAgICAgIGJsb2NrZWRTaWRlcysrO1xuXG4gICAgICAgIGNvbnN0IGtleSA9IHBvc2l0aW9uU3RyaW5nKHgsIHkpO1xuICAgICAgICBpbmRleFtrZXldID0ge1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgYmxvY2tlZFNpZGVzLFxuICAgICAgICAgICAgdmFsdWU6IFt4LCB5XSxcbiAgICAgICAgICAgIG9iamVjdHM6IFtdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW52aXJvbm1lbnQge1xuICAgIGNvbnN0cnVjdG9yKGFyZ3MgPSB7fSl7XG4gICAgICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB3aWR0aDogMzIsXG4gICAgICAgICAgICBoZWlnaHQ6IDMyLFxuICAgICAgICAgICAgY3ljbGVEdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgdmlld1JhZGl1czogOFxuICAgICAgICB9LCBhcmdzKTtcblxuICAgICAgICB0aGlzLnNxdWFyZXMgPSBtYWtlUG9zaXRpb25zSW5kZXgodGhpcy53aWR0aCgpLCB0aGlzLmhlaWdodCgpKTtcbiAgICAgICAgdGhpcy5sZWF2ZXMgPSBbXTtcbiAgICB9XG5cbiAgICB3aWR0aCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcud2lkdGg7XG4gICAgfVxuXG4gICAgaGVpZ2h0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgb2JqZWN0cygpe1xuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLnNxdWFyZXMpXG4gICAgICAgICAgICAuZmlsdGVyKHBvcyA9PiBwb3Mub2JqZWN0cy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgLnJlZHVjZSgoY2FycnksIHBvcykgPT4gWy4uLmNhcnJ5LCAuLi5wb3Mub2JqZWN0c10sIFtdKTtcbiAgICB9XG5cbiAgICBhZ2VudHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0cygpLmZpbHRlcihvYmogPT4gb2JqIGluc3RhbmNlb2YgQWdlbnQpO1xuICAgIH1cblxuICAgIGFkZEF0UmFuZG9tKG9iamVjdCl7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5fZ2V0QXZhaWxhYmxlUmFuZG9tUG9zaXRpb24oKTtcbiAgICAgICAgaWYocG9zaXRpb24pXG4gICAgICAgICAgICB0aGlzLmFkZChvYmplY3QsIC4uLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBfZ2V0QXZhaWxhYmxlUmFuZG9tUG9zaXRpb24oKXtcbiAgICAgICAgY29uc3QgcG9zaXRpb25zID0gT2JqZWN0LnZhbHVlcyh0aGlzLnNxdWFyZXMpXG4gICAgICAgICAgICAuZmlsdGVyKHBvcyA9PiBwb3Mub2JqZWN0cy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAubWFwKHBvcyA9PiBwb3MudmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBwb3NpdGlvbnMubGVuZ3RoID8gcG9zaXRpb25zW3JhbmRvbU51bWJlcihwb3NpdGlvbnMubGVuZ3RoKV0gOiBudWxsO1xuICAgIH1cblxuICAgIGFkZChvYmplY3QsIC4uLnBvc2l0aW9uKXtcbiAgICAgICAgY29uc3Qga2V5ID0gcG9zaXRpb25TdHJpbmcoLi4ucG9zaXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcy5fZXhlY3V0ZURpcmVjdGx5KG9iamVjdCwgcnVsZXMuTU9WRV9UTywgdGhpcy5zcXVhcmVzW2tleV0pO1xuICAgIH1cblxuICAgIF9leGVjdXRlRGlyZWN0bHkoLi4uYXJncyl7XG4gICAgICAgIGlmKHJ1bGVzLmNhbiguLi5hcmdzKSl7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlT3BlcmF0aW9uKC4uLmFyZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZXhlY3V0ZUFnZW50UGFzc2l2ZUFjdGlvbihhZ2VudCwgYWN0aW9uKXtcbiAgICAgICAgaWYoYWN0aW9ucy50eXBlSXMoYWN0aW9uLCBhY3Rpb25zLk9CU0VSVkUpKVxuICAgICAgICAgICAgdGhpcy5fZXhlY3V0ZUFnZW50QWN0aW9uKGFnZW50LCBhY3Rpb24pO1xuICAgIH1cblxuICAgIHVwKCl7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxSZWYgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLl9jeWNsZSgpLCB0aGlzLmNvbmZpZy5jeWNsZUR1cmF0aW9uKTtcbiAgICAgICAgdGhpcy5fY3ljbGUoKTtcbiAgICB9XG5cbiAgICBfY3ljbGUoKXtcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3NBY3Rpb25zKCk7XG4gICAgfVxuXG4gICAgX3Byb2dyZXNzQWN0aW9ucygpe1xuICAgICAgICAvLyBSYW5kb21pemUgYWdlbnQgb3JkZXJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWdlbnRzKClcbiAgICAgICAgICAgIC5tYXAoYWdlbnQgPT4gKHsgYWdlbnQsIGNtcDogTWF0aC5yYW5kb20oKSB9KSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmNtcCAtIGIuY21wKVxuICAgICAgICAgICAgLm1hcChvYmogPT4gb2JqLmFnZW50KVxuICAgICAgICAgICAgLmZvckVhY2goYWdlbnQgPT4gdGhpcy5fcHJvZ3Jlc3NBY3Rpb24oYWdlbnQpKTtcbiAgICB9XG5cbiAgICBfcHJvZ3Jlc3NBY3Rpb24oYWdlbnQpe1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBhZ2VudC5hY3QoKTtcbiAgICAgICAgaWYoYWN0aW9uICE9PSBudWxsKVxuICAgICAgICAgICAgdGhpcy5fZXhlY3V0ZUFnZW50QWN0aW9uKGFnZW50LCBhY3Rpb24pO1xuICAgIH1cblxuICAgIF9leGVjdXRlQWdlbnRBY3Rpb24oYWdlbnQsIGFjdGlvbil7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuX21hcEFjdGlvblRvT3BlcmF0aW9uKGFnZW50LCBhY3Rpb24pO1xuICAgICAgICBjb25zdCBhbGxvd2VkID0gcnVsZXMuY2FuKC4uLnBhcmFtcyk7XG5cbiAgICAgICAgaWYoYWxsb3dlZCl7XG4gICAgICAgICAgICBhY3Rpb25zLmluY3JlYXNlUHJvZ3Jlc3MoYWN0aW9uKTtcbiAgICAgICAgICAgIGlmKGFjdGlvbnMuaXNDb21wbGV0ZShhY3Rpb24pKVxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc29sdmVPcGVyYXRpb24oLi4ucGFyYW1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX25vdGlmeUFnZW50KGFnZW50LCBhY3Rpb24sIGFsbG93ZWQpO1xuICAgIH1cblxuICAgIF9tYXBBY3Rpb25Ub09wZXJhdGlvbihhZ2VudCwgYWN0aW9uKXtcbiAgICAgICAgc3dpdGNoKHRydWUpe1xuICAgICAgICAgICAgY2FzZSBhY3Rpb25zLmlzTW92ZW1lbnQoYWN0aW9uKTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbWFwTW92ZW1lbnRBY3Rpb24oYWdlbnQsIGFjdGlvbik7XG5cbiAgICAgICAgICAgIGNhc2UgYWN0aW9ucy50eXBlSXMoYWN0aW9uLCBhY3Rpb25zLkNBVENIKTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbWFwVG9PcGVyYXRpb25Vc2luZ0NvcnJlY3RPYmplY3QoYWdlbnQsIHJ1bGVzLkNBVENIKTtcblxuICAgICAgICAgICAgY2FzZSBhY3Rpb25zLnR5cGVJcyhhY3Rpb24sIGFjdGlvbnMuRFJPUCk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21hcFRvT3BlcmF0aW9uVXNpbmdDb3JyZWN0T2JqZWN0KGFnZW50LCBydWxlcy5EUk9QKTtcblxuICAgICAgICAgICAgY2FzZSBhY3Rpb25zLnR5cGVJcyhhY3Rpb24sIGFjdGlvbnMuT0JTRVJWRSk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFthZ2VudCwgcnVsZXMuT0JTRVJWRV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfbWFwTW92ZW1lbnRBY3Rpb24oYWdlbnQsIGFjdGlvbil7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gYWdlbnQuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSBhY3Rpb25zLmFwcGx5QWN0aW9uVG9Qb3NpdGlvbihhY3Rpb24udHlwZSwgcG9zaXRpb24pO1xuICAgICAgICBjb25zdCBrZXkgPSBwb3NpdGlvblN0cmluZyguLi5uZXdQb3NpdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIFthZ2VudCwgcnVsZXMuTU9WRV9UTywgdGhpcy5zcXVhcmVzW2tleV1dO1xuICAgIH1cblxuICAgIF9tYXBUb09wZXJhdGlvblVzaW5nQ29ycmVjdE9iamVjdChhZ2VudCwgb3BlcmF0aW9uKXtcbiAgICAgICAgY29uc3Qgb2JqZWN0cyA9IHRoaXMuX29iamVjdHNJblNhbWVQb3NpdGlvbihhZ2VudClcbiAgICAgICAgICAgIC5maWx0ZXIob2JqID0+IHJ1bGVzLmNhbihhZ2VudCwgb3BlcmF0aW9uLCBvYmopKTtcblxuICAgICAgICByZXR1cm4gW2FnZW50LCBvcGVyYXRpb24sIG9iamVjdHNbMF1dO1xuICAgIH1cblxuICAgIF9vYmplY3RzSW5TYW1lUG9zaXRpb24ob2JqZWN0KXtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBvYmplY3QuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgY29uc3Qga2V5ID0gcG9zaXRpb25TdHJpbmcoLi4ucG9zaXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcy5zcXVhcmVzW2tleV0ub2JqZWN0cy5maWx0ZXIob2JqID0+IG9iaiAhPSBvYmplY3QpO1xuICAgIH1cblxuICAgIF9yZXNvbHZlT3BlcmF0aW9uKG9iamVjdCwgb3BlcmF0aW9uLCAuLi5hcmdzKXtcbiAgICAgICAgc3dpdGNoKG9wZXJhdGlvbil7XG4gICAgICAgICAgICBjYXNlIHJ1bGVzLk1PVkVfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc29sdmVNb3ZlVG8ob2JqZWN0LCAuLi5hcmdzKTtcbiAgICAgICAgICAgIGNhc2UgcnVsZXMuQ0FUQ0g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc29sdmVDYXRjaChvYmplY3QsIC4uLmFyZ3MpO1xuICAgICAgICAgICAgY2FzZSBydWxlcy5EUk9QOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXNvbHZlRHJvcChvYmplY3QsIC4uLmFyZ3MpO1xuICAgICAgICAgICAgY2FzZSBydWxlcy5PQlNFUlZFOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXNvbHZlT2JzZXJ2ZShvYmplY3QsIC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3Jlc29sdmVNb3ZlVG8ob2JqZWN0LCBzcXVhcmUpe1xuICAgICAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBvYmplY3QuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgaWYoY3VycmVudFBvc2l0aW9uICE9IG51bGwpXG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVGcm9tUG9zaXRpb24ob2JqZWN0LCAuLi5jdXJyZW50UG9zaXRpb24pO1xuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gc3F1YXJlLnZhbHVlO1xuICAgICAgICB0aGlzLl9hZGRUb1Bvc2l0aW9uKG9iamVjdCwgLi4ucG9zaXRpb24pO1xuICAgICAgICBvYmplY3Quc2V0UG9zaXRpb24oLi4ucG9zaXRpb24pO1xuXG4gICAgICAgIGlmKG9iamVjdCBpbnN0YW5jZW9mIEFnZW50KXtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzLmZhY3RvcnkoZXZlbnRzLkRJU1BMQUNFTUVOVCwgdGhpcywgeyBvYmplY3QsIHBvc2l0aW9uIH0pO1xuICAgICAgICAgICAgb2JqZWN0LnBlcmNlaXZlKGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKG9iamVjdC5jYXJyaWVzU29tZXRoaW5nKCkpXG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlTW92ZVRvKG9iamVjdC5nZXRDYXJyaWVkT2JqZWN0KCksIHNxdWFyZSk7XG4gICAgfVxuXG4gICAgX3JlbW92ZUZyb21Qb3NpdGlvbihvYmplY3QsIC4uLnBvc2l0aW9uKXtcbiAgICAgICAgdGhpcy5fYWx0ZXJQb3NpdGlvbk9iamVjdHMocG9zaXRpb24sIG9ianMgPT4gb2Jqcy5maWx0ZXIob2JqID0+IG9iaiAhPSBvYmplY3QpKTtcbiAgICB9XG5cbiAgICBfYWRkVG9Qb3NpdGlvbihvYmplY3QsIC4uLnBvc2l0aW9uKXtcbiAgICAgICAgdGhpcy5fYWx0ZXJQb3NpdGlvbk9iamVjdHMocG9zaXRpb24sIG9ianMgPT4gWy4uLm9ianMsIG9iamVjdF0pO1xuICAgIH1cblxuICAgIF9hbHRlclBvc2l0aW9uT2JqZWN0cyhwb3NpdGlvbiwgY2FsbGJhY2spe1xuICAgICAgICBjb25zdCBrZXkgPSBwb3NpdGlvblN0cmluZyguLi5wb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IG9iaiA9IHRoaXMuc3F1YXJlc1trZXldO1xuICAgICAgICBjb25zdCBvYmplY3RzID0gY2FsbGJhY2sob2JqLm9iamVjdHMpO1xuICAgICAgICB0aGlzLnNxdWFyZXNba2V5XSA9IE9iamVjdC5hc3NpZ24oe30sIG9iaiwgeyBvYmplY3RzIH0pO1xuICAgIH1cblxuICAgIF9yZXNvbHZlQ2F0Y2goY2Fycmllciwgb2JqZWN0KXtcbiAgICAgICAgY2Fycmllci5zZXRDYXJyaWVkT2JqZWN0KG9iamVjdCk7XG4gICAgICAgIG9iamVjdC5zZXRDYXJyaWVyT2JqZWN0KGNhcnJpZXIpO1xuXG4gICAgICAgIGlmKGNhcnJpZXIgaW5zdGFuY2VvZiBBZ2VudCl7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGV2ZW50cy5mYWN0b3J5KGV2ZW50cy5DQVRDSCwgdGhpcywgeyBvYmplY3QgfSk7XG4gICAgICAgICAgICBjYXJyaWVyLnBlcmNlaXZlKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9yZXNvbHZlRHJvcChjYXJyaWVyLCBob2xlKXtcbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gY2Fycmllci5nZXRDYXJyaWVkT2JqZWN0KCk7XG5cbiAgICAgICAgY2Fycmllci5zZXRDYXJyaWVkT2JqZWN0KG51bGwpO1xuICAgICAgICBvYmplY3Quc2V0Q2Fycmllck9iamVjdChudWxsKTtcblxuICAgICAgICBpZihjYXJyaWVyIGluc3RhbmNlb2YgQWdlbnQpe1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBldmVudHMuZmFjdG9yeShldmVudHMuRFJPUCwgdGhpcywgeyBvYmplY3QgfSk7XG4gICAgICAgICAgICBjYXJyaWVyLnBlcmNlaXZlKGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKG9iamVjdCBpbnN0YW5jZW9mIExlYWYpXG4gICAgICAgICAgICB0aGlzLl9jb25zdW1lTGVhZihvYmplY3QpO1xuICAgIH1cblxuICAgIF9jb25zdW1lTGVhZihsZWFmKXtcbiAgICAgICAgdGhpcy5fcmVtb3ZlRnJvbVBvc2l0aW9uKGxlYWYsIC4uLmxlYWYuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIHRoaXMubGVhdmVzID0gWy4uLnRoaXMubGVhdmVzLCBsZWFmXTtcbiAgICB9XG5cbiAgICBfcmVzb2x2ZU9ic2VydmUob2JqZWN0KXtcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMuZ2V0Vmlld1Bvc2l0aW9uc0ZvcihvYmplY3QpXG4gICAgICAgICAgICAubWFwKHBvcyA9PiB0aGlzLnNxdWFyZXNbcG9zaXRpb25TdHJpbmcoLi4ucG9zKV0pO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzLmZhY3RvcnkoZXZlbnRzLlZJRVcsIHRoaXMsIHZpZXcpO1xuICAgICAgICBvYmplY3QucGVyY2VpdmUoZXZlbnQpO1xuICAgIH1cblxuICAgIGdldFZpZXdQb3NpdGlvbnNGb3IoYWdlbnQpe1xuICAgICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLndpZHRoKCk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IHsgdmlld1JhZGl1czogcmFkaXVzIH0gPSB0aGlzLmNvbmZpZztcbiAgICAgICAgY29uc3QgW2FnZW50WCwgYWdlbnRZXSA9IGFnZW50LmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IHRvWCA9IE1hdGgubWluKGFnZW50WCArIHJhZGl1cyArIDEsIHdpZHRoKTtcblxuICAgICAgICBmb3IobGV0IHggPSBNYXRoLm1heChhZ2VudFggLSByYWRpdXMsIDApOyB4IDwgdG9YOyB4Kyspe1xuICAgICAgICAgICAgY29uc3QgdmFsdWVZID0gTWF0aC5zcXJ0KE1hdGgucG93KHJhZGl1cywgMikgLSBNYXRoLnBvdyh4IC0gYWdlbnRYLCAyKSk7XG4gICAgICAgICAgICBjb25zdCByb3VuZGVkWSA9IE1hdGguZmxvb3IodmFsdWVZKTtcbiAgICAgICAgICAgIGNvbnN0IHRvWSA9IE1hdGgubWluKGFnZW50WSArIHJvdW5kZWRZICsgMSwgaGVpZ2h0KTtcbiAgICAgICAgICAgIGZvcihsZXQgeSA9IE1hdGgubWF4KGFnZW50WSAtIHJvdW5kZWRZLCAwKTsgeSA8IHRvWTsgeSsrKVxuICAgICAgICAgICAgICAgIGFyci5wdXNoKFt4LCB5XSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIF9ub3RpZnlBZ2VudChhZ2VudCwgYWN0aW9uLCBkb25lKXtcbiAgICAgICAgY29uc3QgeyBBQ1RJT05fRkFJTEVELCBBQ1RJT05fUFJPR1JFU1NFRCwgQUNUSU9OX0NPTVBMRVRFIH0gPSBldmVudHM7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBkb25lID8gKGFjdGlvbnMuaXNDb21wbGV0ZShhY3Rpb24pID8gQUNUSU9OX0NPTVBMRVRFIDogQUNUSU9OX1BST0dSRVNTRUQpIDogQUNUSU9OX0ZBSUxFRDtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBldmVudHMuZmFjdG9yeSh0eXBlLCB0aGlzLCBhY3Rpb24pO1xuICAgICAgICBhZ2VudC5wZXJjZWl2ZShldmVudCk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvRW52aXJvbm1lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBUaGluZyBmcm9tICcuLi9UaGluZy5qcyc7XG5pbXBvcnQgQWdlbnQgZnJvbSAnLi4vQWdlbnQuanMnO1xuaW1wb3J0IEFudCBmcm9tICcuLi9BbnQuanMnO1xuaW1wb3J0IExlYWYgZnJvbSAnLi4vTGVhZi5qcyc7XG5pbXBvcnQgSG9sZSBmcm9tICcuLi9Ib2xlLmpzJztcblxuZXhwb3J0IGNvbnN0IE9CU0VSVkUgPSBTeW1ib2woJ29ic2VydmUnKTtcbmV4cG9ydCBjb25zdCBNT1ZFX1RPID0gU3ltYm9sKCdtb3ZlX3RvJyk7XG5leHBvcnQgY29uc3QgQ0FUQ0ggPSBTeW1ib2woJ2NhdGNoJyk7XG5leHBvcnQgY29uc3QgRFJPUCA9IFN5bWJvbCgnZHJvcCcpO1xuXG5jb25zdCBydWxlcyA9IFtcbiAgICB7IG9iamVjdENsYXNzOiBUaGluZywgb3BlcmF0aW9uczoge1xuICAgICAgICBbTU9WRV9UT106IFtcbiAgICAgICAgICAgIChvYmplY3QsIHNxdWFyZSkgPT4gc3F1YXJlICE9IG51bGwsXG4gICAgICAgICAgICAob2JqZWN0LCBzcXVhcmUpID0+IHNxdWFyZS5vYmplY3RzLmV2ZXJ5KG9iaiA9PiBvYmouY29uc3RydWN0b3IgIT09IG9iamVjdC5jb25zdHJ1Y3RvcilcbiAgICAgICAgXSxcbiAgICAgICAgW0NBVENIXTogW1xuICAgICAgICAgICAgKG9iamVjdCwgb2JqKSA9PiBvYmogIT0gbnVsbCxcbiAgICAgICAgICAgIChvYmplY3QsIG9iaikgPT4gb2JqZWN0ICE9IG9iaixcbiAgICAgICAgICAgIChvYmplY3QsIG9iaikgPT4gIW9iamVjdC5jYXJyaWVzU29tZXRoaW5nKCksXG4gICAgICAgICAgICAob2JqZWN0LCBvYmopID0+ICFvYmouYmVpbmdDYXJyaWVkKClcbiAgICAgICAgXSxcbiAgICAgICAgW0RST1BdOiBbXG4gICAgICAgICAgICAob2JqZWN0LCBpbnRvKSA9PiBvYmplY3QuY2Fycmllc1NvbWV0aGluZygpLFxuICAgICAgICAgICAgKG9iamVjdCwgaW50bykgPT4gaW50byAhPSBudWxsLFxuICAgICAgICAgICAgKG9iamVjdCwgaW50bykgPT4gaW50byBpbnN0YW5jZW9mIEhvbGVcbiAgICAgICAgXSxcbiAgICAgICAgW09CU0VSVkVdOiBbXG4gICAgICAgICAgICBvYmplY3QgPT4gb2JqZWN0IGluc3RhbmNlb2YgQWdlbnRcbiAgICAgICAgXVxuICAgIH19LFxuICAgIHsgb2JqZWN0Q2xhc3M6IEFudCwgb3BlcmF0aW9uczoge1xuICAgICAgICBbQ0FUQ0hdOiBbXG4gICAgICAgICAgICAob2JqZWN0LCBvYmopID0+IG9iaiBpbnN0YW5jZW9mIExlYWZcbiAgICAgICAgXVxuICAgIH19XG5dO1xuXG5leHBvcnQgY29uc3QgY2FuID0gKG9iamVjdCwgb3BlcmF0aW9uLCAuLi5hcmdzKSA9PiB7XG4gICAgcmV0dXJuIHJ1bGVzLmV2ZXJ5KHJ1bGUgPT4ge1xuICAgICAgICBpZighKG9iamVjdCBpbnN0YW5jZW9mIHJ1bGUub2JqZWN0Q2xhc3MpKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgY29uc3Qgb3BlcmF0aW9ucyA9IHJ1bGUub3BlcmF0aW9uc1tvcGVyYXRpb25dIHx8IFtdO1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9ucy5ldmVyeShvcGVyYXRpb24gPT4gb3BlcmF0aW9uKG9iamVjdCwgLi4uYXJncykpO1xuICAgIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3J1bGVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBhcmdzID0+IHtcbiAgICBjb25zdCBwcm9ibGVtID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNhbm9uaWNhbDogSlNPTi5zdHJpbmdpZnlcbiAgICB9LCBhcmdzKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbFN0YXRlLCBjYW5vbmljYWwsIHBhdGhDb3N0LCBoZXVyaXN0aWMgfSA9IHByb2JsZW07XG4gICAgY29uc3QgbWFrZU5vZGUgPSBub2RlTWFrZXJGYWN0b3J5KGNhbm9uaWNhbCwgaGV1cmlzdGljKTtcblxuICAgIGNvbnN0IGZyb250aWVyID0gbWFrZUZyb250aWVyKCk7XG4gICAgY29uc3QgZXhwbG9yZWQgPSB7fTtcbiAgICBpbnNlcnQoZnJvbnRpZXIsIG1ha2VOb2RlKGluaXRpYWxTdGF0ZSkpO1xuXG4gICAgZm9yKGxldCBub2RlOyBub2RlID0gcG9wKGZyb250aWVyKTspe1xuICAgICAgICBpZihwcm9ibGVtLmdvYWxUZXN0KG5vZGUuc3RhdGUpKVxuICAgICAgICAgICAgcmV0dXJuIG5vZGUuc2VxdWVuY2U7XG5cbiAgICAgICAgZXhwbG9yZWRbbm9kZS5oYXNoXSA9IHRydWU7XG5cbiAgICAgICAgcHJvYmxlbS5hY3Rpb25zKG5vZGUuc3RhdGUpXG4gICAgICAgICAgICAubWFwKGFjdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBwcm9ibGVtLnJlc3VsdChub2RlLnN0YXRlLCBhY3Rpb24pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvc3QgPSBwYXRoQ29zdChub2RlLnN0YXRlLCBhY3Rpb24sIHN0YXRlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFrZU5vZGUoc3RhdGUsIG5vZGUuY29zdCArIGNvc3QsIFsuLi5ub2RlLnNlcXVlbmNlLCBhY3Rpb25dKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGNoaWxkID0+ICFleHBsb3JlZFtjaGlsZC5oYXNoXSlcbiAgICAgICAgICAgIC5mb3JFYWNoKGNoaWxkID0+IGluc2VydChmcm9udGllciwgY2hpbGQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IG1ha2VGcm9udGllciA9ICgpID0+ICh7IGluZGV4OiB7fSwgcXVldWU6IFtdIH0pO1xuXG5jb25zdCBub2RlTWFrZXJGYWN0b3J5ID0gKGNhbm9uaWNhbCwgaGV1cmlzdGljKSA9PiB7XG4gICAgcmV0dXJuIChzdGF0ZSwgY29zdCA9IDAsIHNlcXVlbmNlID0gW10pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgaGFzaDogY2Fub25pY2FsKHN0YXRlKSxcbiAgICAgICAgICAgIGNvc3QsXG4gICAgICAgICAgICBlc3RpbWF0ZTogY29zdCArIGhldXJpc3RpYyhzdGF0ZSksXG4gICAgICAgICAgICBzZXF1ZW5jZVxuICAgICAgICB9O1xuICAgIH07XG59XG5cbmNvbnN0IGluc2VydCA9IChmcm9udGllciwgbm9kZSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gZnJvbnRpZXIuaW5kZXhbbm9kZS5oYXNoXTtcbiAgICBpZihpbmRleCAhPSBudWxsKXtcbiAgICAgICAgaWYoZnJvbnRpZXIucXVldWVbaW5kZXhdLmNvc3QgPiBub2RlLmNvc3Qpe1xuICAgICAgICAgICAgZnJvbnRpZXIucXVldWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHVwZGF0ZUluZGV4KGZyb250aWVyLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBpZHggPSAwO1xuICAgIHdoaWxlKGlkeCA8IGZyb250aWVyLnF1ZXVlLmxlbmd0aCAmJiBmcm9udGllci5xdWV1ZVtpZHhdLmVzdGltYXRlIDw9IG5vZGUuZXN0aW1hdGUpXG4gICAgICAgIGlkeCsrO1xuXG4gICAgZnJvbnRpZXIuaW5kZXhbbm9kZS5oYXNoXSA9IGlkeDtcbiAgICBpZihpZHggPT09IGZyb250aWVyLnF1ZXVlLmxlbmd0aClcbiAgICAgICAgZnJvbnRpZXIucXVldWUgPSBbLi4uZnJvbnRpZXIucXVldWUsIG5vZGVdO1xuICAgIGVsc2VcbiAgICAgICAgZnJvbnRpZXIucXVldWUuc3BsaWNlKGlkeCwgMCwgbm9kZSk7XG5cbiAgICB1cGRhdGVJbmRleChmcm9udGllciwgaWR4ICsgMSk7XG59XG5cbmNvbnN0IHBvcCA9IGZyb250aWVyID0+IHtcbiAgICBpZighZnJvbnRpZXIucXVldWUubGVuZ3RoKVxuICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IFtub2RlLCAuLi50YWlsXSA9IGZyb250aWVyLnF1ZXVlO1xuICAgIGRlbGV0ZSBmcm9udGllci5pbmRleFtub2RlLmhhc2hdO1xuICAgIGZyb250aWVyLnF1ZXVlID0gdGFpbDtcblxuICAgIHVwZGF0ZUluZGV4KGZyb250aWVyKTtcblxuICAgIHJldHVybiBub2RlO1xufVxuXG5jb25zdCB1cGRhdGVJbmRleCA9IChmcm9udGllciwgaW5kZXggPSAwLCBjb3VudCA9IG51bGwpID0+IHtcbiAgICBjb3VudCA9IGNvdW50IHx8IGZyb250aWVyLnF1ZXVlLmxlbmd0aDtcbiAgICBmb3IoOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKVxuICAgICAgICBmcm9udGllci5pbmRleFtmcm9udGllci5xdWV1ZVtpbmRleF0uaGFzaF0gPSBpbmRleDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zZWFyY2gvYVN0YXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBDQVJSWSA9IFN5bWJvbCgnY2FycnknKTtcbmV4cG9ydCBjb25zdCBHT1RPID0gU3ltYm9sKCdnb3RvJyk7XG5cbmV4cG9ydCBjb25zdCBmYWN0b3J5ID0gKHR5cGUsIGRhdGEgPSB7fSkgPT4gT2JqZWN0LmFzc2lnbih7IHR5cGUgfSwgZGF0YSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9nb2Fscy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgcG9zaXRpb25TdHJpbmcgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBBbnQgZnJvbSAnLi9BbnQuanMnO1xuaW1wb3J0IEhvbGUgZnJvbSAnLi9Ib2xlLmpzJztcbmltcG9ydCBMZWFmIGZyb20gJy4vTGVhZi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlciB7XG4gICAgY29uc3RydWN0b3IoZW52aXJvbm1lbnQsIGVsZW1lbnQsIGNvbmZpZyA9IHt9KXtcbiAgICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXG4gICAgICAgIHRoaXMuY2FudmFzID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25GcmFtZVJlcSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZXZlbnQgPT4gdGhpcy5faGFuZGxlTW91c2VNb3ZlKGV2ZW50KSk7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5faGFuZGxlQ2xpY2soZXZlbnQpKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvblNlbGVjdGlvbkNhbGxiYWNrcyA9IFtdO1xuICAgICAgICB0aGlzLm1vdXNlUG9zaXRpb24gPSBudWxsO1xuXG4gICAgICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB1bml0U2l6ZVB4OiBudWxsLFxuICAgICAgICAgICAgdW5pdFN0cm9rZVB4OiAyLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzk0NzA2NCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU3Ryb2tlQ29sb3I6ICcjODM2MDUzJyxcbiAgICAgICAgICAgIGFudENvbG9yOiAnI0NENTExRCcsXG4gICAgICAgICAgICBsZWFmQ29sb3I6ICcjODBGRjAwJyxcbiAgICAgICAgICAgIGxlYWZTdGVtQ29sb3I6ICcjNjBERDAwJyxcbiAgICAgICAgICAgIHVub2JzZXJ2ZWRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgLjUpJyxcbiAgICAgICAgICAgIGhvbGVDb2xvcjogJyM0NDQnLFxuICAgICAgICAgICAgaG9sZUJvcmRlckNvbG9yOiAnIzcyNTA0MicsXG4gICAgICAgICAgICBoaWdobGlnaHRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgLjUpJyxcbiAgICAgICAgfSwgY29uZmlnKTtcblxuICAgICAgICBpZih0aGlzLmNvbmZpZy51bml0U2l6ZVB4ID09PSBudWxsKVxuICAgICAgICAgICAgdGhpcy5jb25maWcudW5pdFNpemVQeCA9IHRoaXMuY2FudmFzLndpZHRoIC8gdGhpcy5lbnZpcm9ubWVudC53aWR0aCgpO1xuICAgIH1cblxuICAgIHVwKCl7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25GcmFtZVJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmcmFtZSk7XG4gICAgICAgICAgICB0aGlzLl9kcmF3KCk7XG4gICAgICAgIH07XG4gICAgICAgIGZyYW1lKCk7XG4gICAgfVxuXG4gICAgX2RyYXcoKXtcbiAgICAgICAgdGhpcy5fZHJhd0JhY2tncm91bmQodGhpcy5lbnZpcm9ubWVudCk7XG4gICAgICAgIHRoaXMuX2RyYXdPYmplY3RzKHRoaXMuZW52aXJvbm1lbnQub2JqZWN0cygpKTtcbiAgICAgICAgdGhpcy5fZHJhd09ic2VydmVkQXJlYSh0aGlzLmVudmlyb25tZW50LmFnZW50cygpKTtcbiAgICAgICAgdGhpcy5fZHJhd01vdXNlSGlnaGxpZ2h0KCk7XG4gICAgfVxuXG4gICAgX2RyYXdCYWNrZ3JvdW5kKGVudmlyb25tZW50KXtcbiAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcblxuICAgICAgICBjb25zdCB1bml0U2l6ZVB4ID0gdGhpcy5jb25maWcudW5pdFNpemVQeDtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBlbnZpcm9ubWVudC53aWR0aCgpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBlbnZpcm9ubWVudC5oZWlnaHQoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCAqIHVuaXRTaXplUHgsIGhlaWdodCAqIHVuaXRTaXplUHgpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbmZpZy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuY29uZmlnLmJhY2tncm91bmRTdHJva2VDb2xvcjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMuY29uZmlnLnVuaXRTdHJva2VQeDtcblxuICAgICAgICB0aGlzLl9pdGVyYXRlUG9zaXRpb25zKCh4LCB5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhcmdzID0gWy4uLnRoaXMuX2dldFBpeGVsUG9zaXRpb24oeCwgeSksIHVuaXRTaXplUHgsIHVuaXRTaXplUHhdO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KC4uLmFyZ3MpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVJlY3QoLi4uYXJncyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgX2l0ZXJhdGVQb3NpdGlvbnMoY2FsbGJhY2spe1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZW52aXJvbm1lbnQud2lkdGgoKTtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5lbnZpcm9ubWVudC5oZWlnaHQoKTtcbiAgICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4Kyspe1xuICAgICAgICAgICAgZm9yKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgeCwgeSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZ2V0UGl4ZWxQb3NpdGlvbiguLi5wb3NpdGlvbil7XG4gICAgICAgIHJldHVybiBwb3NpdGlvbi5tYXAodmFsdWUgPT4gdmFsdWUgKiB0aGlzLmNvbmZpZy51bml0U2l6ZVB4KTtcbiAgICB9XG5cbiAgICBfZHJhd09iamVjdHMob2JqZWN0cyl7XG4gICAgICAgIG9iamVjdHMubWFwKG9iamVjdCA9PiAoe29iamVjdCwgekluZGV4OiB0aGlzLl9nZXRaSW5kZXhGb3Iob2JqZWN0KX0pKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuekluZGV4IC0gYi56SW5kZXgpXG4gICAgICAgICAgICAubWFwKG9iaiA9PiBvYmoub2JqZWN0KVxuICAgICAgICAgICAgLmZvckVhY2gob2JqZWN0ID0+IHRoaXMuX2RyYXdPYmplY3Qob2JqZWN0KSk7XG4gICAgfVxuXG4gICAgX2dldFpJbmRleEZvcihvYmplY3Qpe1xuICAgICAgICBzd2l0Y2godHJ1ZSl7XG4gICAgICAgICAgICBjYXNlIG9iamVjdCBpbnN0YW5jZW9mIEFudDpcbiAgICAgICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgICAgIGNhc2Ugb2JqZWN0IGluc3RhbmNlb2YgTGVhZjpcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZHJhd09iamVjdChvYmplY3Qpe1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IG9iamVjdC5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBwaXhlbFBvc2l0aW9uID0gdGhpcy5fZ2V0UGl4ZWxQb3NpdGlvbiguLi5wb3NpdGlvbik7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSguLi5waXhlbFBvc2l0aW9uKTtcblxuICAgICAgICBpZihvYmplY3QuYmVpbmdDYXJyaWVkKCkpe1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSh0aGlzLmNvbmZpZy51bml0U2l6ZVB4ICogLjY2LCAwKTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zY2FsZSguMzMsIC4zMyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kcmF3U3BlY2lmaWNPYmplY3Qob2JqZWN0KTtcblxuICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIF9kcmF3U3BlY2lmaWNPYmplY3Qob2JqZWN0KXtcbiAgICAgICAgc3dpdGNoKHRydWUpe1xuICAgICAgICAgICAgY2FzZSBvYmplY3QgaW5zdGFuY2VvZiBBbnQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdBbnQob2JqZWN0KTtcbiAgICAgICAgICAgIGNhc2Ugb2JqZWN0IGluc3RhbmNlb2YgSG9sZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZHJhd0hvbGUob2JqZWN0KTtcbiAgICAgICAgICAgIGNhc2Ugb2JqZWN0IGluc3RhbmNlb2YgTGVhZjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZHJhd0xlYWYob2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9kcmF3QW50KGFudCl7XG4gICAgICAgIGNvbnN0IGhhbGZVbml0ID0gdGhpcy5jb25maWcudW5pdFNpemVQeCAvIDI7XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IGhhbGZVbml0ICogLjMwO1xuICAgICAgICBjb25zdCBkZXZpYXRpb24gPSByYWRpdXMgKiBNYXRoLnNxcnQoMik7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5jb25maWcuYW50Q29sb3I7XG4gICAgICAgIGNvbnN0IGxlZ1NpemUgPSBoYWxmVW5pdCAqIC42NjtcbiAgICAgICAgY29uc3QgZGVncmVlID0gTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgZm9yKGxldCBsZW4gPSAzOyBsZW4tLTspe1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcblxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZShoYWxmVW5pdCwgaGFsZlVuaXQpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnJvdGF0ZSgtZGVncmVlICogKGxlbiAqIDM1ICsgMTApKTtcblxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0Lm1vdmVUbygtbGVnU2l6ZSwgMCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKGxlZ1NpemUsIDApO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCB4ID0gLTE7IHggPD0gMTsgeCsrKXtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IGhhbGZVbml0ICsgZGV2aWF0aW9uICogeDtcbiAgICAgICAgICAgIHRoaXMuX2RyYXdDaXJjbGUocG9zLCBwb3MsIHJhZGl1cywgdGhpcy5jb25maWcuYW50Q29sb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2RyYXdIb2xlKGhvbGUpe1xuICAgICAgICBjb25zdCBoYWxmVW5pdCA9IHRoaXMuY29uZmlnLnVuaXRTaXplUHggLyAyO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyhoYWxmVW5pdCwgaGFsZlVuaXQsIGhhbGZVbml0IC8gMS44LCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGlwKCk7XG5cbiAgICAgICAgdGhpcy5fZHJhd0NpcmNsZShoYWxmVW5pdCwgaGFsZlVuaXQsIGhhbGZVbml0IC8gMS44LCB0aGlzLmNvbmZpZy5ob2xlQm9yZGVyQ29sb3IpO1xuICAgICAgICBjb25zdCBkZXZpYXRpb24gPSA0O1xuICAgICAgICB0aGlzLl9kcmF3Q2lyY2xlKGhhbGZVbml0ICsgZGV2aWF0aW9uLCBoYWxmVW5pdCArIGRldmlhdGlvbiwgaGFsZlVuaXQgLyAxLjgsIHRoaXMuY29uZmlnLmhvbGVDb2xvcik7XG4gICAgfVxuXG4gICAgX2RyYXdMZWFmKGxlYWYpe1xuICAgICAgICBjb25zdCBoYWxmVW5pdCA9IHRoaXMuY29uZmlnLnVuaXRTaXplUHggLyAyO1xuICAgICAgICBjb25zdCBjaXJjbGVSYWRpdXMgPSBoYWxmVW5pdCAvIDI7XG4gICAgICAgIGNvbnN0IGxlYWZIYWxmV2lkdGggPSBjaXJjbGVSYWRpdXMgKiAuODtcbiAgICAgICAgY29uc3QgbGVhZkhhbGZIZWlnaHQgPSBNYXRoLnNxcnQoTWF0aC5wb3coY2lyY2xlUmFkaXVzLCAyKSAtIE1hdGgucG93KGNpcmNsZVJhZGl1cyAtIGxlYWZIYWxmV2lkdGgsIDIpKTtcblxuICAgICAgICBmb3IobGV0IGxlbiA9IDI7IGxlbi0tOyl7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQucmVjdChoYWxmVW5pdCAtIGxlYWZIYWxmV2lkdGggKiBsZW4sIGhhbGZVbml0IC0gbGVhZkhhbGZIZWlnaHQsIGxlYWZIYWxmV2lkdGgsIGxlYWZIYWxmSGVpZ2h0ICogMik7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuY2xpcCgpO1xuXG4gICAgICAgICAgICBjb25zdCB4ID0gKGNpcmNsZVJhZGl1cyAtIGxlYWZIYWxmV2lkdGgpICogWy0xLCAxXVtsZW5dO1xuICAgICAgICAgICAgdGhpcy5fZHJhd0NpcmNsZShoYWxmVW5pdCArIHgsIGhhbGZVbml0LCBjaXJjbGVSYWRpdXMsIHRoaXMuY29uZmlnLmxlYWZDb2xvcik7XG5cbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbmZpZy5sZWFmU3RlbUNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8oaGFsZlVuaXQsIGhhbGZVbml0IC0gbGVhZkhhbGZIZWlnaHQpO1xuICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKGhhbGZVbml0LCBoYWxmVW5pdCArIGxlYWZIYWxmSGVpZ2h0ICogMS40KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIF9kcmF3Q2lyY2xlKHgsIHksIHJhZGl1cywgY29sb3Ipe1xuICAgICAgICBjb25zdCBwYXRoID0gbmV3IFBhdGgyRCgpO1xuICAgICAgICBwYXRoLmFyYyh4LCB5LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbChwYXRoKTtcbiAgICB9XG5cbiAgICBfZHJhd09ic2VydmVkQXJlYShhZ2VudHMpe1xuICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xuXG4gICAgICAgIGNvbnN0IG9ic2VydmVkUG9zaXRpb25zID0gYWdlbnRzLnJlZHVjZSgoY2FycnksIGFnZW50KSA9PiB0aGlzLl9hZGRPYnNlcnZlZFBvc2l0aW9uc0Zyb21BZ2VudChjYXJyeSwgYWdlbnQpLCB7fSk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuY29uZmlnLnVub2JzZXJ2ZWRDb2xvcjtcbiAgICAgICAgdGhpcy5faXRlcmF0ZVBvc2l0aW9ucygoeCwgeSkgPT4gdGhpcy5fZHJhd1Vub2JzZXJ2ZWRTcXVhcmVzKG9ic2VydmVkUG9zaXRpb25zLCB4LCB5KSk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBfYWRkT2JzZXJ2ZWRQb3NpdGlvbnNGcm9tQWdlbnQob2JqLCBhZ2VudCl7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuZW52aXJvbm1lbnQuZ2V0Vmlld1Bvc2l0aW9uc0ZvcihhZ2VudCk7XG4gICAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKGFyciA9PiBvYmpbcG9zaXRpb25TdHJpbmcoLi4uYXJyKV0gPSB0cnVlKTtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIF9kcmF3VW5vYnNlcnZlZFNxdWFyZXMob2JzZXJ2ZWRQb3NpdGlvbnMsIHgsIHkpe1xuICAgICAgICBjb25zdCBrZXkgPSBwb3NpdGlvblN0cmluZyh4LCB5KTtcbiAgICAgICAgaWYob2JzZXJ2ZWRQb3NpdGlvbnNba2V5XSlcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBjb25zdCBwaXhlbHMgPSB0aGlzLl9nZXRQaXhlbFBvc2l0aW9uKHgsIHkpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoLi4ucGl4ZWxzLCB0aGlzLmNvbmZpZy51bml0U2l6ZVB4LCB0aGlzLmNvbmZpZy51bml0U2l6ZVB4KTtcbiAgIH1cblxuICAgIF9kcmF3TW91c2VIaWdobGlnaHQoKXtcbiAgICAgICAgaWYodGhpcy5tb3VzZVBvc2l0aW9uID09PSBudWxsIHx8IHRoaXMucG9zaXRpb25TZWxlY3Rpb25DYWxsYmFja3MubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XG5cbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLl9nZXRIaWdobGlnaHRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBwaXhlbHMgPSB0aGlzLl9nZXRQaXhlbFBvc2l0aW9uKC4uLnBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuY29uZmlnLmhpZ2hsaWdodENvbG9yO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoLi4ucGl4ZWxzLCB0aGlzLmNvbmZpZy51bml0U2l6ZVB4LCB0aGlzLmNvbmZpZy51bml0U2l6ZVB4KTtcblxuICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIF9nZXRIaWdobGlnaHRQb3NpdGlvbigpe1xuICAgICAgICBpZih0aGlzLm1vdXNlUG9zaXRpb24gPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMuY2FudmFzLmdldENsaWVudFJlY3RzKClbMF07XG4gICAgICAgIGNvbnN0IG9mZnNldHMgPSBbeCwgeV07XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlUG9zaXRpb24ubWFwKChudW0sIGluZGV4KSA9PiBNYXRoLmZsb29yKChudW0gLSBvZmZzZXRzW2luZGV4XSkgLyB0aGlzLmNvbmZpZy51bml0U2l6ZVB4KSk7XG4gICAgfVxuXG4gICAgbmV4dFBvc2l0aW9uU2VsZWN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgdGhpcy5wb3NpdGlvblNlbGVjdGlvbkNhbGxiYWNrcyA9IFsuLi50aGlzLnBvc2l0aW9uU2VsZWN0aW9uQ2FsbGJhY2tzLCBjYWxsYmFja107XG4gICAgfVxuXG4gICAgX2hhbmRsZU1vdXNlTW92ZShldmVudCl7XG4gICAgICAgIHRoaXMubW91c2VQb3NpdGlvbiA9IFtldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZXTtcbiAgICB9XG5cbiAgICBfaGFuZGxlQ2xpY2soZXZlbnQpe1xuICAgICAgICBjb25zdCBoaWdobGlnaHQgPSB0aGlzLl9nZXRIaWdobGlnaHRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLnBvc2l0aW9uU2VsZWN0aW9uQ2FsbGJhY2tzO1xuICAgICAgICB0aGlzLnBvc2l0aW9uU2VsZWN0aW9uQ2FsbGJhY2tzID0gW107XG4gICAgICAgIGNhbGxiYWNrcy5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrKC4uLmhpZ2hsaWdodCkpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1JlbmRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==