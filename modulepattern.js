var counter = (function () {
  var privateCounter = 0; //private data
  function changeBy(val) {
    //private inner function
    privateCounter += val;
  }
  return {
    increment: function () {
      // three public functions are closures that share the same environment.
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();

// console.log(counter.value())
// counter.increment();
// counter.increment();
// console.log(counter.value())
// counter.decrement();
// console.log(counter.value())

//We could store this function in a separate variable and use it to create several counters.
//Could the immediate evaluation syntax be used here also?no
var counter1 = counter();
var counter2 = counter();
alert(counter1.value()); /* Alerts 0 */
