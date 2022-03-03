// entidade
export class ContaBancaria {
  // atributo
  saldo: number;
  // criando construtor
  constructor() {
    // a conta vai comecar com zero entao nao vou colocar nada dentro do constructor
    // saldo desta estancia esta inicialzando com 0
    this.saldo = 0;
  }
  // colocar metodos acoes sacar, consultar e depositar
  consultar() {
    return this.saldo;
  }
}
