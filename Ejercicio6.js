/*
6-Escribe un programa que calcule la suma de todos los números del 1 al 100 y muestre el
resultado en la consola.
*/

function allSumNumbersInOneHundred(){
    let count = 0;
    for (var i = 1 ; i < 101 ; i++){
        count += i;
    }
    console.log("La suma de los numeros entre 1 y 100 es = " + count);
}
allSumNumbersInOneHundred();