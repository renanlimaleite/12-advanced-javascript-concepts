/**
 * Generators
 * Geradores são funções com pausa e retomada de execução. Ao invés de invocar toda a função, o código é executado até o primeiro yield, e o valor é retornado.
 * A execução é retomada quando o método next() é chamado e o código é executado até o próximo yield.
 */

function* coffeeGenerator() {
  const coffeeTypes = ["latte", "cappuccino", "espresso", "americano"];

  for (const coffee of coffeeTypes) {
    yield coffee;
  }
}

const coffee = coffeeGenerator();
console.log(coffee.next().value); // latte
console.log(coffee.next().value); // cappuccino
console.log(coffee.next().value); // espresso
console.log(coffee.next().value); // americano
console.log(coffee.next()); // { value: undefined, done: true }
