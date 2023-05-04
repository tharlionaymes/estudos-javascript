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

