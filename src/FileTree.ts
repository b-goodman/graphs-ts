import {Graph} from "./Graph";

export class FileTree extends Graph {

	private readonly matchContext = new RegExp(/^([│├└─]+\s+)+/);

	constructor (tree: string) {
		super();

		const treeRows = tree.split("\n");

		const fileDepths = treeRows.slice(1).map( (row: string) => {
			return ( this.matchContext.exec(row))![0].length / 4;
		});

		const filenames = treeRows.slice(1).map( (row) => {
			return row.replace( this.matchContext, "");
		});

		let combined = new Array<[string, number ]>();

		const len = filenames.length;

		for (let i = 0; i <= len; i++) {
			combined = [...combined, [ filenames[i], fileDepths[i] ] ];
		}

		const currentDir = ["."];
		let currentLevel = 1;
		this.addVertex( ".", {type: "Directory"} );
		for (let i = 0; i <= len; i++) {
			const filename = combined[i][0];
			// console.log(filename);
			if (combined[i][1] === currentLevel) {
				// add to current dir
				const type = ( i < len && combined[i][1] < combined[i + 1][1]) ? "Directory" : "File";
				const newFile = this.addVertex<{ type: string }>(`${currentDir.join("/")}/${filename}`, {type});
				this.addEdge( currentDir.join("/"), newFile.tag );
			} else if (combined[i][1] > currentLevel) {
				// create and move up to new dir
				currentDir.push(  combined[i - 1][0] );
				currentLevel = combined[i][1];
				const newFile = this.addVertex<{ type: string }>(`${currentDir.join("/")}/${filename}`, {type: "File"});
				this.addEdge( currentDir.join("/"), newFile.tag );
			} else if (combined[i][1] < currentLevel) {
				// moved back down one dir
				currentLevel = combined[i][1];
				currentDir.pop();
				const newFile = this.addVertex<{ type: string }>(`${currentDir.join("/")}/${filename}`, {type: "File"});
				this.addEdge( currentDir.join("/"), newFile.tag );
			}
		}
	}

}
