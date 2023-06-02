import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
        
    }
   
    get cliente(){
        return this._cliente;
    }
   
   
    _saldo = 0 /*#saldo; /* Desse jeito deixa o saldo privado, para ninguem alterar fora da class */
    
    
    sacar(valor) { /*Desse jeito fica mais generico*/
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    /* Desse jeito abaixo fica muito específico
    let valorSacado = 200;
    if(contaCorrenteRicardo.saldo >= valorSacado){
        contaCorrenteRicardo.saldo -= valorSacado;    } */


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

