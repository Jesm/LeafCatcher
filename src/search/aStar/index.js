export default args => {
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
};

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
