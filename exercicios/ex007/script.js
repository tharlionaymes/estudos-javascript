console.log("----------FUNÇÃO 1----------")

function olamundo() {
    console.log("Olá Mundo!!!")
}

olamundo();

//-------------------------------------------------------------------------------

console.log("----------FUNÇÃO 2----------")

function idade(anos){
  console.log(`Você tem ${anos} anos.`)
}

idade(25);

//------------------------------------------------------------------------------------

console.log("----------FUNÇÃO 3----------")

function somaDoisNumeros(a,b){
  console.log(a + b)
  //return  a + b;
}

somaDoisNumeros(15,10)
//console.log(somaDoisNumeros(5,10))

//------------------------------------------------------------------------------------

console.log("----------FUNÇÃO 4----------")

function numAleatorio(num){
  return Math.floor(Math.random() * num)
}

console.log(numAleatorio(20))

//------------------------------------------------------------------------------------

console.log("----------FUNÇÃO 5----------")

function idadePessoa(idade){
  if (idade >= 18){
    console.log(`Parabéns! Você com ${idade} anos está apto a entrar na autoescola`)
  }

  else{
    console.log(`Desculpa! Você com ${idade} anos NÃO está apto a entrar na autoescola`)
  }
}

idadePessoa(20)
idadePessoa(17)


//------------------------------------------------------------------------------------

console.log("----------FUNÇÃO 6----------")

function numPositivo(numNegativo){
  return Math.abs(numNegativo)
}

console.log(numPositivo(-17))

//------------------------------------------------------------------------------------

console.log("----------FUNÇÃO 7----------")

function tamanho(textoLongo){
  if (textoLongo.length > 10) {    
    console.log(`"${textoLongo}" é um texto muito longo!!!`)
  }

  else{
    console.log(`"${textoLongo}" é um texto dentro do limite!!!`)
  }
}

tamanho("Tharlion")
tamanho("Lorem ipsum dolor sit amet.")

//------------------------------------------------------------------------------------

console.log("----------FUNÇÃO 8----------")

function somenteOsPares(num){
  for(let i = num; i > 0; i-=1){
    if (i % 2 == 0){
      console.log(i)
    }
    
  }

}

somenteOsPares(10)