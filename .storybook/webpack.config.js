const path = require("path")

module.exports = ({ config }) => {

  config.module.rules.push({
    test: /\.ts$/,
    loader: require.resolve('@open-wc/webpack-import-meta-loader'),
  })
    
  config.resolve.modules = [
    path.resolve(__dirname, "..", "src"),
    "node_modules",
  ]

  config.resolve.alias = {
    "~": path.resolve(__dirname, "..", "src")
  }

  return config
}