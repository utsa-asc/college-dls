// import {terser} from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: './src/js/bundle/bundle.js',
    output: {
        file: 'dist/js/bundle/bundle.umd.min.js',
        format: "umd",
        name: "bundle", // this is the name of the global object
        esModule: false,
        globals: {
            jquery: 'jQuery'
        },
        sourcemap: true
    },
    plugins: [
        nodeResolve({
            jsnext: true,
            main: true,
            browser: true
        })
    ]
    // plugins: [terser({compress: {drop_console: true, module: true}}), nodeResolve()]
};