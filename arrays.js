// ARRAYS
let listaDeCompras = []; // declarar nuestro arreglo, se iguala a los corchetes porque el arreglo esta vacia 
listaDeCompras[2] = "lechga"; // se inserta datos al arreglo
listaDeCompras[3] = "tomate";

console.log(listaDeCompras); // muestra todo el arreglo 

console.log(listaDeCompras[3]); // muestra el dato de la posicion 3 de nuestro arreglo 

// otro metodo para llamar al arreglo 
let lista = listaDeCompras[2]; // colocamos el dato del arreglo que queremos traer en una variable y despues llamar a la variable.
console.log(lista);


// herramientas de un arreglo (METODOS)

//length

console.log (listaDeCompras.length);

let nombres = ["Juan", "Maria", "Rosa"].length;// como se coloca el length al final, dara como resultado la lingitud del arreglo 
console.log(nombres);

//push 

let colores = ["amarillo", "azul"];
colores.push("rojo"); // nos permite agregar datos al arreglo (pero al final)
console.log(colores);

// unshift ----> permite agregar datos al arreglo (pero al inicio)
colores.unshift("naranja");
console.log(colores);

// pop -----> elimina datos del arreglo (el ultimo del arreglo)

colores.pop();
console.log(colores);

// shift -----> elimina datos del arreglo (al inicio)

colores.shift();
console.log(colores);

// includes -----> para saber si nuestro arreglo contien el dato solicitado, si es asi te devuelve true 

let pintores = ["Picasso", "van Gogh", "Dali"];
console.log(pintores.includes("Dali")); // primera forma de consultarlo
let consulta = pintores.includes("Miguel Angel");// segunda forma de consultarlo 
console.log (consulta);

// every ----> nos devuelve un booleano, nos indican si todos los datos del arreglo cumplen la condicion

let numeros = [1, 2, 3, 4, 5]
let cumpleCondiccion = numeros.every((num) => 
{
    return num > 5;
}
);
console.log(cumpleCondiccion);

// split ---> separar un arreglo, convertir un arreglo en string

var palabra = "Carls"
var palabraSepara = palabra.split("");
console.log(palabraSepara);
palabraSepara.pop();
palabraSepara.push("o");
palabraSepara.push("s");
console.log(palabraSepara);

//splice ---> elimina un unico elemnto del arreglo, haciendo la busqueda por la posicion 
// usando la variable declara palabra
let pos = palabraSepara.indexOf("o") // buscamos la posicion de la letra a eliminar 
console.log(pos);
let palabraPorSeparar = palabraSepara.splice(pos,1) // sabiendo la posicion eliminamos la letra 
console.log (palabraSepara);

// join

let palabraUnida = palabraSepara.join("");
console.log(palabraUnida);

// ForEach ---> recorre el arreglo, uno por uno cada elemento y te muestra el resultado pero no realiza ningun cambio.
// usando nuestro arreglo de numeros 

numeros.forEach((num) => console.log(num)); // numero.forEach por cada numero mostrar num
numeros.forEach(function(elemento)// otra forma de declararlo 
{
    console.log(elemento);
});
// si queremos que os muestre algun dato en especifico del arreglo seria de la siguente forma

numeros.forEach((num) =>
{
    if (num === 3) // en este caso nos muestra el dato que conincide con la condicion 
    {
        console.log(num);
    }
});

// map ---> lo mismo que el forEach con la diferencia es que crea una copia del arreglo original y le puede realizar cambios 

let masUno = numeros.map((num) => 
{
    return num + 1;
}); // en este caso se le esta sumando 1 a todos los datos del arreglo 
console.log(masUno);

// bucles en arreglos 

//for

let arr = [1, 2, 3, 4, 5];
for(let i = 0; i < arr.length; i++)
{
    console.log(arr[i]); // nos devuelve todos los elementos de un arreglo
};

// quiero encontrar si una palara contiene una letra en epecifica

function encontrarLetra(string)
{
    let Letras = string.split(""); // a la palabra lo estamos conviertiendo en un arreglo para poder buscar la letra que queremos 

    for (let i = 0; i< Letras.length; i++) // indocamos que queremos que recorra toda la extencion del arreglo
    {
        if (Letras[i] === "p")
        {
            console.log("Si contiene la letra P");
        }
    }
}
encontrarLetra("JavaScript");

// while

let arreglo = [];
let n=0;
while (arreglo.length < 5) // se ejecuta hasta que la longitud del arreglo sea 5
{
    arreglo.push(n = n + 1);
}
console.log(arreglo)


