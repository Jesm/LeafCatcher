(function(){
    'use strict';

    const MOVED_EVENT = Symbol('moved_event');
    const ACTION_COMPLETE_EVENT = Symbol('action_complete_event');
    const ACTION_FAILED_EVENT = Symbol('action_failed_event');
    const ACTION_PROGRESSED_EVENT = Symbol('action_progressed_event');
    const CAPTURED_VIEW_EVENT = Symbol('captured_view_event');
    const CATCH_EVENT = Symbol('catch_event');
    const DROP_EVENT = Symbol('drop_event');

    const UP_ACTION = Symbol('up_action');
    const RIGHT_ACTION = Symbol('right_action');
    const DOWN_ACTION = Symbol('down_action');
    const LEFT_ACTION = Symbol('left_action');
    const CATCH_ACTION = Symbol('catch_action');
    const DROP_ACTION = Symbol('drop_action');

    const CARRY_GOAL = Symbol('carry_goal');
    const GOTO_GOAL = Symbol('goto_goal');

    const INITIALIZED = Symbol('initialized');
    const OPERATING = Symbol('operating');

    const canonicalPosition = (...arr) => arr.join(' ');
    const randomNumber = number => Math.floor(Math.random() * number);

    class Environment{
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
                const key = canonicalPosition(x, y);
                positionsIndex[key] = [x, y];
            }

            this.objects.forEach(object => {
                const position = object.getPosition();
                const key = canonicalPosition(...position);
                delete positionsIndex[key];
            });

            const positions = Object.values(positionsIndex);
            return positions.length ? positions[randomNumber(positions.length)] : null;
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
                const key = canonicalPosition(x, y);

                let blockedSideQuantity = 0;
                if(x === 0 || x === this.getWidth() - 1)
                    blockedSideQuantity++;

                if(y === 0 || y === this.getHeight() - 1)
                    blockedSideQuantity++;

                obj[key] = new Square(x, y, blockedSideQuantity);
                return obj;
            }, {});

            this.objects.forEach(object => {
                const key = canonicalPosition(...object.getPosition());
                if(squares[key])
                    squares[key].add(object);
            });

            return Object.values(squares);
        }

        execute(){
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

            const eventType = success ? (action.isComplete() ? ACTION_COMPLETE_EVENT : ACTION_PROGRESSED_EVENT) : ACTION_FAILED_EVENT;
            const event = new Event(this, eventType, action);
            agent.perceive(event);
        }

        _executeAction(agent, action){
            if(action.isMovement())
                return this._executeMovementAction(agent, action);

            if(action.typeIs(CATCH_ACTION))
                return this._executeCatchAction(agent, action);

            if(action.typeIs(DROP_ACTION))
                return this._executeDropAction(agent, action);
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
            const leaves = objects.filter(object => object instanceof Leaf)
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
            const holes = objects.filter(object => object instanceof Hole);

            if(holes.length){
                action.increaseProgress();
                if(action.isComplete()){
                    const object = agent.getCarriedObject();
                    this._dettachFrom(object, agent);

                    if(object instanceof Leaf)
                        this._consumeLeaf(object);
                }

                return true;
            }

            return false;
        }

        _getNewPositionFromActionType(type, positionArr){
             const movements = {
                [UP_ACTION]: [0, -1],
                [DOWN_ACTION]: [0, 1],
                [RIGHT_ACTION]: [1, 0],
                [LEFT_ACTION]: [-1, 0]
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

            if(object instanceof Agent){
                const data = {object, position};
                const ev = new Event(this, MOVED_EVENT, data);
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

            if(agent instanceof Agent){
                const event = new Event(this, CATCH_EVENT, {object});
                agent.perceive(event);
            }
        }

        _dettachFrom(object, agent){
            object.setCarrierObject(null);
            agent.setCarriedObject(null);

            if(agent instanceof Agent){
                const event = new Event(this, DROP_EVENT, {object});
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
            return this.objects.filter(obj => obj instanceof Agent);
        }

        getWidth(){
            return this.config.width;
        }

        getHeight(){
            return this.config.height;
        }
    }

    class Event{
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

    class Action{
        constructor(type){
            this.type = type;
            this.progress = 0;
        }

        increaseProgress(){
            this.progress++;
        }

        isComplete(){
            return this.progress === this.duration();
        }

        duration(){
            switch(this.type){
            case UP_ACTION: case RIGHT_ACTION: case DOWN_ACTION: case LEFT_ACTION:
                return 1;
            case DROP_ACTION:
                return 2;
            case CATCH_ACTION:
                return 3;
            }
        }

        isMovement(){
            return this.typeIs(UP_ACTION, RIGHT_ACTION, DOWN_ACTION, LEFT_ACTION);
        }

        typeIs(...types){
            return types.includes(this.type);
        }

        getType(){
            return this.type;
        }
    }

    class Square{
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

    class Thing{
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

    class Hole extends Thing{
    }

    class Leaf extends Thing{
    }

    class Agent extends Thing{
        constructor(config = {}){
            super();

            this.config = Object.assign({
                reasoningInterval: 200
            }, config);

            this.state = this._getInitialState();
            this.eventQueue = [];
            this.currentActionSequence = [];
            this.currentAction = null;

            this.intervalRef = null;
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

        execute(){
            this.intervalRef = setInterval(() => this._reason(), this.config.reasoningInterval);
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
                const sequence = problem && this._search(problem);
                if(sequence)
                    this.currentActionSequence = sequence;
            }

            if(this.currentActionSequence.length > 0){
                const actionType = this.currentActionSequence.shift();
                this.currentAction = new Action(actionType);
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

        _search(problem){
            problem = Object.assign({
                canonicalForm: JSON.stringify
            }, problem);

            const { initialState, canonicalForm, pathCost, heuristic } = problem;
            const makeNode = this._nodeMakerFactory(canonicalForm, heuristic);

            const frontier = { index: {}, queue: [] };
            const explored = {};
            this._addToFrontier(frontier, makeNode(initialState));

            for(let node; node = this._popFromFrontier(frontier);){
                if(problem.goalTest(node.state))
                    return node.sequence;

                explored[node.hash] = true;

                problem.actions(node.state).forEach(action => {
                    const state = problem.result(node.state, action);
                    const cost = pathCost(node.state, action, state);
                    const child = makeNode(state, node.cost + cost, [...node.sequence, action]);

                    if(!explored[child.hash])
                        this._addToFrontier(frontier, child);
                });
            }

            return null;
        }

        _nodeMakerFactory(canonicalForm, heuristic){
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

        _addToFrontier(frontier, node){
            const index = frontier.index[node.hash];
            if(index != null){
                if(frontier.queue[index].cost > node.cost){
                    frontier.queue.splice(index, 1);
                    for(; index < frontier.queue.length; index++)
                        frontier.index[frontier.queue[index].hash] = index;
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

            for(idx++; idx < frontier.queue.length; idx++)
                frontier.index[frontier.queue[idx].hash] = idx;
        }

        _popFromFrontier(frontier){
            if(!frontier.queue.length)
                return null;

            const [node, ...tail] = frontier.queue;
            delete frontier.index[node.hash];
            frontier.queue = tail;

            for(let len = frontier.queue.length; len--;)
                frontier.index[frontier.queue[len].hash] = len;

            return node;
        }
    }

    class Ant extends Agent{
        constructor(){
            super();

            this.actionMovementIndex = {
                [UP_ACTION]: [0, -1],
                [RIGHT_ACTION]: [1, 0],
                [DOWN_ACTION]: [0, 1],
                [LEFT_ACTION]: [-1, 0]
            };
        }

        _getInitialState(){
            return {
                status: INITIALIZED,
                world: {},
                carries: null
            }
        }

        _beforeReasoning(){
            if(!this.state.environment)
                return;

            const view = this.state.environment.getViewFor(this);
            const event = new Event(this, CAPTURED_VIEW_EVENT, view);
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
            if(event.typeIs(MOVED_EVENT) && state.status === INITIALIZED){
                return Object.assign({}, state, {
                    status: OPERATING,
                    environment: event.getSender()
                });
            }

            return state;
        }

        _updateStatePosition(state, event){
            if(event.typeIs(MOVED_EVENT)){
                const { position } = event.getData();
                return Object.assign({}, state, { position });
            }

            return state;
        }

        _clearCurrentSequenceIfActionFailed(state, event){
            if(event.typeIs(ACTION_FAILED_EVENT) && event.getData() === this.currentAction){
                this.currentActionSequence = [];
                this.currentAction = null;
            }

            return state;
        }

        _updateWorldModel(state, event){
            if(event.typeIs(CAPTURED_VIEW_EVENT)){
                const view = event.getData();
                const index = view.reduce((carry, square) => {
                    const key = canonicalPosition(...square.getPosition());
                    carry[key] = { square, timestamp: Date.now() };
                    return carry;
                }, {});

                const world = Object.assign({}, state.world, index);
                return Object.assign({}, state, { world });
            }

            return state;
        }

        _updateCarriedObject(state, event){
            if(event.typeIs(CATCH_EVENT))
                return Object.assign({}, state, { carries: event.getData().object });

            return state;
        }

        _updateDroppedObject(state, event){
            if(event.typeIs(DROP_EVENT) && event.getData().object === state.carries)
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
            if(!(state.carries && state.carries instanceof Leaf))
                return;

            const squares = this._squaresContaining(state.world, Hole);
            const closest = this._closestSquare(state.position, squares);
            if(closest && this._distanceTo(state.position, closest.getPosition()) === 0)
                return { type: CARRY_GOAL, carry: false };
        }

        _shouldCatchLeaf(state){
            if(state.carries)
                return;

            const squares = this._squaresContaining(state.world, Leaf);
            const closest = this._closestSquare(state.position, squares);
            if(closest && this._distanceTo(state.position, closest.getPosition()) === 0)
                return { type: CARRY_GOAL, carry: true };
        }

        _shouldMoveTowardsHole(state){
            let squares;
            if(state.carries && state.carries instanceof Leaf && (squares = this._squaresContaining(state.world, Hole)).length){
                const closest = this._closestSquare(state.position, squares);
                if(closest)
                    return { type: GOTO_GOAL, position: closest.getPosition() };
            }
        }

        _shouldMoveTowardsLeaf(state){
            let squares;
            if(state.carries === null && (squares = this._squaresContaining(state.world, Leaf)).length){
                const closest = this._closestSquare(state.position, squares);
                if(closest)
                    return { type: GOTO_GOAL, position: closest.getPosition() };
            }
        }

        _shouldExploreWorld(state){
            const squares = this._squaresWithUnknowNeighbours(state.world);
            const closest = this._closestSquare(state.position, squares);
            if(closest)
                return { type: GOTO_GOAL, position: closest.getPosition() };
        }

        _shouldVisitOldSquares(state){
            const squares = this._squaresForVisit(state.world);
            if(squares.length){
                const index = randomNumber(squares.length);
                return { type: GOTO_GOAL, position: squares[index].getPosition() };
            }
        }

        _squaresWithUnknowNeighbours(world){
            const additionMatrix = Object.getOwnPropertySymbols(this.actionMovementIndex)
                .map(sym => this.actionMovementIndex[sym]);

            const values = Object.values(world);
            const knowNeighboursIndex = values.reduce((carry, obj) => {
                const squarePosition = obj.square.getPosition();
                const squareKey = canonicalPosition(...squarePosition);

                if(!carry[squareKey])
                    carry[squareKey] = 0;
                carry[squareKey] += obj.square.getBlockedSideQuantity();

                additionMatrix.forEach(arr => {
                    const position = squarePosition.map((value, index) => value + arr[index]);
                    const key = canonicalPosition(...position);

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
                case CARRY_GOAL:
                    return this._generateCarryProblem(state, goal.carry);
                case GOTO_GOAL:
                    return this._generateGotoProblem(state, goal.position);
                default:
                    return null;
            }
        }

        _generateCarryProblem(state, carry){
            const initialState = !!state.carries;

            const result = (bool, action) => {
                switch(action){
                    case CATCH_ACTION:
                        return true;
                    case DROP_ACTION:
                        return false;
                }
            };

            const pathCost = (from, action, to) => {
                switch(action){
                    case CATCH_ACTION:
                        return 3;
                    case DROP_ACTION:
                        return 2;
                }
            };

            const actions = bool => [bool ? DROP_ACTION : CATCH_ACTION];
            const goalTest = bool => bool === carry;
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
                const addArr = this.actionMovementIndex[action];
                return pos.map((num, index) => num + addArr[index]);
            };

            const actions = pos => {
                const actions = Object.getOwnPropertySymbols(this.actionMovementIndex);
                return actions.filter(action => {
                    const position = result(pos, action);
                    return !!state.world[canonicalForm(position)];
                });
            };

            const goalTest = pos => pos.every((num, index) => num === position[index]);
            const pathCost = (from, action, to) => 1;
            const heuristic = pos => this._distanceTo(pos, position);
            const canonicalForm = pos => canonicalPosition(...pos);

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

    class Render{
        constructor(environment, element, config = {}){
            this.environment = environment;

            this.htmlElement = element;
            this.context = this.htmlElement.getContext('2d');

            this.config = Object.assign({
                unitSizePx: null,
                unitStrokePx: 2,
                backgroundColor: '#947064',
                backgroundStrokeColor: '#836053',
                agentColor: '#CD511D',
                leafColor: '#80FF00',
                leafStemColor: '#60DD00',
                unobservedColor: 'rgba(0, 0, 0, .5)',
                holeColor: '#444',
                holeBorderColor: '#725042'
            }, config);

            if(this.config.unitSizePx === null)
                this.config.unitSizePx = this.htmlElement.width / this.environment.getWidth();
        }

        execute(){
            this.draw();
        }

        draw(){
            this.drawBackground(this.environment);
            this.drawObjects(this.environment.getObjects());
            this.drawObservedArea(this.environment.agents());

            requestAnimationFrame(() => this.draw());
        }

        drawBackground(environment){
            this.context.save();

            const unitSizePx = this.config.unitSizePx;
            const width = environment.getWidth();
            const height = environment.getHeight();
            this.context.clearRect(0, 0, width * unitSizePx, height * unitSizePx);

            this.context.fillStyle = this.config.backgroundColor;
            this.context.strokeStyle = this.config.backgroundStrokeColor;
            this.context.lineWidth = this.config.unitStrokePx;

            this.iteratePositions((x, y) => {
                const args = [...this.getPixelPosition(x, y), unitSizePx, unitSizePx];
                this.context.fillRect(...args);
                this.context.strokeRect(...args);
            });

            this.context.restore();
        }

        iteratePositions(callback){
            const width = this.environment.getWidth();
            const height = this.environment.getHeight();
            for(let x = 0; x < width; x++){
                for(let y = 0; y < height; y++)
                    callback.call(this, x, y);
            }
        }

        getPixelPosition(...position){
            return position.map(value => value * this.config.unitSizePx);
        }

        drawObjects(objects){
            objects.map(object => ({object, zIndex: this.getZIndexFor(object)}))
                .sort((a, b) => a.zIndex - b.zIndex)
                .map(obj => obj.object)
                .forEach(object => this.drawObject(object));
        }

        getZIndexFor(object){
            if(object instanceof Agent)
                return 1;

            return 0;
        }

        drawObject(object){
            const position = object.getPosition();
            const pixelPosition = this.getPixelPosition(...position);

            this.context.save();
            this.context.translate(...pixelPosition);

            if(object.beingCarried()){
                this.context.translate(this.config.unitSizePx * .66, 0);
                this.context.scale(.33, .33);
            }

            this.drawSpecificObject(object);

            this.context.restore();
        }

        drawSpecificObject(object){
            if(object instanceof Agent)
                return this.drawAgent(object);

            if(object instanceof Hole)
                return this.drawHole(object);

            if(object instanceof Leaf)
                return this.drawLeaf(object);
        }

        drawAgent(agent){
            const halfUnit = this.config.unitSizePx / 2;
            const radius = halfUnit * .30;
            const deviation = radius * Math.sqrt(2);

            this.context.strokeStyle = this.config.agentColor;
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
                this.drawCircle(pos, pos, radius, this.config.agentColor);
            }
        }

        drawHole(hole){
            const halfUnit = this.config.unitSizePx / 2;

            this.context.beginPath();
            this.context.arc(halfUnit, halfUnit, halfUnit / 1.8, 0, Math.PI * 2);
            this.context.clip();

            this.drawCircle(halfUnit, halfUnit, halfUnit / 1.8, this.config.holeBorderColor);
            const deviation = 4;
            this.drawCircle(halfUnit + deviation, halfUnit + deviation, halfUnit / 1.8, this.config.holeColor);
        }

        drawLeaf(leaf){
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
                this.drawCircle(halfUnit + x, halfUnit, circleRadius, this.config.leafColor);

                this.context.restore();
            }

            this.context.strokeStyle = this.config.leafStemColor;
            this.context.beginPath();
            this.context.moveTo(halfUnit, halfUnit - leafHalfHeight);
            this.context.lineTo(halfUnit, halfUnit + leafHalfHeight * 1.4);
            this.context.stroke();
        }

        drawCircle(x, y, radius, color){
            const path = new Path2D();
            path.arc(x, y, radius, 0, Math.PI * 2);
            this.context.fillStyle = color;
            this.context.fill(path);
        }

        drawObservedArea(agents){
            this.context.save();

            const observedPositions = agents.reduce((carry, agent) => this.addObservedPositionsFromAgent(carry, agent), {});

            this.context.fillStyle = this.config.unobservedColor;
            this.iteratePositions((x, y) => this.drawUnobservedSquares(observedPositions, x, y));

            this.context.restore();
        }

        addObservedPositionsFromAgent(obj, agent){
            const positions = this.environment.getViewPositionsFor(agent);
            positions.forEach(arr => obj[canonicalPosition(...arr)] = true);

            return obj;
        }

        drawUnobservedSquares(observedPositions, x, y){
            const key = canonicalPosition(x, y);
            if(observedPositions[key])
                return;

            const pixels = this.getPixelPosition(x, y);
            this.context.fillRect(...pixels, this.config.unitSizePx, this.config.unitSizePx);
       }
    }

    const $ = {
        Environment,
        Hole,
        Leaf,
        Ant,
        Render
    };

    window.LeafCatcher = $;

    return $;
})();
