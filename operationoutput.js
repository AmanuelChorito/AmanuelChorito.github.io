exports.result = function (req, res, vals) {
  let num1 = parseInt(vals.get("number1"));
  let num2 = parseInt(vals.get("number2"));
  let selectedOperation = vals.get("operation");
  output = calc(num1, num2, selectedOperation);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<!DOCTYPE html>");
  res.write("<html>");
  res.write('<head><meta charset="utf-8"/>');
  res.write("<title>Calculator Web Site</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("<p>The Answer is : ");
  res.write(String(output));
  res.write("</p>");
  res.write(
    "<a href='https://amanuelchorito.github.io/simplecalc_nodejs.html'>Go Back</a>"
  );
  res.write("</body>");
  res.write("</html>");
  return res.end();
};
function calc(num1, num2, selectedOperation) {
  switch (selectedOperation) {
    case "Add":
      return num1 + num2;

    case "Multiply":
      return num1 * num2;
    case "Substract":
      return num1 - num2;
    case "Divide":
      return num1 * num2;
    default:
  }
}
