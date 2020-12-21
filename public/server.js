const express = require('express');
const chalk = require('chalk');
const path = require('path');
// const { createProxyMiddleware } = require('http-proxy-middleware');

// const config = require('../webpack.config');

/* eslint-disable no-console */

console.log(chalk.bold.cyan('Starting express server in dev mode...'));

const port = 3000;
const app = express();

console.log(process.argv[2]);

// const compiler = webpack(config);

// const proxy = createProxyMiddleware('/api', {
//   target: '/some external server',
//   pathRewrite: {'^/api' : ''},
//   changeOrigin: true,
//   secure: false
// });

// app.use('/api', proxy);

// app.use(require('webpack-dev-middleware')(compiler, config));

// app.use(require('webpack-hot-middleware')(compiler, config));

// route requests for static files to appropriate directory
app.use('/', express.static(__dirname + `/${process.argv[2]}`))

// other routes defined before catch-all
// server.get('/some-route', (req, res) => {
//   res.send('ok')
// })

// final catch-all route to index.html defined last
app.get('/*', (_req, res) => {
  res.sendFile(path.resolve(__dirname, `./${process.argv[2]}/index.html`));
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.log(chalk.bold.green(`Listening at http://localhost:${port}/`));
});
