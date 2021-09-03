const input = document.querySelector(".input-normal");
document.write(input.className);

        
        // Atributos modificables de los inputs //

input.value = "123"; //Asigna o cambia el valor de un input
input.type = "file"; //Cambia el tipo de input
input.accept = "image/png"; //Esto funciona solo para inputs del tipo file, indica el formato del archivo que desea seleccionar
input.form ="formulario"; //Asigna a que form pertenece el input
input.minLength = 4; //Define el minimo de caracteres que debe de tener el input
input.placeholder = "Nombre usuario"; //Define el texto dentro del input que se desaparece al escribir
input.required = true; //Define cuando un input no puede quedar vacio



        // Atributos Style //

const titulo = document.querySelector(".titulo");
titulo.style.color ="#b61";
titulo.style.backgroundColor = "#0101"
titulo.style.padding="20px";

        

        // Clases, classlist y metodos de clases //

titulo.classList.add("grande"); //Agrega el nombre de la clase 
titulo.classList.remove("grande"); //Remueve el nombre de la clase
titulo.classList.item(0); //Devuelve la clase en esa posicion
titulo.classList.contains("grande"); //Retorna true si la clase se encuentra
titulo.classList.toggle("grande"); //Si la clase existe la quita, si no existe la agrega
titulo.classList.replace("grande", "colorido"); //Remplaza una clase por otra


        // Obtencion de elementos //

let resultado = titulo.textContent; //Devuelve el texto leible por el usuario
resultado = titulo.innerHTML; //Devuelve el texto con las etiquetas de estilo
resultado = titulo.outerHTML; //Devuelve la etiqueta HTML completa
alert(resultado);
document.write("<br>"+resultado);


        // Creacion de elementos //

const contenedor = document.querySelector(".contenedor");

const item = document.createElement("LI"); //Crea un nodo (el parametro debe de ir en mayusculas siempre)

const textDelItem = document.createTextNode("Esto es un texto del li"); //Crea un nodo de texto

item.appendChild(textDelItem); //Agrega un nodo dentro de otro nodo

console.log(item);

contenedor.appendChild(item);

const fragmento = document.createDocumentFragment(); //Crea un fragmento de nodo

for(i = 0; i<10;i++){
        const item2 = document.createElement("LI");
        item2.innerHTML = `Este es el item numero ${i+1}`;
        fragmento.appendChild(item2);
}

contenedor.appendChild(fragmento);
document.write(fragmento);
console.log(fragmento);