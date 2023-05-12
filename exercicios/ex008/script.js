console.log("---Exercicio 01---")

let num = [1,2,3,4,5]

console.log(num[1])
console.log(num[3])
console.log(num[4])

console.log("#########################################################################")
console.log("---Exercicio 02---")

let num1 = [1,2,3,4]
let num2 = [5,6]

console.log(num1.length)
console.log(num2.length)

console.log("#########################################################################")
console.log("---Exercicio 03---")

let onibus = {
  rodas: 8, 
  limitePassageiros: 40, 
  portas: 2
}

console.log(onibus)
console.log(onibus.rodas)
console.log(onibus.limitePassageiros)
console.log(onibus.portas)

console.log("#########################################################################")
console.log("---Exercicio 04---")

let van = {
  rodas: 8, 
  limitePassageiros: 40, 
  portas: 2
}

van.janelas = 20

delete van.rodas

console.log(van)
console.log(van.rodas)
console.log(van.limitePassageiros)
console.log(van.portas)
console.log(van.janelas)

console.log("#########################################################################")
console.log("---Exercicio 05---")

let nomes = ["Tharlion", "Carlos", "Maria","Carla","Mario"]

if (nomes.includes("Tharlion")){
  console.log("Há o nome Tharlion")  
}

else{
  console.log("Não há!!!")
}


console.log("#########################################################################")
console.log("---Exercicio 06---")

let array5 = [1,2,3,4,5]

let array3 = [6,7,8]

function poucosElementos(x){
if (x.length < 5){
  console.log("Poucos Elementos")
}

else{
  console.log("Muitos Elementos")
}
}

poucosElementos(array5)
poucosElementos(array3)

console.log("#########################################################################")
console.log("---Exercicio 07---")

let cinco = [1,2,3,4,5]

for(let i = 0; i<cinco.length;i++){
  console.log(cinco[i])
}

console.log("#########################################################################")
console.log("---Exercicio 08---")

const car = {
  "marca":"Ford",
  "modelo":"Ka",
  "ano":2015,
}

console.log(car)
console.log(car.marca)
console.log(car.modelo)
console.log(car.ano)

console.log("#########################################################################")
console.log("---Exercicio 09---")

let frase = "Uma vez Flamengo, sempre Flamengo"

let transformacaoFrase = frase.split(" ")
console.log(transformacaoFrase)

for(let i = 0; i < transformacaoFrase.length; i++){
  console.log(transformacaoFrase[i])
}

console.log("#########################################################################")
console.log("---Exercicio 10---")

const calculadora = {
  soma:function(a,b){
    return a+b
  },

  subtracao:function(a,b){
    return a-b
  },

  multiplicacao:function(a,b){
    return a*b
  },

  divisao:function(a,b){
    return a/b
  }

}
console.log(calculadora.soma(10,10))
console.log(calculadora.subtracao(10,10))
console.log(calculadora.multiplicacao(10,10))
console.log(calculadora.divisao(10,10))

ex008 copy