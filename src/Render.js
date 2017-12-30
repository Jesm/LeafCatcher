import { positionString } from './utils';
import Ant from './Ant.js';
import Hole from './Hole.js';
import Leaf from './Leaf.js';

export default class Render {
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
            case object instanceof Ant:
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
            case object instanceof Ant:
                return this._drawAnt(object);
            case object instanceof Hole:
                return this._drawHole(object);
            case object instanceof Leaf:
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
        positions.forEach(arr => obj[positionString(...arr)] = true);

        return obj;
    }

    _drawUnobservedSquares(observedPositions, x, y){
        const key = positionString(x, y);
        if(observedPositions[key])
            return;

        const pixels = this._getPixelPosition(x, y);
        this.context.fillRect(...pixels, this.config.unitSizePx, this.config.unitSizePx);
   }
}
