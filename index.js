function cpfvalidator() {
      return getcpf("12345678910");
      
}

function getcpf(string) {
   let array = string.split("")
   array = array.map(Number);
   let numberArray = cpfmultiplicator(array);
   return numberArray;

}

function cpfmultiplicator(array){
   let multiplier = 10;
   let array2 = [];
   
   for (elem of array){
       array2.push(elem * multiplier);
       multiplier --      }
 let multipliedBy10 = firstsum(array2);
 return multipliedBy10; 
}

function firstsum(array2) {
 let firstSumResult = array2.slice(0, 9).reduce((acc, elem) =>{
     return acc + elem
    },);

 let contaDoModulo = (firstSumResult * 10) % 11;   

 if (contaDoModulo === 10 || contaDoModulo === 11) {
contaDoModulo = 0;
console.log("oi");
} 
 return contaDoModulo;     
}

function digitslicer() {
 let tenthdigit = cpfvalidator();
 return console.log("esse aqui" + tenthdigit);

}


console.log(cpfvalidator())

 module.exports.cpfvalidator = cpfvalidator;
