import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/index.js",
  output: [
    {
      name: "Anchor",
      format: "cjs",
      file: "lib/index.js"
    },
    {
      name: "Anchor",
      format: "esm",
      file: "es/index.js"
    }
  ],
  external: ["react", "prop-types"],
  plugins: [
    nodeResolve(),
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: true
    }),
    commonjs(),
    terser()
  ]
};
