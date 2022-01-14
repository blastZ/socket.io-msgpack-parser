import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/index.ts",
    include: ["src/**/*"],
    output: {
      dir: "output",
      format: "umd",
      name: "@blastz/socket.io-msgpack-parser",
    },
    plugins: [
      typescript({
        target: "es5",
        module: "esnext",
        outDir: "output",
        include: ["src/**/*"],
        declaration: true,
        sourceMap: false,
      }),
    ],
  },
];
