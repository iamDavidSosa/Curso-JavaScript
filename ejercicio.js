const contenedor = document.querySelector(".flex-container");

function crearLlave(nombre, modelo, precio){
    img = "<img src='llaves.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3 id='${modelo}'>${modelo}</h3>`;
    precio = `<p>Precio: <b>${precio}</b></p>`;
    return [img, nombre, modelo, precio];
};

const llave = crearLlave("Llave1", "Modelo RTX", "1200");

let documentFragment = document.createDocumentFragment();


for(i=0;i<20;i++){
    
    let modeloRandom = Math.round(Math.random()*1000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`Llave ${i+1}`, `Modelo ${modeloRandom}`, "$"+precioRandom+".00");

    const div = document.createElement("DIV");
    
    div.classList.add(`item-${i}`, "flex-item");
    div.tabIndex = i;
    div.innerHTML =  llave[0] + llave[1] + llave[2] + llave[3];
    
    documentFragment.appendChild(div);
};

contenedor.appendChild(documentFragment);