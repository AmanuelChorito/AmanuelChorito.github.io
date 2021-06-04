var http = require("http");
const { URL } = require("url");
var fs = require("fs");
var calculate = require("./operationoutput.js");
http
  .createServer(function (req, res) {
    var q = new URL(req.url, "https://localhost:8085/");
    calculate.result(req, res, q.searchParams);
  })
  .listen(8085);
