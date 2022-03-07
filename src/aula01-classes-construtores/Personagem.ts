/**Cria classe */
class Personagem {
  nome: string = "";
  energia: number = 0;
  vida: number = 0;
  ataque: number = 0;
  defesa: number = 0;

  /**cria constructor para especificar como os meu atributos serao inicializados*/
  /**define que todos os personagens criados inicializarão com valor de energia e ataque 50 */
  constructor() {
    this.energia = 50;
    this.ataque = 50;
  }
}

let sansa: Personagem;
sansa = new Personagem();
sansa.nome = "Sansa Stark";
console.log("personagem: >>", sansa);

/**saida
 
  personagem :>> {
   sansa.nome = "Sansa Stark";
   sansa.ataque = 50;
   sansa.defesa = 0;
   sansa.energia = 50;
   sansa.vida = 0;

 */

/**Posso instaciar para criar novo personagem*/
// let sansa: Personagem;
// sansa = new Personagem();
// sansa.nome = "Sansa Stark";
// sansa.ataque = 10;
// sansa.defesa = 20;
// sansa.energia = 50;
// sansa.vida = 100;
// console.log("personagem :>>", sansa);
/**saida

 * personagem :>> {
 * sansa.nome = "Sansa Stark";
   sansa.ataque = 10;
   sansa.defesa = 20;
   sansa.energia = 50;
   sansa.vida = 100;
   
 * }
 */
// let aria: Personagem;
// aria = new Personagem();
// aria.nome = "Ária Stark";
// aria.ataque = 100;
// aria.defesa = 80;
// aria.energia = 90;
// aria.vida = 150;
// console.log("personagem: >>", aria);
/**saida

 * personagem :>> {
 * aria.nome = "Aria Stark";
   aria.ataque = 100;
   aria.defesa = 80;
   aria.energia = 90;
   aria.vida = 150;
   
 * }
 */

/**forma diferente de contruir um personagem, chamando pelo contrutor padrao*/
// let jonh: Personagem = new Personagem();
// jonh.nome = "Jonh Snow";
// jonh.ataque = 80;
// jonh.defesa = 70;
// jonh.energia = 90;
// jonh.vida = 40;
// console.log("personagem: >>", jonh);
