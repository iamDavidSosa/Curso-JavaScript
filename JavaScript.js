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
alert(oracion);
