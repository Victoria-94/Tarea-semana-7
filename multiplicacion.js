let a= Number(prompt("ingresa un numero a multiplicando")); 
let b= Number(prompt("ingresa un numero a multiplicador")); 

function multiplicar(multiplicando, multiplicador){  
    let suma=0 

    for (let i = 0; i < multiplicador; i++){  
        suma=suma+multiplicando;
        
    }
    return suma; }


let resultado= multiplicar(a,b); 
alert(resultado);