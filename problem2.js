function munculSekali(input) {
    const count = {};
    const result = [];
  
    for (const digit of input) {
      count[digit] = (count[digit] || 0) + 1;
    }
  
    for (const digit in count) {
      if (count[digit] === 1) {
        result.push(Number(digit));
      }
    }
  
    return result;
  }

{ // console.log
console.log(munculSekali("1234123"))    // [4]
console.log(munculSekali("76523752"))   // [6, 3]
console.log(munculSekali("12345"))      // [1 2 3 4 5]
console.log(munculSekali("1122334455")) // []
console.log(munculSekali("0872504"))    // [8 7 2 5 4]
}