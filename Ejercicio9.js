/*
9- Escribe un programa que encuentre el elemento más grande en un array de números y lo
muestre en la consola. => Esto lo puedo trabajar con el método Math.max (leer al respecto)
*/

function findMax(arr){
    let max = Math.max.apply(null , arr);
    return console.log("El numero máximo en el array ["+ arr +"] es: " + max)
}

findMax([1,2,3,4,5,6,7,8,9,0]);
findMax([1233,4125,2353,2342,3424,2434,7568]);