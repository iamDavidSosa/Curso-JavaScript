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
        
        //Metodos transformadores (Los que modifican directamente al array)

let lista = ["David", "Ana Luisa", "Daniel"];

document.write(lista+"<br>");

let resultadoLista = lista.pop();  //Elimina el ultimo valor del array y lo retorna

resultadoLista = lista.shift(); //Elimina el primer valor del array y lo retorna

resultadoLista = lista.push("Sindi"); //Agrega uno o mas elementos al final del array y 
//retorna la cantidad de elementos

resultadoLista = lista.reverse(); //Invierte el orden de los elementos del array

resultadoLista = lista.unshift("Anderson"); //Agrega uno o mas elementos al inicio del array
//y retorna la nueva longitud

resultadoLista = lista.sort(); //Ordena el array en orden de alfabetico, numerico o de diccionario

resultadoLista = lista.splice(0,1); //El primer valor indica desde donde se comenzara a eliminar
//y el segundo valor indica la cantidad de elementos que se van a eliminar


        //Metodos Accesores

resultadoLista = lista.join(" "); //Convierte el array a una cadena de texto, el parametro que se toma
//separa los elementos del array cuando pasan al texto

resultadoLista = lista.slice(0, 1); //Devuelve una parte del array desde el parametro inicial hasta el
//final sin incluir el final

resultadoLista = lista.filter(numero => numero.length > 5); //Crea un nuevo array con los elementos que cumplan una condicion


document.write(resultadoLista);