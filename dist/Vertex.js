"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vertex {
    constructor(tag, data) {
        this.id = Vertex._id++;
        this.tag = tag;
        // this.uuid = shortUUID.generate();
        this.data = data || {};
    }
}
Vertex._id = 0;
exports.Vertex = Vertex;
