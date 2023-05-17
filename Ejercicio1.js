/* 
Ejercicios Javascript: A entregar el día viernes 19/05 por mail.

    1-Escribe un programa que sume dos números y muestre el resultado en la consola
*/

// Esta funcion devuelve un numero entero random entre 1 y 100
function getRandomRangeOneHundred(){
    let min = 0;
    let max = 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function suma(){
    let min = 0;
    let max = 100;
    let a = getRandomRangeOneHundred();
    let b = getRandomRangeOneHundred();
    let result = a + b;
    return console.log(a + " + " + b + " = " + result)
}

setInterval(suma, 1000)









