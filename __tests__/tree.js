const Tree = require("/Users/bgoodman/git/functions/tree-parser/dist/Tree").Tree;

const tree=`.
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
└── webpack.prd.conf.js`;

const graph = new Tree(tree);

console.log(graph);

console.log(graph.get("template"))