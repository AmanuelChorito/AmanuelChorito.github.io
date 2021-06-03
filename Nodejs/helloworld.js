var http = require("http");
const { URL } = require("url");
var dt = require("./mymodule.js");
var user = require("./userfile");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(req.url);
    res.write(" The date and time are currently: " + dt.myDate());
    res.write(
      user.getName() +
        " lives in " +
        user.getLocation() +
        " and was born on " +
        user.dob
    );
    var q = new URL(req.url, "https://localhost:8086/").searchParams;
    var txt = q.get("year") + " " + q.get("month");
    res.end(txt);
  })
  .listen(8086);
