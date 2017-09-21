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
            const position = this.getAvailableRandomPosition();
            if(position)
                this.add(object, ...position);
        }

        getAvailableRandomPosition(){
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
            this.moveObject(object, ...position);
        }

        execute(){
            this.intervalRef = setInterval(this.execCycle.bind(this), this.config.cycleDuration);
            this.execCycle();
        }

        execCycle(){
            this.progressActions();
        }

        getViewFor(agent){
            const positions = this.getViewPositionsFor(agent);
            return this.getSquaresFor(positions);
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

        getSquaresFor(positions){
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

        progressActions(){
            this.agents().forEach(agent => this.progressAction(agent));
        }

        progressAction(agent){
            const action = agent.actuator.getAction();
            if(action === null)
                return;

            const success = this.executeAction(agent, action);

            const eventType = success ? (action.isComplete() ? ACTION_COMPLETE_EVENT : ACTION_PROGRESSED_EVENT) : ACTION_FAILED_EVENT;
            const event = new Event(this, eventType, action);
            agent.sensor.send(event);
        }

        executeAction(agent, action){
            if(action.isMovement())
                return this.executeMovementAction(agent, action);

            if(action.typeIs(CATCH_ACTION))
                return this.executeCatchAction(agent, action);

            if(action.typeIs(DROP_ACTION))
                return this.executeDropAction(agent, action);
        }

        executeMovementAction(agent, action){
            const newPosition = this.getNewPositionFromActionType(action.getType(), agent.getPosition());
            if(this.isInBound(...newPosition)){
                this.moveObject(agent, ...newPosition);
                action.increaseProgress();
                return true;
            }

            return false;
        }

        executeCatchAction(agent, action){
            if(agent.carriesSomething())
                return false;

            const objects = this.objectsInSamePosition(agent);
            const leaves = objects.filter(object => object instanceof Leaf)
                .filter(object => !object.beingCarried());

            if(leaves.length){
                action.increaseProgress();
                if(action.isComplete())
                    this.attachTo(leaves[0], agent);

                return true;
            }

            return false;
        }

        executeDropAction(agent, action){
            if(!agent.carriesSomething())
                return false;

            const objects = this.objectsInSamePosition(agent);
            const holes = objects.filter(object => object instanceof Hole);

            if(holes.length){
                action.increaseProgress();
                if(action.isComplete()){
                    const object = agent.getCarriedObject();
                    this.dettachFrom(object, agent);

                    if(object instanceof Leaf)
                        this.consumeLeaf(object);
                }

                return true;
            }

            return false;
        }

        getNewPositionFromActionType(type, positionArr){
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

        isInBound(...position){
            const limits = [this.getWidth(), this.getHeight()];
            return position.every((value, index) => value >= 0 && value < limits[index]);
        }

        moveObject(object, ...position){
            object.setPosition(...position);

            if(object instanceof Agent){
                const data = {object, position};
                const ev = new Event(this, MOVED_EVENT, data);
                object.sensor.send(ev);
            }

            if(object.carriesSomething())
                this.moveObject(object.getCarriedObject(), ...position);
        }

        objectsInSamePosition(object){
            const position = object.getPosition();
            const sameValue = (value, index) => value === position[index];
            return this.objects.filter(object => object.getPosition().every(sameValue))
                .filter(obj => obj != object);
        }

        attachTo(object, agent){
            object.setCarrierObject(agent);
            agent.setCarriedObject(object);

            if(agent instanceof Agent){
                const event = new Event(this, CATCH_EVENT, {object});
                agent.sensor.send(event);
            }
        }

        dettachFrom(object, agent){
            object.setCarrierObject(null);
            agent.setCarriedObject(null);

            if(agent instanceof Agent){
                const event = new Event(this, DROP_EVENT, {object});
                agent.sensor.send(event);
            }
        }

        consumeLeaf(leaf){
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

            this.sensor = new Sensor(this);
            this.actuator = new Actuator(this);

            this.state = {
                status: INITIALIZED,
                world: new WorldModel(),
                carries: null
            };

            this.config = Object.assign({
                reasoningInterval: 200
            }, config);
        }

        execute(){
            this.intervalRef = setInterval(this.reason.bind(this), this.config.reasoningInterval);
        }

        reason(){
            const eventQueue = this.getEventQueue();
            this.state = this.updateStateFromEvents(this.state, eventQueue);
            const actionType = this.deliberate(this.state);
            this.act(actionType);
        }

        getEventQueue(){
            this.sensor.captureView();
            return this.sensor.extractEventQueue();
        }

        updateStateFromEvents(state, eventQueue){
            return eventQueue.reduce((state, ev) => this.handleEvent(state, ev), state);
        }

        handleEvent(state, ev){
            const chain = [
                this.updateStateStatus,
                this.updateStatePosition,
                this.removeFinishedActionFromActuator,
                this.updateWorldModel,
                this.updateCatchedObject,
                this.updateDroppedObject
            ];

            const cloneState = this.cloneState(state);
            return chain.reduce((newState, fun) => fun.call(this, newState, ev), cloneState);
        }

        cloneState(state){
            const newState = Object.assign({}, state);
            newState.world = state.world.clone();

            return newState;
        }

        updateStateStatus(state, ev){
            if(ev.typeIs(MOVED_EVENT) && state.status === INITIALIZED){
                state.status = OPERATING;
                const environment = ev.getSender();
                this.sensor.setEnvironment(environment);
                this.actuator.setEnvironment(environment);
            }

            return state;
        }

        updateStatePosition(state, ev){
            if(ev.typeIs(MOVED_EVENT))
                state.position = ev.getData().position;

            return state;
        }

        removeFinishedActionFromActuator(state, ev){
            if(ev.typeIs(ACTION_COMPLETE_EVENT, ACTION_FAILED_EVENT) && ev.getData() === this.actuator.getAction())
                this.actuator.clearAction();

            return state;
        }

        updateWorldModel(state, ev){
            if(ev.typeIs(CAPTURED_VIEW_EVENT))
                state.world.applyView(ev.getData());

            return state;
        }

        updateCatchedObject(state, event){
            if(event.typeIs(CATCH_EVENT))
                state.carries = event.getData().object;

            return state;
        }

        updateDroppedObject(state, event){
            if(event.typeIs(DROP_EVENT) && event.getData().object === state.carries)
                state.carries = null;

            return state;
        }

        deliberate(state){
            const chain = [
                this.shouldDropLeaf,
                this.shouldCatchLeaf,
                this.shouldMoveTowardsHole,
                this.shouldMoveTowardsLeaf,
                this.shouldExploreWorld,
                this.shouldVisitOldSquares
            ];

            for(let fun of chain){
                const actionType = fun.call(this, state);
                if(actionType)
                    return actionType;
            }

            return null;
        }

        shouldDropLeaf(state){
            if(!(state.carries && state.carries instanceof Leaf))
                return;

            const squares = state.world.squaresContaining(Hole);
            const closest = this.closestSquare(state.position, squares);
            if(closest && this.distanceTo(state.position, closest.getPosition()) === 0)
                return DROP_ACTION;
        }

        shouldCatchLeaf(state){
            if(state.carries)
                return;

            const squares = state.world.squaresContaining(Leaf);
            const closest = this.closestSquare(state.position, squares);
            if(closest && this.distanceTo(state.position, closest.getPosition()) === 0)
                return CATCH_ACTION;
        }

        shouldMoveTowardsHole(state){
            let squares;
            if(state.carries && state.carries instanceof Leaf && (squares = state.world.squaresContaining(Hole)).length){
                const closest = this.closestSquare(state.position, squares);
                if(closest)
                    return this.actionTowards(state.position, closest.getPosition());
            }
        }

        shouldMoveTowardsLeaf(state){
            let squares;
            if(state.carries === null && (squares = state.world.squaresContaining(Leaf)).length){
                const closest = this.closestSquare(state.position, squares);
                if(closest)
                    return this.actionTowards(state.position, closest.getPosition());
            }
        }

        shouldExploreWorld(state){
            const squares = state.world.squaresWithUnknowNeighbours();
            const closest = this.closestSquare(state.position, squares);
            if(closest)
                return this.actionTowards(state.position, closest.getPosition());
        }

        shouldVisitOldSquares(state){
            const squares = state.world.squaresForVisit();
            if(squares.length){
                const index = randomNumber(squares.length);
                return this.actionTowards(state.position, squares[index].getPosition());
            }
        }

        closestSquare(position, squares){
            const sortedSquares = squares.map(square => ({square, distance: this.distanceTo(position, square.getPosition())}))
                .sort((a, b) => a.distance - b.distance)
                .map(obj => obj.square);

            return sortedSquares.length ? sortedSquares[0] : null;
        }

        distanceTo(from, to){
            const value = from.reduce((sum, value, index) => sum + Math.pow(value - to[index], 2), 0);
            return Math.sqrt(value);
        }

        actionTowards(from, to){
            const actions = [
                [RIGHT_ACTION, LEFT_ACTION],
                [DOWN_ACTION, UP_ACTION]
            ];

            const axisDiff = actions.map((arr, index) => {
                const axisFrom = from[index];
                const axisTo = to[index];
                return {
                    diff: Math.abs(axisFrom - axisTo),
                    action: arr[axisFrom < axisTo ? 0 : 1]
                };
            });

            const sortedAxisDiff = axisDiff.filter(obj => obj.diff > 0)
                .sort((a, b) => b.diff - a.diff);

            return sortedAxisDiff.length ? sortedAxisDiff[0].action : null;
        }

        act(actionType){
            this.actuator.setAction(actionType);
        }
    }

    class AgentComponent{
        constructor(agent){
            this.agent = agent;
            this.environment = null;
        }

        setEnvironment(environment){
            this.environment = environment;
        }
    }


    class Sensor extends AgentComponent{
        constructor(agent){
            super(agent);

            this.eventQueue = [];
        }

        send(ev){
            this.eventQueue.push(ev);
        }

        captureView(){
            if(!this.environment)
                return;

            const view = this.environment.getViewFor(this.agent);
            const ev = new Event(this, CAPTURED_VIEW_EVENT, view);
            this.send(ev);
        }

        extractEventQueue(){
            const queue = this.eventQueue;
            this.eventQueue = [];
            return queue;
        }
    }

    class Actuator extends AgentComponent{
        constructor(agent){
            super(agent);

            this.currentAction = null;
        }

        getAction(){
            return this.currentAction;
        }

        clearAction(){
            this.currentAction = null;
        }

        setAction(type){
            if(this.currentAction === null || !this.currentAction.typeIs(type))
                this.currentAction = new Action(type);
        }

        progressAction(){
            if(!this.currentAction)
                return;

            const action = this.action;
            this.environment.progressAction(action);
        }
    }

    class WorldModel{
        constructor(index = {}){
            this.index = index;
        }

        applyView(view){
            view.forEach(square => this.applySquare(square));
        }

        applySquare(square){
            const key = canonicalPosition(...square.getPosition());
            this.index[key] = {
                square,
                timestamp: Date.now()
            };
        }

        clone(){
            const index = Object.assign({}, this.index);
            return new WorldModel(index);
        }

        squaresWithUnknowNeighbours(){
            const additionMatrix = [
                [0, -1],
                [1, 0],
                [0, 1],
                [-1, 0]
            ];

            const values = Object.values(this.index);
            const knowNeighboursIndex = values.reduce((carry, obj) => {
                const squarePosition = obj.square.getPosition();
                const squareKey = canonicalPosition(...squarePosition);

                if(!carry[squareKey])
                    carry[squareKey] = 0;
                carry[squareKey] += obj.square.getBlockedSideQuantity();

                additionMatrix.forEach(arr => {
                    const position = squarePosition.map((value, index) => value + arr[index]);
                    const key = canonicalPosition(...position);

                    if(this.index[key]){
                        if(!carry[key])
                            carry[key] = 0;

                        carry[key]++;
                    }
                });

                return carry;
            }, {});

            return Object.keys(knowNeighboursIndex)
                .map(key => ({knowNeighbours: knowNeighboursIndex[key], square: this.index[key]}))
                .filter(obj => obj.knowNeighbours < 4)
                .sort((a, b) => a.knowNeighbours - b.knowNeighbours)
                .map(obj => obj.square.square);
        }

        squaresForVisit(){
            const squares = Object.values(this.index);
            const sortedSquares = squares.sort((a, b) => a.timestamp - b.timestamp);

            if(sortedSquares.length){
                const limit = sortedSquares[0].timestamp;
                const oldestSquares = sortedSquares.filter(obj => obj.timestamp === limit);
                return oldestSquares.map(obj => obj.square);
            }

            return sortedSquares.map(obj => obj.square);
        }

        squaresContaining(objectClass){
            const squares = Object.values(this.index);
            return squares.filter(obj => obj.square.objects.some(object => object instanceof objectClass))
                .map(obj => obj.square);
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

            this.context.resetTransform();
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
        Agent,
        Render
    };

    window.LeafCatcher = $;

    return $;
})();
