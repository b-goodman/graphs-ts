export class Vertex<T = {}> {
	private static _id: number = 0;
	public id: number;
	public tag: string;
	public data: T;

	constructor (tag: string, data?: T) {
		this.id = Vertex._id ++;
		this.tag = tag;
		// this.uuid = shortUUID.generate();
		this.data = data || {} as any;
	}
}
