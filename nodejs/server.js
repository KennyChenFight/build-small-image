'use strict';

// [START all]
const http = require('http');
const handleRequest = function (req, res) {
  res.writeHead(200);
  res.end('Hello Kubernetes!');
};
const www = http.createServer(handleRequest);
www.listen(parseInt(process.env.PORT) || 8080);

// [END all]
module.exports = www;
