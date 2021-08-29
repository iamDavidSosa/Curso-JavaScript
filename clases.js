class animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
    };
}

const perro = new animal("canino", 4, "negro");
console.log(perro);

document.write(`El color del perro es <b>${perro.color}</b>`);