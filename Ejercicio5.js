/*
5-Escribe un programa que recorra los números del 1 al 20. Para cada número, muestra en
la consola "Fizz" si es divisible entre 3, "Buzz" si es divisible entre 5 y "FizzBuzz" si es
divisible entre ambos. Si no es divisible por ninguno, muestra el número.
*/

//Esta funcion analiza las tres posibilidades y devuelve el valor.
function FizzBuzzTwentyNumbers(){
    for (var i = 0 ; i <20 ; i++){

        switch(dividedByFive(i) && dividedByThree(i)){
            case true && true:
                console.log("FizzBuzz");
                break;
            case false && true:
                console.log("Fizz");
                break;
            case true && false:
                console.log("Buzz");
                break;
        }
    }
}
//Funcion que devuelve True/False si el numero es divisible por 5.
function dividedByFive(n){
    let y = n % 5;
    if( y === 0 ){
        return true;
    }else{
        return false;
    }
}
//Funcion que devuelve True/False si el numero es divisible por 3.
function dividedByThree(n){
    let y = n % 3;
    if( y === 0 ){
        return true;
    }else{
        return false;
    }
}

FizzBuzzTwentyNumbers()