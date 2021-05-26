document.querySelector("#calcform").addEventListener("submit", function (e) {
  e.preventDefault();
  var subtotalElem = document.getElementById("#subtotal").value;
  var tipElem = document.getElementById("#tip").value;
  var totalElem = document.getElementById("#total");
  var subtotal = parseFloat(subtotalElem);
  var tip = (parseFloat(tipElem) / 100) * subtotal;
  var total = subtotal + tip;
  totalElem.innerHTML = "$" + total;
});
