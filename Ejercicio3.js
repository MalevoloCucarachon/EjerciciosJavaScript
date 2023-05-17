/*
3-Escribe un programa que determine si un número es par o impar. Muestra el resultado en
la consola. 
*/

function getRandomRangeOneHundred(){
    let min = 0;
    let max = 100;
    let r =  Math.floor(Math.random() * (max - min + 1)) + min;
    return r;
}

function numberNature(){
    let number = getRandomRangeOneHundred();
    let rest =  number % 2;
    if( rest === 0) {
        return console.log("El numero " + number + " es: PAR");
    }else{
        return console.log("El numero " + number + " es: IMPAR");
    }
}

setInterval(numberNature , 1000);