import { ContaBancaria } from "./models/ContaBancaria";
// criar uma nova instancia
const conta1 = new ContaBancaria();

let saldoAtual: number = conta1.consultar();
console.log(`Saldo ${saldoAtual}`);
