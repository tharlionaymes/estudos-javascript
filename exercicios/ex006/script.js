function isPrimo(num) {
    // Verifica se o número é menor ou igual a 1, pois esses não são primos
    if (num <= 1) {
      return false;
    }
    
    // Itera sobre todos os números entre 2 e a raiz quadrada do número
    for (let i = 2; i <= Math.sqrt(num); i++) {
      // Verifica se o número é divisível por i
      if (num % i === 0) {
        return false;
      }
    }
    
    // Se não for divisível por nenhum número entre 2 e a raiz quadrada do número, então é primo
    return true;
  }
  
  // Exemplo de uso da função isPrime
  for (let x = 2; x <= 50; x++) {
    if (isPrimo(x)) {
      console.log(`${x} PRIMO`);
    } else {
      console.log(`${x} NÃO`);
    }
  }
  