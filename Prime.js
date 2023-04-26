function Print() {
    let n = document.getElementById("result").value;
    for (let i = 1; i <= n; i++) {
        count = 0;
         for (let j = 2; j <= i / 2; j++) {
          if (i % j == 0) {
           count++;
           break;
  }
  }
  
         if (count == 0) {
          document.write(i);
          document.write("<br>");
     }
  }
}