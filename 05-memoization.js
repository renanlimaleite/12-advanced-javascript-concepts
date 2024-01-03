/**
 * Memoization
 * Memoization é um topico avançado, que não é muito comum de se ver no dia a dia, mas é importante saber o que é.
 * Em grandes aplicações, existem funções complexas que são chamadas muitas vezes, e isso pode deixar a aplicação lenta.
 * As vezes eles recebem o mesmo request para retornar a mesma coisa. Isso pode ser um problema.
 * É quando a memoization entra em ação, ela capta o resultado da função e salva em cache, para que quando a função for chamada novamente, ela não precise ser executada novamente.
 */

// Define a function to memoize
function multiply(x, y) {
  return x * y;
}

// Define a memoization cache as an object
const cache = {};

// Define a memoized version of the function
function memoizedMultiply(x, y) {
  const cacheKey = x + ":" + y; // Cria uma chave para o cache
  if (cache[cacheKey] !== undefined) {
    // Se o valor existir no cache, retorna ele
    return cache[cacheKey];
  } else {
    // Se não existir, executa a função e salva o resultado no cache
    const result = multiply(x, y);
    cache[cacheKey] = result;
    return result;
  }
}

// Call the memoized function
console.log(memoizedMultiply(2, 3)); // Should print "6"
console.log(memoizedMultiply(2, 3)); // Should print "6" again (result is already memoized)

function memoize(fn) {
  // Função que recebe uma função e retorna uma função memoizada
  const cache = {}; // Cria um cache vazio
  return function (...args) {
    // Retorna uma função que recebe qualquer numero de argumentos
    const cacheKey = JSON.stringify(args); // Cria uma chave para o cache
    console.log({ cacheKey });
    if (cache[cacheKey] !== undefined) {
      // Se o valor existir no cache, retorna ele
      return cache[cacheKey];
    } else {
      // Se não existir, executa a função e salva o resultado no cache
      const result = fn(...args);
      cache[cacheKey] = result;
      return result;
    }
  };
}

const memoizedMultiply2 = memoize(multiply);

memoizedMultiply2(2, 3);
memoizedMultiply2(2, 3);
