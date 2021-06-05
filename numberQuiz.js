exports.guessnumber = function (req, res, vals) {
  if(vals.get("Submit"))
  const nums = [[3, 1, 4, 1, 5] [1, 1, 2, 3, 5],[1, 4, 9, 16, 25],[2, 3, 5, 7, 11],[1, 2, 4, 8, 16]];
  const answer=[9, 8, 36, 13, 32];
let quiznumber=0;
  let num1 = parseInt(vals.get("number1"));
  let num2 = parseInt(vals.get("number2"));
  let selectedOperation = vals.get("operation");
  
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<!DOCTYPE html>");
  res.write("<html>");
  res.write('<head><meta charset="utf-8"/>');
  res.write("<title>Quiz Game</title>");
  res.write("</head>");
  res.write("<body>");
  res.write('<form action="http://localhost:8085/">');
  res.write("<label name=quiznumber>");
  res.write('<input type="hidden" name="quiznumber" value="0" />');
  res.write("<div>");
  res.write("<p> your score is :");
  res.write(String(score));
  res.write("</p>");
  res.write("<p>Guess the next number in the sequence.</p>");
  res.write("<p>");
  res.write(nums[quiznumber]);
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
};

//Write a node.js web application that
// presents a series of quiz questions.
// Each question displays a sequence of numbers and asks the participant to guess the next number of the
//sequence. For example, the first sequence is 3 1 4 1 5.
//pi 3.141592653589793
//There may be many Users of the web
//site at the same time. (Hint: Use Hidden form parameters to remember the quiz number and
//score of each User.)
