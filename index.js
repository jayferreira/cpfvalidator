function cpfValidator (number) {
  let array = number.toString().replace(/\D/g, '').split('').map(Number);
  let firstDigit = array[9];
  let secondDigit = array[10];

 
  if (verification(array)) {
    let numberArray1 = cpfmultiplicator(array, 10);
    let numberArray2 = cpfmultiplicator(array, 11);
    let firstDigitSum = firstsum(numberArray1, 9);
    let secondDigitSum = firstsum(numberArray2, 10);
    return (firstDigitSum === firstDigit && secondDigitSum === secondDigit); 

  } 
  return false;
} 


function verification (cpfNumber) {
  return !(cpfNumber.length !== 11 || cpfNumber.every(digit => digit === cpfNumber[0])); 
}

function cpfmultiplicator (array, mult) {
  let multiplier = mult;
  let resultMulti = array.map((elem)=> {
    return elem * multiplier--;
  });
  return resultMulti;
   
}

function firstsum (array2, sliceNum) {
  let firstSumResult = array2.slice(0, sliceNum).reduce((acc, elem) =>{
    return acc + elem;
  },);
  let mod = (firstSumResult * 10) % 11;   
 
  if (mod === 10 || mod === 11) {
    mod = 0;
  }
  return mod;

}

module.exports.cpfValidator = cpfValidator;
