var proxy = require('express-http-proxy');
var cors = require('cors');
var app = require('express')();
require('dotenv').config();

app.use(cors());
app.use('/', proxy(process.env.PROXY_URL, { https: true }));
app.listen(3000, () => {
  console.log('Proxy server listening on port 3000')
});

