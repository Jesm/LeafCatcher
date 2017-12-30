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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Thing_js__ = __webpack_require__(5);


class Leaf extends __WEBPACK_IMPORTED_MODULE_0__Thing_js__["a" /* default */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Leaf;
;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Thing_js__ = __webpack_require__(5);


class Hole extends __WEBPACK_IMPORTED_MODULE_0__Thing_js__["a" /* default */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Hole;
;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const positionString = (...arr) => arr.join(' ');
/* harmony export (immutable) */ __webpack_exports__["a"] = positionString;

const randomNumber = number => Math.floor(Math.random() * number);
/* harmony export (immutable) */ __webpack_exports__["b"] = randomNumber;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const MOVED = Symbol('moved');
/* harmony export (immutable) */ __webpack_exports__["MOVED"] = MOVED;

const ACTION_COMPLETE = Symbol('action_complete');
/* harmony export (immutable) */ __webpack_exports__["ACTION_COMPLETE"] = ACTION_COMPLETE;

const ACTION_FAILED = Symbol('action_failed');
/* harmony export (immutable) */ __webpack_exports__["ACTION_FAILED"] = ACTION_FAILED;

const ACTION_PROGRESSED = Symbol('action_progressed');
/* harmony export (immutable) */ __webpack_exports__["ACTION_PROGRESSED"] = ACTION_PROGRESSED;

const CAPTURED_VIEW = Symbol('captured_view');
/* harmony export (immutable) */ __webpack_exports__["CAPTURED_VIEW"] = CAPTURED_VIEW;

const CATCH = Symbol('catch');
/* harmony export (immutable) */ __webpack_exports__["CATCH"] = CATCH;

const DROP = Symbol('drop');
/* harmony export (immutable) */ __webpack_exports__["DROP"] = DROP;


const factory = (type, sender, data) => ({ type, sender, data });
/* harmony export (immutable) */ __webpack_exports__["factory"] = factory;

const typeIs = (event, ...types) => types.includes(event.type);
/* harmony export (immutable) */ __webpack_exports__["typeIs"] = typeIs;



/***/ }),
/* 4 */
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


const cost = action => {
    switch(action){
    case UP: case RIGHT: case DOWN: case LEFT:
        return 1;
    case DROP:
        return 2;
    case CATCH:
        return 3;
    }
}
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
/* 5 */
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_aStar__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Thing_js__ = __webpack_require__(5);





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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__goals__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Agent_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Leaf_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Hole_js__ = __webpack_require__(1);








const containsObj = (square, objectClass) => square.objects.some(obj => obj instanceof objectClass);

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
        if(!this.state.environment)
            return;

        const view = this.state.environment.getViewFor(this);
        const event = Object(__WEBPACK_IMPORTED_MODULE_0__events__["factory"])(__WEBPACK_IMPORTED_MODULE_0__events__["CAPTURED_VIEW"], this, view);
        this.perceive(event);
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
        if(Object(__WEBPACK_IMPORTED_MODULE_0__events__["typeIs"])(event, __WEBPACK_IMPORTED_MODULE_0__events__["MOVED"]) && state.environment === null)
            return Object.assign({}, state, { environment: event.sender });

        return state;
    }

    _updatePosition(state, event){
        if(Object(__WEBPACK_IMPORTED_MODULE_0__events__["typeIs"])(event, __WEBPACK_IMPORTED_MODULE_0__events__["MOVED"])){
            const { position } = event.data;
            return Object.assign({}, state, { position });
        }

        return state;
    }

    _updateWorld(state, event){
        if(Object(__WEBPACK_IMPORTED_MODULE_0__events__["typeIs"])(event, __WEBPACK_IMPORTED_MODULE_0__events__["CAPTURED_VIEW"])){
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
            this._shouldDropLeaf,
            this._shouldCatchLeaf,
            this._shouldMoveTowardsHole,
            this._shouldMoveTowardsLeaf,
            this._shouldExploreWorld,
            this._shouldVisitOldSquares
        ];
    }

    _shouldDropLeaf(state){
        if(!(state.carries && state.carries instanceof __WEBPACK_IMPORTED_MODULE_5__Leaf_js__["a" /* default */]))
            return;

        const square = state.world[Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* positionString */])(...state.position)];
        if(square && containsObj(square, __WEBPACK_IMPORTED_MODULE_6__Hole_js__["a" /* default */]))
            return Object(__WEBPACK_IMPORTED_MODULE_1__goals__["c" /* factory */])(__WEBPACK_IMPORTED_MODULE_1__goals__["a" /* CARRY */], { carry: false });
    }

    _shouldCatchLeaf(state){
        if(state.carries)
            return;

        const square = state.world[Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* positionString */])(...state.position)];
        if(square && containsObj(square, __WEBPACK_IMPORTED_MODULE_5__Leaf_js__["a" /* default */]))
            return Object(__WEBPACK_IMPORTED_MODULE_1__goals__["c" /* factory */])(__WEBPACK_IMPORTED_MODULE_1__goals__["a" /* CARRY */], { carry: true });
    }

    _shouldMoveTowardsHole(state){
        let squares;
        if(state.carries && (squares = this._squaresContaining(state.world, __WEBPACK_IMPORTED_MODULE_6__Hole_js__["a" /* default */])).length){
            const closest = this._closestSquare(state.position, squares);
            if(closest)
                return Object(__WEBPACK_IMPORTED_MODULE_1__goals__["c" /* factory */])(__WEBPACK_IMPORTED_MODULE_1__goals__["b" /* GOTO */], { position: closest.value });
        }
    }

    _shouldMoveTowardsLeaf(state){
        let squares;
        if(state.carries === null && (squares = this._squaresContaining(state.world, __WEBPACK_IMPORTED_MODULE_5__Leaf_js__["a" /* default */])).length){
            const closest = this._closestSquare(state.position, squares);
            if(closest)
                return Object(__WEBPACK_IMPORTED_MODULE_1__goals__["c" /* factory */])(__WEBPACK_IMPORTED_MODULE_1__goals__["b" /* GOTO */], { position: closest.value });
        }
    }

    _shouldExploreWorld(state){
        const squares = this._squaresWithUnknowNeighbours(state.world);
        const closest = this._closestSquare(state.position, squares);
        if(closest)
            return Object(__WEBPACK_IMPORTED_MODULE_1__goals__["c" /* factory */])(__WEBPACK_IMPORTED_MODULE_1__goals__["b" /* GOTO */], { position: closest.value });
    }

    _shouldVisitOldSquares(state){
        const squares = this._squaresForVisit(state.world);
        if(squares.length){
            const index = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* randomNumber */])(squares.length);
            return Object(__WEBPACK_IMPORTED_MODULE_1__goals__["c" /* factory */])(__WEBPACK_IMPORTED_MODULE_1__goals__["b" /* GOTO */], { position: squares[index].value });
        }
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

    _squaresForVisit(world){
        const squares = Object.values(world);
        const sortedSquares = squares.sort((a, b) => a.timestamp - b.timestamp);

        if(sortedSquares.length){
            const limit = sortedSquares[0].timestamp;
            return sortedSquares.filter(obj => obj.timestamp === limit);
        }

        return [];
    }

    _squaresContaining(world, objectClass){
        return Object.values(world).filter(square => containsObj(square, objectClass));
    }

    _closestSquare(position, squares){
        const sortedSquares = squares.map(square => ({ square, distance: this._distanceTo(position, square.value) }))
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
                return !!state.world[canonical(position)];
            });
        };

        const result = (pos, action) => applyActionToPosition(action, pos);
        const initialState = state.position;
        const goalTest = pos => pos.every((num, index) => num === position[index]);
        const pathCost = (from, action, to) => cost(action);
        const heuristic = pos => this._distanceTo(pos, position);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Environment_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Hole_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Ant_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Leaf_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Render_js__ = __webpack_require__(12);






