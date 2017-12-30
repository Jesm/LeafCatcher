import Environment from './Environment.js';
import Hole from './Hole.js';
import Ant from './Ant.js';
import Leaf from './Leaf.js';
import Render from './Render.js';

(doc => {
    const unitSizePx = 40;
    const unitOrder = 8;
    const viewRadius = 2;

    const environment = new Environment({
        width: unitOrder,
        height: unitOrder,
        viewRadius
    });
    const hole = new Hole();
    environment.addAtRandom(hole);
    environment.up();

    const ant = new Ant();
    environment.addAtRandom(ant);
    ant.up();

    const canvas = doc.createElement('canvas');
    canvas.width = canvas.height = unitSizePx * unitOrder;
    doc.body.appendChild(canvas);

    const button = doc.createElement('button');
    button.innerText = 'Adicionar folha';
    button.addEventListener('click', event => {
        const leaf = new Leaf();
        environment.addAtRandom(leaf);
    });
    doc.body.appendChild(button);

    const render = new Render(environment, canvas);
    render.up();
})(document);
