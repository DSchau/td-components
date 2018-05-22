import babel from 'rollup-plugin-babel';
import resolve from "rollup-plugin-node-resolve";

const external = ['react', 'emotion', 'react-emotion', 'prop-types'];

export default {
  input: 'src/index.js',
  output: {
    external,
    file: 'dist/index.js',
    format: 'umd',
    globals: {
      react: 'React',
      emotion: 'Emotion',
      'react-emotion': 'ReactEmotion',
      'prop-types': 'PropTypes'
    },
    name: 'TdComponents',
    sourcemap: true
  },
  plugins: [
    babel(),
    resolve()
  ]
}
