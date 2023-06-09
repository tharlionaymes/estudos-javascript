export class ContaPoupanca{
    constructor(saldoInicial,cliente,agencia){
        this.saldo = saldoInicial;
        this._cliente = cliente;
        this.agencia = agencia;
    }

    sacar(valor) { 
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor > 0){
            this._saldo += valor;
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}