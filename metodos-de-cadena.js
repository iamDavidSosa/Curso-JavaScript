//Metodos de cadena

let cadena1 = "cadena de prueba prueba";
let cadena2 = "    prueba   ";
let resultado = cadena1.concat(" Davi"); //concat junta una o mas cadenas

resultado = cadena1.startsWith(cadena2); //Si cadena1 empieza con lo que tiene cadena2 retorna true

resultado = cadena1.endsWith(cadena2); //Si cadena1 termina con lo que tiene cadena2 retorna true

resultado  = cadena1.includes(cadena2); //Si la cadena1 contiene a cadena2 retorna true

resultado = cadena1.indexOf(cadena2); //Retorna la posicion en donde empieza esa palabra

resultado = cadena1.lastIndexOf(cadena2); //Si la palabra se repite varias veces, retorna la posicion 
//en donde empieza la ultima palabra

resultado = cadena1.padEnd(cadena1.length+1, "."); //Rellena la cadena al final con el caracter indicado

resultado = cadena2.padStart(10, 0); //Rellena la cadena al principio con el caracter indicado

resultado = cadena2.repeat(1); //Repite la cadena las veces que indiquemos

resultado = cadena1.split(" "); //Divide la cadena entre el caracter indicado

resultado = cadena1.substring(0, 6); //Recorta la cadena desde una posicion inicial indicada y una posicion final

resultado = cadena1.toLowerCase(); //Pasa todos los caracteres a minuscula

resultado = cadena1.toUpperCase(); //Pasa todos los caracteres a mayuscula

resultado = cadena1.toString(); //Convierte a String cualquier otro tipo de datos

resultado = cadena2.trim(); //Elimina los espacios en blanco

resultado = cadena2.trimEnd(); //Elimina los espacios en blanco del final

resultado = cadena2.trimStart(); //Elimina los espacios en blanco del inicio de una cadena


//Metodos de arrays

let lista = ["David", "Ana Luisa", "Daniel"];
