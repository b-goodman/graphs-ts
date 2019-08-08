export declare class Vertex<T = {}> {
    private static _id;
    id: number;
    tag: string;
    data: T;
    constructor(tag: string, data?: T);
}