(doc => {
    const unitSizePx = 40;
    const unitOrder = 8;
    const viewRadius = 2;

    const environment = new __WEBPACK_IMPORTED_MODULE_0__Environment_js__["a" /* default */]({
        width: unitOrder,
        height: unitOrder,
        viewRadius
    });
    const hole = new __WEBPACK_IMPORTED_MODULE_1__Hole_js__["a" /* default */]();
    environment.addAtRandom(hole);
    environment.up();

    const ant = new __WEBPACK_IMPORTED_MODULE_2__Ant_js__["a" /* default */]();
    environment.addAtRandom(ant);
    ant.up();

    const canvas = doc.createElement('canvas');
    canvas.width = canvas.height = unitSizePx * unitOrder;
    doc.body.appendChild(canvas);

    const button = doc.createElement('button');
    button.innerText = 'Adicionar folha';
    button.addEventListener('click', event => {
        const leaf = new __WEBPACK_IMPORTED_MODULE_3__Leaf_js__["a" /* default */]();
        environment.addAtRandom(leaf);
    });
    doc.body.appendChild(button);

    const render = new __WEBPACK_IMPORTED_MODULE_4__Render_js__["a" /* default */](environment, canvas);
    render.up();
})(document);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Agent_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Leaf_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Hole_js__ = __webpack_require__(1);







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
            cycleDuration: 400,
            viewRadius: 8
        }, args);

        this.positions = makePositionsIndex(this.width(), this.height());
        this.leaves = [];
    }

    width(){
        return this.config.width;
    }

    height(){
        return this.config.height;
    }

    objects(){
        return Object.values(this.positions)
            .filter(pos => pos.objects.length > 0)
            .reduce((carry, pos) => [...carry, ...pos.objects], []);
    }

    agents(){
        return this.objects().filter(obj => obj instanceof __WEBPACK_IMPORTED_MODULE_3__Agent_js__["a" /* default */]);
    }

    addAtRandom(object){
        const position = this._getAvailableRandomPosition();
        if(position)
            this.add(object, ...position);
    }

    _getAvailableRandomPosition(){
        const positions = Object.values(this.positions)
            .filter(pos => pos.objects.length === 0)
            .map(pos => pos.value);

        return positions.length ? positions[Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* randomNumber */])(positions.length)] : null;
    }

    add(object, ...position){
        this._moveObject(object, ...position);
    }

    getViewFor(agent){
        return this.getViewPositionsFor(agent)
            .map(pos => this.positions[Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* positionString */])(...pos)]);
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

    up(){
        this.intervalRef = setInterval(() => this._cycle(), this.config.cycleDuration);
        this._cycle();
    }

    _cycle(){
        this._progressActions();
    }

    _progressActions(){
        this.agents().forEach(agent => this._progressAction(agent));
    }

    _progressAction(agent){
        const action = agent.act();
        if(action === null)
            return;

        const success = this._executeAction(agent, action);

        const { ACTION_FAILED, ACTION_PROGRESSED, ACTION_COMPLETE } = __WEBPACK_IMPORTED_MODULE_1__events__;
        const eventType = success ? (__WEBPACK_IMPORTED_MODULE_2__actions__["isComplete"](action) ? ACTION_COMPLETE : ACTION_PROGRESSED) : ACTION_FAILED;
        const event = __WEBPACK_IMPORTED_MODULE_1__events__["factory"](eventType, this, action);
        agent.perceive(event);
    }

    _executeAction(agent, action){
        switch(true){
            case __WEBPACK_IMPORTED_MODULE_2__actions__["isMovement"](action):
                return this._executeDisplacementAction(agent, action);
            case __WEBPACK_IMPORTED_MODULE_2__actions__["typeIs"](action, __WEBPACK_IMPORTED_MODULE_2__actions__["CATCH"]):
                return this._executeCatchAction(agent, action);
            case __WEBPACK_IMPORTED_MODULE_2__actions__["typeIs"](action, __WEBPACK_IMPORTED_MODULE_2__actions__["DROP"]):
                return this._executeDropAction(agent, action);
        }
    }

    _executeDisplacementAction(agent, action){
        const position = agent.getPosition();
        const newPosition = __WEBPACK_IMPORTED_MODULE_2__actions__["applyActionToPosition"](action.type, position);

        if(this._isInBound(...newPosition)){
            this._moveObject(agent, ...newPosition);
            __WEBPACK_IMPORTED_MODULE_2__actions__["increaseProgress"](action);
            return true;
        }

        return false;
    }

    _executeCatchAction(agent, action){
        if(agent.carriesSomething())
            return false;

        const leaves = this._objectsInSamePosition(agent)
            .filter(object => object instanceof __WEBPACK_IMPORTED_MODULE_4__Leaf_js__["a" /* default */])
            .filter(object => !object.beingCarried());

        if(leaves.length){
            __WEBPACK_IMPORTED_MODULE_2__actions__["increaseProgress"](action);
            if(__WEBPACK_IMPORTED_MODULE_2__actions__["isComplete"](action))
                this._attachTo(leaves[0], agent);

            return true;
        }

        return false;
    }

    _executeDropAction(agent, action){
        if(!agent.carriesSomething())
            return false;

        const holes = this._objectsInSamePosition(agent)
            .filter(object => object instanceof __WEBPACK_IMPORTED_MODULE_5__Hole_js__["a" /* default */]);

        if(holes.length){
            __WEBPACK_IMPORTED_MODULE_2__actions__["increaseProgress"](action);
            if(__WEBPACK_IMPORTED_MODULE_2__actions__["isComplete"](action)){
                const object = agent.getCarriedObject();
                this._dettachFrom(object, agent);

                if(object instanceof __WEBPACK_IMPORTED_MODULE_4__Leaf_js__["a" /* default */])
                    this._consumeLeaf(object);
            }

            return true;
        }

        return false;
    }

    _isInBound(...position){
        const limits = [this.width(), this.height()];
        return position.every((value, index) => value >= 0 && value < limits[index]);
    }

    _objectsInSamePosition(object){
        const position = object.getPosition();
        const key = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* positionString */])(...position);
        return this.positions[key].objects.filter(obj => obj != object);
    }

    _moveObject(object, ...position){
        const currentPosition = object.getPosition();
        if(currentPosition != null)
            this._removeFromPosition(object, ...currentPosition);

        this._addToPosition(object, ...position);
        object.setPosition(...position);

        if(object instanceof __WEBPACK_IMPORTED_MODULE_3__Agent_js__["a" /* default */]){
            const event = __WEBPACK_IMPORTED_MODULE_1__events__["factory"](__WEBPACK_IMPORTED_MODULE_1__events__["MOVED"], this, { object, position });
            object.perceive(event);
        }

        if(object.carriesSomething())
            this._moveObject(object.getCarriedObject(), ...position);
    }

    _removeFromPosition(object, ...position){
        this._alterPositionObjects(position, objs => objs.filter(obj => obj != object));
    }

    _addToPosition(object, ...position){
        this._alterPositionObjects(position, objs => [...objs, object]);
    }

    _alterPositionObjects(position, callback){
        const key = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* positionString */])(...position);
        const obj = this.positions[key];
        const objects = callback(obj.objects);
        this.positions[key] = Object.assign({}, obj, { objects });
    }

    _attachTo(object, agent){
        object.setCarrierObject(agent);
        agent.setCarriedObject(object);

        if(agent instanceof __WEBPACK_IMPORTED_MODULE_3__Agent_js__["a" /* default */]){
            const event = __WEBPACK_IMPORTED_MODULE_1__events__["factory"](__WEBPACK_IMPORTED_MODULE_1__events__["CATCH"], this, { object });
            agent.perceive(event);
        }
    }

    _dettachFrom(object, agent){
        object.setCarrierObject(null);
        agent.setCarriedObject(null);

        if(agent instanceof __WEBPACK_IMPORTED_MODULE_3__Agent_js__["a" /* default */]){
            const event = __WEBPACK_IMPORTED_MODULE_1__events__["factory"](__WEBPACK_IMPORTED_MODULE_1__events__["DROP"], this, { object });
            agent.perceive(event);
        }
    }

    _consumeLeaf(leaf){
        this._removeFromPosition(leaf, ...leaf.getPosition());
        this.leaves = [...this.leaves, leaf];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Environment;



/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CARRY = Symbol('carry');
/* harmony export (immutable) */ __webpack_exports__["a"] = CARRY;

const GOTO = Symbol('goto');
/* harmony export (immutable) */ __webpack_exports__["b"] = GOTO;


const factory = (type, data = {}) => Object.assign({ type }, data);
/* harmony export (immutable) */ __webpack_exports__["c"] = factory;



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Ant_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Hole_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Leaf_js__ = __webpack_require__(0);





class Render {
    constructor(environment, element, config = {}){
        this.environment = environment;

        this.htmlElement = element;
        this.context = this.htmlElement.getContext('2d');
        this.animationFrameReq = null;

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
            holeBorderColor: '#725042'
        }, config);

        if(this.config.unitSizePx === null)
            this.config.unitSizePx = this.htmlElement.width / this.environment.width();
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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Render;



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTI3NWVjMTY4ZGMwYmY1ZGU1OTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xlYWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RoaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9BZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQW50LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlYXJjaC9hU3Rhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ29hbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlbmRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzdEQTs7QUFFQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ0ZBOztBQUVBO0FBQUE7QUFBQTs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ0RBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFFQSwwQ0FBaUQscUJBQXFCO0FBQUE7QUFBQTtBQUN0RTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUVBLDBCQUFpQyxvQkFBb0I7QUFBQTtBQUFBO0FBQ3JEO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNpRDtBQUNqQjtBQUNoQzs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFPO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixPQUFPO0FBQy9COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHVIQUF1SDs7QUFFdkg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1Mjc1ZWMxNjhkYzBiZjVkZTU5MCIsImltcG9ydCBUaGluZyBmcm9tICcuL1RoaW5nLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhZiBleHRlbmRzIFRoaW5nIHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvTGVhZi5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVGhpbmcgZnJvbSAnLi9UaGluZy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbGUgZXh0ZW5kcyBUaGluZyB7fTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0hvbGUuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IHBvc2l0aW9uU3RyaW5nID0gKC4uLmFycikgPT4gYXJyLmpvaW4oJyAnKTtcbmV4cG9ydCBjb25zdCByYW5kb21OdW1iZXIgPSBudW1iZXIgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbnVtYmVyKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3V0aWxzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBNT1ZFRCA9IFN5bWJvbCgnbW92ZWQnKTtcbmV4cG9ydCBjb25zdCBBQ1RJT05fQ09NUExFVEUgPSBTeW1ib2woJ2FjdGlvbl9jb21wbGV0ZScpO1xuZXhwb3J0IGNvbnN0IEFDVElPTl9GQUlMRUQgPSBTeW1ib2woJ2FjdGlvbl9mYWlsZWQnKTtcbmV4cG9ydCBjb25zdCBBQ1RJT05fUFJPR1JFU1NFRCA9IFN5bWJvbCgnYWN0aW9uX3Byb2dyZXNzZWQnKTtcbmV4cG9ydCBjb25zdCBDQVBUVVJFRF9WSUVXID0gU3ltYm9sKCdjYXB0dXJlZF92aWV3Jyk7XG5leHBvcnQgY29uc3QgQ0FUQ0ggPSBTeW1ib2woJ2NhdGNoJyk7XG5leHBvcnQgY29uc3QgRFJPUCA9IFN5bWJvbCgnZHJvcCcpO1xuXG5leHBvcnQgY29uc3QgZmFjdG9yeSA9ICh0eXBlLCBzZW5kZXIsIGRhdGEpID0+ICh7IHR5cGUsIHNlbmRlciwgZGF0YSB9KTtcbmV4cG9ydCBjb25zdCB0eXBlSXMgPSAoZXZlbnQsIC4uLnR5cGVzKSA9PiB0eXBlcy5pbmNsdWRlcyhldmVudC50eXBlKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2V2ZW50cy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgVVAgPSBTeW1ib2woJ3VwJyk7XG5leHBvcnQgY29uc3QgUklHSFQgPSBTeW1ib2woJ3JpZ2h0Jyk7XG5leHBvcnQgY29uc3QgRE9XTiA9IFN5bWJvbCgnZG93bicpO1xuZXhwb3J0IGNvbnN0IExFRlQgPSBTeW1ib2woJ2xlZnQnKTtcbmV4cG9ydCBjb25zdCBDQVRDSCA9IFN5bWJvbCgnY2F0Y2gnKTtcbmV4cG9ydCBjb25zdCBEUk9QID0gU3ltYm9sKCdkcm9wJyk7XG5cbmV4cG9ydCBjb25zdCBjb3N0ID0gYWN0aW9uID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uKXtcbiAgICBjYXNlIFVQOiBjYXNlIFJJR0hUOiBjYXNlIERPV046IGNhc2UgTEVGVDpcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgY2FzZSBEUk9QOlxuICAgICAgICByZXR1cm4gMjtcbiAgICBjYXNlIENBVENIOlxuICAgICAgICByZXR1cm4gMztcbiAgICB9XG59XG5cbmNvbnN0IHBvc2l0aW9uVHJhbnNmb3JtYXRpb25zID0ge1xuICAgIFtVUF06IFswLCAtMV0sXG4gICAgW0RPV05dOiBbMCwgMV0sXG4gICAgW1JJR0hUXTogWzEsIDBdLFxuICAgIFtMRUZUXTogWy0xLCAwXVxufTtcblxuZXhwb3J0IGNvbnN0IGFwcGx5QWN0aW9uVG9Qb3NpdGlvbiA9ICh0eXBlLCBwb3NpdGlvbikgPT4gcG9zaXRpb25UcmFuc2Zvcm1hdGlvbnNbdHlwZV1cbiAgICAubWFwKChudW0sIGluZGV4KSA9PiBudW0gKyBwb3NpdGlvbltpbmRleF0pO1xuXG5leHBvcnQgY29uc3QgZmFjdG9yeSA9IHR5cGUgPT4gKHsgdHlwZSwgcHJvZ3Jlc3M6IDAgfSk7XG5leHBvcnQgY29uc3QgaW5jcmVhc2VQcm9ncmVzcyA9IGFjdGlvbiA9PiBhY3Rpb24ucHJvZ3Jlc3MrKztcbmV4cG9ydCBjb25zdCBpc0NvbXBsZXRlID0gYWN0aW9uID0+IGFjdGlvbi5wcm9ncmVzcyA9PT0gY29zdChhY3Rpb24udHlwZSk7XG5leHBvcnQgY29uc3QgdHlwZUlzID0gKGFjdGlvbiwgLi4udHlwZXMpID0+IHR5cGVzLmluY2x1ZGVzKGFjdGlvbi50eXBlKTtcbmV4cG9ydCBjb25zdCBpc01vdmVtZW50ID0gYWN0aW9uID0+IHR5cGVJcyhhY3Rpb24sIFVQLCBSSUdIVCwgRE9XTiwgTEVGVCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY3Rpb25zL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRoaW5nIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYXJyaWVzID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYXJyaWVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgICB9XG5cbiAgICBzZXRQb3NpdGlvbiguLi5hcnIpe1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gYXJyO1xuICAgIH1cblxuICAgIHNldENhcnJpZWRPYmplY3Qob2JqZWN0KXtcbiAgICAgICAgdGhpcy5jYXJyaWVzID0gb2JqZWN0O1xuICAgIH1cblxuICAgIHNldENhcnJpZXJPYmplY3Qob2JqZWN0KXtcbiAgICAgICAgdGhpcy5jYXJyaWVyID0gb2JqZWN0O1xuICAgIH1cblxuICAgIGdldENhcnJpZWRPYmplY3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FycmllcztcbiAgICB9XG5cbiAgICBnZXRDYXJyaWVyT2JqZWN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcnJpZXI7XG4gICAgfVxuXG4gICAgY2Fycmllc1NvbWV0aGluZygpe1xuICAgICAgICByZXR1cm4gISF0aGlzLmNhcnJpZXM7XG4gICAgfVxuXG4gICAgYmVpbmdDYXJyaWVkKCl7XG4gICAgICAgIHJldHVybiAhIXRoaXMuY2FycmllcjtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9UaGluZy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgc2VhcmNoIGZyb20gJy4vc2VhcmNoL2FTdGFyJztcbmltcG9ydCB7IHR5cGVJcywgQUNUSU9OX0ZBSUxFRCwgQUNUSU9OX0NPTVBMRVRFIH0gZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0IHsgZmFjdG9yeSBhcyBtYWtlQWN0aW9uIH0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCBUaGluZyBmcm9tICcuL1RoaW5nLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWdlbnQgZXh0ZW5kcyBUaGluZyB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge30pe1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLl9nZXRJbml0aWFsU3RhdGUoKTtcbiAgICAgICAgdGhpcy5ldmVudFF1ZXVlID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudEdvYWwgPSBudWxsO1xuICAgICAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZSA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSBudWxsO1xuXG4gICAgICAgIHRoaXMuaW50ZXJ2YWxSZWYgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICByZWFzb25pbmdJbnRlcnZhbDogMjAwXG4gICAgICAgIH0sIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgX2dldEluaXRpYWxTdGF0ZSgpe1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgcGVyY2VpdmUoZXZlbnQpe1xuICAgICAgICB0aGlzLmV2ZW50UXVldWUgPSBbLi4udGhpcy5ldmVudFF1ZXVlLCBldmVudF07XG4gICAgfVxuXG4gICAgYWN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRBY3Rpb247XG4gICAgfVxuXG4gICAgdXAoKXtcbiAgICAgICAgdGhpcy5pbnRlcnZhbFJlZiA9IHNldEludGVydmFsKCgpID0+IHRoaXMuX3JlYXNvbigpLCB0aGlzLmNvbmZpZy5yZWFzb25pbmdJbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuX3JlYXNvbigpO1xuICAgIH1cblxuICAgIF9yZWFzb24oKXtcbiAgICAgICAgdGhpcy5fYmVmb3JlUmVhc29uaW5nKCk7XG5cbiAgICAgICAgY29uc3QgcGVyY2VwdHMgPSB0aGlzLmV2ZW50UXVldWU7XG4gICAgICAgIHRoaXMuZXZlbnRRdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5fdXBkYXRlU3RhdGUodGhpcy5zdGF0ZSwgcGVyY2VwdHMpO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSBiZXR0ZXIgZ29hbCB0byBwdXJzdWUgdGhhbiB0aGUgY3VycmVudCBvbmVcbiAgICAgICAgY29uc3QgZ29hbEluZGV4ID0gdGhpcy5jdXJyZW50R29hbCA/IHRoaXMuY3VycmVudEdvYWwuaW5kZXggOiBudWxsO1xuICAgICAgICBjb25zdCBnb2FsID0gdGhpcy5fZm9ybXVsYXRlR29hbCh0aGlzLnN0YXRlLCBnb2FsSW5kZXgpO1xuICAgICAgICBpZihnb2FsICE9PSBudWxsKXtcbiAgICAgICAgICAgIGNvbnN0IHByb2JsZW0gPSB0aGlzLl9mb3JtdWxhdGVQcm9ibGVtKHRoaXMuc3RhdGUsIGdvYWwpO1xuICAgICAgICAgICAgY29uc3Qgc2VxdWVuY2UgPSBwcm9ibGVtICYmIHNlYXJjaChwcm9ibGVtKTtcbiAgICAgICAgICAgIGlmKHNlcXVlbmNlKXtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRHb2FsID0gZ29hbDtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZSA9IHNlcXVlbmNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmN1cnJlbnRBY3Rpb24gPT09IG51bGwgJiYgdGhpcy5jdXJyZW50U2VxdWVuY2UubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBjb25zdCBbdHlwZSwgLi4udGFpbF0gPSB0aGlzLmN1cnJlbnRTZXF1ZW5jZTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNlcXVlbmNlID0gdGFpbDtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IG1ha2VBY3Rpb24odHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfYmVmb3JlUmVhc29uaW5nKCl7fVxuXG4gICAgX3VwZGF0ZVN0YXRlKHN0YXRlLCBldmVudHMpe1xuICAgICAgICBjb25zdCByZWR1Y2VycyA9IFt0aGlzLl92ZXJpZnlDdXJyZW50QWN0aW9uU3RhdHVzLCAuLi50aGlzLl9nZXRTdGF0ZVJlZHVjZXJzKCldO1xuXG4gICAgICAgIHJldHVybiBldmVudHMucmVkdWNlKChzdGF0ZSwgZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZWR1Y2Vycy5yZWR1Y2UoKHN0YXRlLCByZWR1Y2VyKSA9PiByZWR1Y2VyLmNhbGwodGhpcywgc3RhdGUsIGV2ZW50KSwgc3RhdGUpO1xuICAgICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgX3ZlcmlmeUN1cnJlbnRBY3Rpb25TdGF0dXMoc3RhdGUsIGV2ZW50KXtcbiAgICAgICAgaWYoZXZlbnQuZGF0YSA9PT0gdGhpcy5jdXJyZW50QWN0aW9uKXtcbiAgICAgICAgICAgIHN3aXRjaChldmVudC50eXBlKXtcbiAgICAgICAgICAgICAgICBjYXNlIEFDVElPTl9GQUlMRUQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEdvYWwgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQUNUSU9OX0NPTVBMRVRFOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmN1cnJlbnRTZXF1ZW5jZS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRHb2FsID0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICBfZ2V0U3RhdGVSZWR1Y2Vycygpe1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgX2Zvcm11bGF0ZUdvYWwoc3RhdGUsIG1heEluZGV4ID0gbnVsbCl7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGNvbnN0IGNoYWluID0gdGhpcy5fZ2V0R29hbEV2YWx1YXRpb25DaGFpbigpO1xuICAgICAgICBmb3IobGV0IGZ1biBvZiBjaGFpbil7XG4gICAgICAgICAgICBpZihtYXhJbmRleCAhPT0gbnVsbCAmJiBpbmRleCA+PSBtYXhJbmRleClcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgY29uc3QgZ29hbCA9IGZ1bi5jYWxsKHRoaXMsIHN0YXRlKTtcbiAgICAgICAgICAgIGlmKGdvYWwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyBpbmRleCB9LCBnb2FsKTtcblxuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIF9nZXRHb2FsRXZhbHVhdGlvbkNoYWluKCl7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBfZm9ybXVsYXRlUHJvYmxlbShzdGF0ZSwgZ29hbCl7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0FnZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENBUFRVUkVEX1ZJRVcsIE1PVkVELCBDQVRDSCwgRFJPUCwgZmFjdG9yeSBhcyBtYWtlRXZlbnQsIHR5cGVJcyB9IGZyb20gJy4vZXZlbnRzJztcclxuaW1wb3J0IHsgQ0FSUlksIEdPVE8sIGZhY3RvcnkgYXMgbWFrZUdvYWwgfSBmcm9tICcuL2dvYWxzJztcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBwb3NpdGlvblN0cmluZywgcmFuZG9tTnVtYmVyIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCBBZ2VudCBmcm9tICcuL0FnZW50LmpzJztcclxuaW1wb3J0IExlYWYgZnJvbSAnLi9MZWFmLmpzJztcclxuaW1wb3J0IEhvbGUgZnJvbSAnLi9Ib2xlLmpzJztcclxuXHJcbmNvbnN0IGNvbnRhaW5zT2JqID0gKHNxdWFyZSwgb2JqZWN0Q2xhc3MpID0+IHNxdWFyZS5vYmplY3RzLnNvbWUob2JqID0+IG9iaiBpbnN0YW5jZW9mIG9iamVjdENsYXNzKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFudCBleHRlbmRzIEFnZW50IHtcclxuICAgIF9nZXRJbml0aWFsU3RhdGUoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlbnZpcm9ubWVudDogbnVsbCxcclxuICAgICAgICAgICAgcG9zaXRpb246IG51bGwsXHJcbiAgICAgICAgICAgIHdvcmxkOiB7fSxcclxuICAgICAgICAgICAgY2FycmllczogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfYmVmb3JlUmVhc29uaW5nKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuZW52aXJvbm1lbnQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMuc3RhdGUuZW52aXJvbm1lbnQuZ2V0Vmlld0Zvcih0aGlzKTtcclxuICAgICAgICBjb25zdCBldmVudCA9IG1ha2VFdmVudChDQVBUVVJFRF9WSUVXLCB0aGlzLCB2aWV3KTtcclxuICAgICAgICB0aGlzLnBlcmNlaXZlKGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0U3RhdGVSZWR1Y2Vycygpe1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUVudmlyb25tZW50LFxyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVQb3NpdGlvbixcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlV29ybGQsXHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNhcnJpZWRPYmplY3QsXHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURyb3BwZWRPYmplY3RcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVFbnZpcm9ubWVudChzdGF0ZSwgZXZlbnQpe1xyXG4gICAgICAgIGlmKHR5cGVJcyhldmVudCwgTU9WRUQpICYmIHN0YXRlLmVudmlyb25tZW50ID09PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgZW52aXJvbm1lbnQ6IGV2ZW50LnNlbmRlciB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVQb3NpdGlvbihzdGF0ZSwgZXZlbnQpe1xyXG4gICAgICAgIGlmKHR5cGVJcyhldmVudCwgTU9WRUQpKXtcclxuICAgICAgICAgICAgY29uc3QgeyBwb3NpdGlvbiB9ID0gZXZlbnQuZGF0YTtcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHBvc2l0aW9uIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVXb3JsZChzdGF0ZSwgZXZlbnQpe1xyXG4gICAgICAgIGlmKHR5cGVJcyhldmVudCwgQ0FQVFVSRURfVklFVykpe1xyXG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gZXZlbnQuZGF0YTtcclxuICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB2aWV3LnJlZHVjZSgoY2FycnksIHNxdWFyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2Fycnlbc3F1YXJlLmtleV0gPSBPYmplY3QuYXNzaWduKHsgdGltZXN0YW1wIH0sIHNxdWFyZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2Fycnk7XHJcbiAgICAgICAgICAgIH0sIHt9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmxkID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUud29ybGQsIGluZGV4KTtcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHdvcmxkIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVDYXJyaWVkT2JqZWN0KHN0YXRlLCBldmVudCl7XHJcbiAgICAgICAgaWYodHlwZUlzKGV2ZW50LCBDQVRDSCkpXHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBjYXJyaWVzOiBldmVudC5kYXRhLm9iamVjdCB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVEcm9wcGVkT2JqZWN0KHN0YXRlLCBldmVudCl7XHJcbiAgICAgICAgaWYodHlwZUlzKGV2ZW50LCBEUk9QKSAmJiBldmVudC5kYXRhLm9iamVjdCA9PT0gc3RhdGUuY2FycmllcylcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcnJpZXM6IG51bGwgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0R29hbEV2YWx1YXRpb25DaGFpbigpe1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3VsZERyb3BMZWFmLFxyXG4gICAgICAgICAgICB0aGlzLl9zaG91bGRDYXRjaExlYWYsXHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3VsZE1vdmVUb3dhcmRzSG9sZSxcclxuICAgICAgICAgICAgdGhpcy5fc2hvdWxkTW92ZVRvd2FyZHNMZWFmLFxyXG4gICAgICAgICAgICB0aGlzLl9zaG91bGRFeHBsb3JlV29ybGQsXHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3VsZFZpc2l0T2xkU3F1YXJlc1xyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgX3Nob3VsZERyb3BMZWFmKHN0YXRlKXtcclxuICAgICAgICBpZighKHN0YXRlLmNhcnJpZXMgJiYgc3RhdGUuY2FycmllcyBpbnN0YW5jZW9mIExlYWYpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IHN0YXRlLndvcmxkW3Bvc2l0aW9uU3RyaW5nKC4uLnN0YXRlLnBvc2l0aW9uKV07XHJcbiAgICAgICAgaWYoc3F1YXJlICYmIGNvbnRhaW5zT2JqKHNxdWFyZSwgSG9sZSkpXHJcbiAgICAgICAgICAgIHJldHVybiBtYWtlR29hbChDQVJSWSwgeyBjYXJyeTogZmFsc2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Nob3VsZENhdGNoTGVhZihzdGF0ZSl7XHJcbiAgICAgICAgaWYoc3RhdGUuY2FycmllcylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBzcXVhcmUgPSBzdGF0ZS53b3JsZFtwb3NpdGlvblN0cmluZyguLi5zdGF0ZS5wb3NpdGlvbildO1xyXG4gICAgICAgIGlmKHNxdWFyZSAmJiBjb250YWluc09iaihzcXVhcmUsIExlYWYpKVxyXG4gICAgICAgICAgICByZXR1cm4gbWFrZUdvYWwoQ0FSUlksIHsgY2Fycnk6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Nob3VsZE1vdmVUb3dhcmRzSG9sZShzdGF0ZSl7XHJcbiAgICAgICAgbGV0IHNxdWFyZXM7XHJcbiAgICAgICAgaWYoc3RhdGUuY2FycmllcyAmJiAoc3F1YXJlcyA9IHRoaXMuX3NxdWFyZXNDb250YWluaW5nKHN0YXRlLndvcmxkLCBIb2xlKSkubGVuZ3RoKXtcclxuICAgICAgICAgICAgY29uc3QgY2xvc2VzdCA9IHRoaXMuX2Nsb3Nlc3RTcXVhcmUoc3RhdGUucG9zaXRpb24sIHNxdWFyZXMpO1xyXG4gICAgICAgICAgICBpZihjbG9zZXN0KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VHb2FsKEdPVE8sIHsgcG9zaXRpb246IGNsb3Nlc3QudmFsdWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9zaG91bGRNb3ZlVG93YXJkc0xlYWYoc3RhdGUpe1xyXG4gICAgICAgIGxldCBzcXVhcmVzO1xyXG4gICAgICAgIGlmKHN0YXRlLmNhcnJpZXMgPT09IG51bGwgJiYgKHNxdWFyZXMgPSB0aGlzLl9zcXVhcmVzQ29udGFpbmluZyhzdGF0ZS53b3JsZCwgTGVhZikpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3QgPSB0aGlzLl9jbG9zZXN0U3F1YXJlKHN0YXRlLnBvc2l0aW9uLCBzcXVhcmVzKTtcclxuICAgICAgICAgICAgaWYoY2xvc2VzdClcclxuICAgICAgICAgICAgICAgIHJldHVybiBtYWtlR29hbChHT1RPLCB7IHBvc2l0aW9uOiBjbG9zZXN0LnZhbHVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfc2hvdWxkRXhwbG9yZVdvcmxkKHN0YXRlKXtcclxuICAgICAgICBjb25zdCBzcXVhcmVzID0gdGhpcy5fc3F1YXJlc1dpdGhVbmtub3dOZWlnaGJvdXJzKHN0YXRlLndvcmxkKTtcclxuICAgICAgICBjb25zdCBjbG9zZXN0ID0gdGhpcy5fY2xvc2VzdFNxdWFyZShzdGF0ZS5wb3NpdGlvbiwgc3F1YXJlcyk7XHJcbiAgICAgICAgaWYoY2xvc2VzdClcclxuICAgICAgICAgICAgcmV0dXJuIG1ha2VHb2FsKEdPVE8sIHsgcG9zaXRpb246IGNsb3Nlc3QudmFsdWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Nob3VsZFZpc2l0T2xkU3F1YXJlcyhzdGF0ZSl7XHJcbiAgICAgICAgY29uc3Qgc3F1YXJlcyA9IHRoaXMuX3NxdWFyZXNGb3JWaXNpdChzdGF0ZS53b3JsZCk7XHJcbiAgICAgICAgaWYoc3F1YXJlcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHJhbmRvbU51bWJlcihzcXVhcmVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiBtYWtlR29hbChHT1RPLCB7IHBvc2l0aW9uOiBzcXVhcmVzW2luZGV4XS52YWx1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3NxdWFyZXNXaXRoVW5rbm93TmVpZ2hib3Vycyh3b3JsZCl7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyh3b3JsZCk7XHJcbiAgICAgICAgY29uc3Qga25vd05laWdoYm91cnNJbmRleCA9IHZhbHVlcy5yZWR1Y2UoKGNhcnJ5LCBzcXVhcmUpID0+IHtcclxuICAgICAgICAgICAgaWYoIWNhcnJ5W3NxdWFyZS5rZXldKVxyXG4gICAgICAgICAgICAgICAgY2Fycnlbc3F1YXJlLmtleV0gPSAwO1xyXG5cclxuICAgICAgICAgICAgY2Fycnlbc3F1YXJlLmtleV0gKz0gc3F1YXJlLmJsb2NrZWRTaWRlcztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHsgVVAsIERPV04sIExFRlQsIFJJR0hULCBhcHBseUFjdGlvblRvUG9zaXRpb24gfSA9IGFjdGlvbnM7XHJcbiAgICAgICAgICAgIFtVUCwgRE9XTiwgTEVGVCwgUklHSFRdLmZvckVhY2goYWN0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gYXBwbHlBY3Rpb25Ub1Bvc2l0aW9uKGFjdGlvbiwgc3F1YXJlLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHBvc2l0aW9uU3RyaW5nKC4uLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih3b3JsZFtrZXldKXtcclxuICAgICAgICAgICAgICAgICAgICBpZighY2Fycnlba2V5XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Fycnlba2V5XSA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhcnJ5W2tleV0rKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY2Fycnk7XHJcbiAgICAgICAgfSwge30pO1xyXG5cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoa25vd05laWdoYm91cnNJbmRleClcclxuICAgICAgICAgICAgLm1hcChrZXkgPT4gKHsgY21wOiBrbm93TmVpZ2hib3Vyc0luZGV4W2tleV0sIHNxdWFyZTogd29ybGRba2V5XSB9KSlcclxuICAgICAgICAgICAgLmZpbHRlcihvYmogPT4gb2JqLmNtcCA8IDQpXHJcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmNtcCAtIGIuY21wKVxyXG4gICAgICAgICAgICAubWFwKG9iaiA9PiBvYmouc3F1YXJlKTtcclxuICAgIH1cclxuXHJcbiAgICBfc3F1YXJlc0ZvclZpc2l0KHdvcmxkKXtcclxuICAgICAgICBjb25zdCBzcXVhcmVzID0gT2JqZWN0LnZhbHVlcyh3b3JsZCk7XHJcbiAgICAgICAgY29uc3Qgc29ydGVkU3F1YXJlcyA9IHNxdWFyZXMuc29ydCgoYSwgYikgPT4gYS50aW1lc3RhbXAgLSBiLnRpbWVzdGFtcCk7XHJcblxyXG4gICAgICAgIGlmKHNvcnRlZFNxdWFyZXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgY29uc3QgbGltaXQgPSBzb3J0ZWRTcXVhcmVzWzBdLnRpbWVzdGFtcDtcclxuICAgICAgICAgICAgcmV0dXJuIHNvcnRlZFNxdWFyZXMuZmlsdGVyKG9iaiA9PiBvYmoudGltZXN0YW1wID09PSBsaW1pdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgX3NxdWFyZXNDb250YWluaW5nKHdvcmxkLCBvYmplY3RDbGFzcyl7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMod29ybGQpLmZpbHRlcihzcXVhcmUgPT4gY29udGFpbnNPYmooc3F1YXJlLCBvYmplY3RDbGFzcykpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jbG9zZXN0U3F1YXJlKHBvc2l0aW9uLCBzcXVhcmVzKXtcclxuICAgICAgICBjb25zdCBzb3J0ZWRTcXVhcmVzID0gc3F1YXJlcy5tYXAoc3F1YXJlID0+ICh7IHNxdWFyZSwgZGlzdGFuY2U6IHRoaXMuX2Rpc3RhbmNlVG8ocG9zaXRpb24sIHNxdWFyZS52YWx1ZSkgfSkpXHJcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmRpc3RhbmNlIC0gYi5kaXN0YW5jZSlcclxuICAgICAgICAgICAgLm1hcChvYmogPT4gb2JqLnNxdWFyZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzb3J0ZWRTcXVhcmVzLmxlbmd0aCA/IHNvcnRlZFNxdWFyZXNbMF0gOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIF9kaXN0YW5jZVRvKGZyb20sIHRvKXtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGZyb20ucmVkdWNlKChzdW0sIHZhbHVlLCBpbmRleCkgPT4gc3VtICsgTWF0aC5wb3codmFsdWUgLSB0b1tpbmRleF0sIDIpLCAwKTtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBfZm9ybXVsYXRlUHJvYmxlbShzdGF0ZSwgZ29hbCl7XHJcbiAgICAgICAgc3dpdGNoKGdvYWwudHlwZSl7XHJcbiAgICAgICAgICAgIGNhc2UgQ0FSUlk6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2VuZXJhdGVDYXJyeVByb2JsZW0oc3RhdGUsIGdvYWwuY2FycnkpO1xyXG4gICAgICAgICAgICBjYXNlIEdPVE86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2VuZXJhdGVHb3RvUHJvYmxlbShzdGF0ZSwgZ29hbC5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2dlbmVyYXRlQ2FycnlQcm9ibGVtKHN0YXRlLCBjYXJyeSl7XHJcbiAgICAgICAgY29uc3QgeyBDQVRDSCwgRFJPUCwgY29zdCB9ID0gYWN0aW9ucztcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gKGJvb2wsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2goYWN0aW9uKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgQ0FUQ0g6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIERST1A6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5pdGlhbFN0YXRlID0gISFzdGF0ZS5jYXJyaWVzO1xyXG4gICAgICAgIGNvbnN0IHByb2JsZW1BY3Rpb25zID0gYm9vbCA9PiBbYm9vbCA/IERST1AgOiBDQVRDSF07XHJcbiAgICAgICAgY29uc3QgZ29hbFRlc3QgPSBib29sID0+IGJvb2wgPT09IGNhcnJ5O1xyXG4gICAgICAgIGNvbnN0IHBhdGhDb3N0ID0gKGZyb20sIGFjdGlvbiwgdG8pID0+IGNvc3QoYWN0aW9uKTtcclxuICAgICAgICBjb25zdCBoZXVyaXN0aWMgPSBib29sID0+IGJvb2wgPT09IGNhcnJ5ID8gMCA6IDE7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSxcclxuICAgICAgICAgICAgYWN0aW9uczogcHJvYmxlbUFjdGlvbnMsXHJcbiAgICAgICAgICAgIHJlc3VsdCxcclxuICAgICAgICAgICAgZ29hbFRlc3QsXHJcbiAgICAgICAgICAgIHBhdGhDb3N0LFxyXG4gICAgICAgICAgICBoZXVyaXN0aWNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIF9nZW5lcmF0ZUdvdG9Qcm9ibGVtKHN0YXRlLCBwb3NpdGlvbil7XHJcbiAgICAgICAgY29uc3QgeyBVUCwgRE9XTiwgTEVGVCwgUklHSFQsIGNvc3QsIGFwcGx5QWN0aW9uVG9Qb3NpdGlvbiB9ID0gYWN0aW9ucztcclxuXHJcbiAgICAgICAgY29uc3QgcHJvYmxlbUFjdGlvbnMgPSBwb3MgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gW1VQLCBET1dOLCBMRUZULCBSSUdIVF0uZmlsdGVyKGFjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHJlc3VsdChwb3MsIGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gISFzdGF0ZS53b3JsZFtjYW5vbmljYWwocG9zaXRpb24pXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gKHBvcywgYWN0aW9uKSA9PiBhcHBseUFjdGlvblRvUG9zaXRpb24oYWN0aW9uLCBwb3MpO1xyXG4gICAgICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHN0YXRlLnBvc2l0aW9uO1xyXG4gICAgICAgIGNvbnN0IGdvYWxUZXN0ID0gcG9zID0+IHBvcy5ldmVyeSgobnVtLCBpbmRleCkgPT4gbnVtID09PSBwb3NpdGlvbltpbmRleF0pO1xyXG4gICAgICAgIGNvbnN0IHBhdGhDb3N0ID0gKGZyb20sIGFjdGlvbiwgdG8pID0+IGNvc3QoYWN0aW9uKTtcclxuICAgICAgICBjb25zdCBoZXVyaXN0aWMgPSBwb3MgPT4gdGhpcy5fZGlzdGFuY2VUbyhwb3MsIHBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBjYW5vbmljYWwgPSBwb3MgPT4gcG9zaXRpb25TdHJpbmcoLi4ucG9zKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgICAgICAgICBhY3Rpb25zOiBwcm9ibGVtQWN0aW9ucyxcclxuICAgICAgICAgICAgcmVzdWx0LFxyXG4gICAgICAgICAgICBnb2FsVGVzdCxcclxuICAgICAgICAgICAgcGF0aENvc3QsXHJcbiAgICAgICAgICAgIGhldXJpc3RpYyxcclxuICAgICAgICAgICAgY2Fub25pY2FsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9BbnQuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEVudmlyb25tZW50IGZyb20gJy4vRW52aXJvbm1lbnQuanMnO1xuaW1wb3J0IEhvbGUgZnJvbSAnLi9Ib2xlLmpzJztcbmltcG9ydCBBbnQgZnJvbSAnLi9BbnQuanMnO1xuaW1wb3J0IExlYWYgZnJvbSAnLi9MZWFmLmpzJztcbmltcG9ydCBSZW5kZXIgZnJvbSAnLi9SZW5kZXIuanMnO1xuXG4oZG9jID0+IHtcbiAgICBjb25zdCB1bml0U2l6ZVB4ID0gNDA7XG4gICAgY29uc3QgdW5pdE9yZGVyID0gODtcbiAgICBjb25zdCB2aWV3UmFkaXVzID0gMjtcblxuICAgIGNvbnN0IGVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHtcbiAgICAgICAgd2lkdGg6IHVuaXRPcmRlcixcbiAgICAgICAgaGVpZ2h0OiB1bml0T3JkZXIsXG4gICAgICAgIHZpZXdSYWRpdXNcbiAgICB9KTtcbiAgICBjb25zdCBob2xlID0gbmV3IEhvbGUoKTtcbiAgICBlbnZpcm9ubWVudC5hZGRBdFJhbmRvbShob2xlKTtcbiAgICBlbnZpcm9ubWVudC51cCgpO1xuXG4gICAgY29uc3QgYW50ID0gbmV3IEFudCgpO1xuICAgIGVudmlyb25tZW50LmFkZEF0UmFuZG9tKGFudCk7XG4gICAgYW50LnVwKCk7XG5cbiAgICBjb25zdCBjYW52YXMgPSBkb2MuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLndpZHRoID0gY2FudmFzLmhlaWdodCA9IHVuaXRTaXplUHggKiB1bml0T3JkZXI7XG4gICAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvYy5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gJ0FkaWNpb25hciBmb2xoYSc7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBsZWFmID0gbmV3IExlYWYoKTtcbiAgICAgICAgZW52aXJvbm1lbnQuYWRkQXRSYW5kb20obGVhZik7XG4gICAgfSk7XG4gICAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIGNvbnN0IHJlbmRlciA9IG5ldyBSZW5kZXIoZW52aXJvbm1lbnQsIGNhbnZhcyk7XG4gICAgcmVuZGVyLnVwKCk7XG59KShkb2N1bWVudCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBwb3NpdGlvblN0cmluZywgcmFuZG9tTnVtYmVyIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgKiBhcyBldmVudHMgZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IEFnZW50IGZyb20gJy4vQWdlbnQuanMnO1xuaW1wb3J0IExlYWYgZnJvbSAnLi9MZWFmLmpzJztcbmltcG9ydCBIb2xlIGZyb20gJy4vSG9sZS5qcyc7XG5cbmNvbnN0IG1ha2VQb3NpdGlvbnNJbmRleCA9ICh3aWR0aCwgaGVpZ2h0KSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB7fTtcbiAgICBmb3IobGV0IGxlbiA9IHdpZHRoICogaGVpZ2h0OyBsZW4tLTspe1xuICAgICAgICBjb25zdCB4ID0gbGVuICUgd2lkdGg7XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGxlbiAvIHdpZHRoKTtcblxuICAgICAgICBsZXQgYmxvY2tlZFNpZGVzID0gMDtcbiAgICAgICAgaWYoeCA9PT0gMCB8fCB4ID09PSB3aWR0aCAtIDEpXG4gICAgICAgICAgICBibG9ja2VkU2lkZXMrKztcbiAgICAgICAgaWYoeSA9PT0gMCB8fCB5ID09PSBoZWlnaHQgLSAxKVxuICAgICAgICAgICAgYmxvY2tlZFNpZGVzKys7XG5cbiAgICAgICAgY29uc3Qga2V5ID0gcG9zaXRpb25TdHJpbmcoeCwgeSk7XG4gICAgICAgIGluZGV4W2tleV0gPSB7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBibG9ja2VkU2lkZXMsXG4gICAgICAgICAgICB2YWx1ZTogW3gsIHldLFxuICAgICAgICAgICAgb2JqZWN0czogW11cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnZpcm9ubWVudCB7XG4gICAgY29uc3RydWN0b3IoYXJncyA9IHt9KXtcbiAgICAgICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHdpZHRoOiAzMixcbiAgICAgICAgICAgIGhlaWdodDogMzIsXG4gICAgICAgICAgICBjeWNsZUR1cmF0aW9uOiA0MDAsXG4gICAgICAgICAgICB2aWV3UmFkaXVzOiA4XG4gICAgICAgIH0sIGFyZ3MpO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb25zID0gbWFrZVBvc2l0aW9uc0luZGV4KHRoaXMud2lkdGgoKSwgdGhpcy5oZWlnaHQoKSk7XG4gICAgICAgIHRoaXMubGVhdmVzID0gW107XG4gICAgfVxuXG4gICAgd2lkdGgoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLndpZHRoO1xuICAgIH1cblxuICAgIGhlaWdodCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuaGVpZ2h0O1xuICAgIH1cblxuICAgIG9iamVjdHMoKXtcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbnMpXG4gICAgICAgICAgICAuZmlsdGVyKHBvcyA9PiBwb3Mub2JqZWN0cy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgLnJlZHVjZSgoY2FycnksIHBvcykgPT4gWy4uLmNhcnJ5LCAuLi5wb3Mub2JqZWN0c10sIFtdKTtcbiAgICB9XG5cbiAgICBhZ2VudHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0cygpLmZpbHRlcihvYmogPT4gb2JqIGluc3RhbmNlb2YgQWdlbnQpO1xuICAgIH1cblxuICAgIGFkZEF0UmFuZG9tKG9iamVjdCl7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5fZ2V0QXZhaWxhYmxlUmFuZG9tUG9zaXRpb24oKTtcbiAgICAgICAgaWYocG9zaXRpb24pXG4gICAgICAgICAgICB0aGlzLmFkZChvYmplY3QsIC4uLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBfZ2V0QXZhaWxhYmxlUmFuZG9tUG9zaXRpb24oKXtcbiAgICAgICAgY29uc3QgcG9zaXRpb25zID0gT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9ucylcbiAgICAgICAgICAgIC5maWx0ZXIocG9zID0+IHBvcy5vYmplY3RzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIC5tYXAocG9zID0+IHBvcy52YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHBvc2l0aW9ucy5sZW5ndGggPyBwb3NpdGlvbnNbcmFuZG9tTnVtYmVyKHBvc2l0aW9ucy5sZW5ndGgpXSA6IG51bGw7XG4gICAgfVxuXG4gICAgYWRkKG9iamVjdCwgLi4ucG9zaXRpb24pe1xuICAgICAgICB0aGlzLl9tb3ZlT2JqZWN0KG9iamVjdCwgLi4ucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGdldFZpZXdGb3IoYWdlbnQpe1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRWaWV3UG9zaXRpb25zRm9yKGFnZW50KVxuICAgICAgICAgICAgLm1hcChwb3MgPT4gdGhpcy5wb3NpdGlvbnNbcG9zaXRpb25TdHJpbmcoLi4ucG9zKV0pO1xuICAgIH1cblxuICAgIGdldFZpZXdQb3NpdGlvbnNGb3IoYWdlbnQpe1xuICAgICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLndpZHRoKCk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IHsgdmlld1JhZGl1czogcmFkaXVzIH0gPSB0aGlzLmNvbmZpZztcbiAgICAgICAgY29uc3QgW2FnZW50WCwgYWdlbnRZXSA9IGFnZW50LmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IHRvWCA9IE1hdGgubWluKGFnZW50WCArIHJhZGl1cyArIDEsIHdpZHRoKTtcblxuICAgICAgICBmb3IobGV0IHggPSBNYXRoLm1heChhZ2VudFggLSByYWRpdXMsIDApOyB4IDwgdG9YOyB4Kyspe1xuICAgICAgICAgICAgY29uc3QgdmFsdWVZID0gTWF0aC5zcXJ0KE1hdGgucG93KHJhZGl1cywgMikgLSBNYXRoLnBvdyh4IC0gYWdlbnRYLCAyKSk7XG4gICAgICAgICAgICBjb25zdCByb3VuZGVkWSA9IE1hdGguZmxvb3IodmFsdWVZKTtcbiAgICAgICAgICAgIGNvbnN0IHRvWSA9IE1hdGgubWluKGFnZW50WSArIHJvdW5kZWRZICsgMSwgaGVpZ2h0KTtcbiAgICAgICAgICAgIGZvcihsZXQgeSA9IE1hdGgubWF4KGFnZW50WSAtIHJvdW5kZWRZLCAwKTsgeSA8IHRvWTsgeSsrKVxuICAgICAgICAgICAgICAgIGFyci5wdXNoKFt4LCB5XSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIHVwKCl7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxSZWYgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLl9jeWNsZSgpLCB0aGlzLmNvbmZpZy5jeWNsZUR1cmF0aW9uKTtcbiAgICAgICAgdGhpcy5fY3ljbGUoKTtcbiAgICB9XG5cbiAgICBfY3ljbGUoKXtcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3NBY3Rpb25zKCk7XG4gICAgfVxuXG4gICAgX3Byb2dyZXNzQWN0aW9ucygpe1xuICAgICAgICB0aGlzLmFnZW50cygpLmZvckVhY2goYWdlbnQgPT4gdGhpcy5fcHJvZ3Jlc3NBY3Rpb24oYWdlbnQpKTtcbiAgICB9XG5cbiAgICBfcHJvZ3Jlc3NBY3Rpb24oYWdlbnQpe1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBhZ2VudC5hY3QoKTtcbiAgICAgICAgaWYoYWN0aW9uID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSB0aGlzLl9leGVjdXRlQWN0aW9uKGFnZW50LCBhY3Rpb24pO1xuXG4gICAgICAgIGNvbnN0IHsgQUNUSU9OX0ZBSUxFRCwgQUNUSU9OX1BST0dSRVNTRUQsIEFDVElPTl9DT01QTEVURSB9ID0gZXZlbnRzO1xuICAgICAgICBjb25zdCBldmVudFR5cGUgPSBzdWNjZXNzID8gKGFjdGlvbnMuaXNDb21wbGV0ZShhY3Rpb24pID8gQUNUSU9OX0NPTVBMRVRFIDogQUNUSU9OX1BST0dSRVNTRUQpIDogQUNUSU9OX0ZBSUxFRDtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBldmVudHMuZmFjdG9yeShldmVudFR5cGUsIHRoaXMsIGFjdGlvbik7XG4gICAgICAgIGFnZW50LnBlcmNlaXZlKGV2ZW50KTtcbiAgICB9XG5cbiAgICBfZXhlY3V0ZUFjdGlvbihhZ2VudCwgYWN0aW9uKXtcbiAgICAgICAgc3dpdGNoKHRydWUpe1xuICAgICAgICAgICAgY2FzZSBhY3Rpb25zLmlzTW92ZW1lbnQoYWN0aW9uKTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXhlY3V0ZURpc3BsYWNlbWVudEFjdGlvbihhZ2VudCwgYWN0aW9uKTtcbiAgICAgICAgICAgIGNhc2UgYWN0aW9ucy50eXBlSXMoYWN0aW9uLCBhY3Rpb25zLkNBVENIKTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXhlY3V0ZUNhdGNoQWN0aW9uKGFnZW50LCBhY3Rpb24pO1xuICAgICAgICAgICAgY2FzZSBhY3Rpb25zLnR5cGVJcyhhY3Rpb24sIGFjdGlvbnMuRFJPUCk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V4ZWN1dGVEcm9wQWN0aW9uKGFnZW50LCBhY3Rpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2V4ZWN1dGVEaXNwbGFjZW1lbnRBY3Rpb24oYWdlbnQsIGFjdGlvbil7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gYWdlbnQuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSBhY3Rpb25zLmFwcGx5QWN0aW9uVG9Qb3NpdGlvbihhY3Rpb24udHlwZSwgcG9zaXRpb24pO1xuXG4gICAgICAgIGlmKHRoaXMuX2lzSW5Cb3VuZCguLi5uZXdQb3NpdGlvbikpe1xuICAgICAgICAgICAgdGhpcy5fbW92ZU9iamVjdChhZ2VudCwgLi4ubmV3UG9zaXRpb24pO1xuICAgICAgICAgICAgYWN0aW9ucy5pbmNyZWFzZVByb2dyZXNzKGFjdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBfZXhlY3V0ZUNhdGNoQWN0aW9uKGFnZW50LCBhY3Rpb24pe1xuICAgICAgICBpZihhZ2VudC5jYXJyaWVzU29tZXRoaW5nKCkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbGVhdmVzID0gdGhpcy5fb2JqZWN0c0luU2FtZVBvc2l0aW9uKGFnZW50KVxuICAgICAgICAgICAgLmZpbHRlcihvYmplY3QgPT4gb2JqZWN0IGluc3RhbmNlb2YgTGVhZilcbiAgICAgICAgICAgIC5maWx0ZXIob2JqZWN0ID0+ICFvYmplY3QuYmVpbmdDYXJyaWVkKCkpO1xuXG4gICAgICAgIGlmKGxlYXZlcy5sZW5ndGgpe1xuICAgICAgICAgICAgYWN0aW9ucy5pbmNyZWFzZVByb2dyZXNzKGFjdGlvbik7XG4gICAgICAgICAgICBpZihhY3Rpb25zLmlzQ29tcGxldGUoYWN0aW9uKSlcbiAgICAgICAgICAgICAgICB0aGlzLl9hdHRhY2hUbyhsZWF2ZXNbMF0sIGFnZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgX2V4ZWN1dGVEcm9wQWN0aW9uKGFnZW50LCBhY3Rpb24pe1xuICAgICAgICBpZighYWdlbnQuY2Fycmllc1NvbWV0aGluZygpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGhvbGVzID0gdGhpcy5fb2JqZWN0c0luU2FtZVBvc2l0aW9uKGFnZW50KVxuICAgICAgICAgICAgLmZpbHRlcihvYmplY3QgPT4gb2JqZWN0IGluc3RhbmNlb2YgSG9sZSk7XG5cbiAgICAgICAgaWYoaG9sZXMubGVuZ3RoKXtcbiAgICAgICAgICAgIGFjdGlvbnMuaW5jcmVhc2VQcm9ncmVzcyhhY3Rpb24pO1xuICAgICAgICAgICAgaWYoYWN0aW9ucy5pc0NvbXBsZXRlKGFjdGlvbikpe1xuICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdCA9IGFnZW50LmdldENhcnJpZWRPYmplY3QoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXR0YWNoRnJvbShvYmplY3QsIGFnZW50KTtcblxuICAgICAgICAgICAgICAgIGlmKG9iamVjdCBpbnN0YW5jZW9mIExlYWYpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbnN1bWVMZWFmKG9iamVjdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIF9pc0luQm91bmQoLi4ucG9zaXRpb24pe1xuICAgICAgICBjb25zdCBsaW1pdHMgPSBbdGhpcy53aWR0aCgpLCB0aGlzLmhlaWdodCgpXTtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uLmV2ZXJ5KCh2YWx1ZSwgaW5kZXgpID0+IHZhbHVlID49IDAgJiYgdmFsdWUgPCBsaW1pdHNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBfb2JqZWN0c0luU2FtZVBvc2l0aW9uKG9iamVjdCl7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gb2JqZWN0LmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IGtleSA9IHBvc2l0aW9uU3RyaW5nKC4uLnBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25zW2tleV0ub2JqZWN0cy5maWx0ZXIob2JqID0+IG9iaiAhPSBvYmplY3QpO1xuICAgIH1cblxuICAgIF9tb3ZlT2JqZWN0KG9iamVjdCwgLi4ucG9zaXRpb24pe1xuICAgICAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBvYmplY3QuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgaWYoY3VycmVudFBvc2l0aW9uICE9IG51bGwpXG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVGcm9tUG9zaXRpb24ob2JqZWN0LCAuLi5jdXJyZW50UG9zaXRpb24pO1xuXG4gICAgICAgIHRoaXMuX2FkZFRvUG9zaXRpb24ob2JqZWN0LCAuLi5wb3NpdGlvbik7XG4gICAgICAgIG9iamVjdC5zZXRQb3NpdGlvbiguLi5wb3NpdGlvbik7XG5cbiAgICAgICAgaWYob2JqZWN0IGluc3RhbmNlb2YgQWdlbnQpe1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBldmVudHMuZmFjdG9yeShldmVudHMuTU9WRUQsIHRoaXMsIHsgb2JqZWN0LCBwb3NpdGlvbiB9KTtcbiAgICAgICAgICAgIG9iamVjdC5wZXJjZWl2ZShldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihvYmplY3QuY2Fycmllc1NvbWV0aGluZygpKVxuICAgICAgICAgICAgdGhpcy5fbW92ZU9iamVjdChvYmplY3QuZ2V0Q2FycmllZE9iamVjdCgpLCAuLi5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgX3JlbW92ZUZyb21Qb3NpdGlvbihvYmplY3QsIC4uLnBvc2l0aW9uKXtcbiAgICAgICAgdGhpcy5fYWx0ZXJQb3NpdGlvbk9iamVjdHMocG9zaXRpb24sIG9ianMgPT4gb2Jqcy5maWx0ZXIob2JqID0+IG9iaiAhPSBvYmplY3QpKTtcbiAgICB9XG5cbiAgICBfYWRkVG9Qb3NpdGlvbihvYmplY3QsIC4uLnBvc2l0aW9uKXtcbiAgICAgICAgdGhpcy5fYWx0ZXJQb3NpdGlvbk9iamVjdHMocG9zaXRpb24sIG9ianMgPT4gWy4uLm9ianMsIG9iamVjdF0pO1xuICAgIH1cblxuICAgIF9hbHRlclBvc2l0aW9uT2JqZWN0cyhwb3NpdGlvbiwgY2FsbGJhY2spe1xuICAgICAgICBjb25zdCBrZXkgPSBwb3NpdGlvblN0cmluZyguLi5wb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IG9iaiA9IHRoaXMucG9zaXRpb25zW2tleV07XG4gICAgICAgIGNvbnN0IG9iamVjdHMgPSBjYWxsYmFjayhvYmoub2JqZWN0cyk7XG4gICAgICAgIHRoaXMucG9zaXRpb25zW2tleV0gPSBPYmplY3QuYXNzaWduKHt9LCBvYmosIHsgb2JqZWN0cyB9KTtcbiAgICB9XG5cbiAgICBfYXR0YWNoVG8ob2JqZWN0LCBhZ2VudCl7XG4gICAgICAgIG9iamVjdC5zZXRDYXJyaWVyT2JqZWN0KGFnZW50KTtcbiAgICAgICAgYWdlbnQuc2V0Q2FycmllZE9iamVjdChvYmplY3QpO1xuXG4gICAgICAgIGlmKGFnZW50IGluc3RhbmNlb2YgQWdlbnQpe1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBldmVudHMuZmFjdG9yeShldmVudHMuQ0FUQ0gsIHRoaXMsIHsgb2JqZWN0IH0pO1xuICAgICAgICAgICAgYWdlbnQucGVyY2VpdmUoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2RldHRhY2hGcm9tKG9iamVjdCwgYWdlbnQpe1xuICAgICAgICBvYmplY3Quc2V0Q2Fycmllck9iamVjdChudWxsKTtcbiAgICAgICAgYWdlbnQuc2V0Q2FycmllZE9iamVjdChudWxsKTtcblxuICAgICAgICBpZihhZ2VudCBpbnN0YW5jZW9mIEFnZW50KXtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzLmZhY3RvcnkoZXZlbnRzLkRST1AsIHRoaXMsIHsgb2JqZWN0IH0pO1xuICAgICAgICAgICAgYWdlbnQucGVyY2VpdmUoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2NvbnN1bWVMZWFmKGxlYWYpe1xuICAgICAgICB0aGlzLl9yZW1vdmVGcm9tUG9zaXRpb24obGVhZiwgLi4ubGVhZi5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgdGhpcy5sZWF2ZXMgPSBbLi4udGhpcy5sZWF2ZXMsIGxlYWZdO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0Vudmlyb25tZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGFyZ3MgPT4ge1xuICAgIGNvbnN0IHByb2JsZW0gPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgY2Fub25pY2FsOiBKU09OLnN0cmluZ2lmeVxuICAgIH0sIGFyZ3MpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsU3RhdGUsIGNhbm9uaWNhbCwgcGF0aENvc3QsIGhldXJpc3RpYyB9ID0gcHJvYmxlbTtcbiAgICBjb25zdCBtYWtlTm9kZSA9IG5vZGVNYWtlckZhY3RvcnkoY2Fub25pY2FsLCBoZXVyaXN0aWMpO1xuXG4gICAgY29uc3QgZnJvbnRpZXIgPSBtYWtlRnJvbnRpZXIoKTtcbiAgICBjb25zdCBleHBsb3JlZCA9IHt9O1xuICAgIGluc2VydChmcm9udGllciwgbWFrZU5vZGUoaW5pdGlhbFN0YXRlKSk7XG5cbiAgICBmb3IobGV0IG5vZGU7IG5vZGUgPSBwb3AoZnJvbnRpZXIpOyl7XG4gICAgICAgIGlmKHByb2JsZW0uZ29hbFRlc3Qobm9kZS5zdGF0ZSkpXG4gICAgICAgICAgICByZXR1cm4gbm9kZS5zZXF1ZW5jZTtcblxuICAgICAgICBleHBsb3JlZFtub2RlLmhhc2hdID0gdHJ1ZTtcblxuICAgICAgICBwcm9ibGVtLmFjdGlvbnMobm9kZS5zdGF0ZSlcbiAgICAgICAgICAgIC5tYXAoYWN0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHByb2JsZW0ucmVzdWx0KG5vZGUuc3RhdGUsIGFjdGlvbik7XG4gICAgICAgICAgICAgICAgY29uc3QgY29zdCA9IHBhdGhDb3N0KG5vZGUuc3RhdGUsIGFjdGlvbiwgc3RhdGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBtYWtlTm9kZShzdGF0ZSwgbm9kZS5jb3N0ICsgY29zdCwgWy4uLm5vZGUuc2VxdWVuY2UsIGFjdGlvbl0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoY2hpbGQgPT4gIWV4cGxvcmVkW2NoaWxkLmhhc2hdKVxuICAgICAgICAgICAgLmZvckVhY2goY2hpbGQgPT4gaW5zZXJ0KGZyb250aWVyLCBjaGlsZCkpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgbWFrZUZyb250aWVyID0gKCkgPT4gKHsgaW5kZXg6IHt9LCBxdWV1ZTogW10gfSk7XG5cbmNvbnN0IG5vZGVNYWtlckZhY3RvcnkgPSAoY2Fub25pY2FsLCBoZXVyaXN0aWMpID0+IHtcbiAgICByZXR1cm4gKHN0YXRlLCBjb3N0ID0gMCwgc2VxdWVuY2UgPSBbXSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICBoYXNoOiBjYW5vbmljYWwoc3RhdGUpLFxuICAgICAgICAgICAgY29zdCxcbiAgICAgICAgICAgIGVzdGltYXRlOiBjb3N0ICsgaGV1cmlzdGljKHN0YXRlKSxcbiAgICAgICAgICAgIHNlcXVlbmNlXG4gICAgICAgIH07XG4gICAgfTtcbn1cblxuY29uc3QgaW5zZXJ0ID0gKGZyb250aWVyLCBub2RlKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBmcm9udGllci5pbmRleFtub2RlLmhhc2hdO1xuICAgIGlmKGluZGV4ICE9IG51bGwpe1xuICAgICAgICBpZihmcm9udGllci5xdWV1ZVtpbmRleF0uY29zdCA+IG5vZGUuY29zdCl7XG4gICAgICAgICAgICBmcm9udGllci5xdWV1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdXBkYXRlSW5kZXgoZnJvbnRpZXIsIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGlkeCA9IDA7XG4gICAgd2hpbGUoaWR4IDwgZnJvbnRpZXIucXVldWUubGVuZ3RoICYmIGZyb250aWVyLnF1ZXVlW2lkeF0uZXN0aW1hdGUgPD0gbm9kZS5lc3RpbWF0ZSlcbiAgICAgICAgaWR4Kys7XG5cbiAgICBmcm9udGllci5pbmRleFtub2RlLmhhc2hdID0gaWR4O1xuICAgIGlmKGlkeCA9PT0gZnJvbnRpZXIucXVldWUubGVuZ3RoKVxuICAgICAgICBmcm9udGllci5xdWV1ZSA9IFsuLi5mcm9udGllci5xdWV1ZSwgbm9kZV07XG4gICAgZWxzZVxuICAgICAgICBmcm9udGllci5xdWV1ZS5zcGxpY2UoaWR4LCAwLCBub2RlKTtcblxuICAgIHVwZGF0ZUluZGV4KGZyb250aWVyLCBpZHggKyAxKTtcbn1cblxuY29uc3QgcG9wID0gZnJvbnRpZXIgPT4ge1xuICAgIGlmKCFmcm9udGllci5xdWV1ZS5sZW5ndGgpXG4gICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgW25vZGUsIC4uLnRhaWxdID0gZnJvbnRpZXIucXVldWU7XG4gICAgZGVsZXRlIGZyb250aWVyLmluZGV4W25vZGUuaGFzaF07XG4gICAgZnJvbnRpZXIucXVldWUgPSB0YWlsO1xuXG4gICAgdXBkYXRlSW5kZXgoZnJvbnRpZXIpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmNvbnN0IHVwZGF0ZUluZGV4ID0gKGZyb250aWVyLCBpbmRleCA9IDAsIGNvdW50ID0gbnVsbCkgPT4ge1xuICAgIGNvdW50ID0gY291bnQgfHwgZnJvbnRpZXIucXVldWUubGVuZ3RoO1xuICAgIGZvcig7IGluZGV4IDwgY291bnQ7IGluZGV4KyspXG4gICAgICAgIGZyb250aWVyLmluZGV4W2Zyb250aWVyLnF1ZXVlW2luZGV4XS5oYXNoXSA9IGluZGV4O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NlYXJjaC9hU3Rhci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IENBUlJZID0gU3ltYm9sKCdjYXJyeScpO1xuZXhwb3J0IGNvbnN0IEdPVE8gPSBTeW1ib2woJ2dvdG8nKTtcblxuZXhwb3J0IGNvbnN0IGZhY3RvcnkgPSAodHlwZSwgZGF0YSA9IHt9KSA9PiBPYmplY3QuYXNzaWduKHsgdHlwZSB9LCBkYXRhKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2dvYWxzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBwb3NpdGlvblN0cmluZyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEFudCBmcm9tICcuL0FudC5qcyc7XG5pbXBvcnQgSG9sZSBmcm9tICcuL0hvbGUuanMnO1xuaW1wb3J0IExlYWYgZnJvbSAnLi9MZWFmLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbnZpcm9ubWVudCwgZWxlbWVudCwgY29uZmlnID0ge30pe1xuICAgICAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG5cbiAgICAgICAgdGhpcy5odG1sRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuaHRtbEVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25GcmFtZVJlcSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHVuaXRTaXplUHg6IG51bGwsXG4gICAgICAgICAgICB1bml0U3Ryb2tlUHg6IDIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjOTQ3MDY0JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRTdHJva2VDb2xvcjogJyM4MzYwNTMnLFxuICAgICAgICAgICAgYW50Q29sb3I6ICcjQ0Q1MTFEJyxcbiAgICAgICAgICAgIGxlYWZDb2xvcjogJyM4MEZGMDAnLFxuICAgICAgICAgICAgbGVhZlN0ZW1Db2xvcjogJyM2MEREMDAnLFxuICAgICAgICAgICAgdW5vYnNlcnZlZENvbG9yOiAncmdiYSgwLCAwLCAwLCAuNSknLFxuICAgICAgICAgICAgaG9sZUNvbG9yOiAnIzQ0NCcsXG4gICAgICAgICAgICBob2xlQm9yZGVyQ29sb3I6ICcjNzI1MDQyJ1xuICAgICAgICB9LCBjb25maWcpO1xuXG4gICAgICAgIGlmKHRoaXMuY29uZmlnLnVuaXRTaXplUHggPT09IG51bGwpXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy51bml0U2l6ZVB4ID0gdGhpcy5odG1sRWxlbWVudC53aWR0aCAvIHRoaXMuZW52aXJvbm1lbnQud2lkdGgoKTtcbiAgICB9XG5cbiAgICB1cCgpe1xuICAgICAgICBjb25zdCBmcmFtZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVSZXEgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWUpO1xuICAgICAgICAgICAgdGhpcy5fZHJhdygpO1xuICAgICAgICB9O1xuICAgICAgICBmcmFtZSgpO1xuICAgIH1cblxuICAgIF9kcmF3KCl7XG4gICAgICAgIHRoaXMuX2RyYXdCYWNrZ3JvdW5kKHRoaXMuZW52aXJvbm1lbnQpO1xuICAgICAgICB0aGlzLl9kcmF3T2JqZWN0cyh0aGlzLmVudmlyb25tZW50Lm9iamVjdHMoKSk7XG4gICAgICAgIHRoaXMuX2RyYXdPYnNlcnZlZEFyZWEodGhpcy5lbnZpcm9ubWVudC5hZ2VudHMoKSk7XG4gICAgfVxuXG4gICAgX2RyYXdCYWNrZ3JvdW5kKGVudmlyb25tZW50KXtcbiAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcblxuICAgICAgICBjb25zdCB1bml0U2l6ZVB4ID0gdGhpcy5jb25maWcudW5pdFNpemVQeDtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBlbnZpcm9ubWVudC53aWR0aCgpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBlbnZpcm9ubWVudC5oZWlnaHQoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCAqIHVuaXRTaXplUHgsIGhlaWdodCAqIHVuaXRTaXplUHgpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbmZpZy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuY29uZmlnLmJhY2tncm91bmRTdHJva2VDb2xvcjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMuY29uZmlnLnVuaXRTdHJva2VQeDtcblxuICAgICAgICB0aGlzLl9pdGVyYXRlUG9zaXRpb25zKCh4LCB5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhcmdzID0gWy4uLnRoaXMuX2dldFBpeGVsUG9zaXRpb24oeCwgeSksIHVuaXRTaXplUHgsIHVuaXRTaXplUHhdO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KC4uLmFyZ3MpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVJlY3QoLi4uYXJncyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgX2l0ZXJhdGVQb3NpdGlvbnMoY2FsbGJhY2spe1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZW52aXJvbm1lbnQud2lkdGgoKTtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5lbnZpcm9ubWVudC5oZWlnaHQoKTtcbiAgICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4Kyspe1xuICAgICAgICAgICAgZm9yKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgeCwgeSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZ2V0UGl4ZWxQb3NpdGlvbiguLi5wb3NpdGlvbil7XG4gICAgICAgIHJldHVybiBwb3NpdGlvbi5tYXAodmFsdWUgPT4gdmFsdWUgKiB0aGlzLmNvbmZpZy51bml0U2l6ZVB4KTtcbiAgICB9XG5cbiAgICBfZHJhd09iamVjdHMob2JqZWN0cyl7XG4gICAgICAgIG9iamVjdHMubWFwKG9iamVjdCA9PiAoe29iamVjdCwgekluZGV4OiB0aGlzLl9nZXRaSW5kZXhGb3Iob2JqZWN0KX0pKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuekluZGV4IC0gYi56SW5kZXgpXG4gICAgICAgICAgICAubWFwKG9iaiA9PiBvYmoub2JqZWN0KVxuICAgICAgICAgICAgLmZvckVhY2gob2JqZWN0ID0+IHRoaXMuX2RyYXdPYmplY3Qob2JqZWN0KSk7XG4gICAgfVxuXG4gICAgX2dldFpJbmRleEZvcihvYmplY3Qpe1xuICAgICAgICBzd2l0Y2godHJ1ZSl7XG4gICAgICAgICAgICBjYXNlIG9iamVjdCBpbnN0YW5jZW9mIEFudDpcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZHJhd09iamVjdChvYmplY3Qpe1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IG9iamVjdC5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBwaXhlbFBvc2l0aW9uID0gdGhpcy5fZ2V0UGl4ZWxQb3NpdGlvbiguLi5wb3NpdGlvbik7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSguLi5waXhlbFBvc2l0aW9uKTtcblxuICAgICAgICBpZihvYmplY3QuYmVpbmdDYXJyaWVkKCkpe1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSh0aGlzLmNvbmZpZy51bml0U2l6ZVB4ICogLjY2LCAwKTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zY2FsZSguMzMsIC4zMyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kcmF3U3BlY2lmaWNPYmplY3Qob2JqZWN0KTtcblxuICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIF9kcmF3U3BlY2lmaWNPYmplY3Qob2JqZWN0KXtcbiAgICAgICAgc3dpdGNoKHRydWUpe1xuICAgICAgICAgICAgY2FzZSBvYmplY3QgaW5zdGFuY2VvZiBBbnQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdBbnQob2JqZWN0KTtcbiAgICAgICAgICAgIGNhc2Ugb2JqZWN0IGluc3RhbmNlb2YgSG9sZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZHJhd0hvbGUob2JqZWN0KTtcbiAgICAgICAgICAgIGNhc2Ugb2JqZWN0IGluc3RhbmNlb2YgTGVhZjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZHJhd0xlYWYob2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9kcmF3QW50KGFudCl7XG4gICAgICAgIGNvbnN0IGhhbGZVbml0ID0gdGhpcy5jb25maWcudW5pdFNpemVQeCAvIDI7XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IGhhbGZVbml0ICogLjMwO1xuICAgICAgICBjb25zdCBkZXZpYXRpb24gPSByYWRpdXMgKiBNYXRoLnNxcnQoMik7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5jb25maWcuYW50Q29sb3I7XG4gICAgICAgIGNvbnN0IGxlZ1NpemUgPSBoYWxmVW5pdCAqIC42NjtcbiAgICAgICAgY29uc3QgZGVncmVlID0gTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgZm9yKGxldCBsZW4gPSAzOyBsZW4tLTspe1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcblxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZShoYWxmVW5pdCwgaGFsZlVuaXQpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnJvdGF0ZSgtZGVncmVlICogKGxlbiAqIDM1ICsgMTApKTtcblxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0Lm1vdmVUbygtbGVnU2l6ZSwgMCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKGxlZ1NpemUsIDApO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCB4ID0gLTE7IHggPD0gMTsgeCsrKXtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IGhhbGZVbml0ICsgZGV2aWF0aW9uICogeDtcbiAgICAgICAgICAgIHRoaXMuX2RyYXdDaXJjbGUocG9zLCBwb3MsIHJhZGl1cywgdGhpcy5jb25maWcuYW50Q29sb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2RyYXdIb2xlKGhvbGUpe1xuICAgICAgICBjb25zdCBoYWxmVW5pdCA9IHRoaXMuY29uZmlnLnVuaXRTaXplUHggLyAyO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyhoYWxmVW5pdCwgaGFsZlVuaXQsIGhhbGZVbml0IC8gMS44LCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGlwKCk7XG5cbiAgICAgICAgdGhpcy5fZHJhd0NpcmNsZShoYWxmVW5pdCwgaGFsZlVuaXQsIGhhbGZVbml0IC8gMS44LCB0aGlzLmNvbmZpZy5ob2xlQm9yZGVyQ29sb3IpO1xuICAgICAgICBjb25zdCBkZXZpYXRpb24gPSA0O1xuICAgICAgICB0aGlzLl9kcmF3Q2lyY2xlKGhhbGZVbml0ICsgZGV2aWF0aW9uLCBoYWxmVW5pdCArIGRldmlhdGlvbiwgaGFsZlVuaXQgLyAxLjgsIHRoaXMuY29uZmlnLmhvbGVDb2xvcik7XG4gICAgfVxuXG4gICAgX2RyYXdMZWFmKGxlYWYpe1xuICAgICAgICBjb25zdCBoYWxmVW5pdCA9IHRoaXMuY29uZmlnLnVuaXRTaXplUHggLyAyO1xuICAgICAgICBjb25zdCBjaXJjbGVSYWRpdXMgPSBoYWxmVW5pdCAvIDI7XG4gICAgICAgIGNvbnN0IGxlYWZIYWxmV2lkdGggPSBjaXJjbGVSYWRpdXMgKiAuODtcbiAgICAgICAgY29uc3QgbGVhZkhhbGZIZWlnaHQgPSBNYXRoLnNxcnQoTWF0aC5wb3coY2lyY2xlUmFkaXVzLCAyKSAtIE1hdGgucG93KGNpcmNsZVJhZGl1cyAtIGxlYWZIYWxmV2lkdGgsIDIpKTtcblxuICAgICAgICBmb3IobGV0IGxlbiA9IDI7IGxlbi0tOyl7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQucmVjdChoYWxmVW5pdCAtIGxlYWZIYWxmV2lkdGggKiBsZW4sIGhhbGZVbml0IC0gbGVhZkhhbGZIZWlnaHQsIGxlYWZIYWxmV2lkdGgsIGxlYWZIYWxmSGVpZ2h0ICogMik7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuY2xpcCgpO1xuXG4gICAgICAgICAgICBjb25zdCB4ID0gKGNpcmNsZVJhZGl1cyAtIGxlYWZIYWxmV2lkdGgpICogWy0xLCAxXVtsZW5dO1xuICAgICAgICAgICAgdGhpcy5fZHJhd0NpcmNsZShoYWxmVW5pdCArIHgsIGhhbGZVbml0LCBjaXJjbGVSYWRpdXMsIHRoaXMuY29uZmlnLmxlYWZDb2xvcik7XG5cbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbmZpZy5sZWFmU3RlbUNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8oaGFsZlVuaXQsIGhhbGZVbml0IC0gbGVhZkhhbGZIZWlnaHQpO1xuICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKGhhbGZVbml0LCBoYWxmVW5pdCArIGxlYWZIYWxmSGVpZ2h0ICogMS40KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIF9kcmF3Q2lyY2xlKHgsIHksIHJhZGl1cywgY29sb3Ipe1xuICAgICAgICBjb25zdCBwYXRoID0gbmV3IFBhdGgyRCgpO1xuICAgICAgICBwYXRoLmFyYyh4LCB5LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbChwYXRoKTtcbiAgICB9XG5cbiAgICBfZHJhd09ic2VydmVkQXJlYShhZ2VudHMpe1xuICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xuXG4gICAgICAgIGNvbnN0IG9ic2VydmVkUG9zaXRpb25zID0gYWdlbnRzLnJlZHVjZSgoY2FycnksIGFnZW50KSA9PiB0aGlzLl9hZGRPYnNlcnZlZFBvc2l0aW9uc0Zyb21BZ2VudChjYXJyeSwgYWdlbnQpLCB7fSk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuY29uZmlnLnVub2JzZXJ2ZWRDb2xvcjtcbiAgICAgICAgdGhpcy5faXRlcmF0ZVBvc2l0aW9ucygoeCwgeSkgPT4gdGhpcy5fZHJhd1Vub2JzZXJ2ZWRTcXVhcmVzKG9ic2VydmVkUG9zaXRpb25zLCB4LCB5KSk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBfYWRkT2JzZXJ2ZWRQb3NpdGlvbnNGcm9tQWdlbnQob2JqLCBhZ2VudCl7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuZW52aXJvbm1lbnQuZ2V0Vmlld1Bvc2l0aW9uc0ZvcihhZ2VudCk7XG4gICAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKGFyciA9PiBvYmpbcG9zaXRpb25TdHJpbmcoLi4uYXJyKV0gPSB0cnVlKTtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIF9kcmF3VW5vYnNlcnZlZFNxdWFyZXMob2JzZXJ2ZWRQb3NpdGlvbnMsIHgsIHkpe1xuICAgICAgICBjb25zdCBrZXkgPSBwb3NpdGlvblN0cmluZyh4LCB5KTtcbiAgICAgICAgaWYob2JzZXJ2ZWRQb3NpdGlvbnNba2V5XSlcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBjb25zdCBwaXhlbHMgPSB0aGlzLl9nZXRQaXhlbFBvc2l0aW9uKHgsIHkpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoLi4ucGl4ZWxzLCB0aGlzLmNvbmZpZy51bml0U2l6ZVB4LCB0aGlzLmNvbmZpZy51bml0U2l6ZVB4KTtcbiAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1JlbmRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==