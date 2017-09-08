window.App = (function(){
    'use strict';

    class Environment{
        constructor(config = {}){
            this.objects = [];

            this.config = Object.assign({
                width: 30,
                height: 30
            }, config);
        }

        add(object, ...position){
            this.objects.push(object);
            object.setEnvironment(this);
            object.move(...position);
        }

        setRender(render){
            this.render = render;
        }

        execute(){
            this.intervalRef = setInterval(this.execCycle.bind(this), this.config.cycleDuration);
            this.execCycle();
        }

        execCycle(){
            // TODO
            this.letAgentsReason();
            this.draw();
        }

        letAgentsReason(){
            this.agents().forEach(agent => agent.reason());
        }

        agents(){
            return this.objects.filter(obj => obj instanceof Agent);
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

    class Thing{
        setEnvironment(environment){
            this.environment = environment;
        }

        getPosition(){
            return this.position;
        }

        move(x, y){
            this.position = [x, y];
        }
    }

    class Agent extends Thing{
        constructor(){
            super();
            this.drawZIndex = 1;
        }

        reason(){
        }

        draw(render){
            render.drawCircle(...render.pixelPositionFor(...this.position), render.config.unitSizePx * .25, render.config.agentColor);
        }
    }

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

            const sortedObjects = environment.getObjects().sort((a, b) => +a.drawZIndex - +b.drawZIndex);
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
