// Semua bilangan genap kecuali 2 tidak bisa menjadi bilangan prima
// Uji pembagi dari 3 hingga akar kuadrat dari bilangan n

function primeNumber(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0) return false;
    const sqrtN = Math.sqrt(n);
    for (let i = 3; i <= sqrtN; i += 2) {
      if (n % i === 0) {
        return false;
      }
    }
  
    return true;
  }

{ // console.log
console.log(primeNumber(1000000007)) // true
console.log(primeNumber(1500450271)) // true
console.log(primeNumber(1000000000)) // false
console.log(primeNumber(10000000019)) // true
console.log(primeNumber(10000000033)) // true
}
