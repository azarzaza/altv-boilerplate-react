import path from "path";
import typescript from "@rollup/plugin-typescript";
import {
  terser
} from "rollup-plugin-terser";
// import resolve from "@rollup/plugin-node-resolve";

const tsconfigPath = path.resolve(__dirname, "tsconfig.json");

export default [{
    input: path.resolve(__dirname, "server", "src", "index.ts"),
    output: {
      file: path.resolve(__dirname, "server", "main.js"),
      format: "esm",
    },
    external: ["alt-server", "alt-client"],
    plugins: [
      typescript({
        tsconfig: tsconfigPath,
        typeRoots: [
          "node_modules/@altv",
          "node_modules/@types",
          "custom-types",
        ],
        include: ["server/**/*"],
        exclude: ["server/src/tests/**/*"],
      }),
      terser(),
      // resolve()
    ],
  },
  {
    input: path.resolve(__dirname, "client", "src", "index.ts"),
    output: {
      file: path.resolve(__dirname, "client", "main.js"),
      format: "esm",
    },
    external: ["alt-server", "alt-client"],
    plugins: [
      typescript({
        tsconfig: tsconfigPath,
        typeRoots: [
          "node_modules/@altv",
          "node_modules/@types",
          "custom-types",
        ],
        include: ["client/**/*"],
        exclude: ["client/src/views/**/*"],
      }),
      terser(),
      // resolve()
    ],
  },
];