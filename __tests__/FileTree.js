import { FileTree } from "../src/FileTree";
const treeInput = `
.
├── README.md
├── index.html
├── __tests__
│   ├── index.ts
│   └── typings.d.ts
├── package-lock.json
├── package.json
├── src
│   ├── index.ts
│   ├── styles.css
│   ├── template
│   │   ├── header.html
│   │   └── body.html
│   └── typings.d.ts
├── tsconfig.json
├── webpack.dvl.conf.js
└── webpack.prd.conf.js
`;
const tree = new FileTree(treeInput);
it("Recognizes directories", () => {
    expect(tree.vertices.get(".").data).toEqual({ type: "Directory" });
    expect(tree.vertices.get("./src").data).toEqual({ type: "Directory" });
    expect(tree.vertices.get("./__tests__").data).toEqual({ type: "Directory" });
    expect(tree.vertices.get("./src/template").data).toEqual({ type: "Directory" });
});
it("Correctly branches files from parent directories", () => {
    console.log(tree.get("."));
    expect(tree.get(".").size).toEqual(9);
    expect(tree.get("./src").size).toEqual(4);
    expect(tree.get("./src/template").size).toEqual(2);
});
