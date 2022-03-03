import { ContaBancaria } from "./models/ContaBancaria";
// criar uma nova instancia
const conta1 = new ContaBancaria();

/**depositar */
let saldoAtual: number = conta1.consultar();
console.log(`Saldo inicial: ${saldoAtual}`);
conta1.depositar(50);
saldoAtual = conta1.consultar();
console.log(`segundo saldo: ${saldoAtual}`);
// mais um deposito
conta1.depositar(50);
saldoAtual = conta1.consultar();
console.log(`terceiro saldo: ${saldoAtual}`);
// mais um deposito
conta1.depositar(200);
saldoAtual = conta1.consultar();
console.log(`saldo total ${saldoAtual}`);

/**sacar */
conta1.sacar(30);
saldoAtual = conta1.consultar();
console.log(`saldo atual depois do saque: ${saldoAtual}`);
// mais um saque
conta1.sacar(30);
saldoAtual = conta1.consultar();
console.log(`segundo saque: ${saldoAtual}`);

console.log(`total da conta: ${saldoAtual}`);
