const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev');
const PORT = process.env.PORT || 3000;

new WebpackDevServer(webpack(config), {
  contentBase: './public',
  historyApiFallback: true,
  stats: {
    assets: true,
    chunks: true,
    chunkModules: false,
    colors: true,
  },
})
.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${PORT}`);
});
