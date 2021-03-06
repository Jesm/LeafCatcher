import Environment from './Environment.js';
import Ant from './Ant.js';
import Hole from './Hole.js';
import Leaf from './Leaf.js';
import Rock from './Rock.js';
import Render from './Render.js';

const makeElement = str => document.createElement(str);

export default class App {
    constructor(root){
        this._setupEnvironment();
        this._setupRender(root);
        this._setupControls(root);
    }

    _setupEnvironment(){
        const unitOrder = 8;
        const viewRadius = 2;

        this.environment = new Environment({
            width: unitOrder,
            height: unitOrder,
            viewRadius
        });
        this.environment.up();

        const ant = new Ant();
        this.environment.addAtRandom(ant);
        ant.up();
    }

    _setupRender(root){
        const unitSizePx = 40;

        const canvas = makeElement('canvas');
        canvas.width = unitSizePx * this.environment.width();
        canvas.height = unitSizePx * this.environment.height();
        root.appendChild(canvas);

        this.render = new Render(this.environment, canvas);
        this.render.up();
    }

    _setupControls(root){
        const ul = document.createElement('ul');

        this.buttons = [Hole, Leaf, Rock].map(objectClass => {
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
