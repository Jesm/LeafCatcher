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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Thing_js__ = __webpack_require__(4);


class Leaf extends __WEBPACK_IMPORTED_MODULE_0__Thing_js__["a" /* default */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Leaf;
;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Thing_js__ = __webpack_require__(4);


class Hole extends __WEBPACK_IMPORTED_MODULE_0__Thing_js__["a" /* default */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Hole;
;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const canonicalPosition = (...arr) => arr.join(' ');
/* harmony export (immutable) */ __webpack_exports__["a"] = canonicalPosition;


const randomNumber = number => Math.floor(Math.random() * number);
/* harmony export (immutable) */ __webpack_exports__["b"] = randomNumber;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const UP = Symbol('up');
/* harmony export (immutable) */ __webpack_exports__["f"] = UP;

const RIGHT = Symbol('right');
/* harmony export (immutable) */ __webpack_exports__["e"] = RIGHT;

const DOWN = Symbol('down');
/* harmony export (immutable) */ __webpack_exports__["b"] = DOWN;

const LEFT = Symbol('left');
/* harmony export (immutable) */ __webpack_exports__["d"] = LEFT;

const CATCH = Symbol('catch');
/* harmony export (immutable) */ __webpack_exports__["a"] = CATCH;

const DROP = Symbol('drop');
/* harmony export (immutable) */ __webpack_exports__["c"] = DROP;


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
/* harmony export (immutable) */ __webpack_exports__["g"] = cost;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Thing {
    constructor(){
        this.carries = null;
        this.carrier = null;
    }

    getPosition(){
        return this.position;
    }

    setPosition(x, y){
        this.position = [x, y];
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const MOVED = Symbol('moved');
/* harmony export (immutable) */ __webpack_exports__["g"] = MOVED;

const ACTION_COMPLETE = Symbol('action_complete');
/* harmony export (immutable) */ __webpack_exports__["a"] = ACTION_COMPLETE;

const ACTION_FAILED = Symbol('action_failed');
/* harmony export (immutable) */ __webpack_exports__["b"] = ACTION_FAILED;

const ACTION_PROGRESSED = Symbol('action_progressed');
/* harmony export (immutable) */ __webpack_exports__["c"] = ACTION_PROGRESSED;

const CAPTURED_VIEW = Symbol('captured_view');
/* harmony export (immutable) */ __webpack_exports__["d"] = CAPTURED_VIEW;

const CATCH = Symbol('catch');
/* harmony export (immutable) */ __webpack_exports__["e"] = CATCH;

const DROP = Symbol('drop');
/* harmony export (immutable) */ __webpack_exports__["f"] = DROP;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Event {
    constructor(sender, type, data){
        this.sender = sender;
        this.type = type;
        this.data = data;
    }

    typeIs(...types){
        return types.includes(this.type);
    }

    getSender(){
        return this.sender;
    }

    getData(){
        return this.data;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Event;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_aStar_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Thing_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Action_js__ = __webpack_require__(13);




class Agent extends __WEBPACK_IMPORTED_MODULE_1__Thing_js__["a" /* default */] {
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
            if(this.currentAction.isComplete())
                this.currentAction = null;
            else
                return;
        }

        if(this.currentActionSequence.length === 0){
            const goal = this._formulateGoal(this.state);
            const problem = goal && this._formulateProblem(this.state, goal);
            const sequence = problem && Object(__WEBPACK_IMPORTED_MODULE_0__search_aStar_js__["a" /* default */])(problem);
            if(sequence)
                this.currentActionSequence = sequence;
        }

        if(this.currentActionSequence.length > 0){
            const actionType = this.currentActionSequence.shift();
            this.currentAction = new __WEBPACK_IMPORTED_MODULE_2__Action_js__["a" /* default */](actionType);
        }
    }

    _beforeReasoning(){}

    _updateState(state, events){
        const reducers = this._getStateReducers();
        return events.reduce((state, event) => {
            return reducers.reduce((state, reducer) => reducer.call(this, state, event), state);
        }, state);
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Agent;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__goals__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Agent_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Leaf_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Hole_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Event_js__ = __webpack_require__(6);









const actionMovementIndex = {
    [__WEBPACK_IMPORTED_MODULE_2__actions__["f" /* UP */]]: [0, -1],
    [__WEBPACK_IMPORTED_MODULE_2__actions__["e" /* RIGHT */]]: [1, 0],
    [__WEBPACK_IMPORTED_MODULE_2__actions__["b" /* DOWN */]]: [0, 1],
    [__WEBPACK_IMPORTED_MODULE_2__actions__["d" /* LEFT */]]: [-1, 0]
};

class Ant extends __WEBPACK_IMPORTED_MODULE_4__Agent_js__["a" /* default */] {
    _getInitialState(){
        return {
            world: {},
            carries: null
        }
    }

    _beforeReasoning(){
        if(!this.state.environment)
            return;

        const view = this.state.environment.getViewFor(this);
        const event = new __WEBPACK_IMPORTED_MODULE_7__Event_js__["a" /* default */](this, __WEBPACK_IMPORTED_MODULE_0__events__["d" /* CAPTURED_VIEW */], view);
        this.perceive(event);
    }

    _getStateReducers(){
        return [
            this._setStateEnvironment,
            this._updateStatePosition,
            this._clearCurrentSequenceIfActionFailed,
            this._updateWorldModel,
            this._updateCarriedObject,
            this._updateDroppedObject
        ];
    }

    _setStateEnvironment(state, event){
        if(event.typeIs(__WEBPACK_IMPORTED_MODULE_0__events__["g" /* MOVED */]) && !state.environment)
            return Object.assign({}, state, { environment: event.getSender() });

        return state;
    }

    _updateStatePosition(state, event){
        if(event.typeIs(__WEBPACK_IMPORTED_MODULE_0__events__["g" /* MOVED */])){
            const { position } = event.getData();
            return Object.assign({}, state, { position });
        }

        return state;
    }

    _clearCurrentSequenceIfActionFailed(state, event){
        if(event.typeIs(__WEBPACK_IMPORTED_MODULE_0__events__["b" /* ACTION_FAILED */]) && event.getData() === this.currentAction){
            this.currentActionSequence = [];
            this.currentAction = null;
        }

        return state;
    }

    _updateWorldModel(state, event){
        if(event.typeIs(__WEBPACK_IMPORTED_MODULE_0__events__["d" /* CAPTURED_VIEW */])){
            const view = event.getData();
            const index = view.reduce((carry, square) => {
                const key = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* canonicalPosition */])(...square.getPosition());
                carry[key] = { square, timestamp: Date.now() };
                return carry;
            }, {});

            const world = Object.assign({}, state.world, index);
            return Object.assign({}, state, { world });
        }

        return state;
    }

    _updateCarriedObject(state, event){
        if(event.typeIs(__WEBPACK_IMPORTED_MODULE_0__events__["e" /* CATCH */]))
            return Object.assign({}, state, { carries: event.getData().object });

        return state;
    }

    _updateDroppedObject(state, event){
        if(event.typeIs(__WEBPACK_IMPORTED_MODULE_0__events__["f" /* DROP */]) && event.getData().object === state.carries)
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

        const squares = this._squaresContaining(state.world, __WEBPACK_IMPORTED_MODULE_6__Hole_js__["a" /* default */]);
        const closest = this._closestSquare(state.position, squares);
        if(closest && this._distanceTo(state.position, closest.getPosition()) === 0)
            return { type: __WEBPACK_IMPORTED_MODULE_1__goals__["a" /* CARRY */], carry: false };
    }

    _shouldCatchLeaf(state){
        if(state.carries)
            return;

        const squares = this._squaresContaining(state.world, __WEBPACK_IMPORTED_MODULE_5__Leaf_js__["a" /* default */]);
        const closest = this._closestSquare(state.position, squares);
        if(closest && this._distanceTo(state.position, closest.getPosition()) === 0)
            return { type: __WEBPACK_IMPORTED_MODULE_1__goals__["a" /* CARRY */], carry: true };
    }

    _shouldMoveTowardsHole(state){
        let squares;
        if(state.carries && state.carries instanceof __WEBPACK_IMPORTED_MODULE_5__Leaf_js__["a" /* default */] && (squares = this._squaresContaining(state.world, __WEBPACK_IMPORTED_MODULE_6__Hole_js__["a" /* default */])).length){
            const closest = this._closestSquare(state.position, squares);
            if(closest)
                return { type: __WEBPACK_IMPORTED_MODULE_1__goals__["b" /* GOTO */], position: closest.getPosition() };
        }
    }

    _shouldMoveTowardsLeaf(state){
        let squares;
        if(state.carries === null && (squares = this._squaresContaining(state.world, __WEBPACK_IMPORTED_MODULE_5__Leaf_js__["a" /* default */])).length){
            const closest = this._closestSquare(state.position, squares);
            if(closest)
                return { type: __WEBPACK_IMPORTED_MODULE_1__goals__["b" /* GOTO */], position: closest.getPosition() };
        }
    }

    _shouldExploreWorld(state){
        const squares = this._squaresWithUnknowNeighbours(state.world);
        const closest = this._closestSquare(state.position, squares);
        if(closest)
            return { type: __WEBPACK_IMPORTED_MODULE_1__goals__["b" /* GOTO */], position: closest.getPosition() };
    }

    _shouldVisitOldSquares(state){
        const squares = this._squaresForVisit(state.world);
        if(squares.length){
            const index = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* randomNumber */])(squares.length);
            return { type: __WEBPACK_IMPORTED_MODULE_1__goals__["b" /* GOTO */], position: squares[index].getPosition() };
        }
    }

    _squaresWithUnknowNeighbours(world){
        const additionMatrix = Object.getOwnPropertySymbols(actionMovementIndex)
            .map(sym => actionMovementIndex[sym]);

        const values = Object.values(world);
        const knowNeighboursIndex = values.reduce((carry, obj) => {
            const squarePosition = obj.square.getPosition();
            const squareKey = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* canonicalPosition */])(...squarePosition);

            if(!carry[squareKey])
                carry[squareKey] = 0;
            carry[squareKey] += obj.square.getBlockedSideQuantity();

            additionMatrix.forEach(arr => {
                const position = squarePosition.map((value, index) => value + arr[index]);
                const key = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* canonicalPosition */])(...position);

                if(world[key]){
                    if(!carry[key])
                        carry[key] = 0;

                    carry[key]++;
                }
            });

            return carry;
        }, {});

        return Object.keys(knowNeighboursIndex)
            .map(key => ({ knowNeighbours: knowNeighboursIndex[key], square: world[key] }))
            .filter(obj => obj.knowNeighbours < 4)
            .sort((a, b) => a.knowNeighbours - b.knowNeighbours)
            .map(obj => obj.square.square);
    }

    _squaresForVisit(world){
        const squares = Object.values(world);
        const sortedSquares = squares.sort((a, b) => a.timestamp - b.timestamp);

        if(sortedSquares.length){
            const limit = sortedSquares[0].timestamp;
            const oldestSquares = sortedSquares.filter(obj => obj.timestamp === limit);
            return oldestSquares.map(obj => obj.square);
        }

        return sortedSquares.map(obj => obj.square);
    }

    _squaresContaining(world, objectClass){
        const squares = Object.values(world);
        return squares.filter(obj => obj.square.objects.some(object => object instanceof objectClass))
            .map(obj => obj.square);
    }

    _closestSquare(position, squares){
        const sortedSquares = squares.map(square => ({square, distance: this._distanceTo(position, square.getPosition())}))
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
        const initialState = !!state.carries;

        const result = (bool, action) => {
            switch(action){
                case __WEBPACK_IMPORTED_MODULE_2__actions__["a" /* CATCH */]:
                    return true;
                case __WEBPACK_IMPORTED_MODULE_2__actions__["c" /* DROP */]:
                    return false;
            }
        };

        const actions = bool => [bool ? __WEBPACK_IMPORTED_MODULE_2__actions__["c" /* DROP */] : __WEBPACK_IMPORTED_MODULE_2__actions__["a" /* CATCH */]];
        const goalTest = bool => bool === carry;
        const pathCost = (from, action, to) => Object(__WEBPACK_IMPORTED_MODULE_2__actions__["g" /* cost */])(action);
        const heuristic = bool => bool === carry ? 0 : 1;

        return {
            initialState,
            actions,
            result,
            goalTest,
            pathCost,
            heuristic
        };
    }

    _generateGotoProblem(state, position){
        const initialState = state.position;

        const result = (pos, action) => {
            const addArr = actionMovementIndex[action];
            return pos.map((num, index) => num + addArr[index]);
        };

        const actions = pos => {
            const actions = Object.getOwnPropertySymbols(actionMovementIndex);
            return actions.filter(action => {
                const position = result(pos, action);
                return !!state.world[canonicalForm(position)];
            });
        };

        const goalTest = pos => pos.every((num, index) => num === position[index]);
        const pathCost = (from, action, to) => Object(__WEBPACK_IMPORTED_MODULE_2__actions__["g" /* cost */])(action);
        const heuristic = pos => this._distanceTo(pos, position);
        const canonicalForm = pos => Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* canonicalPosition */])(...pos);

        return {
            initialState,
            actions,
            result,
            goalTest,
            pathCost,
            heuristic,
            canonicalForm
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Ant;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Environment_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Hole_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Ant_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Leaf_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Render_js__ = __webpack_require__(15);






(doc => {
    const unitSizePx = 60;
    const unitOrder = 8;

    const environment = new __WEBPACK_IMPORTED_MODULE_0__Environment_js__["a" /* default */]({
        width: unitOrder,
        height: unitOrder
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Square_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Event_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Leaf_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Hole_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Agent_js__ = __webpack_require__(7);









class Environment {
    constructor(config = {}){
        this.objects = [];
        this.leaves = [];

        this.config = Object.assign({
            width: 30,
            height: 30,
            cycleDuration: 400,
            viewRadius: 2
        }, config);
    }

    addAtRandom(object){
        const position = this._getAvailableRandomPosition();
        if(position)
            this.add(object, ...position);
    }

    _getAvailableRandomPosition(){
        const positionsIndex = {};
        const width = this.getWidth();
        const height = this.getHeight();

        for(let len = width * height; len--;){
            const x = len % width;
            const y = Math.floor(len / width);
            const key = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* canonicalPosition */])(x, y);
            positionsIndex[key] = [x, y];
        }

        this.objects.forEach(object => {
            const position = object.getPosition();
            const key = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* canonicalPosition */])(...position);
            delete positionsIndex[key];
        });

        const positions = Object.values(positionsIndex);
        return positions.length ? positions[Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* randomNumber */])(positions.length)] : null;
    }

    add(object, ...position){
        this.objects.push(object);
        this._moveObject(object, ...position);
    }

    getViewFor(agent){
        const positions = this.getViewPositionsFor(agent);
        return this._getSquaresFor(positions);
    }

    getViewPositionsFor(agent){
        const arr = [];
        const radius = this.config.viewRadius;
        const [agentX, agentY] = agent.getPosition();
        const toX = Math.min(agentX + radius + 1, this.config.width);
        for(let x = Math.max(agentX - radius, 0); x < toX; x++){
            const valueY = Math.sqrt(Math.pow(radius, 2) - Math.pow(x - agentX, 2));
            const roundedY = Math.floor(valueY);
            const toY = Math.min(agentY + roundedY + 1, this.config.height);
            for(let y = Math.max(agentY - roundedY, 0); y < toY; y++)
                arr.push([x, y]);
        }

        return arr;
    }

    _getSquaresFor(positions){
        const squares = positions.reduce((obj, [x, y]) => {
            const key = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* canonicalPosition */])(x, y);

            let blockedSideQuantity = 0;
            if(x === 0 || x === this.getWidth() - 1)
                blockedSideQuantity++;

            if(y === 0 || y === this.getHeight() - 1)
                blockedSideQuantity++;

            obj[key] = new __WEBPACK_IMPORTED_MODULE_3__Square_js__["a" /* default */](x, y, blockedSideQuantity);
            return obj;
        }, {});

        this.objects.forEach(object => {
            const key = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* canonicalPosition */])(...object.getPosition());
            if(squares[key])
                squares[key].add(object);
        });

        return Object.values(squares);
    }

    up(){
        this.intervalRef = setInterval(() => this._execCycle(), this.config.cycleDuration);
        this._execCycle();
    }

    _execCycle(){
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

        const eventType = success ? (action.isComplete() ? __WEBPACK_IMPORTED_MODULE_1__events__["a" /* ACTION_COMPLETE */] : __WEBPACK_IMPORTED_MODULE_1__events__["c" /* ACTION_PROGRESSED */]) : __WEBPACK_IMPORTED_MODULE_1__events__["b" /* ACTION_FAILED */];
        const event = new __WEBPACK_IMPORTED_MODULE_4__Event_js__["a" /* default */](this, eventType, action);
        agent.perceive(event);
    }

    _executeAction(agent, action){
        switch(true){
            case action.isMovement():
                return this._executeMovementAction(agent, action);
            case action.typeIs(__WEBPACK_IMPORTED_MODULE_2__actions__["a" /* CATCH */]):
                return this._executeCatchAction(agent, action);
            case action.typeIs(__WEBPACK_IMPORTED_MODULE_2__actions__["c" /* DROP */]):
                return this._executeDropAction(agent, action);
        }
    }

    _executeMovementAction(agent, action){
        const newPosition = this._getNewPositionFromActionType(action.getType(), agent.getPosition());
        if(this._isInBound(...newPosition)){
            this._moveObject(agent, ...newPosition);
            action.increaseProgress();
            return true;
        }

        return false;
    }

    _executeCatchAction(agent, action){
        if(agent.carriesSomething())
            return false;

        const objects = this._objectsInSamePosition(agent);
        const leaves = objects.filter(object => object instanceof __WEBPACK_IMPORTED_MODULE_5__Leaf_js__["a" /* default */])
            .filter(object => !object.beingCarried());

        if(leaves.length){
            action.increaseProgress();
            if(action.isComplete())
                this._attachTo(leaves[0], agent);

            return true;
        }

        return false;
    }

    _executeDropAction(agent, action){
        if(!agent.carriesSomething())
            return false;

        const objects = this._objectsInSamePosition(agent);
        const holes = objects.filter(object => object instanceof __WEBPACK_IMPORTED_MODULE_6__Hole_js__["a" /* default */]);

        if(holes.length){
            action.increaseProgress();
            if(action.isComplete()){
                const object = agent.getCarriedObject();
                this._dettachFrom(object, agent);

                if(object instanceof __WEBPACK_IMPORTED_MODULE_5__Leaf_js__["a" /* default */])
                    this._consumeLeaf(object);
            }

            return true;
        }

        return false;
    }

    _getNewPositionFromActionType(type, positionArr){
         const movements = {
            [__WEBPACK_IMPORTED_MODULE_2__actions__["f" /* UP */]]: [0, -1],
            [__WEBPACK_IMPORTED_MODULE_2__actions__["b" /* DOWN */]]: [0, 1],
            [__WEBPACK_IMPORTED_MODULE_2__actions__["e" /* RIGHT */]]: [1, 0],
            [__WEBPACK_IMPORTED_MODULE_2__actions__["d" /* LEFT */]]: [-1, 0]
        };
        const add = movements[type];
        const newPosition = positionArr.map((value, index) => value + add[index]);

        return newPosition;
    }

    _isInBound(...position){
        const limits = [this.getWidth(), this.getHeight()];
        return position.every((value, index) => value >= 0 && value < limits[index]);
    }

    _moveObject(object, ...position){
        object.setPosition(...position);

        if(object instanceof __WEBPACK_IMPORTED_MODULE_7__Agent_js__["a" /* default */]){
            const data = {object, position};
            const ev = new __WEBPACK_IMPORTED_MODULE_4__Event_js__["a" /* default */](this, __WEBPACK_IMPORTED_MODULE_1__events__["g" /* MOVED */], data);
            object.perceive(ev);
        }

        if(object.carriesSomething())
            this._moveObject(object.getCarriedObject(), ...position);
    }

    _objectsInSamePosition(object){
        const position = object.getPosition();
        const sameValue = (value, index) => value === position[index];
        return this.objects.filter(object => object.getPosition().every(sameValue))
            .filter(obj => obj != object);
    }

    _attachTo(object, agent){
        object.setCarrierObject(agent);
        agent.setCarriedObject(object);

        if(agent instanceof __WEBPACK_IMPORTED_MODULE_7__Agent_js__["a" /* default */]){
            const event = new __WEBPACK_IMPORTED_MODULE_4__Event_js__["a" /* default */](this, __WEBPACK_IMPORTED_MODULE_1__events__["e" /* CATCH */], {object});
            agent.perceive(event);
        }
    }

    _dettachFrom(object, agent){
        object.setCarrierObject(null);
        agent.setCarriedObject(null);

        if(agent instanceof __WEBPACK_IMPORTED_MODULE_7__Agent_js__["a" /* default */]){
            const event = new __WEBPACK_IMPORTED_MODULE_4__Event_js__["a" /* default */](this, __WEBPACK_IMPORTED_MODULE_1__events__["f" /* DROP */], {object});
            agent.perceive(event);
        }
    }

    _consumeLeaf(leaf){
        const index = this.objects.indexOf(leaf);
        this.objects.splice(index, 1);

        this.leaves.push(leaf);
    }

    getObjects(){
        return this.objects.slice();
    }

    agents(){
        return this.objects.filter(obj => obj instanceof __WEBPACK_IMPORTED_MODULE_7__Agent_js__["a" /* default */]);
    }

    getWidth(){
        return this.config.width;
    }

    getHeight(){
        return this.config.height;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Environment;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Square {
    constructor(x, y, blockedSideQuantity){
        this.x = x;
        this.y = y;
        this.blockedSideQuantity = blockedSideQuantity;
        this.objects = [];
    }

    add(object){
        this.objects.push(object);
    }

    getPosition(){
        return [this.x, this.y];
    }

    getBlockedSideQuantity(){
        return this.blockedSideQuantity;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Square;



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (args => {
    const problem = Object.assign({
        canonicalForm: JSON.stringify
    }, args);

    const { initialState, canonicalForm, pathCost, heuristic } = problem;
    const makeNode = nodeMakerFactory(canonicalForm, heuristic);

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

const nodeMakerFactory = (canonicalForm, heuristic) => {
    return (state, cost = 0, sequence = []) => {
        return {
            state,
            hash: canonicalForm(state),
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(3);


class Action {
    constructor(type){
        this.type = type;
        this.progress = 0;
    }

    increaseProgress(){
        this.progress++;
    }

    isComplete(){
        return this.progress === Object(__WEBPACK_IMPORTED_MODULE_0__actions__["g" /* cost */])(this.type);
    }

    isMovement(){
        return this.typeIs(__WEBPACK_IMPORTED_MODULE_0__actions__["f" /* UP */], __WEBPACK_IMPORTED_MODULE_0__actions__["e" /* RIGHT */], __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* DOWN */], __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* LEFT */]);
    }

    typeIs(...types){
        return types.includes(this.type);
    }

    getType(){
        return this.type;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Action;



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CARRY = Symbol('carry');
/* harmony export (immutable) */ __webpack_exports__["a"] = CARRY;

const GOTO = Symbol('goto');
/* harmony export (immutable) */ __webpack_exports__["b"] = GOTO;



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Ant_js__ = __webpack_require__(8);
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
            this.config.unitSizePx = this.htmlElement.width / this.environment.getWidth();
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
        this._drawObjects(this.environment.getObjects());
        this._drawObservedArea(this.environment.agents());
    }

    _drawBackground(environment){
        this.context.save();

        const unitSizePx = this.config.unitSizePx;
        const width = environment.getWidth();
        const height = environment.getHeight();
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
        const width = this.environment.getWidth();
        const height = this.environment.getHeight();
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
        positions.forEach(arr => obj[Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* canonicalPosition */])(...arr)] = true);

        return obj;
    }

    _drawUnobservedSquares(observedPositions, x, y){
        const key = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* canonicalPosition */])(x, y);
        if(observedPositions[key])
            return;

        const pixels = this._getPixelPosition(x, y);
        this.context.fillRect(...pixels, this.config.unitSizePx, this.config.unitSizePx);
   }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Render;



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODA4ZjJkMjNmZjY1MGM2MWRkYWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xlYWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9UaGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9FdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9TcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlYXJjaC9hU3Rhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9nb2Fscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVuZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDN0RBOztBQUVBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDRkE7O0FBRUE7QUFBQTtBQUFBOzs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7OztBQ3JDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEN5QztBQUNzQztBQUNKO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsU0FBUztBQUMxRDtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsU0FBUztBQUNoRTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLElBQUk7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdKQUFrRCxPQUFPO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1SkFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7OztBQzdRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxXQUFXLG1EQUFtRDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNkJBQTZCLFVBQVUsYUFBYTs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxlQUFlO0FBQ3hCO0FBQ0E7Ozs7Ozs7OztBQ3RGbUQ7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNENEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsV0FBVztBQUNqQywwQkFBMEIsWUFBWTtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLDJDQUEyQztBQUMzRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLE9BQU87QUFDL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUhBQXVIOztBQUV2SDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDgwOGYyZDIzZmY2NTBjNjFkZGFkIiwiaW1wb3J0IFRoaW5nIGZyb20gJy4vVGhpbmcuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWFmIGV4dGVuZHMgVGhpbmcge307XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9MZWFmLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBUaGluZyBmcm9tICcuL1RoaW5nLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9sZSBleHRlbmRzIFRoaW5nIHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvSG9sZS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgY2Fub25pY2FsUG9zaXRpb24gPSAoLi4uYXJyKSA9PiBhcnIuam9pbignICcpO1xuXG5leHBvcnQgY29uc3QgcmFuZG9tTnVtYmVyID0gbnVtYmVyID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG51bWJlcik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy91dGlscy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgVVAgPSBTeW1ib2woJ3VwJyk7XG5leHBvcnQgY29uc3QgUklHSFQgPSBTeW1ib2woJ3JpZ2h0Jyk7XG5leHBvcnQgY29uc3QgRE9XTiA9IFN5bWJvbCgnZG93bicpO1xuZXhwb3J0IGNvbnN0IExFRlQgPSBTeW1ib2woJ2xlZnQnKTtcbmV4cG9ydCBjb25zdCBDQVRDSCA9IFN5bWJvbCgnY2F0Y2gnKTtcbmV4cG9ydCBjb25zdCBEUk9QID0gU3ltYm9sKCdkcm9wJyk7XG5cbmV4cG9ydCBjb25zdCBjb3N0ID0gYWN0aW9uID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uKXtcbiAgICBjYXNlIFVQOiBjYXNlIFJJR0hUOiBjYXNlIERPV046IGNhc2UgTEVGVDpcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgY2FzZSBEUk9QOlxuICAgICAgICByZXR1cm4gMjtcbiAgICBjYXNlIENBVENIOlxuICAgICAgICByZXR1cm4gMztcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY3Rpb25zL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRoaW5nIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmNhcnJpZXMgPSBudWxsO1xuICAgICAgICB0aGlzLmNhcnJpZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGdldFBvc2l0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICAgIH1cblxuICAgIHNldFBvc2l0aW9uKHgsIHkpe1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gW3gsIHldO1xuICAgIH1cblxuICAgIHNldENhcnJpZWRPYmplY3Qob2JqZWN0KXtcbiAgICAgICAgdGhpcy5jYXJyaWVzID0gb2JqZWN0O1xuICAgIH1cblxuICAgIHNldENhcnJpZXJPYmplY3Qob2JqZWN0KXtcbiAgICAgICAgdGhpcy5jYXJyaWVyID0gb2JqZWN0O1xuICAgIH1cblxuICAgIGdldENhcnJpZWRPYmplY3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FycmllcztcbiAgICB9XG5cbiAgICBnZXRDYXJyaWVyT2JqZWN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcnJpZXI7XG4gICAgfVxuXG4gICAgY2Fycmllc1NvbWV0aGluZygpe1xuICAgICAgICByZXR1cm4gISF0aGlzLmNhcnJpZXM7XG4gICAgfVxuXG4gICAgYmVpbmdDYXJyaWVkKCl7XG4gICAgICAgIHJldHVybiAhIXRoaXMuY2FycmllcjtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9UaGluZy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgTU9WRUQgPSBTeW1ib2woJ21vdmVkJyk7XG5leHBvcnQgY29uc3QgQUNUSU9OX0NPTVBMRVRFID0gU3ltYm9sKCdhY3Rpb25fY29tcGxldGUnKTtcbmV4cG9ydCBjb25zdCBBQ1RJT05fRkFJTEVEID0gU3ltYm9sKCdhY3Rpb25fZmFpbGVkJyk7XG5leHBvcnQgY29uc3QgQUNUSU9OX1BST0dSRVNTRUQgPSBTeW1ib2woJ2FjdGlvbl9wcm9ncmVzc2VkJyk7XG5leHBvcnQgY29uc3QgQ0FQVFVSRURfVklFVyA9IFN5bWJvbCgnY2FwdHVyZWRfdmlldycpO1xuZXhwb3J0IGNvbnN0IENBVENIID0gU3ltYm9sKCdjYXRjaCcpO1xuZXhwb3J0IGNvbnN0IERST1AgPSBTeW1ib2woJ2Ryb3AnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2V2ZW50cy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudCB7XG4gICAgY29uc3RydWN0b3Ioc2VuZGVyLCB0eXBlLCBkYXRhKXtcbiAgICAgICAgdGhpcy5zZW5kZXIgPSBzZW5kZXI7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgdHlwZUlzKC4uLnR5cGVzKXtcbiAgICAgICAgcmV0dXJuIHR5cGVzLmluY2x1ZGVzKHRoaXMudHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0U2VuZGVyKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRlcjtcbiAgICB9XG5cbiAgICBnZXREYXRhKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvRXZlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHNlYXJjaCBmcm9tICcuL3NlYXJjaC9hU3Rhci5qcyc7XG5pbXBvcnQgVGhpbmcgZnJvbSAnLi9UaGluZy5qcyc7XG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWdlbnQgZXh0ZW5kcyBUaGluZyB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge30pe1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLl9nZXRJbml0aWFsU3RhdGUoKTtcbiAgICAgICAgdGhpcy5ldmVudFF1ZXVlID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudEFjdGlvblNlcXVlbmNlID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5pbnRlcnZhbFJlZiA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHJlYXNvbmluZ0ludGVydmFsOiAyMDBcbiAgICAgICAgfSwgY29uZmlnKTtcbiAgICB9XG5cbiAgICBfZ2V0SW5pdGlhbFN0YXRlKCl7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBwZXJjZWl2ZShldmVudCl7XG4gICAgICAgIHRoaXMuZXZlbnRRdWV1ZSA9IFsuLi50aGlzLmV2ZW50UXVldWUsIGV2ZW50XTtcbiAgICB9XG5cbiAgICBhY3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEFjdGlvbjtcbiAgICB9XG5cbiAgICB1cCgpe1xuICAgICAgICB0aGlzLmludGVydmFsUmVmID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5fcmVhc29uKCksIHRoaXMuY29uZmlnLnJlYXNvbmluZ0ludGVydmFsKTtcbiAgICAgICAgdGhpcy5fcmVhc29uKCk7XG4gICAgfVxuXG4gICAgX3JlYXNvbigpe1xuICAgICAgICB0aGlzLl9iZWZvcmVSZWFzb25pbmcoKTtcblxuICAgICAgICBjb25zdCBwZXJjZXB0cyA9IHRoaXMuZXZlbnRRdWV1ZTtcbiAgICAgICAgdGhpcy5ldmVudFF1ZXVlID0gW107XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLl91cGRhdGVTdGF0ZSh0aGlzLnN0YXRlLCBwZXJjZXB0cyk7XG5cbiAgICAgICAgaWYodGhpcy5jdXJyZW50QWN0aW9uKXtcbiAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudEFjdGlvbi5pc0NvbXBsZXRlKCkpXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmN1cnJlbnRBY3Rpb25TZXF1ZW5jZS5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgY29uc3QgZ29hbCA9IHRoaXMuX2Zvcm11bGF0ZUdvYWwodGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBwcm9ibGVtID0gZ29hbCAmJiB0aGlzLl9mb3JtdWxhdGVQcm9ibGVtKHRoaXMuc3RhdGUsIGdvYWwpO1xuICAgICAgICAgICAgY29uc3Qgc2VxdWVuY2UgPSBwcm9ibGVtICYmIHNlYXJjaChwcm9ibGVtKTtcbiAgICAgICAgICAgIGlmKHNlcXVlbmNlKVxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGlvblNlcXVlbmNlID0gc2VxdWVuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmN1cnJlbnRBY3Rpb25TZXF1ZW5jZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvblR5cGUgPSB0aGlzLmN1cnJlbnRBY3Rpb25TZXF1ZW5jZS5zaGlmdCgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uID0gbmV3IEFjdGlvbihhY3Rpb25UeXBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9iZWZvcmVSZWFzb25pbmcoKXt9XG5cbiAgICBfdXBkYXRlU3RhdGUoc3RhdGUsIGV2ZW50cyl7XG4gICAgICAgIGNvbnN0IHJlZHVjZXJzID0gdGhpcy5fZ2V0U3RhdGVSZWR1Y2VycygpO1xuICAgICAgICByZXR1cm4gZXZlbnRzLnJlZHVjZSgoc3RhdGUsIGV2ZW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVkdWNlcnMucmVkdWNlKChzdGF0ZSwgcmVkdWNlcikgPT4gcmVkdWNlci5jYWxsKHRoaXMsIHN0YXRlLCBldmVudCksIHN0YXRlKTtcbiAgICAgICAgfSwgc3RhdGUpO1xuICAgIH1cblxuICAgIF9nZXRTdGF0ZVJlZHVjZXJzKCl7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBfZm9ybXVsYXRlR29hbChzdGF0ZSl7XG4gICAgICAgIGNvbnN0IGNoYWluID0gdGhpcy5fZ2V0R29hbEV2YWx1YXRpb25DaGFpbigpO1xuICAgICAgICBmb3IobGV0IGZ1biBvZiBjaGFpbil7XG4gICAgICAgICAgICBjb25zdCBnb2FsID0gZnVuLmNhbGwodGhpcywgc3RhdGUpO1xuICAgICAgICAgICAgaWYoZ29hbClcbiAgICAgICAgICAgICAgICByZXR1cm4gZ29hbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIF9nZXRHb2FsRXZhbHVhdGlvbkNoYWluKCl7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBfZm9ybXVsYXRlUHJvYmxlbShzdGF0ZSwgZ29hbCl7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0FnZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENBUFRVUkVEX1ZJRVcsIE1PVkVELCBDQVRDSCwgRFJPUCwgQUNUSU9OX0ZBSUxFRCB9IGZyb20gJy4vZXZlbnRzJztcclxuaW1wb3J0IHsgQ0FSUlksIEdPVE8gfSBmcm9tICcuL2dvYWxzJztcclxuaW1wb3J0IHsgVVAsIERPV04sIExFRlQsIFJJR0hULCBDQVRDSCBhcyBDQVRDSF9BQ1RJT04sIERST1AgYXMgRFJPUF9BQ1RJT04sIGNvc3QgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyByYW5kb21OdW1iZXIsIGNhbm9uaWNhbFBvc2l0aW9uIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCBBZ2VudCBmcm9tICcuL0FnZW50LmpzJztcclxuaW1wb3J0IExlYWYgZnJvbSAnLi9MZWFmLmpzJztcclxuaW1wb3J0IEhvbGUgZnJvbSAnLi9Ib2xlLmpzJztcclxuaW1wb3J0IEV2ZW50IGZyb20gJy4vRXZlbnQuanMnO1xyXG5cclxuY29uc3QgYWN0aW9uTW92ZW1lbnRJbmRleCA9IHtcclxuICAgIFtVUF06IFswLCAtMV0sXHJcbiAgICBbUklHSFRdOiBbMSwgMF0sXHJcbiAgICBbRE9XTl06IFswLCAxXSxcclxuICAgIFtMRUZUXTogWy0xLCAwXVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW50IGV4dGVuZHMgQWdlbnQge1xyXG4gICAgX2dldEluaXRpYWxTdGF0ZSgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHdvcmxkOiB7fSxcclxuICAgICAgICAgICAgY2FycmllczogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfYmVmb3JlUmVhc29uaW5nKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuZW52aXJvbm1lbnQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMuc3RhdGUuZW52aXJvbm1lbnQuZ2V0Vmlld0Zvcih0aGlzKTtcclxuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCh0aGlzLCBDQVBUVVJFRF9WSUVXLCB2aWV3KTtcclxuICAgICAgICB0aGlzLnBlcmNlaXZlKGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0U3RhdGVSZWR1Y2Vycygpe1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHRoaXMuX3NldFN0YXRlRW52aXJvbm1lbnQsXHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyQ3VycmVudFNlcXVlbmNlSWZBY3Rpb25GYWlsZWQsXHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVdvcmxkTW9kZWwsXHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNhcnJpZWRPYmplY3QsXHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURyb3BwZWRPYmplY3RcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRTdGF0ZUVudmlyb25tZW50KHN0YXRlLCBldmVudCl7XHJcbiAgICAgICAgaWYoZXZlbnQudHlwZUlzKE1PVkVEKSAmJiAhc3RhdGUuZW52aXJvbm1lbnQpXHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBlbnZpcm9ubWVudDogZXZlbnQuZ2V0U2VuZGVyKCkgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBfdXBkYXRlU3RhdGVQb3NpdGlvbihzdGF0ZSwgZXZlbnQpe1xyXG4gICAgICAgIGlmKGV2ZW50LnR5cGVJcyhNT1ZFRCkpe1xyXG4gICAgICAgICAgICBjb25zdCB7IHBvc2l0aW9uIH0gPSBldmVudC5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBwb3NpdGlvbiB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBfY2xlYXJDdXJyZW50U2VxdWVuY2VJZkFjdGlvbkZhaWxlZChzdGF0ZSwgZXZlbnQpe1xyXG4gICAgICAgIGlmKGV2ZW50LnR5cGVJcyhBQ1RJT05fRkFJTEVEKSAmJiBldmVudC5nZXREYXRhKCkgPT09IHRoaXMuY3VycmVudEFjdGlvbil7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGlvblNlcXVlbmNlID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgX3VwZGF0ZVdvcmxkTW9kZWwoc3RhdGUsIGV2ZW50KXtcclxuICAgICAgICBpZihldmVudC50eXBlSXMoQ0FQVFVSRURfVklFVykpe1xyXG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gZXZlbnQuZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHZpZXcucmVkdWNlKChjYXJyeSwgc3F1YXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBjYW5vbmljYWxQb3NpdGlvbiguLi5zcXVhcmUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgICAgICBjYXJyeVtrZXldID0geyBzcXVhcmUsIHRpbWVzdGFtcDogRGF0ZS5ub3coKSB9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhcnJ5O1xyXG4gICAgICAgICAgICB9LCB7fSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB3b3JsZCA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLndvcmxkLCBpbmRleCk7XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyB3b3JsZCB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBfdXBkYXRlQ2FycmllZE9iamVjdChzdGF0ZSwgZXZlbnQpe1xyXG4gICAgICAgIGlmKGV2ZW50LnR5cGVJcyhDQVRDSCkpXHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBjYXJyaWVzOiBldmVudC5nZXREYXRhKCkub2JqZWN0IH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgX3VwZGF0ZURyb3BwZWRPYmplY3Qoc3RhdGUsIGV2ZW50KXtcclxuICAgICAgICBpZihldmVudC50eXBlSXMoRFJPUCkgJiYgZXZlbnQuZ2V0RGF0YSgpLm9iamVjdCA9PT0gc3RhdGUuY2FycmllcylcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcnJpZXM6IG51bGwgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0R29hbEV2YWx1YXRpb25DaGFpbigpe1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3VsZERyb3BMZWFmLFxyXG4gICAgICAgICAgICB0aGlzLl9zaG91bGRDYXRjaExlYWYsXHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3VsZE1vdmVUb3dhcmRzSG9sZSxcclxuICAgICAgICAgICAgdGhpcy5fc2hvdWxkTW92ZVRvd2FyZHNMZWFmLFxyXG4gICAgICAgICAgICB0aGlzLl9zaG91bGRFeHBsb3JlV29ybGQsXHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3VsZFZpc2l0T2xkU3F1YXJlc1xyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgX3Nob3VsZERyb3BMZWFmKHN0YXRlKXtcclxuICAgICAgICBpZighKHN0YXRlLmNhcnJpZXMgJiYgc3RhdGUuY2FycmllcyBpbnN0YW5jZW9mIExlYWYpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHNxdWFyZXMgPSB0aGlzLl9zcXVhcmVzQ29udGFpbmluZyhzdGF0ZS53b3JsZCwgSG9sZSk7XHJcbiAgICAgICAgY29uc3QgY2xvc2VzdCA9IHRoaXMuX2Nsb3Nlc3RTcXVhcmUoc3RhdGUucG9zaXRpb24sIHNxdWFyZXMpO1xyXG4gICAgICAgIGlmKGNsb3Nlc3QgJiYgdGhpcy5fZGlzdGFuY2VUbyhzdGF0ZS5wb3NpdGlvbiwgY2xvc2VzdC5nZXRQb3NpdGlvbigpKSA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogQ0FSUlksIGNhcnJ5OiBmYWxzZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIF9zaG91bGRDYXRjaExlYWYoc3RhdGUpe1xyXG4gICAgICAgIGlmKHN0YXRlLmNhcnJpZXMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgc3F1YXJlcyA9IHRoaXMuX3NxdWFyZXNDb250YWluaW5nKHN0YXRlLndvcmxkLCBMZWFmKTtcclxuICAgICAgICBjb25zdCBjbG9zZXN0ID0gdGhpcy5fY2xvc2VzdFNxdWFyZShzdGF0ZS5wb3NpdGlvbiwgc3F1YXJlcyk7XHJcbiAgICAgICAgaWYoY2xvc2VzdCAmJiB0aGlzLl9kaXN0YW5jZVRvKHN0YXRlLnBvc2l0aW9uLCBjbG9zZXN0LmdldFBvc2l0aW9uKCkpID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4geyB0eXBlOiBDQVJSWSwgY2Fycnk6IHRydWUgfTtcclxuICAgIH1cclxuXHJcbiAgICBfc2hvdWxkTW92ZVRvd2FyZHNIb2xlKHN0YXRlKXtcclxuICAgICAgICBsZXQgc3F1YXJlcztcclxuICAgICAgICBpZihzdGF0ZS5jYXJyaWVzICYmIHN0YXRlLmNhcnJpZXMgaW5zdGFuY2VvZiBMZWFmICYmIChzcXVhcmVzID0gdGhpcy5fc3F1YXJlc0NvbnRhaW5pbmcoc3RhdGUud29ybGQsIEhvbGUpKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICBjb25zdCBjbG9zZXN0ID0gdGhpcy5fY2xvc2VzdFNxdWFyZShzdGF0ZS5wb3NpdGlvbiwgc3F1YXJlcyk7XHJcbiAgICAgICAgICAgIGlmKGNsb3Nlc3QpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0eXBlOiBHT1RPLCBwb3NpdGlvbjogY2xvc2VzdC5nZXRQb3NpdGlvbigpIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9zaG91bGRNb3ZlVG93YXJkc0xlYWYoc3RhdGUpe1xyXG4gICAgICAgIGxldCBzcXVhcmVzO1xyXG4gICAgICAgIGlmKHN0YXRlLmNhcnJpZXMgPT09IG51bGwgJiYgKHNxdWFyZXMgPSB0aGlzLl9zcXVhcmVzQ29udGFpbmluZyhzdGF0ZS53b3JsZCwgTGVhZikpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3QgPSB0aGlzLl9jbG9zZXN0U3F1YXJlKHN0YXRlLnBvc2l0aW9uLCBzcXVhcmVzKTtcclxuICAgICAgICAgICAgaWYoY2xvc2VzdClcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGU6IEdPVE8sIHBvc2l0aW9uOiBjbG9zZXN0LmdldFBvc2l0aW9uKCkgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3Nob3VsZEV4cGxvcmVXb3JsZChzdGF0ZSl7XHJcbiAgICAgICAgY29uc3Qgc3F1YXJlcyA9IHRoaXMuX3NxdWFyZXNXaXRoVW5rbm93TmVpZ2hib3VycyhzdGF0ZS53b3JsZCk7XHJcbiAgICAgICAgY29uc3QgY2xvc2VzdCA9IHRoaXMuX2Nsb3Nlc3RTcXVhcmUoc3RhdGUucG9zaXRpb24sIHNxdWFyZXMpO1xyXG4gICAgICAgIGlmKGNsb3Nlc3QpXHJcbiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6IEdPVE8sIHBvc2l0aW9uOiBjbG9zZXN0LmdldFBvc2l0aW9uKCkgfTtcclxuICAgIH1cclxuXHJcbiAgICBfc2hvdWxkVmlzaXRPbGRTcXVhcmVzKHN0YXRlKXtcclxuICAgICAgICBjb25zdCBzcXVhcmVzID0gdGhpcy5fc3F1YXJlc0ZvclZpc2l0KHN0YXRlLndvcmxkKTtcclxuICAgICAgICBpZihzcXVhcmVzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcmFuZG9tTnVtYmVyKHNxdWFyZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogR09UTywgcG9zaXRpb246IHNxdWFyZXNbaW5kZXhdLmdldFBvc2l0aW9uKCkgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3NxdWFyZXNXaXRoVW5rbm93TmVpZ2hib3Vycyh3b3JsZCl7XHJcbiAgICAgICAgY29uc3QgYWRkaXRpb25NYXRyaXggPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGFjdGlvbk1vdmVtZW50SW5kZXgpXHJcbiAgICAgICAgICAgIC5tYXAoc3ltID0+IGFjdGlvbk1vdmVtZW50SW5kZXhbc3ltXSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMod29ybGQpO1xyXG4gICAgICAgIGNvbnN0IGtub3dOZWlnaGJvdXJzSW5kZXggPSB2YWx1ZXMucmVkdWNlKChjYXJyeSwgb2JqKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZVBvc2l0aW9uID0gb2JqLnNxdWFyZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBzcXVhcmVLZXkgPSBjYW5vbmljYWxQb3NpdGlvbiguLi5zcXVhcmVQb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICBpZighY2Fycnlbc3F1YXJlS2V5XSlcclxuICAgICAgICAgICAgICAgIGNhcnJ5W3NxdWFyZUtleV0gPSAwO1xyXG4gICAgICAgICAgICBjYXJyeVtzcXVhcmVLZXldICs9IG9iai5zcXVhcmUuZ2V0QmxvY2tlZFNpZGVRdWFudGl0eSgpO1xyXG5cclxuICAgICAgICAgICAgYWRkaXRpb25NYXRyaXguZm9yRWFjaChhcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBzcXVhcmVQb3NpdGlvbi5tYXAoKHZhbHVlLCBpbmRleCkgPT4gdmFsdWUgKyBhcnJbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGNhbm9uaWNhbFBvc2l0aW9uKC4uLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih3b3JsZFtrZXldKXtcclxuICAgICAgICAgICAgICAgICAgICBpZighY2Fycnlba2V5XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Fycnlba2V5XSA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhcnJ5W2tleV0rKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY2Fycnk7XHJcbiAgICAgICAgfSwge30pO1xyXG5cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoa25vd05laWdoYm91cnNJbmRleClcclxuICAgICAgICAgICAgLm1hcChrZXkgPT4gKHsga25vd05laWdoYm91cnM6IGtub3dOZWlnaGJvdXJzSW5kZXhba2V5XSwgc3F1YXJlOiB3b3JsZFtrZXldIH0pKVxyXG4gICAgICAgICAgICAuZmlsdGVyKG9iaiA9PiBvYmoua25vd05laWdoYm91cnMgPCA0KVxyXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5rbm93TmVpZ2hib3VycyAtIGIua25vd05laWdoYm91cnMpXHJcbiAgICAgICAgICAgIC5tYXAob2JqID0+IG9iai5zcXVhcmUuc3F1YXJlKTtcclxuICAgIH1cclxuXHJcbiAgICBfc3F1YXJlc0ZvclZpc2l0KHdvcmxkKXtcclxuICAgICAgICBjb25zdCBzcXVhcmVzID0gT2JqZWN0LnZhbHVlcyh3b3JsZCk7XHJcbiAgICAgICAgY29uc3Qgc29ydGVkU3F1YXJlcyA9IHNxdWFyZXMuc29ydCgoYSwgYikgPT4gYS50aW1lc3RhbXAgLSBiLnRpbWVzdGFtcCk7XHJcblxyXG4gICAgICAgIGlmKHNvcnRlZFNxdWFyZXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgY29uc3QgbGltaXQgPSBzb3J0ZWRTcXVhcmVzWzBdLnRpbWVzdGFtcDtcclxuICAgICAgICAgICAgY29uc3Qgb2xkZXN0U3F1YXJlcyA9IHNvcnRlZFNxdWFyZXMuZmlsdGVyKG9iaiA9PiBvYmoudGltZXN0YW1wID09PSBsaW1pdCk7XHJcbiAgICAgICAgICAgIHJldHVybiBvbGRlc3RTcXVhcmVzLm1hcChvYmogPT4gb2JqLnNxdWFyZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc29ydGVkU3F1YXJlcy5tYXAob2JqID0+IG9iai5zcXVhcmUpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zcXVhcmVzQ29udGFpbmluZyh3b3JsZCwgb2JqZWN0Q2xhc3Mpe1xyXG4gICAgICAgIGNvbnN0IHNxdWFyZXMgPSBPYmplY3QudmFsdWVzKHdvcmxkKTtcclxuICAgICAgICByZXR1cm4gc3F1YXJlcy5maWx0ZXIob2JqID0+IG9iai5zcXVhcmUub2JqZWN0cy5zb21lKG9iamVjdCA9PiBvYmplY3QgaW5zdGFuY2VvZiBvYmplY3RDbGFzcykpXHJcbiAgICAgICAgICAgIC5tYXAob2JqID0+IG9iai5zcXVhcmUpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jbG9zZXN0U3F1YXJlKHBvc2l0aW9uLCBzcXVhcmVzKXtcclxuICAgICAgICBjb25zdCBzb3J0ZWRTcXVhcmVzID0gc3F1YXJlcy5tYXAoc3F1YXJlID0+ICh7c3F1YXJlLCBkaXN0YW5jZTogdGhpcy5fZGlzdGFuY2VUbyhwb3NpdGlvbiwgc3F1YXJlLmdldFBvc2l0aW9uKCkpfSkpXHJcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmRpc3RhbmNlIC0gYi5kaXN0YW5jZSlcclxuICAgICAgICAgICAgLm1hcChvYmogPT4gb2JqLnNxdWFyZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzb3J0ZWRTcXVhcmVzLmxlbmd0aCA/IHNvcnRlZFNxdWFyZXNbMF0gOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIF9kaXN0YW5jZVRvKGZyb20sIHRvKXtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGZyb20ucmVkdWNlKChzdW0sIHZhbHVlLCBpbmRleCkgPT4gc3VtICsgTWF0aC5wb3codmFsdWUgLSB0b1tpbmRleF0sIDIpLCAwKTtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBfZm9ybXVsYXRlUHJvYmxlbShzdGF0ZSwgZ29hbCl7XHJcbiAgICAgICAgc3dpdGNoKGdvYWwudHlwZSl7XHJcbiAgICAgICAgICAgIGNhc2UgQ0FSUlk6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2VuZXJhdGVDYXJyeVByb2JsZW0oc3RhdGUsIGdvYWwuY2FycnkpO1xyXG4gICAgICAgICAgICBjYXNlIEdPVE86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2VuZXJhdGVHb3RvUHJvYmxlbShzdGF0ZSwgZ29hbC5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2dlbmVyYXRlQ2FycnlQcm9ibGVtKHN0YXRlLCBjYXJyeSl7XHJcbiAgICAgICAgY29uc3QgaW5pdGlhbFN0YXRlID0gISFzdGF0ZS5jYXJyaWVzO1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSAoYm9vbCwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaChhY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgY2FzZSBDQVRDSF9BQ1RJT046XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIERST1BfQUNUSU9OOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSBib29sID0+IFtib29sID8gRFJPUF9BQ1RJT04gOiBDQVRDSF9BQ1RJT05dO1xyXG4gICAgICAgIGNvbnN0IGdvYWxUZXN0ID0gYm9vbCA9PiBib29sID09PSBjYXJyeTtcclxuICAgICAgICBjb25zdCBwYXRoQ29zdCA9IChmcm9tLCBhY3Rpb24sIHRvKSA9PiBjb3N0KGFjdGlvbik7XHJcbiAgICAgICAgY29uc3QgaGV1cmlzdGljID0gYm9vbCA9PiBib29sID09PSBjYXJyeSA/IDAgOiAxO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUsXHJcbiAgICAgICAgICAgIGFjdGlvbnMsXHJcbiAgICAgICAgICAgIHJlc3VsdCxcclxuICAgICAgICAgICAgZ29hbFRlc3QsXHJcbiAgICAgICAgICAgIHBhdGhDb3N0LFxyXG4gICAgICAgICAgICBoZXVyaXN0aWNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIF9nZW5lcmF0ZUdvdG9Qcm9ibGVtKHN0YXRlLCBwb3NpdGlvbil7XHJcbiAgICAgICAgY29uc3QgaW5pdGlhbFN0YXRlID0gc3RhdGUucG9zaXRpb247XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IChwb3MsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhZGRBcnIgPSBhY3Rpb25Nb3ZlbWVudEluZGV4W2FjdGlvbl07XHJcbiAgICAgICAgICAgIHJldHVybiBwb3MubWFwKChudW0sIGluZGV4KSA9PiBudW0gKyBhZGRBcnJbaW5kZXhdKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhY3Rpb25zID0gcG9zID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYWN0aW9ucyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoYWN0aW9uTW92ZW1lbnRJbmRleCk7XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zLmZpbHRlcihhY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSByZXN1bHQocG9zLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICEhc3RhdGUud29ybGRbY2Fub25pY2FsRm9ybShwb3NpdGlvbildO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBnb2FsVGVzdCA9IHBvcyA9PiBwb3MuZXZlcnkoKG51bSwgaW5kZXgpID0+IG51bSA9PT0gcG9zaXRpb25baW5kZXhdKTtcclxuICAgICAgICBjb25zdCBwYXRoQ29zdCA9IChmcm9tLCBhY3Rpb24sIHRvKSA9PiBjb3N0KGFjdGlvbik7XHJcbiAgICAgICAgY29uc3QgaGV1cmlzdGljID0gcG9zID0+IHRoaXMuX2Rpc3RhbmNlVG8ocG9zLCBwb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3QgY2Fub25pY2FsRm9ybSA9IHBvcyA9PiBjYW5vbmljYWxQb3NpdGlvbiguLi5wb3MpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUsXHJcbiAgICAgICAgICAgIGFjdGlvbnMsXHJcbiAgICAgICAgICAgIHJlc3VsdCxcclxuICAgICAgICAgICAgZ29hbFRlc3QsXHJcbiAgICAgICAgICAgIHBhdGhDb3N0LFxyXG4gICAgICAgICAgICBoZXVyaXN0aWMsXHJcbiAgICAgICAgICAgIGNhbm9uaWNhbEZvcm1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0FudC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgRW52aXJvbm1lbnQgZnJvbSAnLi9FbnZpcm9ubWVudC5qcyc7XG5pbXBvcnQgSG9sZSBmcm9tICcuL0hvbGUuanMnO1xuaW1wb3J0IEFudCBmcm9tICcuL0FudC5qcyc7XG5pbXBvcnQgTGVhZiBmcm9tICcuL0xlYWYuanMnO1xuaW1wb3J0IFJlbmRlciBmcm9tICcuL1JlbmRlci5qcyc7XG5cbihkb2MgPT4ge1xuICAgIGNvbnN0IHVuaXRTaXplUHggPSA2MDtcbiAgICBjb25zdCB1bml0T3JkZXIgPSA4O1xuXG4gICAgY29uc3QgZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoe1xuICAgICAgICB3aWR0aDogdW5pdE9yZGVyLFxuICAgICAgICBoZWlnaHQ6IHVuaXRPcmRlclxuICAgIH0pO1xuICAgIGNvbnN0IGhvbGUgPSBuZXcgSG9sZSgpO1xuICAgIGVudmlyb25tZW50LmFkZEF0UmFuZG9tKGhvbGUpO1xuICAgIGVudmlyb25tZW50LnVwKCk7XG5cbiAgICBjb25zdCBhbnQgPSBuZXcgQW50KCk7XG4gICAgZW52aXJvbm1lbnQuYWRkQXRSYW5kb20oYW50KTtcbiAgICBhbnQudXAoKTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGRvYy5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXMud2lkdGggPSBjYW52YXMuaGVpZ2h0ID0gdW5pdFNpemVQeCAqIHVuaXRPcmRlcjtcbiAgICBkb2MuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5pbm5lclRleHQgPSAnQWRpY2lvbmFyIGZvbGhhJztcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGxlYWYgPSBuZXcgTGVhZigpO1xuICAgICAgICBlbnZpcm9ubWVudC5hZGRBdFJhbmRvbShsZWFmKTtcbiAgICB9KTtcbiAgICBkb2MuYm9keS5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgY29uc3QgcmVuZGVyID0gbmV3IFJlbmRlcihlbnZpcm9ubWVudCwgY2FudmFzKTtcbiAgICByZW5kZXIudXAoKTtcbn0pKGRvY3VtZW50KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNhbm9uaWNhbFBvc2l0aW9uLCByYW5kb21OdW1iZXIgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IEFDVElPTl9DT01QTEVURSwgQUNUSU9OX1BST0dSRVNTRUQsIEFDVElPTl9GQUlMRUQsIE1PVkVELCBDQVRDSCwgRFJPUCB9IGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCB7IFVQLCBET1dOLCBMRUZULCBSSUdIVCwgQ0FUQ0ggYXMgQ0FUQ0hfQUNUSU9OLCBEUk9QIGFzIERST1BfQUNUSU9OIH0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCBTcXVhcmUgZnJvbSAnLi9TcXVhcmUuanMnO1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vRXZlbnQuanMnO1xuaW1wb3J0IExlYWYgZnJvbSAnLi9MZWFmLmpzJztcbmltcG9ydCBIb2xlIGZyb20gJy4vSG9sZS5qcyc7XG5pbXBvcnQgQWdlbnQgZnJvbSAnLi9BZ2VudC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudmlyb25tZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSl7XG4gICAgICAgIHRoaXMub2JqZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLmxlYXZlcyA9IFtdO1xuXG4gICAgICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgY3ljbGVEdXJhdGlvbjogNDAwLFxuICAgICAgICAgICAgdmlld1JhZGl1czogMlxuICAgICAgICB9LCBjb25maWcpO1xuICAgIH1cblxuICAgIGFkZEF0UmFuZG9tKG9iamVjdCl7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5fZ2V0QXZhaWxhYmxlUmFuZG9tUG9zaXRpb24oKTtcbiAgICAgICAgaWYocG9zaXRpb24pXG4gICAgICAgICAgICB0aGlzLmFkZChvYmplY3QsIC4uLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBfZ2V0QXZhaWxhYmxlUmFuZG9tUG9zaXRpb24oKXtcbiAgICAgICAgY29uc3QgcG9zaXRpb25zSW5kZXggPSB7fTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICAgICAgZm9yKGxldCBsZW4gPSB3aWR0aCAqIGhlaWdodDsgbGVuLS07KXtcbiAgICAgICAgICAgIGNvbnN0IHggPSBsZW4gJSB3aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGxlbiAvIHdpZHRoKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGNhbm9uaWNhbFBvc2l0aW9uKHgsIHkpO1xuICAgICAgICAgICAgcG9zaXRpb25zSW5kZXhba2V5XSA9IFt4LCB5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub2JqZWN0cy5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IG9iamVjdC5nZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gY2Fub25pY2FsUG9zaXRpb24oLi4ucG9zaXRpb24pO1xuICAgICAgICAgICAgZGVsZXRlIHBvc2l0aW9uc0luZGV4W2tleV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IE9iamVjdC52YWx1ZXMocG9zaXRpb25zSW5kZXgpO1xuICAgICAgICByZXR1cm4gcG9zaXRpb25zLmxlbmd0aCA/IHBvc2l0aW9uc1tyYW5kb21OdW1iZXIocG9zaXRpb25zLmxlbmd0aCldIDogbnVsbDtcbiAgICB9XG5cbiAgICBhZGQob2JqZWN0LCAuLi5wb3NpdGlvbil7XG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG9iamVjdCk7XG4gICAgICAgIHRoaXMuX21vdmVPYmplY3Qob2JqZWN0LCAuLi5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgZ2V0Vmlld0ZvcihhZ2VudCl7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuZ2V0Vmlld1Bvc2l0aW9uc0ZvcihhZ2VudCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRTcXVhcmVzRm9yKHBvc2l0aW9ucyk7XG4gICAgfVxuXG4gICAgZ2V0Vmlld1Bvc2l0aW9uc0ZvcihhZ2VudCl7XG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xuICAgICAgICBjb25zdCByYWRpdXMgPSB0aGlzLmNvbmZpZy52aWV3UmFkaXVzO1xuICAgICAgICBjb25zdCBbYWdlbnRYLCBhZ2VudFldID0gYWdlbnQuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgY29uc3QgdG9YID0gTWF0aC5taW4oYWdlbnRYICsgcmFkaXVzICsgMSwgdGhpcy5jb25maWcud2lkdGgpO1xuICAgICAgICBmb3IobGV0IHggPSBNYXRoLm1heChhZ2VudFggLSByYWRpdXMsIDApOyB4IDwgdG9YOyB4Kyspe1xuICAgICAgICAgICAgY29uc3QgdmFsdWVZID0gTWF0aC5zcXJ0KE1hdGgucG93KHJhZGl1cywgMikgLSBNYXRoLnBvdyh4IC0gYWdlbnRYLCAyKSk7XG4gICAgICAgICAgICBjb25zdCByb3VuZGVkWSA9IE1hdGguZmxvb3IodmFsdWVZKTtcbiAgICAgICAgICAgIGNvbnN0IHRvWSA9IE1hdGgubWluKGFnZW50WSArIHJvdW5kZWRZICsgMSwgdGhpcy5jb25maWcuaGVpZ2h0KTtcbiAgICAgICAgICAgIGZvcihsZXQgeSA9IE1hdGgubWF4KGFnZW50WSAtIHJvdW5kZWRZLCAwKTsgeSA8IHRvWTsgeSsrKVxuICAgICAgICAgICAgICAgIGFyci5wdXNoKFt4LCB5XSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIF9nZXRTcXVhcmVzRm9yKHBvc2l0aW9ucyl7XG4gICAgICAgIGNvbnN0IHNxdWFyZXMgPSBwb3NpdGlvbnMucmVkdWNlKChvYmosIFt4LCB5XSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gY2Fub25pY2FsUG9zaXRpb24oeCwgeSk7XG5cbiAgICAgICAgICAgIGxldCBibG9ja2VkU2lkZVF1YW50aXR5ID0gMDtcbiAgICAgICAgICAgIGlmKHggPT09IDAgfHwgeCA9PT0gdGhpcy5nZXRXaWR0aCgpIC0gMSlcbiAgICAgICAgICAgICAgICBibG9ja2VkU2lkZVF1YW50aXR5Kys7XG5cbiAgICAgICAgICAgIGlmKHkgPT09IDAgfHwgeSA9PT0gdGhpcy5nZXRIZWlnaHQoKSAtIDEpXG4gICAgICAgICAgICAgICAgYmxvY2tlZFNpZGVRdWFudGl0eSsrO1xuXG4gICAgICAgICAgICBvYmpba2V5XSA9IG5ldyBTcXVhcmUoeCwgeSwgYmxvY2tlZFNpZGVRdWFudGl0eSk7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgdGhpcy5vYmplY3RzLmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGNhbm9uaWNhbFBvc2l0aW9uKC4uLm9iamVjdC5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgIGlmKHNxdWFyZXNba2V5XSlcbiAgICAgICAgICAgICAgICBzcXVhcmVzW2tleV0uYWRkKG9iamVjdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHNxdWFyZXMpO1xuICAgIH1cblxuICAgIHVwKCl7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxSZWYgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLl9leGVjQ3ljbGUoKSwgdGhpcy5jb25maWcuY3ljbGVEdXJhdGlvbik7XG4gICAgICAgIHRoaXMuX2V4ZWNDeWNsZSgpO1xuICAgIH1cblxuICAgIF9leGVjQ3ljbGUoKXtcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3NBY3Rpb25zKCk7XG4gICAgfVxuXG4gICAgX3Byb2dyZXNzQWN0aW9ucygpe1xuICAgICAgICB0aGlzLmFnZW50cygpLmZvckVhY2goYWdlbnQgPT4gdGhpcy5fcHJvZ3Jlc3NBY3Rpb24oYWdlbnQpKTtcbiAgICB9XG5cbiAgICBfcHJvZ3Jlc3NBY3Rpb24oYWdlbnQpe1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBhZ2VudC5hY3QoKTtcbiAgICAgICAgaWYoYWN0aW9uID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSB0aGlzLl9leGVjdXRlQWN0aW9uKGFnZW50LCBhY3Rpb24pO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50VHlwZSA9IHN1Y2Nlc3MgPyAoYWN0aW9uLmlzQ29tcGxldGUoKSA/IEFDVElPTl9DT01QTEVURSA6IEFDVElPTl9QUk9HUkVTU0VEKSA6IEFDVElPTl9GQUlMRUQ7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KHRoaXMsIGV2ZW50VHlwZSwgYWN0aW9uKTtcbiAgICAgICAgYWdlbnQucGVyY2VpdmUoZXZlbnQpO1xuICAgIH1cblxuICAgIF9leGVjdXRlQWN0aW9uKGFnZW50LCBhY3Rpb24pe1xuICAgICAgICBzd2l0Y2godHJ1ZSl7XG4gICAgICAgICAgICBjYXNlIGFjdGlvbi5pc01vdmVtZW50KCk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V4ZWN1dGVNb3ZlbWVudEFjdGlvbihhZ2VudCwgYWN0aW9uKTtcbiAgICAgICAgICAgIGNhc2UgYWN0aW9uLnR5cGVJcyhDQVRDSF9BQ1RJT04pOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9leGVjdXRlQ2F0Y2hBY3Rpb24oYWdlbnQsIGFjdGlvbik7XG4gICAgICAgICAgICBjYXNlIGFjdGlvbi50eXBlSXMoRFJPUF9BQ1RJT04pOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9leGVjdXRlRHJvcEFjdGlvbihhZ2VudCwgYWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9leGVjdXRlTW92ZW1lbnRBY3Rpb24oYWdlbnQsIGFjdGlvbil7XG4gICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gdGhpcy5fZ2V0TmV3UG9zaXRpb25Gcm9tQWN0aW9uVHlwZShhY3Rpb24uZ2V0VHlwZSgpLCBhZ2VudC5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgaWYodGhpcy5faXNJbkJvdW5kKC4uLm5ld1Bvc2l0aW9uKSl7XG4gICAgICAgICAgICB0aGlzLl9tb3ZlT2JqZWN0KGFnZW50LCAuLi5uZXdQb3NpdGlvbik7XG4gICAgICAgICAgICBhY3Rpb24uaW5jcmVhc2VQcm9ncmVzcygpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgX2V4ZWN1dGVDYXRjaEFjdGlvbihhZ2VudCwgYWN0aW9uKXtcbiAgICAgICAgaWYoYWdlbnQuY2Fycmllc1NvbWV0aGluZygpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG9iamVjdHMgPSB0aGlzLl9vYmplY3RzSW5TYW1lUG9zaXRpb24oYWdlbnQpO1xuICAgICAgICBjb25zdCBsZWF2ZXMgPSBvYmplY3RzLmZpbHRlcihvYmplY3QgPT4gb2JqZWN0IGluc3RhbmNlb2YgTGVhZilcbiAgICAgICAgICAgIC5maWx0ZXIob2JqZWN0ID0+ICFvYmplY3QuYmVpbmdDYXJyaWVkKCkpO1xuXG4gICAgICAgIGlmKGxlYXZlcy5sZW5ndGgpe1xuICAgICAgICAgICAgYWN0aW9uLmluY3JlYXNlUHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgIGlmKGFjdGlvbi5pc0NvbXBsZXRlKCkpXG4gICAgICAgICAgICAgICAgdGhpcy5fYXR0YWNoVG8obGVhdmVzWzBdLCBhZ2VudCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIF9leGVjdXRlRHJvcEFjdGlvbihhZ2VudCwgYWN0aW9uKXtcbiAgICAgICAgaWYoIWFnZW50LmNhcnJpZXNTb21ldGhpbmcoKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICBjb25zdCBvYmplY3RzID0gdGhpcy5fb2JqZWN0c0luU2FtZVBvc2l0aW9uKGFnZW50KTtcbiAgICAgICAgY29uc3QgaG9sZXMgPSBvYmplY3RzLmZpbHRlcihvYmplY3QgPT4gb2JqZWN0IGluc3RhbmNlb2YgSG9sZSk7XG5cbiAgICAgICAgaWYoaG9sZXMubGVuZ3RoKXtcbiAgICAgICAgICAgIGFjdGlvbi5pbmNyZWFzZVByb2dyZXNzKCk7XG4gICAgICAgICAgICBpZihhY3Rpb24uaXNDb21wbGV0ZSgpKXtcbiAgICAgICAgICAgICAgICBjb25zdCBvYmplY3QgPSBhZ2VudC5nZXRDYXJyaWVkT2JqZWN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGV0dGFjaEZyb20ob2JqZWN0LCBhZ2VudCk7XG5cbiAgICAgICAgICAgICAgICBpZihvYmplY3QgaW5zdGFuY2VvZiBMZWFmKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb25zdW1lTGVhZihvYmplY3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBfZ2V0TmV3UG9zaXRpb25Gcm9tQWN0aW9uVHlwZSh0eXBlLCBwb3NpdGlvbkFycil7XG4gICAgICAgICBjb25zdCBtb3ZlbWVudHMgPSB7XG4gICAgICAgICAgICBbVVBdOiBbMCwgLTFdLFxuICAgICAgICAgICAgW0RPV05dOiBbMCwgMV0sXG4gICAgICAgICAgICBbUklHSFRdOiBbMSwgMF0sXG4gICAgICAgICAgICBbTEVGVF06IFstMSwgMF1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgYWRkID0gbW92ZW1lbnRzW3R5cGVdO1xuICAgICAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHBvc2l0aW9uQXJyLm1hcCgodmFsdWUsIGluZGV4KSA9PiB2YWx1ZSArIGFkZFtpbmRleF0pO1xuXG4gICAgICAgIHJldHVybiBuZXdQb3NpdGlvbjtcbiAgICB9XG5cbiAgICBfaXNJbkJvdW5kKC4uLnBvc2l0aW9uKXtcbiAgICAgICAgY29uc3QgbGltaXRzID0gW3RoaXMuZ2V0V2lkdGgoKSwgdGhpcy5nZXRIZWlnaHQoKV07XG4gICAgICAgIHJldHVybiBwb3NpdGlvbi5ldmVyeSgodmFsdWUsIGluZGV4KSA9PiB2YWx1ZSA+PSAwICYmIHZhbHVlIDwgbGltaXRzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgX21vdmVPYmplY3Qob2JqZWN0LCAuLi5wb3NpdGlvbil7XG4gICAgICAgIG9iamVjdC5zZXRQb3NpdGlvbiguLi5wb3NpdGlvbik7XG5cbiAgICAgICAgaWYob2JqZWN0IGluc3RhbmNlb2YgQWdlbnQpe1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtvYmplY3QsIHBvc2l0aW9ufTtcbiAgICAgICAgICAgIGNvbnN0IGV2ID0gbmV3IEV2ZW50KHRoaXMsIE1PVkVELCBkYXRhKTtcbiAgICAgICAgICAgIG9iamVjdC5wZXJjZWl2ZShldik7XG4gICAgICAgIH1cblxuICAgICAgICBpZihvYmplY3QuY2Fycmllc1NvbWV0aGluZygpKVxuICAgICAgICAgICAgdGhpcy5fbW92ZU9iamVjdChvYmplY3QuZ2V0Q2FycmllZE9iamVjdCgpLCAuLi5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgX29iamVjdHNJblNhbWVQb3NpdGlvbihvYmplY3Qpe1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IG9iamVjdC5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBzYW1lVmFsdWUgPSAodmFsdWUsIGluZGV4KSA9PiB2YWx1ZSA9PT0gcG9zaXRpb25baW5kZXhdO1xuICAgICAgICByZXR1cm4gdGhpcy5vYmplY3RzLmZpbHRlcihvYmplY3QgPT4gb2JqZWN0LmdldFBvc2l0aW9uKCkuZXZlcnkoc2FtZVZhbHVlKSlcbiAgICAgICAgICAgIC5maWx0ZXIob2JqID0+IG9iaiAhPSBvYmplY3QpO1xuICAgIH1cblxuICAgIF9hdHRhY2hUbyhvYmplY3QsIGFnZW50KXtcbiAgICAgICAgb2JqZWN0LnNldENhcnJpZXJPYmplY3QoYWdlbnQpO1xuICAgICAgICBhZ2VudC5zZXRDYXJyaWVkT2JqZWN0KG9iamVjdCk7XG5cbiAgICAgICAgaWYoYWdlbnQgaW5zdGFuY2VvZiBBZ2VudCl7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCh0aGlzLCBDQVRDSCwge29iamVjdH0pO1xuICAgICAgICAgICAgYWdlbnQucGVyY2VpdmUoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2RldHRhY2hGcm9tKG9iamVjdCwgYWdlbnQpe1xuICAgICAgICBvYmplY3Quc2V0Q2Fycmllck9iamVjdChudWxsKTtcbiAgICAgICAgYWdlbnQuc2V0Q2FycmllZE9iamVjdChudWxsKTtcblxuICAgICAgICBpZihhZ2VudCBpbnN0YW5jZW9mIEFnZW50KXtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KHRoaXMsIERST1AsIHtvYmplY3R9KTtcbiAgICAgICAgICAgIGFnZW50LnBlcmNlaXZlKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jb25zdW1lTGVhZihsZWFmKXtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLm9iamVjdHMuaW5kZXhPZihsZWFmKTtcbiAgICAgICAgdGhpcy5vYmplY3RzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgdGhpcy5sZWF2ZXMucHVzaChsZWFmKTtcbiAgICB9XG5cbiAgICBnZXRPYmplY3RzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm9iamVjdHMuc2xpY2UoKTtcbiAgICB9XG5cbiAgICBhZ2VudHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0cy5maWx0ZXIob2JqID0+IG9iaiBpbnN0YW5jZW9mIEFnZW50KTtcbiAgICB9XG5cbiAgICBnZXRXaWR0aCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcud2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0SGVpZ2h0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5oZWlnaHQ7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvRW52aXJvbm1lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNxdWFyZSB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgYmxvY2tlZFNpZGVRdWFudGl0eSl7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuYmxvY2tlZFNpZGVRdWFudGl0eSA9IGJsb2NrZWRTaWRlUXVhbnRpdHk7XG4gICAgICAgIHRoaXMub2JqZWN0cyA9IFtdO1xuICAgIH1cblxuICAgIGFkZChvYmplY3Qpe1xuICAgICAgICB0aGlzLm9iamVjdHMucHVzaChvYmplY3QpO1xuICAgIH1cblxuICAgIGdldFBvc2l0aW9uKCl7XG4gICAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnldO1xuICAgIH1cblxuICAgIGdldEJsb2NrZWRTaWRlUXVhbnRpdHkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxvY2tlZFNpZGVRdWFudGl0eTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9TcXVhcmUuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGFyZ3MgPT4ge1xuICAgIGNvbnN0IHByb2JsZW0gPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgY2Fub25pY2FsRm9ybTogSlNPTi5zdHJpbmdpZnlcbiAgICB9LCBhcmdzKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbFN0YXRlLCBjYW5vbmljYWxGb3JtLCBwYXRoQ29zdCwgaGV1cmlzdGljIH0gPSBwcm9ibGVtO1xuICAgIGNvbnN0IG1ha2VOb2RlID0gbm9kZU1ha2VyRmFjdG9yeShjYW5vbmljYWxGb3JtLCBoZXVyaXN0aWMpO1xuXG4gICAgY29uc3QgZnJvbnRpZXIgPSBtYWtlRnJvbnRpZXIoKTtcbiAgICBjb25zdCBleHBsb3JlZCA9IHt9O1xuICAgIGluc2VydChmcm9udGllciwgbWFrZU5vZGUoaW5pdGlhbFN0YXRlKSk7XG5cbiAgICBmb3IobGV0IG5vZGU7IG5vZGUgPSBwb3AoZnJvbnRpZXIpOyl7XG4gICAgICAgIGlmKHByb2JsZW0uZ29hbFRlc3Qobm9kZS5zdGF0ZSkpXG4gICAgICAgICAgICByZXR1cm4gbm9kZS5zZXF1ZW5jZTtcblxuICAgICAgICBleHBsb3JlZFtub2RlLmhhc2hdID0gdHJ1ZTtcblxuICAgICAgICBwcm9ibGVtLmFjdGlvbnMobm9kZS5zdGF0ZSlcbiAgICAgICAgICAgIC5tYXAoYWN0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHByb2JsZW0ucmVzdWx0KG5vZGUuc3RhdGUsIGFjdGlvbik7XG4gICAgICAgICAgICAgICAgY29uc3QgY29zdCA9IHBhdGhDb3N0KG5vZGUuc3RhdGUsIGFjdGlvbiwgc3RhdGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBtYWtlTm9kZShzdGF0ZSwgbm9kZS5jb3N0ICsgY29zdCwgWy4uLm5vZGUuc2VxdWVuY2UsIGFjdGlvbl0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoY2hpbGQgPT4gIWV4cGxvcmVkW2NoaWxkLmhhc2hdKVxuICAgICAgICAgICAgLmZvckVhY2goY2hpbGQgPT4gaW5zZXJ0KGZyb250aWVyLCBjaGlsZCkpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgbWFrZUZyb250aWVyID0gKCkgPT4gKHsgaW5kZXg6IHt9LCBxdWV1ZTogW10gfSk7XG5cbmNvbnN0IG5vZGVNYWtlckZhY3RvcnkgPSAoY2Fub25pY2FsRm9ybSwgaGV1cmlzdGljKSA9PiB7XG4gICAgcmV0dXJuIChzdGF0ZSwgY29zdCA9IDAsIHNlcXVlbmNlID0gW10pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgaGFzaDogY2Fub25pY2FsRm9ybShzdGF0ZSksXG4gICAgICAgICAgICBjb3N0LFxuICAgICAgICAgICAgZXN0aW1hdGU6IGNvc3QgKyBoZXVyaXN0aWMoc3RhdGUpLFxuICAgICAgICAgICAgc2VxdWVuY2VcbiAgICAgICAgfTtcbiAgICB9O1xufVxuXG5jb25zdCBpbnNlcnQgPSAoZnJvbnRpZXIsIG5vZGUpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGZyb250aWVyLmluZGV4W25vZGUuaGFzaF07XG4gICAgaWYoaW5kZXggIT0gbnVsbCl7XG4gICAgICAgIGlmKGZyb250aWVyLnF1ZXVlW2luZGV4XS5jb3N0ID4gbm9kZS5jb3N0KXtcbiAgICAgICAgICAgIGZyb250aWVyLnF1ZXVlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB1cGRhdGVJbmRleChmcm9udGllciwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgaWR4ID0gMDtcbiAgICB3aGlsZShpZHggPCBmcm9udGllci5xdWV1ZS5sZW5ndGggJiYgZnJvbnRpZXIucXVldWVbaWR4XS5lc3RpbWF0ZSA8PSBub2RlLmVzdGltYXRlKVxuICAgICAgICBpZHgrKztcblxuICAgIGZyb250aWVyLmluZGV4W25vZGUuaGFzaF0gPSBpZHg7XG4gICAgaWYoaWR4ID09PSBmcm9udGllci5xdWV1ZS5sZW5ndGgpXG4gICAgICAgIGZyb250aWVyLnF1ZXVlID0gWy4uLmZyb250aWVyLnF1ZXVlLCBub2RlXTtcbiAgICBlbHNlXG4gICAgICAgIGZyb250aWVyLnF1ZXVlLnNwbGljZShpZHgsIDAsIG5vZGUpO1xuXG4gICAgdXBkYXRlSW5kZXgoZnJvbnRpZXIsIGlkeCArIDEpO1xufVxuXG5jb25zdCBwb3AgPSBmcm9udGllciA9PiB7XG4gICAgaWYoIWZyb250aWVyLnF1ZXVlLmxlbmd0aClcbiAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBbbm9kZSwgLi4udGFpbF0gPSBmcm9udGllci5xdWV1ZTtcbiAgICBkZWxldGUgZnJvbnRpZXIuaW5kZXhbbm9kZS5oYXNoXTtcbiAgICBmcm9udGllci5xdWV1ZSA9IHRhaWw7XG5cbiAgICB1cGRhdGVJbmRleChmcm9udGllcik7XG5cbiAgICByZXR1cm4gbm9kZTtcbn1cblxuY29uc3QgdXBkYXRlSW5kZXggPSAoZnJvbnRpZXIsIGluZGV4ID0gMCwgY291bnQgPSBudWxsKSA9PiB7XG4gICAgY291bnQgPSBjb3VudCB8fCBmcm9udGllci5xdWV1ZS5sZW5ndGg7XG4gICAgZm9yKDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKylcbiAgICAgICAgZnJvbnRpZXIuaW5kZXhbZnJvbnRpZXIucXVldWVbaW5kZXhdLmhhc2hdID0gaW5kZXg7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2VhcmNoL2FTdGFyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBVUCwgRE9XTiwgTEVGVCwgUklHSFQsIENBVENILCBEUk9QLCBjb3N0IH0gZnJvbSAnLi9hY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKXtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgfVxuXG4gICAgaW5jcmVhc2VQcm9ncmVzcygpe1xuICAgICAgICB0aGlzLnByb2dyZXNzKys7XG4gICAgfVxuXG4gICAgaXNDb21wbGV0ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9ncmVzcyA9PT0gY29zdCh0aGlzLnR5cGUpO1xuICAgIH1cblxuICAgIGlzTW92ZW1lbnQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZUlzKFVQLCBSSUdIVCwgRE9XTiwgTEVGVCk7XG4gICAgfVxuXG4gICAgdHlwZUlzKC4uLnR5cGVzKXtcbiAgICAgICAgcmV0dXJuIHR5cGVzLmluY2x1ZGVzKHRoaXMudHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0VHlwZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0FjdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IENBUlJZID0gU3ltYm9sKCdjYXJyeScpO1xuZXhwb3J0IGNvbnN0IEdPVE8gPSBTeW1ib2woJ2dvdG8nKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2dvYWxzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjYW5vbmljYWxQb3NpdGlvbiB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEFudCBmcm9tICcuL0FudC5qcyc7XG5pbXBvcnQgSG9sZSBmcm9tICcuL0hvbGUuanMnO1xuaW1wb3J0IExlYWYgZnJvbSAnLi9MZWFmLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbnZpcm9ubWVudCwgZWxlbWVudCwgY29uZmlnID0ge30pe1xuICAgICAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG5cbiAgICAgICAgdGhpcy5odG1sRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuaHRtbEVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25GcmFtZVJlcSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHVuaXRTaXplUHg6IG51bGwsXG4gICAgICAgICAgICB1bml0U3Ryb2tlUHg6IDIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjOTQ3MDY0JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRTdHJva2VDb2xvcjogJyM4MzYwNTMnLFxuICAgICAgICAgICAgYW50Q29sb3I6ICcjQ0Q1MTFEJyxcbiAgICAgICAgICAgIGxlYWZDb2xvcjogJyM4MEZGMDAnLFxuICAgICAgICAgICAgbGVhZlN0ZW1Db2xvcjogJyM2MEREMDAnLFxuICAgICAgICAgICAgdW5vYnNlcnZlZENvbG9yOiAncmdiYSgwLCAwLCAwLCAuNSknLFxuICAgICAgICAgICAgaG9sZUNvbG9yOiAnIzQ0NCcsXG4gICAgICAgICAgICBob2xlQm9yZGVyQ29sb3I6ICcjNzI1MDQyJ1xuICAgICAgICB9LCBjb25maWcpO1xuXG4gICAgICAgIGlmKHRoaXMuY29uZmlnLnVuaXRTaXplUHggPT09IG51bGwpXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy51bml0U2l6ZVB4ID0gdGhpcy5odG1sRWxlbWVudC53aWR0aCAvIHRoaXMuZW52aXJvbm1lbnQuZ2V0V2lkdGgoKTtcbiAgICB9XG5cbiAgICB1cCgpe1xuICAgICAgICBjb25zdCBmcmFtZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVSZXEgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWUpO1xuICAgICAgICAgICAgdGhpcy5fZHJhdygpO1xuICAgICAgICB9O1xuICAgICAgICBmcmFtZSgpO1xuICAgIH1cblxuICAgIF9kcmF3KCl7XG4gICAgICAgIHRoaXMuX2RyYXdCYWNrZ3JvdW5kKHRoaXMuZW52aXJvbm1lbnQpO1xuICAgICAgICB0aGlzLl9kcmF3T2JqZWN0cyh0aGlzLmVudmlyb25tZW50LmdldE9iamVjdHMoKSk7XG4gICAgICAgIHRoaXMuX2RyYXdPYnNlcnZlZEFyZWEodGhpcy5lbnZpcm9ubWVudC5hZ2VudHMoKSk7XG4gICAgfVxuXG4gICAgX2RyYXdCYWNrZ3JvdW5kKGVudmlyb25tZW50KXtcbiAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcblxuICAgICAgICBjb25zdCB1bml0U2l6ZVB4ID0gdGhpcy5jb25maWcudW5pdFNpemVQeDtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBlbnZpcm9ubWVudC5nZXRXaWR0aCgpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBlbnZpcm9ubWVudC5nZXRIZWlnaHQoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCAqIHVuaXRTaXplUHgsIGhlaWdodCAqIHVuaXRTaXplUHgpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbmZpZy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuY29uZmlnLmJhY2tncm91bmRTdHJva2VDb2xvcjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMuY29uZmlnLnVuaXRTdHJva2VQeDtcblxuICAgICAgICB0aGlzLl9pdGVyYXRlUG9zaXRpb25zKCh4LCB5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhcmdzID0gWy4uLnRoaXMuX2dldFBpeGVsUG9zaXRpb24oeCwgeSksIHVuaXRTaXplUHgsIHVuaXRTaXplUHhdO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KC4uLmFyZ3MpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVJlY3QoLi4uYXJncyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgX2l0ZXJhdGVQb3NpdGlvbnMoY2FsbGJhY2spe1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZW52aXJvbm1lbnQuZ2V0V2lkdGgoKTtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5lbnZpcm9ubWVudC5nZXRIZWlnaHQoKTtcbiAgICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4Kyspe1xuICAgICAgICAgICAgZm9yKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgeCwgeSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZ2V0UGl4ZWxQb3NpdGlvbiguLi5wb3NpdGlvbil7XG4gICAgICAgIHJldHVybiBwb3NpdGlvbi5tYXAodmFsdWUgPT4gdmFsdWUgKiB0aGlzLmNvbmZpZy51bml0U2l6ZVB4KTtcbiAgICB9XG5cbiAgICBfZHJhd09iamVjdHMob2JqZWN0cyl7XG4gICAgICAgIG9iamVjdHMubWFwKG9iamVjdCA9PiAoe29iamVjdCwgekluZGV4OiB0aGlzLl9nZXRaSW5kZXhGb3Iob2JqZWN0KX0pKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuekluZGV4IC0gYi56SW5kZXgpXG4gICAgICAgICAgICAubWFwKG9iaiA9PiBvYmoub2JqZWN0KVxuICAgICAgICAgICAgLmZvckVhY2gob2JqZWN0ID0+IHRoaXMuX2RyYXdPYmplY3Qob2JqZWN0KSk7XG4gICAgfVxuXG4gICAgX2dldFpJbmRleEZvcihvYmplY3Qpe1xuICAgICAgICBzd2l0Y2godHJ1ZSl7XG4gICAgICAgICAgICBjYXNlIG9iamVjdCBpbnN0YW5jZW9mIEFudDpcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZHJhd09iamVjdChvYmplY3Qpe1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IG9iamVjdC5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBwaXhlbFBvc2l0aW9uID0gdGhpcy5fZ2V0UGl4ZWxQb3NpdGlvbiguLi5wb3NpdGlvbik7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSguLi5waXhlbFBvc2l0aW9uKTtcblxuICAgICAgICBpZihvYmplY3QuYmVpbmdDYXJyaWVkKCkpe1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSh0aGlzLmNvbmZpZy51bml0U2l6ZVB4ICogLjY2LCAwKTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zY2FsZSguMzMsIC4zMyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kcmF3U3BlY2lmaWNPYmplY3Qob2JqZWN0KTtcblxuICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIF9kcmF3U3BlY2lmaWNPYmplY3Qob2JqZWN0KXtcbiAgICAgICAgc3dpdGNoKHRydWUpe1xuICAgICAgICAgICAgY2FzZSBvYmplY3QgaW5zdGFuY2VvZiBBbnQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdBbnQob2JqZWN0KTtcbiAgICAgICAgICAgIGNhc2Ugb2JqZWN0IGluc3RhbmNlb2YgSG9sZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZHJhd0hvbGUob2JqZWN0KTtcbiAgICAgICAgICAgIGNhc2Ugb2JqZWN0IGluc3RhbmNlb2YgTGVhZjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZHJhd0xlYWYob2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9kcmF3QW50KGFudCl7XG4gICAgICAgIGNvbnN0IGhhbGZVbml0ID0gdGhpcy5jb25maWcudW5pdFNpemVQeCAvIDI7XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IGhhbGZVbml0ICogLjMwO1xuICAgICAgICBjb25zdCBkZXZpYXRpb24gPSByYWRpdXMgKiBNYXRoLnNxcnQoMik7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5jb25maWcuYW50Q29sb3I7XG4gICAgICAgIGNvbnN0IGxlZ1NpemUgPSBoYWxmVW5pdCAqIC42NjtcbiAgICAgICAgY29uc3QgZGVncmVlID0gTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgZm9yKGxldCBsZW4gPSAzOyBsZW4tLTspe1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcblxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZShoYWxmVW5pdCwgaGFsZlVuaXQpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnJvdGF0ZSgtZGVncmVlICogKGxlbiAqIDM1ICsgMTApKTtcblxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0Lm1vdmVUbygtbGVnU2l6ZSwgMCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKGxlZ1NpemUsIDApO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCB4ID0gLTE7IHggPD0gMTsgeCsrKXtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IGhhbGZVbml0ICsgZGV2aWF0aW9uICogeDtcbiAgICAgICAgICAgIHRoaXMuX2RyYXdDaXJjbGUocG9zLCBwb3MsIHJhZGl1cywgdGhpcy5jb25maWcuYW50Q29sb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2RyYXdIb2xlKGhvbGUpe1xuICAgICAgICBjb25zdCBoYWxmVW5pdCA9IHRoaXMuY29uZmlnLnVuaXRTaXplUHggLyAyO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyhoYWxmVW5pdCwgaGFsZlVuaXQsIGhhbGZVbml0IC8gMS44LCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGlwKCk7XG5cbiAgICAgICAgdGhpcy5fZHJhd0NpcmNsZShoYWxmVW5pdCwgaGFsZlVuaXQsIGhhbGZVbml0IC8gMS44LCB0aGlzLmNvbmZpZy5ob2xlQm9yZGVyQ29sb3IpO1xuICAgICAgICBjb25zdCBkZXZpYXRpb24gPSA0O1xuICAgICAgICB0aGlzLl9kcmF3Q2lyY2xlKGhhbGZVbml0ICsgZGV2aWF0aW9uLCBoYWxmVW5pdCArIGRldmlhdGlvbiwgaGFsZlVuaXQgLyAxLjgsIHRoaXMuY29uZmlnLmhvbGVDb2xvcik7XG4gICAgfVxuXG4gICAgX2RyYXdMZWFmKGxlYWYpe1xuICAgICAgICBjb25zdCBoYWxmVW5pdCA9IHRoaXMuY29uZmlnLnVuaXRTaXplUHggLyAyO1xuICAgICAgICBjb25zdCBjaXJjbGVSYWRpdXMgPSBoYWxmVW5pdCAvIDI7XG4gICAgICAgIGNvbnN0IGxlYWZIYWxmV2lkdGggPSBjaXJjbGVSYWRpdXMgKiAuODtcbiAgICAgICAgY29uc3QgbGVhZkhhbGZIZWlnaHQgPSBNYXRoLnNxcnQoTWF0aC5wb3coY2lyY2xlUmFkaXVzLCAyKSAtIE1hdGgucG93KGNpcmNsZVJhZGl1cyAtIGxlYWZIYWxmV2lkdGgsIDIpKTtcblxuICAgICAgICBmb3IobGV0IGxlbiA9IDI7IGxlbi0tOyl7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQucmVjdChoYWxmVW5pdCAtIGxlYWZIYWxmV2lkdGggKiBsZW4sIGhhbGZVbml0IC0gbGVhZkhhbGZIZWlnaHQsIGxlYWZIYWxmV2lkdGgsIGxlYWZIYWxmSGVpZ2h0ICogMik7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuY2xpcCgpO1xuXG4gICAgICAgICAgICBjb25zdCB4ID0gKGNpcmNsZVJhZGl1cyAtIGxlYWZIYWxmV2lkdGgpICogWy0xLCAxXVtsZW5dO1xuICAgICAgICAgICAgdGhpcy5fZHJhd0NpcmNsZShoYWxmVW5pdCArIHgsIGhhbGZVbml0LCBjaXJjbGVSYWRpdXMsIHRoaXMuY29uZmlnLmxlYWZDb2xvcik7XG5cbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbmZpZy5sZWFmU3RlbUNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8oaGFsZlVuaXQsIGhhbGZVbml0IC0gbGVhZkhhbGZIZWlnaHQpO1xuICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKGhhbGZVbml0LCBoYWxmVW5pdCArIGxlYWZIYWxmSGVpZ2h0ICogMS40KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIF9kcmF3Q2lyY2xlKHgsIHksIHJhZGl1cywgY29sb3Ipe1xuICAgICAgICBjb25zdCBwYXRoID0gbmV3IFBhdGgyRCgpO1xuICAgICAgICBwYXRoLmFyYyh4LCB5LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbChwYXRoKTtcbiAgICB9XG5cbiAgICBfZHJhd09ic2VydmVkQXJlYShhZ2VudHMpe1xuICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xuXG4gICAgICAgIGNvbnN0IG9ic2VydmVkUG9zaXRpb25zID0gYWdlbnRzLnJlZHVjZSgoY2FycnksIGFnZW50KSA9PiB0aGlzLl9hZGRPYnNlcnZlZFBvc2l0aW9uc0Zyb21BZ2VudChjYXJyeSwgYWdlbnQpLCB7fSk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuY29uZmlnLnVub2JzZXJ2ZWRDb2xvcjtcbiAgICAgICAgdGhpcy5faXRlcmF0ZVBvc2l0aW9ucygoeCwgeSkgPT4gdGhpcy5fZHJhd1Vub2JzZXJ2ZWRTcXVhcmVzKG9ic2VydmVkUG9zaXRpb25zLCB4LCB5KSk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBfYWRkT2JzZXJ2ZWRQb3NpdGlvbnNGcm9tQWdlbnQob2JqLCBhZ2VudCl7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuZW52aXJvbm1lbnQuZ2V0Vmlld1Bvc2l0aW9uc0ZvcihhZ2VudCk7XG4gICAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKGFyciA9PiBvYmpbY2Fub25pY2FsUG9zaXRpb24oLi4uYXJyKV0gPSB0cnVlKTtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIF9kcmF3VW5vYnNlcnZlZFNxdWFyZXMob2JzZXJ2ZWRQb3NpdGlvbnMsIHgsIHkpe1xuICAgICAgICBjb25zdCBrZXkgPSBjYW5vbmljYWxQb3NpdGlvbih4LCB5KTtcbiAgICAgICAgaWYob2JzZXJ2ZWRQb3NpdGlvbnNba2V5XSlcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBjb25zdCBwaXhlbHMgPSB0aGlzLl9nZXRQaXhlbFBvc2l0aW9uKHgsIHkpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoLi4ucGl4ZWxzLCB0aGlzLmNvbmZpZy51bml0U2l6ZVB4LCB0aGlzLmNvbmZpZy51bml0U2l6ZVB4KTtcbiAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1JlbmRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==