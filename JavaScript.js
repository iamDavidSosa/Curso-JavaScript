//Variables en Javascript
var string = "Cadena de texto"; //La palabra var le da un alcance global
var number;
var boolean = true;
var symbol = 1;

let condicion = 1; //La palabra let le da un alcance dentro del bloque, funcion o conditional

const pi = 3.141592653589; //La palabra const declara una constante

//Funcion prompt

let nombre = prompt("Ingresa tu nombre: ");
alert("Bienvenido, "+nombre);

document.write(nombre);

//Operadores de asignacion

let numero = 10;

numero += 5;

numero -= 2;

numero *= 3;

numero %= 4; //Divide el valor de numero entre 4 y toma el valor del resto de

numero **= 2; //Eleva el valor de numero a 2

//Concatenar texto 

let saludo = "Hola David!";
let pregunta = "Como estas?"

let oracion = saludo +" "+ pregunta;

let numero1 = 5;
let numero2 = 6;

let numeros = ""+numero1+numero2; //Usamos las comillas delante para concatenar numeros sin que se sumen

let frase = `Hola, mi numero es ${numeros}`;

//Operadores de comparacion

if(numero1 == numero2){  //Verifica si son iguales
    //Retorna true si son iguales
}

if(numero1 != numero2){ //Verifica si son diferentes
    //Returna true si son diferentes
}

if(numero1 === numero2){ //Verifica si son estrictamente iguales
    //Retorna true si son estrictamente iguales y son del mismo tipo de datos
}

if(numero1 !== numero2){ //Verifica si son estrictamente diferentes
    //Retorna true si son estrictamente diferente
}

if(numero1 > numero2){ //Verifica si numero1 es mayor a numero2

}

if(numero1 < numero2){ //Verifica si numero1 es menor a numero2

}

if(numero1 >= numero2){ //Verifica numero1 es mayor o igual a numero2

}

if(numero1 <= numero2){ //Verifica numero1 es menor o igual a numero2

}