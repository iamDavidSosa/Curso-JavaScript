//      DOCUMENT - Metodo de seleccion de elementos     //

document.getElementById(); //Selecciona un elemento por ID

document.getElementsByTagName(); //Selecciona todos los elementos que coincidan con el nombre
// de la etiqueta especificada

document.querySelector(); //Devuelve el primer elemento que coincida con el grupo especificado
// de selectores

document.querySelectorAll(); //Devuelve todos los elementos que coincida con el grupo especificado
// de selectores


//      Metodos para definir, modificar o eliminar los valores de los atributos    //

const rangoEdad = document.querySelector(".rangoEdad");

rangoEdad.setAttribute("type", "password"); //Define o modifica el atributo

rangoEdad.getAttribute("type"); //Retorna el tipo de atributo

rangoEdad.removeAttribute("type"); //Elimina el atributo


// Ejemplos de atributos

titulo.setAttribute("contentEditable", "true"); //vuelve al nodo editable

titulo.setAttribute("hidden", "false"); //Oculta el nodo

titulo.setAttribute("title", "titulo normal"); //Le pone una etiqueta que cuando tiene el mouse encima se ve