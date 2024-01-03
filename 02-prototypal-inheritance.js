/**
 * prototypal inheritance
 * Herença prototípica
 *
 * O que é um protótipo?
 * R: No Javascript cada objeto tem uma propriedade interna chamada [[Prototype]], Quando tentamos acessar uma propriedade que não existe em um objeto,
 *    o Javascript automaticamente tenta encontrar essa propriedade no protótipo do objeto.
 *
 * Herança prototípica é o mecanismo pelo qual um objeto pode herdar propriedades de outro objeto, ou seja, um objeto pode ter um protótipo.
 * Como funciona?
 * R: Quando um método ou propriedade é chamado em um objeto, o Javascript primeiro tenta encontrar essa propriedade no próprio objeto, se não encontrar, ele vai procurar no protótipo do objeto,
 *    se não encontrar, ele vai procurar no protótipo do protótipo, e assim por diante, até encontrar a propriedade ou chegar no objeto Object.prototype, que é o último objeto da cadeia de protótipos.
 */

const animal = {
  eats: true,
  walk: function () {
    console.log("Animal walking...");
  },
};

const dog = Object.create(animal); // Cria um novo objeto com o protótipo animal
dog.walk(); // Dog não tem o método walk, então o Javascript vai procurar no protótipo do objeto, que é o objeto animal, e vai encontrar o método walk.
