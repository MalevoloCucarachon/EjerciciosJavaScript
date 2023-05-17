/*
8-Crea una función que tome un array de palabras como parámetro y devuelva la cantidad
total de caracteres en todas las palabras.
*/

function countingLettersInArray(arr){
    let count = 0; 
    for (var i = 0; i < arr.length; i++){
        let total = arr[i].length;
        for(var j = 0; j < total ; j++ ){
            count += 1;
        }
    }
    return count;
}
