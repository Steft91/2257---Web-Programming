// Arreglos

//Formas de declarar un arreglo

const array = [1, 2, 3, 4, 5 ] //Forma más común
const array1 = new Array(1, 2, 3, 4, 5) //Forma 2
const array2 = Array.of(1, 2, 3, 4, 5) //Forma 3

let numeros = [1, 2, 3, 4, 5]
let colores = ["Rojo", "Azul", "Verde"]
let vacio = []
let conjunto = [{nombre: "Ricardo", apellido: "Vargas"}, {color: "Rojo"}]
let videojuegos = [
    "Super Mario Bros",
    "The legend Zelda",
    "Spiderman"
]

console.log(videojuegos[2])

let arreglosCasos = [
    true,
    123,
    "Hola",
    1 + 2,
    function(){},
    ()=>{},
    {a: 1},
    ["hola", "mundo"]
]
console.log(arreglosCasos)
console.log(arreglosCasos[3])

//map, filter, reduce

// Son metodos funcionales que se pueden usar para recorrer
// y además transformar los datos de un arreglo

//map
//transforma los datos de un arreglo

let nums = [1, 2, 3, 4, 5]
let cuadrados = nums.map(num => num * num)
console.log({cuadrados})

//filter
//filtra los datos de un arreglo

let numerosPares = [1, 2, 3, 4, 5]
let pares = numerosPares.filter(num => num % 2 === 0)
console.log({pares})

//reduce
//Reduce los datos de un arreglo

let numsR = [10, 2, 33, 45, 15]
let maximo = numsR.reduce((acumulador, num) => (num > acumulador ? num : acumulador), numsR[0])
console.log({maximo})

//Ventajas
//son ideales para trabajar con transformaciones y manipulaciones complejas
//Permiten un estilo de programación funcional más limpio y fácil de usar