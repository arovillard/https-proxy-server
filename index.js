require('dotenv').config();

const proxy = require('express-http-proxy');
const cors = require('cors');
const morgan = require('morgan');
const app = require('express')();

const port = process.env.PORT || 3000;
const proxyUrl = process.env.PROXY_URL;

if (!proxyUrl) {
  console.error(`No proxy URL is configured, make sure the PROXY_URL environment variable is set.`);
  process.exit(1);
}

app.use(morgan('dev'));
app.use(cors());
app.use('/', proxy(proxyUrl, { https: true }));
app.listen(port, () => {
  console.log(`Proxy server listening on port ${port} and proxying to ${proxyUrl}`)
});
