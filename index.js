function cpfvalidator(string) {
    let array = string.replace(/\D/g, "").split('').map(Number);
    let firstDigit = array[9];
    let secondDigit = array[10];
 
    if (verification(array)){
        let numberArray1 = cpfmultiplicator(array, 10);
        let numberArray2 = cpfmultiplicator(array, 11);
        let firstDigitSum = firstsum(numberArray1,9);
        let secondDigitSum = firstsum(numberArray2, 10);
        if(firstDigitSum === firstDigit && secondDigitSum === secondDigit){
            return true;
        }

    }else{
        return false;
    }  
}

function verification(cpfNumber){
    if (cpfNumber.length !== 11 || cpfNumber.every(digit => digit === cpfNumber[0])) {
        return false;
    } else {
        return true; 
    }  
}

function cpfmultiplicator(array, mult){
    let multiplier = mult;
    let resultMulti = array.map((elem)=> {return elem * multiplier--;});
    return resultMulti;
   
}

function firstsum(array2, sliceNum) {
    let firstSumResult = array2.slice(0, sliceNum).reduce((acc, elem) =>{
        return acc + elem;
    },);
    let contaDoModulo = (firstSumResult * 10) % 11;   
 
    if (contaDoModulo === 10 || contaDoModulo === 11) {
        contaDoModulo = 0;
    }
    return contaDoModulo;

}

module.exports.cpfvalidator = cpfvalidator;
