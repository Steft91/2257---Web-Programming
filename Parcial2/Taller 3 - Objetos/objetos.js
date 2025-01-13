/****************************************************
                      OBJETOS
*****************************************************/

//Características principales de los objetos en JS
//Claves y Valores

//Las claves son cadenas o simbolos(únicos)
//Los valores pueden ser de cualquier tipo: números, cadenas, funciones, otros objetos.
//Características

//Dinamismo

//Los objetos pueden ser modificados en tiempo de ejecución (agregar, modificar, eliminar propiedad)

//Métodos
//Los métodos son funciones asociadas a un objeto

//Propiedades y metodos

//Declaración de un objeto

let persona = {
    nombre: "Ricardo",
    apellido: "Vargas",
    email: "ricardo@gmail.com",
    edad: 25
}

console.log(persona)

//Métodos en objetos

let persona1 = {
    nombre: "Juan",
    apellido: "Vargas",
    direccion: "Quito",
    correo: "jvargas@gmail",
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona1.nombreCompleto());

const persona2 = {
    nombre: "Maria",
    edad: 20,
    saludar: function(){
        console.log(`Hola, me llamo ${this.nombre}`)
    }
}

console.log(persona2.nombre)
persona2.saludar()

//Crear un objeto usando un constructor Object 
//Otra forma de crear un objeto vacío y agregarle propiedades posteriormente

