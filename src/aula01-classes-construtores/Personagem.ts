/**Cria classe */
class Personagem {
  nome: string = "";
  energia: number = 0;
  vida: number = 0;
  ataque: number = 0;
  defesa: number = 0;
}
/**Posso instaciar para criar novo personagem*/
let sansa: Personagem;
sansa = new Personagem();
sansa.nome = "Sansa Stark";
sansa.ataque = 10;
sansa.defesa = 20;
sansa.energia = 50;
sansa.vida = 100;
console.log("personagem :>>", sansa);
