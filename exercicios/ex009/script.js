console.log("---Exercicio 01---")

class Conta{
  constructor(saldo) {
    this.saldo = saldo;
  }

  deposito(valor) {
    this.saldo += valor;
  }

  saque(valor) {
    this.saldo -= valor; 
  }

}

let conta = new Conta(1000);

conta.deposito(1000);

console.log(conta.saldo);

conta.saque(1500);

console.log(conta.saldo);


console.log("#########################################################################")
console.log("---Exercicio 02---")

class CarrinhoCompra {
  constructor(itens, quantidadeTotal,valorTotal){
    this.itens = itens;
    this.quantidadeTotal = quantidadeTotal;
    this.valorTotal = valorTotal;
  }

  adicionarItens(adicionar) {
    this.itens += adicionar;
  }

  removerItens(remover) {
    this.itens -= remover;
  }

}  

let carrinhoCompra = new CarrinhoCompra(10,10,300);

console.log(carrinhoCompra);

carrinhoCompra.adicionarItens(50);

console.log(carrinhoCompra.itens);

carrinhoCompra.removerItens(60);

console.log(carrinhoCompra.itens);



console.log("#########################################################################")
console.log("---Exercicio 03---")

class Endereco {
  constructor(rua,bairro,cidade,estado){
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

  set novaRua(novaRua){
    this.rua = novaRua;
  }

  set novaBairro(novaBairro){
    this.bairro = novaBairro;
  }

  set novaCidade(novaCidade){
    this.cidade = novaCidade;
  }

  set novoEstado(novoEstado){
    this.estado = novoEstado;
  }

}

let endereco = new Endereco("Hadock Lobo", "Tijuca", "Rio de Janeiro", "RJ");

console.log(endereco);

console.log

endereco.novaRua = "Estrada do Camboatá"

endereco.novaBairro = "Guadalupe"

console.log(endereco)



console.log("#########################################################################")
console.log("---Exercicio 04---")

class Carro {
  constructor(marca,cor,gasolinaRestante,consumo){
    this.marca = marca;
    this.cor = cor;
    this.gasolinaRestante = gasolinaRestante;
    this.consumo = consumo;
  }

  dirigir(km) {

    let litrosConsumidos = km / this.consumo;

    this.gasolinaRestante -= litrosConsumidos;
  }

  abastecer(litros) {

    this.gasolinaRestante += litros

  }

  
}

let carro = new Carro("Ford","prata",100,12);

console.log(carro);

carro.dirigir(100);

console.log(carro);

carro.abastecer(10);

console.log(carro);



console.log("#########################################################################")
console.log("---Exercicio 05---")

class ContaBanco {
  constructor(saldoCC, saldoCP,juros) {
    this.saldoCC = saldoCC;
    this.saldoCP = saldoCP;
    this.juros = juros;
  }

  deposito(valor) {
    this.saldoCC += valor;
  }

  saque(valor) {
    this.saldoCC -= valor;
  }

  transferenciaCP(valor) {
    this.saldoCC -= valor;
    this.saldoCP += valor;
  }

  transferenciaCC(valor) {
    this.saldoCP -= valor;
    this.saldoCC += valor;
  }

  jurosDeAniver() {
    let juros = (this.saldoCP * this.juros)/100;
    this.saldoCP += juros;
  }
}

class ContaEspecial extends ContaBanco{
  constructor(saldoCC, saldoCP,juros) {
    super (saldoCC, saldoCP, juros * 2)
  }
}


let contaBanco = new ContaBanco(1000, 5000, 1)

console.log(contaBanco);

contaBanco.saque(500);

console.log(contaBanco);

contaBanco.deposito(5000);

console.log(contaBanco);

contaBanco.transferenciaCP(3000);

console.log(contaBanco);

contaBanco.jurosDeAniver();

console.log(contaBanco);

let contaEspecial = new ContaEspecial(10000, 50000,1)

console.log(contaEspecial)