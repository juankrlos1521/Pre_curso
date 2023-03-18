// FOR se utiliza cuando sabes cuantas iteraciones tendras (CUANO SE SABE CONANTICIPACION CUANTOS PASO MAX SE EJECUTARAN, ESOS PASO SE COLOCAN 
// COMO SEGUNDO PARAMETRO EN EL EJEMPLO i<5)

let sumaFor = 0;
for (let i=0; i<5; i++)
{
sumaFor = sumaFor + i;
console.log("variable de inteaccion:", i);
}
console.log("Variable Suma:", sumaFor);

//WHILE se utiliza cuando no sabes cuantas iteraciones tendras (NO TENEMOS LA CERTEZA DE CUANTOS PASOS VAMOS A NECESITAR PARA FINALIZAR 
// LA EJECUCION.)
let sumaWhile = 0;
while(sumaWhile < 3)
{
    sumaWhile = sumaWhile + 1;
    console.log (sumaWhile);
}

//SWITCH 

const mascota = "loro"; //z

switch (mascota)
{
    case "lagarto": 
    console.log("Tengo un lagarto");
    break;
    case "perro":
    console.log("Tengo un Perro");
    break;
    case "gato":
    console.log("Tengo un gato");
    break;
    default:
    console.log("No tengo mascotas");
    break;
}

const diaDeLaSemana = 0;
switch (diaDeLaSemana)
{
    case 1:
        console.log("Es Lunes")
        break;
    case 2:
        console.log("Es Martes")
        break;
    case 3:
        console.log("Es Miercoles")
        break;
    case 4:
        console.log("Es Jueves")
        break;
    case 5:
        console.log("Es Viernes")
        break;
    default:
        console.log("No es un dia de la semana")
}

const pais ="Peru";
switch(pais)
{
    case "Francia" :
    case "España" :
    case "Irlanda" :
    case "Polonia" :
        console.log("Este pais esta en Europa");
        break;
    default :
        console.log("Este pais no esta en Europa");
}

//DO-WHILE

let result = "";
let i = 0;

do
{
    i = i + 5;
    result = result + i;
}while (i < 8);
console.log(result);


let text = "";
let a  = 0;

do
{
    text += a + "<br>"; // es lo mismo que decir text = text + a + "<br>"
    a++;
}while (a < 5);
console.log(text);

//"CONTINUE" remplaza al break continua con el ucle apesar de que a se cumplio la sentencia.

let b = 0;
let c = 0;
while (b < 5)
{
    b++;
    if (b == 3)
        continue;
    console.log(c += b);
}

//BREAK se utiliza dentro del bucle (nos permite romper o finalizar el bucle con antelacion si se cumple con una condicion especifica)

let q = 0;
while (q < 6)
{
    if (q == 3)
    break;
    q++;
    console.log(q*2);// cuando llegaa 3 se corta el bucle 3*2 es 6 
}