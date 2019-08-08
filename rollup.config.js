import cleaner from 'rollup-plugin-cleaner';
// import { terser } from "rollup-plugin-terser";
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'src/index.ts',
    output: [
        {
            format: 'es',
            file: 'dist/index.es.js',
        },
        // {
		// 	file: 'dist/index.cjs.min.js',
        //     format: "umd",
        //     name: 'graph-ts',
        //     strict: true
        // },
        {
			file: 'dist/index.js',
            format: "umd",
            name: 'graph-ts',
            strict: true
		}
    ],
    plugins: [
        cleaner({
            targets: ["./dist"]
        }),
        typescript({
            typescript: require("typescript"),
            objectHashIgnoreUnknownHack: true,
            include: [ "*.ts+(|x)", "**/*.ts+(|x)", "*.d.ts", "**/*.d.ts", ],
            exclude: [ "__tests__/*.ts" ],
        }),
        // terser({
        //     include: [/^.+\.min|es\.js$/],
        //     compress: {},
        //     mangle: true,
        //     safari10: true,
        // }),
        resolve()
    ]
};
