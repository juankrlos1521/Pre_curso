function viajar(destino)
{
    if(destino === "Brasil" ) //dependiendo la cantidad de "="" cambiara el resultado
    {
        console.log("Girar a la izquierda");
    } else if(destino === "Argentina") //dependiendo la cantidad de "="" cambiara el resultado
    {
        console.log ("Girar a la derecha");
    } else 
    {
        console.log("Te perdiste");    
    }
}
viajar("Brasil");
viajar("Argentina");
viajar("Peru");


function puedoManejar(edad)
{
    if(edad >= 18)
    {
        console.log("puedes Manejar");
    } else 
    {
        console.log("no puedes manejar");
    }
}
puedoManejar(20);


// Algunos objetos globales mas usados 

// Math.pow
console.log (Math.pow (2,3)); // Eleva ala potencia (el primer numero es la base y el segundo es la potencia)

// Math.round
console.log (Math.round(0.49)); //redondea el numero decimal al entero mas proximo (seria 0)
console.log (Math.round(0.50)); // seria (1)

// Math.floor
console.log (Math.floor(5.92)); // Redondea el numero decimal al entero de menor valor en este caso el resultado seria "5"

// Math.ceil
console.log (Math.ceil(3.18)); // redonde el numero decimal al entero siguiente en este caso seria "4"

// Math.max
console.log (Math.max(1,2,3,4,5)); // Nos permite conocer el valor del numero maximo de un conjunto de numeros

// Math.min
console.log (Math.min(1,2,3,4,5)); // Nos permite conocer el valor de numero minimo de un conjunto de numeros

// Math.random

console.log (Math.random()); // nos genera un numero aleatorio entre el 0 y el 1 