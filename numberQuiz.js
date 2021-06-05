exports.guessnumber = function (req, res, vals) {
  let hidden = parseInt(vals.get("quiznumber"));
  let youranswer = parseInt(vals.get("youranswer"));

  // console.log("hidden" + hidden);

  // console.log("your answer" + youranswer);
  const nums = {
    pi: [3, 1, 4, 1, 5],
    fib: [1, 1, 2, 3, 5],
    sq: [1, 4, 9, 16, 25],
    pr: [2, 3, 5, 7, 11],
    pow: [1, 2, 4, 8, 16],
  };
  const answer = [9, 8, 36, 13, 32];
  let quiznumber = 0;
  var score = 0;

  if (!hidden) {
    hidden = 1;

    displayQuestion(req, res, nums.pi, score, hidden);
  } else {
    if (hidden == 1 && youranswer == answer[0]) {
      hidden++;
      displayQuestion(req, res, nums.fib, score, hidden);
    }
    if (hidden == 2 && youranswer == answer[1]) {
      hidden++;
      displayQuestion(req, res, nums.sq, score, hidden);
    }
  }
};
function displayQuestion(req, res, list, score, hidden) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<!DOCTYPE html>");
  res.write("<html>");
  res.write('<head><meta charset="utf-8"/>');
  res.write("<title>Quiz Game</title>");
  res.write("</head>");
  res.write("<body>");
  res.write('<form action="http://localhost:8085/">');
  res.write("<label name=quiznumber>");
  res.write(`<input type="hidden" name="quiznumber" value=${hidden} />`);
  res.write("<div>");
  res.write("<p> your score is :");
  res.write(String(score));
  res.write("</p>");
  res.write("<p>Guess the next number in the sequence.</p>");
  res.write("<p>");
  res.write(String(list));
  res.write("</p>");
  res.write("<label>your answer:</label>");
  res.write('<input type="text" name="youranswer"/>');
  res.write("<br/>");
  res.write('<input type="submit" value="Submit"/>');
  res.write("</div>");
  res.write("</form>");

  res.write(
    "<a href='https://amanuelchorito.github.io/simplecalc_nodejs.html'>Go Back</a>"
  );
  res.write("</body>");
  res.write("</html>");
  return res.end();
}
