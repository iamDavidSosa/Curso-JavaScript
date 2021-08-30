class animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}.`;
    };

    saludar(){
        document.write(this.informacion+"<br>");
    };
}

const gato = new animal("gato", 1, "miel");
const tortuga = new animal("tortuga", 9, "verde");

//Herencia
class Perro extends animal{ //La clase perro hereda todo lo que tiene la clase animal
    constructor(especie, edad, color, raza){
        super(especie, edad, color); 
        this.raza = raza;
    };
    static ladrar(){ //La palabra static permite ejecutar el metodo sin haber instanciado la clase
        document.write("WAW! ");
    };

    //Metodo set
    set setRaza(raza_){
        this.raza = raza_;
    };

    //Metodo get
    get getRaza(){
        return this.raza;
    };
}
const perro = new Perro("perro", 4, "marron", "pastor aleman");

perro.saludar();
perro.setRaza = "Pitbull"; //Asi se llama un metodo set
document.write(perro.getRaza+"<br>");
gato.saludar();
tortuga.saludar();



//Abstraccion
//La abstraccion es resumir un objeto lo mas que se pueda, ejemplo: En vez de poner en la clase
//perro el color de ojos, longitud del pelo, color de lengua, etc, lo resumimos a solo raza, nombre, 
//color y edad.

//Modularidad
//Es la capacidad de resolver un problema grande separandolo en pequeñas partes.

//Encapsulamiento
//Consiste en hacer que todos los datos esten privados, que no se pueda acceder tan facil a ellos.

//Polimorfismo
//Consiste en ver como un objeto se comporta de manera distinta ante el mismo metodo, debido a que
//tienen propiedades diferentes.

