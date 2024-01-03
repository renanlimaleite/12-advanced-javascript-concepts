/**
 * High Order Functions
 * Uma função que recebe uma ou mais funções como argumento e/ou retorna uma função como resultado é chamada de high order function.
 */

/**
 * coffeeMaker é uma high order function, pois recebe uma função como argumento.
 * coffeeType é o argumento da função coffeeMaker, e é passado para a função que é recebida como argumento.
 */
function brew(coffeeMaker, coffeeType) {
  return coffeeMaker(coffeeType);
}

function makeAmericano(coffeeAmount) {
  return `Brewing ${coffeeAmount} ml of Americano...`;
}

function makeLatte(coffeeAmount) {
  return `Steaming ${coffeeAmount} ml of milk for Latte...`;
}

function tea(teaMaker, teaAmount) {
  return teaMaker(teaAmount);
}

function makeBlackTea(teaAmount) {
  return `Steeping ${teaAmount} ml of black tea...`;
}

/**
 * brew é uma high order function, pois retorna uma função.
 * makeAmericano é o argumento da função brew, e é passado para a função que é retornada.
 * coffeeAmount é o argumento da função makeAmericano, e é passado para a função que é retornada.
 */
const result1 = brew(makeAmericano, 200); // returns "Brewing 200 ml of Americano..."

const result2 = brew(makeLatte, 300); // returns "Steaming 300 ml of milk for Latte..."

const result3 = tea(makeBlackTea, 100); // returns "Steeping 100 ml of black tea..."

console.log({
  result1,
  result2,
  result3,
});
