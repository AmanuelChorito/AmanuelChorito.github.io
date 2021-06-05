var http = require("http");
const { URL } = require("url");
var fs = require("fs");
var output = require("./numberQuiz.js");
var flag = true;
http
  .createServer(function (req, res) {
    if (req.url == "/startquiz" || "/quiz") {
      var q = new URL(req.url, "https://localhost:8085/");
      output.guessnumber(req, res, q.searchParams);
    }
    if (flag) {
      flag = false;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<form action="startquiz" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="submit" value="Start">');
      res.write("</form>");
    }
    return res.end();
  })
  .listen(8085);
