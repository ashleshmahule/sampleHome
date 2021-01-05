module.exports = (api) => {
    api.cache(true)
  
    return {
      presets: ['@babel/preset-env','@babel/preset-react'],
      plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-class-properties',
      ].map(require.resolve),
    }
  }