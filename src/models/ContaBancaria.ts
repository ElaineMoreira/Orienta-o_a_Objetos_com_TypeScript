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
  // coloquei o number para especificar
  consultar(): number {
    return this.saldo;
  }

  depositar(valor: number): void {
    if (valor >= 0) {
      // incrementar o saldo
      this.saldo += valor;
    }
  }

  sacar(valor: number): void {
    if (valor >= 0 && this.saldo >= valor) {
      // decrementando valor
      this.saldo -= valor;
    }
  }
}
