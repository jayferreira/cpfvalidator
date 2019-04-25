function cpfvalidator() {
    getcpf("40913448877");
}

function getcpf(string) {
    let array = string.split("")
    array = array.map(Number);
    // console.log(array);
    cpfmultiplicator(array);

}

// function arrayMapping(arrayNumber){
//   let mappedarray;
//   mappedarray = arrayNumber.map((currElement, index) => {
//         console.log("The current index: " + index);
//         console.log("The current element is: " + currElement);
//         console.log("\n");
//         return mappedarray;
//         cpfmultiplicator(mappedarray);
//       });
// }

function cpfmultiplicator(array){
    let multiplier = 10;
    let result = [];
    for (elem of array){
        result.push(elem * multiplier);
        multiplier --
        console.log(result);
        firstsum(result);
    }

}

function firstsum(result) {
  let xuxu = result.reduce((acc, elem) =>{
     return acc + elem 

     });

  console.log(xuxu);     

}

console.log(cpfvalidator())

module.exports.cpfvalidator = cpfvalidator;