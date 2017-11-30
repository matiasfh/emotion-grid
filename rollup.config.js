import babel from 'rollup-plugin-babel'
import flow from 'rollup-plugin-flow'
import closure from 'rollup-plugin-closure-compiler-js'
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  plugins: [
    flow(),
    babel({
      exclude: 'node_modules/**',
    }),
    'external-helpers',
    closure(),
    uglify(),
  ],
}
