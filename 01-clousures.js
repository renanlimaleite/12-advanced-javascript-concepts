/**
 * Uma closure é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.
 * Ela possui 3 escopos:
 * 1. Ela tem acesso ao seu próprio escopo — variáveis definidas entre suas chaves
 * 2. Ela tem acesso às variáveis da função que a envolve
 * 3. Ela tem acesso às variáveis globais do contexto em que foi criada
 *
 * Em javascript, quando uma função normal é invocada, é criado um novo escopo de execução,
 * todas variaveis declaradas dentro da função são adicionadas a esse escopo, e quando a função termina de executar, esse escopo é destruido.
 *
 * Porém em uma closure, quando a função termina de executar, o escopo não é destruido, pois a função interna ainda tem acesso a esse escopo,
 * A closure mantem o escopo vivo, mesmo após a função externa ter terminado de executar. Essa variáveis são armazenadas na memória heap. que é uma área da memória para alocação dinâmica.
 * Mesmo depois que a função externa termina de executar, a closure ainda tem acesso a essas variáveis. porque ela ainda tem uma referência a esse escopo.
 */

const globalVariable = "Welcome"; // variavel global
function createCaffeineAddict(coffeeType) {
  const addiction = `addicted to ${coffeeType}`; // variavel externa
  return function getHigh() {
    const highMessage = `${globalVariable}: Feeling wired and ${addiction}!`; // variavel interna
    console.log(highMessage);
  };
}
const espressoJunkie = createCaffeineAddict("espresso");
const latteLover = createCaffeineAddict("latte");
espressoJunkie();
latteLover();
