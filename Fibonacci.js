function fibonacci() {
    let n = document.getElementById("result").value;
    var a = 0, b = 1, result = 1;
    for (var i = 2; i <= n; i++) {
      result = a + b;
      a = b;
      b = result;
    }
    document.write(i);
    return result;
  }

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  
  