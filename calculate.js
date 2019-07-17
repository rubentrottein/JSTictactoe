function calculer(a, operateur, b){
  switch (operateur){
    case "+":
      return a + b;
    break;
    case "-":
      return a - b;
    break;
    case "/":
      return a / b;
    break;
    case "*":
      return a * b;
    break;
  }
}

console.log(calculer(4, "+", 6));  // 10
console.log(calculer(4, "-", 6));  // -2
console.log(calculer(2, "*", 0));  // 0
console.log(calculer(12, "/", 0)); // Infinity
