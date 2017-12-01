import babel from 'rollup-plugin-babel'
import flow from 'rollup-plugin-flow'
import closure from 'rollup-plugin-closure-compiler-js'
import uglify from 'rollup-plugin-uglify'
import cjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import path from 'path'

const config = {
  input: 'src/index.js',
  external: ['react', 'emotion', 'normalize.css'],
  exports: 'named',
  sourcemap: true,
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
    },
  ],
  plugins: [
    flow(),
    babel({
      exclude: 'node_modules/**',
    }),
    'external-helpers',
    cjs({ exclude: [path.join(__dirname, '*/src/**/*')] }),
  ],
}

if (process.env.UMD) {
  config.globals = {
    react: 'React',
  }

  config.plugins.push(closure(), uglify())
  /*replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),*/

  config.output = [
    {
      file: './dist/index.umd.min.js',
      format: 'umd',
      name: 'emotion-grid',
    },
  ]
}

export default config
