window.App = (function(){
    'use strict';

    const MOVED_EVENT = Symbol('moved_event');
    const ACTION_COMPLETE_EVENT = Symbol('action_complete_event');
    const ACTION_FAILED_EVENT = Symbol('action_failed_event');
    const ACTION_PROGRESSED_EVENT = Symbol('action_progressed_event');
    const CAPTURED_VIEW_EVENT = Symbol('captured_view_event');

    const TOP_ACTION = Symbol('top_action');
    const RIGHT_ACTION = Symbol('right_action');
    const DOWN_ACTION = Symbol('down_action');
    const LEFT_ACTION = Symbol('left_action');
    const CATCH_LEAF_ACTION = Symbol('catch_leaf_action');
    const DROP_LEAF_ACTION = Symbol('drop_leaf_action');

    const INITIALIZED = Symbol('initialized');
    const OPERATING = Symbol('operating');

    class Environment{
        constructor(config = {}){
            this.objects = [];

            this.config = Object.assign({
                width: 30,
                height: 30,
                cycleDuration: 1000
            }, config);
        }

        add(object, ...position){
            this.objects.push(object);
            this.moveObject(object, ...position);
        }

        setRender(render){
            this.render = render;
        }

        execute(){
            this.intervalRef = setInterval(this.execCycle.bind(this), this.config.cycleDuration);
            this.execCycle();
        }

        execCycle(){
            this.progressActions();
            this.draw();
        }

        getViewFor(agent){
            // TODO
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
                [TOP_ACTION]: [0, -1],
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

        draw(){
            if(this.render)
                this.render.draw(this);
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
            case TOP_ACTION: case RIGHT_ACTION: case DOWN_ACTION: case LEFT_ACTION:
                return 1;
            case DROP_LEAF_ACTION:
                return 2;
            case CATCH_LEAF_ACTION:
                return 3;
            }
        }

        isMovement(){
            return this.typeIs(TOP_ACTION, RIGHT_ACTION, DOWN_ACTION, LEFT_ACTION);
        }

        typeIs(...types){
            return types.includes(this.type);
        }

        getType(){
            return this.type;
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
                status: INITIALIZED
            };

            this.config = Object.assign({
                reasoningInterval: 500
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
                this.removeFinishedActionFromActuator
            ];
            const cloneState = Object.assign({}, state);

            return chain.reduce((newState, fun) => fun.call(this, newState, ev), cloneState);
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

        deliberate(state){
            const actionTypes = [TOP_ACTION, RIGHT_ACTION, DOWN_ACTION, LEFT_ACTION];
            const randomIndex = Math.floor(actionTypes.length * Math.random());
            return actionTypes[randomIndex];
        }

        act(actionType){
            this.actuator.setAction(actionType);
        }

        draw(render){
            render.drawCircle(...render.pixelPositionFor(...this.position), render.config.unitSizePx * .25, render.config.agentColor);
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

    // class WorldModel(){
    // }

    class Render{
        constructor(element, config = {}){
            this.htmlElement = element;
            this.context = this.htmlElement.getContext('2d');

            this.config = Object.assign({
                unitSizePx: null,
                unitStrokePx: 2,
                backgroundColor: '#947064',
                backgroundStrokeColor: '#836053',
                agentColor: '#CD511D'
            }, config);
        }

        draw(environment){
            this.prepareFor(environment);

            this.context.save();

            this.drawBackground(environment);

            const sortedObjects = environment.getObjects().sort((a, b) => this.getZIndexFor(a) - this.getZIndexFor(b));
            sortedObjects.forEach(obj => this.drawObject(obj));
        }

        prepareFor(environment){
            if(this.config.unitSizePx === null)
                this.config.unitSizePx = this.htmlElement.width / environment.getWidth();
        }

        drawBackground(environment){
            const unitSizePx = this.config.unitSizePx;
            const width = environment.getWidth();
            const height = environment.getHeight();
            this.context.clearRect(0, 0, width * unitSizePx, height * unitSizePx);

            this.context.fillStyle = this.config.backgroundColor;
            this.context.strokeStyle = this.config.backgroundStrokeColor;
            this.context.lineWidth = this.config.unitStrokePx;
            for(let x = 0; x < width; x++){
                const leftPx = x * unitSizePx;
                for(let y = 0; y < height; y++){
                    const topPx = y * unitSizePx;
                    this.context.fillRect(leftPx, topPx, unitSizePx, unitSizePx);
                    this.context.strokeRect(leftPx, topPx, unitSizePx, unitSizePx);
                }
            }
        }

        getZIndexFor(object){
            if(object instanceof Agent)
                return 1;

            return 0;
        }

        drawObject(object){
            object.draw(this);
            this.context.restore();
        }

        pixelPositionFor(...position){
            return position.map(value => this.config.unitSizePx * (value + .5));
        }

        drawCircle(x, y, radius, color){
            const path = new Path2D();
            path.arc(x, y, radius, 0, Math.PI * 2);
            this.context.fillStyle = color;
            this.context.fill(path);
        }
    }

    return {
        Environment,
        Agent,
        Render
    };
})();
