console.log(3 + 5);  //suma

console.log(14 - 7); // resta

console.log(5 * 5); // mltiplicar

console.log(95 / 4); // dividir

console.log(95 % 4); // residuo diferencia para que pueda ser dividle

console.log(3 + 5 * 2 - 8); // procedencia, quiere decir los signos que se ejecutan primeros


//OPERADORES DE COMPARACION

console.log (4 < 7);
console.log(4 < 1);
console.log(4 > 4);
console.log(4 == 4);

//OPERADORES DE ASIGNACION

console.log(4 == 4);
console.log(4 === 4);
console.log(4 === "4");
console.log(4 == "4");


//ASIGNACION, ASOCIATIVIDAD y CONCATENACION

var a = 1;
var b = 2;
var c = a = b;
console.log(c); // se lee de derecha a izqierda, se compara que a debe ser = b entonces a se comvierte en 2, despues se compara c con a y si a es 2 c tamien seria 2

console.log(16 / 2 / 4); // la division se lee de izquierda a derecha seria 16/2= 8 y eso dividido entre 4 seria 2

// "+="
// sintaxis
// x += y  es lo mismo que decir x = x + y

let r = 0;
let w = 0;
while (b < 5)
{
    r++;
    if (r == 3)
        continue;
   console.log(w += r); // elresultado seria >>> 1,3,7,12  
}

// concatenacion 

let text = "";
let t  = 0;

do
{
    text += t + "<br>"; 
    t++;
}while (t < 5);
console.log(text); // El resultado seria >>> 0<br>1<br>2<br>3<br>4<br>
