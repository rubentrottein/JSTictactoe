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

const min = (nombreA, nombreB) => {
  if (`${nombreA}` < `${nombreB}`){
    return `${nombreA}`;
  } else {
    return `${nombreB}`;
  }
}
console.log(min(4.5, 5)); // 4.5
console.log(min(19, 9));  // 9
console.log(min(1, 1));   // 1
