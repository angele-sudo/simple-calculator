
function add(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  let numbers=[2,4,5]
  console.log( add(numbers));
  

  function multiply(nbers) {
    let product = 1;
    for (let i = 0; i < nbers.length; i++) {
      product *= nbers[i];
    }
    return product;
  }
  
 let nbers = [1, 2, 3];
  console.log( multiply(nbers));
  
