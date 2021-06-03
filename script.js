$(document).ready(function () {
  var de = $("ul.level-2").children().css("background-color", "blue");

  var x = $("ul.level-3").detach();

  //var l2 = $("ul.level-2")
  //  .children()

  // var l1 = l2.prev();
  // var l3 = l2.next();

  // l1.css("background-color", "blue");
  // l2.css("background-color", "blue");
  // l3.css("background-color", "blue");

  $(".third-item").prev().css("background-color", "blue");
  $("span").parent().css("background-color", "green");

  var t = $("body").children().first().text();
  $("body").children().eq(1).text(t);
});
