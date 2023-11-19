'use strict'

function clac_age(añoNac, aActual){
    let resta = aActual-añoNac;
    return resta;    
}
let añoNac= Number(prompt("ingresa el año de nacimimento"));
let aActual= 2023;

let resultado= clac_age(añoNac,aActual);
alert("Usted actualmente tiene: " + resultado + " años.");

