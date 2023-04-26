var a = 0;
var b = 1;
var result;
for (var i = 1; i <= n; i++) {
  console.log(a);
  result = a + b;
  a = b;
  b = result;
  console.log(result);
}

  