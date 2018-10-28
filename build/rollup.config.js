const babel = require('rollup-plugin-babel')
const { uglify } = require('rollup-plugin-uglify')

module.exports = (config) => {
  const { input, fileName, name } = config
  return {
    input: {
      input,
      external: [
        'dayjs-ext', 'fast-plural-rules', 'timezone-support'
      ],
      plugins: [
        babel({
          exclude: 'node_modules/**'
        }),
        uglify()
      ]
    },
    output: {
      file: fileName,
      format: 'umd',
      name: name || 'dayjs',
      globals: {
        'dayjs-ext': 'dayjs',
        'fast-plural-rules': 'fastPluralRules',
        'timezone-support': 'timezone-support'
      },
      sourcemap: true
    }
  }
}
