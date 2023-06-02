import {Cliente} from "./ClienteNew.js"
import{ContaCorrente} from "./ContaCorrenteNew.js"

const cliente1 = new Cliente("Maria", 11359563585);
console.log(cliente1)
console.log(cliente1.nome)
console.log(cliente1._cpf)

const conta1 = new ContaCorrente(1001,cliente1);
const conta2 = new ContaCorrente(1001,cliente1);
const conta3 = new ContaCorrente(1001,cliente1);
const conta4 = new ContaCorrente(1001,cliente1);
const conta5 = new ContaCorrente(1001,cliente1);

console.log(ContaCorrente.numerosDeContas)