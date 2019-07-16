import { EdgeList } from "./EdgeList";
import { Vertex } from "./Vertex";
export class Graph extends Map {
    constructor(opts = {}) {
        super();
        this.defaultOpts = { directed: true };
        this.vertices = new Map();
        this.opts = Object.assign(this.defaultOpts, opts);
    }
    addVertex(tag, data) {
        const newVertex = new Vertex(tag, data);
        this.set(newVertex.tag, new EdgeList());
        this.vertices.set(newVertex.tag, newVertex);
        return newVertex;
    }
    addEdge(tagA, tagB) {
        if (this.has(tagA) && this.has(tagB)) {
            this.get(tagA).add(this.vertices.get(tagB));
        }
        else {
            throw new Error(`Edges must first exist on graph.`);
        }
    }
}
