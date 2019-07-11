import { EdgeList } from "./EdgeList";
import { Vertex } from "./Vertex";
export declare class Graph extends Map<string, EdgeList> {
    private defaultOpts;
    private readonly opts;
    private vertices;
    constructor(opts?: {
        directed?: boolean;
    });
    addVertex<T = {}>(tag: string, data?: T): Vertex<T>;
    addEdge(tagA: string, tagB: string): void;
}
