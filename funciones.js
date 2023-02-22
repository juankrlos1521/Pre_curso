
//primero forma de declarar una funcion
function sumaTres(x)
{
    console.log(x + 3);
}
sumaTres (5);

//segunda forma 

var sumaTress = function (x)
{
    return x + 4;
}
sumaTress (5);

//tercera forma 

var sumaTresss = (x) => 
{
    return x + 5;
}
sumaTresss (5);


// En la terminal colocar "node" y pegar todo lo de arriba para que se muestre el resultado y la diferencia entre console.log y return