const persona3 = new Object(); //Crea un objeto en memoria, es decir reserva un nuevo espacio de memoria
persona3.nombre = "Pepe";
persona3.apellido = "Martinez";
persona3.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre}`)
}

console.log(persona3.apellido)
console.log(persona3)
persona3.saludar()

//Usando la clase Object.create()
//Permite crear un objeto basado en un prototipo

const prototipoPersona = {
    saludar: function(){
        console.log(`Hola desde prototipo, soy ${this.nombre}`)
    }
}

const persona4 = Object.create(prototipoPersona);
persona4.nombre = "Gaby";
persona4.apellido = "Palacios";
//Uso
persona4.saludar();


//Usando clases
//Proporciona una sintaxis más estructurada para crear objetos

class Persona {
    constructor(nombre, apellido, edad, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = telefono;
    }
    saludo(){
        console.log(`Hola desde la clase, me llamo ${this.nombre}`)
    }
}

const persona5 = new Persona("Mario", "Calderon", 21, "0987654321");
console.log(persona5);
persona5.saludo();

//Usando funciones constructuras
//Una forma clásica

function Persona1(nombre, edad, email){
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
    this.saludos = function(){
        console.log(`Hola desde funciones constructuras, me llamo ${this.nombre}`)
    }
}

const persona6 = new Persona1("Ana", 22, "ana@gmail");
persona6.saludos();


//Manipular objetos

//1. Agregar o modificar propiedades a un objeto

const add = {nombre: "Ricardo"}
add.edad = 25; //Agregando una nueva propiedad
add.apellido = "Ruiz"; //Agregar otra propiedad

add.nombre = "Andrés"; //Modificando una propiedad

console.log(add)

//2. Eliminar propiedades de un objeto

//delete add.edad; //Elimina la propiedad

console.log(add)

//3. Iterar propiedades de un objeto

//for in

for (nombrePropiedad in add){
    console.log(nombrePropiedad)
    console.log(add[nombrePropiedad])
}

for(let clave in add){
    console.log(`${clave} : ${add[clave]}`);
}

//4. Verificar si una propiedad existe en un objeto

console.log("edad" in add)
console.log(add.hasOwnProperty("email"))

//Estados utiles para trabajar con objetos

//1. Object.keys()
// Devuelve un array con las claves de un objeto

console.log(Object.keys(add))

//2. Object.values()
// Devuelve un array con los valores de un objeto

console.log(Object.values(add))

//3. Object.entries()
// Devuelve un array con las claves y los valores de un objeto

console.log(Object.entries(add))

//4. Object.assign()
// Copia las propiedades de un objeto a otro

const copiaObjeto = Object.assign(add);
console.log(copiaObjeto)

//5. Object.freeze()
//Congelar un objeto para evitar modificar

Object.freeze(add);

//6. Object.seal()
//Permitir modificar propiedades existentes pero no agregar nuevas o eliminar 

Object.seal(add);

//Nota adicional
//Imprimir valores

let personaArray = Object.values(add);
console.log(personaArray)

let personaString = JSON.stringify(add);
//Notación covienrte en cadena, stringfy es convertir en cadena las propiedades del objeto
console.log(personaString)

//Métodos get en Objetos JS
//Mejores prácticas para acceder y modificar objetos
//Acceder a los valores de las propiedades de un objeto

let personaGet = {
    nombre: "Marco",
    apellido: "Villa",
    edad: 50, 
    get nombreCompleto(){ //No es una propiedad ahora es un metodo get
        return this.nombre + " " + this.apellido;
    }
}

console.log(personaGet.nombreCompleto)

//Metodo set en Objetos JS
//Se establece o modifica los valores de los atributos de los objetos

//Validación

let personaSet = {
    nombre: "Mario",
    apellido: "Calderon",
    email: "mario@gmail",
    edad: 21,
    idioma: "es",
    get lan(){
        return this.idioma.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(personaSet.lan)


//Set

let personaSet2 = {
    nombre: "Mario",
    apellido: "Calderon",
    email: "mario@gmail",
    edad: 21,
    idioma: "es",
    get lan(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang
    },
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(personaSet2.lan) //Get
personaSet2.lang = "en"; //Set

console.log(personaSet2.lan) //Get


//Constructores en JS

//Si se desea crear más objetos del mismo tipo no es posible
//Por esta razon se crean constructores

//Es una funcion especial que permite trabajar con objetos en JavaScript

//Funcion Constructora de Tipo Persona

function personaFC(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;           
    this.email = email;
}

let padre = new personaFC("Aaron", "Velazquez", "aaron@gmail.com"); //Variable es ahora un metodo que permite crear objetos
console.log(padre)
padre.tel = "0987654321"
console.log(padre)

let madre = new personaFC("Maria", "Delgado", "maria@gmail.com"); 
console.log(madre) 

//Agregar métodos a una funcion constructora

function personaFCM(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;           
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido
    }
}

let padreFCM = new personaFCM("Aaron", "Velazquez", "aaron@gmail.com"); //Variable es ahora un metodo que permite crear objetos

console.log(padreFCM)
console.log(padreFCM.nombreCompleto())

let madreFCM = new personaFCM("Julia", "Rodriguez", "julia@gmail.com");
console.log(madreFCM)
console.log(madreFCM.nombreCompleto())

//Uso de prototypes en JS

personaFCM.prototype.tel="0987654321"; //Para agregar un atributo a todos los objetos
console.log(padreFCM.tel)
console.log(madreFCM.tel)


//Uso de metodo call

let personaC1 = {
    nombre: "Diego",
    apellido: "Volantes",
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido
    }
}

let personaC2 = {
    nombre: "Rene",
    apellido: "Marquez",
   
}

//Para usar el metodo nombreCompleto de personaC1 en personaC2
console.log(personaC1.nombreCompleto())
console.log(personaC1.nombreCompleto.call(personaC2))

//Pasar argumentos o parámetros a call

let personaCP1 = {
    nombre: "Diego",
    apellido: "Volantes",
    nombreCompleto: function(titulo, tel){
        return titulo + " " + this.nombre + " " + this.apellido + " : " + tel
    }
}

let personaCP2 = {
    nombre: "Rene",
    apellido: "Marquez",
   
}

console.log(personaCP1.nombreCompleto("Ing", "0912345678"))
console.log(personaCP1.nombreCompleto.call(personaCP2, "Dr", "0987654321"))