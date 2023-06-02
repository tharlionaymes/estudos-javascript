/* Agora vamos criar um molde para replicar o codigo do exemplo1.js usando a palavra reservada Class*/

class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11825496805;
cliente1.agencia = 1001;
cliente1.saldo = 0;

console.log(cliente1)

/* É melhor trabalhar assim pq se por um acaso voce quiser inserir um rg, vc nao precisaria modificar em todos os clientes, apenas adicionaria na classe */

const cliente2 = new Cliente() 

cliente2.nome = "Alice";
cliente2.cpf = 11596325905; 
cliente2.agencia = 1001;
cliente2.saldo = 0;
cliente2.rg = 235658

console.log(cliente2)

