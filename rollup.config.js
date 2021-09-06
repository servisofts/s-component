import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import babel from 'rollup-plugin-babel';
import image from 'rollup-plugin-image';
import pkg from "./package.json";
import url from "rollup-plugin-url"
// import reactSvg from "rollup-plugin-react-svg";
import svgr from '@svgr/rollup';
export default {
    input: "src/index.tsx",
    output: [
        { file: pkg.main, format: "cjs", exports: "named", sourcemap: true },
        { file: pkg.module, format: "es", exports: "named", sourcemap: true }
    ],
    plugins: [
        resolve(),
        external(),
        typescript({ rollupCommonJSResolveHack: true, exclude: "**/__tests__/**", clean: true }),
        commonjs({
            include: [
                'node_modules/**'
            ],
            exclude: [
                'node_modules/process-es6/**',
            ],
            namedExports: {
                'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement', "I"],
                'node_modules/react-dom/index.js': ['render'],
                'react-native': ['View', 'Dimensions', 'TouchableOpacity', 'Image'],
                'react-native-svg': ['SvgProps']
            }
        }),
        babel({
            babelrc: true,
            exclude: 'node_modules/**',
        }),
        image(),
        url({
            limit: 10 * 1024, // inline files < 10k, copy files > 10k
            include: ["**/*.svg"], // defaults to .svg, .png, .jpg and .gif files
            emitFiles: true
        }),
        svgr(),
    ],
    external: [
        '@babel/runtime',
        '@react-native-community/async-storage',
        'react',
        'react-dom',
        'react-native',
        'react-native-svg',
        'styled-components',
    ],
};