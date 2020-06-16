export default {
	input: 'lib/index.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    },
  },
  external:['react', 'react-dom']
}