import {EdgeList} from "./EdgeList";
import {Vertex} from "./Vertex";

export class Graph extends Map< string, EdgeList > {

	private defaultOpts = {directed: true};
	private readonly opts: {directed: boolean};
	private vertices = new Map<string, Vertex>();

	constructor (opts: {directed?: boolean } = {} ) {
		super();
		this.opts = Object.assign( this.defaultOpts, opts );
	}

	public addVertex<T = {}> (tag: string, data?: T) {
		const newVertex = new Vertex<T>(tag, data);
		this.set( newVertex.tag, new EdgeList() );
		this.vertices.set( newVertex.tag, newVertex );
		return newVertex;
	}

	public addEdge ( tagA: string, tagB: string ) {
		if ( this.has(tagA) && this.has(tagB) ) {
			this.get(tagA)!.add( this.vertices.get(tagB)! );
		} else {
			throw new Error( `Edges must first exist on graph.` );
		}
	}

}
