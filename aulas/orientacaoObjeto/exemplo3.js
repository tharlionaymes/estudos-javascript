import {Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11825496805;



const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;

contaCorrenteRicardo.depositar(300);
console.log(contaCorrenteRicardo._saldo)
contaCorrenteRicardo.sacar(50);
console.log(contaCorrenteRicardo._saldo)
contaCorrenteRicardo.depositar(1000);
console.log(contaCorrenteRicardo);

const cliente2 = new Cliente();
cliente2.nome = "Carla";
cliente2.cpf = 11596835687;

const contaCorrenteCarla = new ContaCorrente();
contaCorrenteCarla.agencia = 1002;
contaCorrenteCarla.cliente = cliente2;

contaCorrenteRicardo.transferir(500, contaCorrenteCarla)

console.log("Ricardo transferiu para Carla")

console.log(contaCorrenteCarla)

console.log(contaCorrenteRicardo)

console.log(contaCorrenteCarla.cliente)

