import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import babel from 'rollup-plugin-babel';
import pkg from "./package.json";

import React from 'react';
import ReactDOM from 'react-dom';

export default {
    input: "src/index.tsx",
    output: [
        { file: pkg.main, format: "cjs", exports: "named", sourcemap: true },
        { file: pkg.module, format: "es", exports: "named", sourcemap: true }
    ],
    plugins: [
        resolve({
            jsnext: true,
            main: true
        }),
        external(),
        typescript({ rollupCommonJSResolveHack: true, exclude: "**/__tests__/**", clean: true }),
        commonjs({
            include: [
                'node_modules/**'
            ],
            exclude: [
                'node_modules/process-es6/**'
            ],
            namedExports: {
                'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
                'node_modules/react-dom/index.js': ['render'],
                'react': Object.keys(React),
                'react-dom': Object.keys(ReactDOM),
            }
        }),
        babel({
            babelrc: true,
            exclude: 'node_modules/**'
        }),
    ]
};