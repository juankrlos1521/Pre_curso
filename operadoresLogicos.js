//AND

function mayorMenosYPar (num)
{
    if (num > 5 && num < 10 && num % 2 ===0 )
    console.log(true);
    else
    console.log(false);
}
mayorMenosYPar(8);
mayorMenosYPar(7);

//OR
function operadorOr (str)
{
    if (str === "henry" || str.length < 2)
    console.log(true);
    else
    console.log(false);
}
operadorOr ("henry");
operadorOr ("Hola");
operadorOr ("h");

//NOT

function negacion(permiso)
{
    if (permiso)
    console.log ("tienes permiso")
}
negacion(true);
