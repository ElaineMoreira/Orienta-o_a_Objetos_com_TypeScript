import { ContaBancaria } from "./models/ContaBancaria";

// criar uma nova instancia
const conta1 = new ContaBancaria();
/**consultar */
let saldoAtual: number = conta1.consultar();
console.log(`Saldo inicial: ${saldoAtual}`);

/**depositar */
conta1.depositar(50);
saldoAtual = conta1.consultar();
console.log(`Consulta ao saldo depois do deposito: ${saldoAtual}`);

/**sacar */
conta1.sacar(30);
saldoAtual = conta1.consultar();
console.log(`Saldo atual depois do saque: ${saldoAtual}`);

console.log(`Saldo total da conta: ${saldoAtual}`);
