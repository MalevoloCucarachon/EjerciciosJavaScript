/*
10-Dado un array de números crea una función que devuelva un nuevo array con solo los
números pares. 
*/

function returnOnlyPair(arr){
    let pairNumbers = [];
    for(var i = 0; i < arr.length ; i++){
        if ((arr[i] % 2 )=== 0 ){
            pairNumbers.push(arr[i]);
        }
    }
    return pairNumbers;
}

console.log("[" + returnOnlyPair([1,2,3,4,5,6,7,8,9,10]) + "]");