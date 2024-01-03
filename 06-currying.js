/**
 * Currying
 * Currying transforma uma função que recebe vários argumentos em uma sequência de funções que recebem um argumento.
 */

function brewCoffee(beans) {
  return function (water) {
    return beans * water;
  };
}

const teaMaker = (teaAmount) => (waterAmount) => teaAmount * waterAmount;

const coffeeMaker = brewCoffee(10);
// returns a function that multiplies its argument by 10 (the number of coffee beans)
console.log(coffeeMaker(8)); // prints 80 (the amount of water)
console.log(coffeeMaker(12)); // prints 120 (the amount of water)
