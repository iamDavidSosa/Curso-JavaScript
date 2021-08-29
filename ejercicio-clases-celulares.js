class celular{
    constructor(color, peso, resolucionPantalla, resolucionCamara, memoriaRam){
        this.color=color;
        this.peso=peso;
        this.resolucionPantalla=resolucionPantalla;
        this.resolucionCamara=resolucionCamara;
        this.memoriaRam=memoriaRam;
        this.encendido=false;
    };

    prender(){
        if(!this.encendido){
            alert("Encendiendo celular...");
            this.encendido=true;
        }
        else{
            alert("El celular ya se encuentra encendido.");
        };
    }
    apagar(){
        if(this.encendido){
            alert("Apagando celular...");
            this.encendido=false;
        }
        else{
            alert("El celular ya se encuentra apagado.");
        };
    }

    reiniciar(){
        if(this.encendido){
            alert("Reiniciando celular...");
        }
        else{
            alert("El celular se encuentra apagado.")
        }
    }

    tomarFotos(){
        if(this.encendido){
            let resultado =`Tomando foto con una resolucion de ${this.resolucionCamara}`;
            alert(resultado);
        }
        else{
            alert("El celular se encuentra apagado.");
        };
    }

    grabar(){
        if(this.encendido){
            alert(`Grabando video con una resolucion de ${this.resolucionCamara}`);
        }
        else{
            alert("El celular se encuentra apagado.");
        };

    }

    mostrarInfo(){
        return `<br>
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Resolucion de pantalla: <b>${this.resolucionPantalla}</b><br>
        Resolucion de camara: <b>${this.resolucionCamara}</b><br>
        Memoria ram: <b>${this.memoriaRam}</b><br>
        <br>`;
    }
};

const celular1=new celular("negro", "40g", "180x640", "48 pixeles", "4 GB");
const celular2=new celular("blanco", "120g", "210x720", "60 pixeles", "8 GB");
const celular3=new celular("plateado", "90g", "280x830", "32 pixeles", "2 GB");

celular1.prender();
celular1.tomarFotos();
document.write(`${celular1.mostrarInfo()}<br>
                ${celular2.mostrarInfo()}<br>
                ${celular3.mostrarInfo()}<br>                
`);