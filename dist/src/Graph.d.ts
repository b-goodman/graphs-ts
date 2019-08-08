import { EdgeList } from "./EdgeList";
import { Vertex } from "./Vertex";
export declare class Graph extends Map<string, EdgeList> {
    private defaultOpts;
    readonly opts: {
        directed: boolean;
    };
    vertices: Map<string, Vertex<{}>>;
    constructor(opts?: {
        directed?: boolean;
    });
    addVertex<T = {}>(tag: string, data?: T): Vertex<T>;
    addEdge(tagA: string, tagB: string): void;
}
