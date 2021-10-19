// https://babeljs.io/docs/en/config-files#project-wide-configuration
module.exports = (api) => {
  api.cache.forever()

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'entry',
          corejs: 3,
          targets: {
            browsers: [
              'last 2 Chrome versions',
              'last 2 Firefox versions',
              'last 2 Safari versions',
              'last 2 Opera versions'
            ]
          },
          debug: false
        }
      ],
      '@babel/preset-react'
    ],
    env: {
      development: {
        plugins: [
          '@babel/plugin-transform-runtime',
          // https://github.com/gaearon/react-hot-loader/issues/1102#issuecomment-459570955
          ['react-hot-loader/babel', { safetyNet: false }]
        ]
      },
      production: {
        plugins: ['@babel/plugin-transform-runtime']
      }
    }
  }
}
