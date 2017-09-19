(function(){
    'use strict';

    const MOVED_EVENT = Symbol('moved_event');
    const ACTION_COMPLETE_EVENT = Symbol('action_complete_event');
    const ACTION_FAILED_EVENT = Symbol('action_failed_event');
    const ACTION_PROGRESSED_EVENT = Symbol('action_progressed_event');
    const CAPTURED_VIEW_EVENT = Symbol('captured_view_event');

    const UP_ACTION = Symbol('up_action');
    const RIGHT_ACTION = Symbol('right_action');
    const DOWN_ACTION = Symbol('down_action');
    const LEFT_ACTION = Symbol('left_action');
    const CATCH_LEAF_ACTION = Symbol('catch_leaf_action');
    const DROP_LEAF_ACTION = Symbol('drop_leaf_action');

    const INITIALIZED = Symbol('initialized');
    const OPERATING = Symbol('operating');

    function canonicalPosition(...arr){
        return arr.join(' ');
    }

    class Environment{
        constructor(config = {}){
            this.objects = [];

            this.config = Object.assign({
                width: 30,
                height: 30,
                cycleDuration: 500,
                viewRadius: 2
            }, config);
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
            const self = this;
            const squares = positions.reduce(function(obj, [x, y]){
                const key = canonicalPosition(x, y);

                let blockedSideQuantity = 0;
                if(x === 0 || x === self.getWidth() - 1)
                    blockedSideQuantity++;

                if(y === 0 || y === self.getHeight() - 1)
                    blockedSideQuantity++;

                obj[key] = new Square(x, y, blockedSideQuantity);
                return obj;
            }, {});

            this.objects.forEach(function(object){
                const key = canonicalPosition(...object.getPosition());
                if(squares[key])
                    squares[key].add(object);
            });

            return Object.values(squares);
        }

        agents(){
            return this.objects.filter(obj => obj instanceof Agent);
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
            const ev = new Event(this, eventType, action);
            agent.sensor.send(ev);
        }

        executeAction(agent, action){
            if(action.isMovement())
                return this.executeMovementAction(agent, action);
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
        }

        getObjects(){
            return this.objects.slice();
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
            case DROP_LEAF_ACTION:
                return 2;
            case CATCH_LEAF_ACTION:
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
        getPosition(){
            return this.position;
        }

        setPosition(x, y){
            this.position = [x, y];
        }
    }

    class Agent extends Thing{
        constructor(config = {}){
            super();

            this.sensor = new Sensor(this);
            this.actuator = new Actuator(this);

            this.state = {
                status: INITIALIZED,
                world: new WorldModel()
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
                this.updateWorldModel
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

        deliberate(state){
            const chain = [
                this.shouldExploreWorld
            ];

            for(let fun of chain){
                const actionType = fun.call(this, state);
                if(actionType)
                    return actionType;
            }

            return null;
        }

        shouldExploreWorld(state){
            const squares = state.world.getSquaresWithUnknowNeighbours();
            const sortedSquares = squares.map(square => ({square, distance: this.distanceTo(state.position, square.getPosition())}))
                .sort((a, b) => a.distance - b.distance)
                .map(obj => obj.square);

            if(sortedSquares.length)
                return this.actionTowards(state.position, sortedSquares[0].getPosition());
        }

        distanceTo(from, to){
            const value = from.reduce((sum, value, index) => sum + Math.pow(value - to[index]));
            return Math.sqrt(value);
        }

        actionTowards(from, to){
            const actions = [
                [RIGHT_ACTION, LEFT_ACTION],
                [DOWN_ACTION, UP_ACTION]
            ];

            const axisDiff = actions.map(function(arr, index){
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

        getSquaresWithUnknowNeighbours(){
            const additionMatrix = [
                [0, -1],
                [1, 0],
                [0, 1],
                [-1, 0]
            ];

            const index = this.index;
            const values = Object.values(index);
            const knowNeighboursIndex = values.reduce(function(carry, obj){
                const squarePosition = obj.square.getPosition();
                const squareKey = canonicalPosition(...squarePosition);

                if(!carry[squareKey])
                    carry[squareKey] = 0;
                carry[squareKey] += obj.square.getBlockedSideQuantity();

                additionMatrix.forEach(function(arr){
                    const position = squarePosition.map((value, index) => value + arr[index]);
                    const key = canonicalPosition(...position);

                    if(index[key]){
                        if(!carry[key])
                            carry[key] = 0;

                        carry[key]++;
                    }
                });

                return carry;
            }, {});

            return Object.keys(knowNeighboursIndex)
                .map(key => ({knowNeighbours: knowNeighboursIndex[key], square: index[key]}))
                .filter(obj => obj.knowNeighbours < 4)
                .sort((a, b) => a.knowNeighbours - b.knowNeighbours)
                .map(obj => obj.square.square);
        }

        getSquaresForVisit(){
            // TODO
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
                unobservedColor: 'rgba(0, 0, 0, .5)'
            }, config);

            if(this.config.unitSizePx === null)
                this.config.unitSizePx = this.htmlElement.width / this.environment.getWidth();
        }

        execute(){
            this.draw();
        }

        draw(){
            requestAnimationFrame(this.draw.bind(this));

            this.context.save();

            this.drawBackground(this.environment);
            this.drawObjects(this.environment.getObjects());
            this.drawObservedArea(this.environment.agents());
        }

        drawBackground(environment){
            const unitSizePx = this.config.unitSizePx;
            const width = environment.getWidth();
            const height = environment.getHeight();
            this.context.clearRect(0, 0, width * unitSizePx, height * unitSizePx);

            this.context.fillStyle = this.config.backgroundColor;
            this.context.strokeStyle = this.config.backgroundStrokeColor;
            this.context.lineWidth = this.config.unitStrokePx;

            this.iteratePositions(function(x, y){
                const args = [...this.getPixelPosition(x, y), unitSizePx, unitSizePx];
                this.context.fillRect(...args);
                this.context.strokeRect(...args);
            });
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
            this.context.translate(...pixelPosition);

            this.drawSpecificObject(object);

            this.context.restore();
        }

        drawSpecificObject(object){
            if(object instanceof Agent)
                return this.drawAgent(object);
        }

        drawAgent(agent){
            const unitSize = this.config.unitSizePx;
            this.drawCircle(unitSize / 2, unitSize / 2, unitSize * .25, this.config.agentColor);
        }

        drawCircle(x, y, radius, color){
            const path = new Path2D();
            path.arc(x, y, radius, 0, Math.PI * 2);
            this.context.fillStyle = color;
            this.context.fill(path);
        }

        drawObservedArea(agents){
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
        Agent,
        Render
    };

    window.LeafCatcher = $;

    return $;
})();
