/****************************************************
                      ARREGLOS
*****************************************************/
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

 /************************************************************/
//Agregar nuevos elementos

//push() agregar uno o más elementos al final del array

let agregar = [1, 2, 3]
agregar.push(4)
console.log(agregar)

let a = ['uno', 'dos', 'tres']
a.push('cuarto')
console.log(a)

//unshift() agrega uno o más elementos al principio del array
let add = [1, 2, 3]
add.unshift(0) //agrega el 0 al principio del array
console.log(add)

//Splice() puede agregar o eliminar elementos de cualquier parte dentro del array
//este método es muy versátil

let z = [1, 2, 3]
z.splice(1, 0, 4) //se va a agregar el 4, en la posición 1 y no se eliminará ningun elemento(0)
console.log(z)

//Modificar elementos dentro de un array

//Se puede modificar los elementos directamente a través de su índice y modificarlo

let m = [1, 2, 3]
m[1] = 5
console.log(m)

//Si deseamo mjodificar el arreglo de forma inmutable, se puede utilizar el método map()
//para crear un nuevo arreglo con los valores modificados

let modificar = [1, 2, 3]
let nuevoModificado = modificar.map(num => num === 3 ? 5 : num) //cambiar el 3 por el 5
console.log(nuevoModificado)

//Eliminar elementos dentro de un array

// pop() elimina el último elemento del arreglo

let e = [1, 2, 3]
e.pop()
console.log(e)

//shift() elmina el primer elemento del arreglo

let num = [1, 2, 3]
num.shift()
console.log(num)

//splice() para eliminar elementos en cualquier posición
let s = [1, 2, 3]
s.splice(1, 1)
console.log(s)