import {Graph} from "./Graph";

export class Tree extends Graph {

	private readonly matchContext = new RegExp(/^([│├└─]+\s+)+/);

	constructor (tree: string) {
		super();

		const treeRows = tree.split("\n");

		const fileDepths = treeRows.slice(1, -1).map( (row: string) => {
			return ( this.matchContext.exec(row))![0].length / 4;
		});

		const filenames = treeRows.slice(1, -1).map( (row) => {
			return row.replace( this.matchContext, "");
		});

		let combined = new Array<[string, number ]>();

		const len = filenames.length - 1;

		for (let i = 0; i <= len; i++) {
			combined = [...combined, [ filenames[i], fileDepths[i] ] ];
		}

		const currentDir = ["."];
		let currentLevel = 1;
		this.addVertex( ".", {path: ".", type: "Directory"} );
		for (let i = 0; i <= len; i++) {
			if (combined[i][1] === currentLevel) {
				// add to current dir
				const filename = combined[i][0];
				const newFile = this.addVertex(`${currentDir.join("/")}/${filename}`, {type: "File"});
				this.addEdge( currentDir.join("/"), newFile.tag );
			} else if (combined[i][1] > currentLevel) {
				// create and move up to new dir
				const filename = combined[i][0];
				currentDir.push(  combined[i - 1][0] );
				currentLevel = combined[i][1];
				const newFile = this.addVertex(`${currentDir.join("/")}/${filename}`, {type: "Directory"});
				this.addEdge( currentDir.join("/"), newFile.tag );
			} else if (combined[i][1] < currentLevel) {
				// move back down one dir
				const filename = combined[i][0];
				currentLevel = combined[i][1];
				currentDir.pop();
				const newFile = this.addVertex(`${currentDir.join("/")}/${filename}`, {type: "File"});
				this.addEdge( currentDir.join("/"), newFile.tag );
			}
		}
	}

}
