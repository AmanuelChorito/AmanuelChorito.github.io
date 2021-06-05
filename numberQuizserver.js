var http = require("http");
const { URL } = require("url");
var fs = require("fs");
var output = require("./guessnumber.js");
http
  .createServer(function (req, res) {
    var q = new URL(req.url, "https://localhost:8085/");
    guessnumber.guessnumber(req, res, q.searchParams);
  })
  .listen(8085);
