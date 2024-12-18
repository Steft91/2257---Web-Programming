// Sentencias de control

//Sentencia if
//Sentencia switch

let numero = 10;
if(numero == 1){
    console.log("El número es 1")
}
else if(numero == 2){
    console.log("El número es 2")
}
else{
    console.log("El número no es 1 ni 2")
}

//Ejercicio mensaje del año

let mes = 5;
let mensaje;

if (mes == 1 || mes == 2){
    mensaje = "Invierno";
}
else if (mes == 3 || mes == 4){
    mensaje = "Primavera";
}
else if (mes == 5 || mes == 6){
    mensaje = "Verano";
}
else if (mes == 7 || mes == 8){
    mensaje = "Otoño"
}
else{
    mensaje = "No es mes del año"
}
console.log(mensaje)


//Calculo de hora del dia
//6am - 11am = mañana Buenos Días
//12pm - 19pm = Tarde Buenas Tardes
//20pm - 23pm = noche Buenas Noches
//24am - 5am = Hora de dormir

let horadia = 14;
let mensajeDia;

if (horadia >= 6 && horadia <= 11){
    mensajeDia = "Buenos Días";
}
else if (horadia >= 12 && horadia <= 19){
    mensajeDia = "Buenas Tardes";
}
else if (horadia >= 20 && horadia <= 24){
    mensajeDia = "Buenas Noches";
}
else if (horadia >= 0 && horadia <= 6){
    mensajeDia = "Durmiendo"
}
else{
    mensajeDia = "No es una hora del día"
}
console.log(mensajeDia)

//Switch

let Mes = 4
let Estacion;

switch(Mes){
    case 1:
    case 2:
    case 3:
        Estacion = "Invierno"    
        break
    case 4:
    case 5:
    case 6:
        Estacion = "Primavera"    
        break
    case 7:
    case 8:
    case 9:
        Estacion = "Verano"    
        break
    case 10:
    case 11:
    case 12:
        Estacion = "Otoño"    
        break
    default:
        Estacion = "No es un mes del año"
}
console.log(Estacion)

//Ciclos

//For

const heroes = ["Spiderman", "Hulk", "Ironman", "Thor"]

console.log("******** For Tradicional *********")
// Usa for tradicional o clasico, uando se necesite el control total del indice
for(let i = 0; i < heroes.length; i++){
    console.log(heroes[i])
}

console.log("******** For In ******")
// Usa for in para iterar las propiedades de un objeto
for(let i in heroes){
    console.log(heroes[i])
}

console.log("****** For of ******")
//Usa for of para iterar los valores de un iterable(array, cadenas, etc)
for(let heroe of heroes){
    console.log(heroe)
}

//continue, break

for(let contador = 0; contador <= 10; contador++){
    if(contador % 2 == 0){
        continue; //ir a la siguiente iteracion
        //break; //rompe el ciclo o sale del bucle
    }
    console.log(contador)
}

//while

const carros = ["BMW", "Ford", "Mercedes", "Jeep"]
let i = 0;

// while(i < carros.length){
//     console.log(carros[i])
//     i++
// }

console.warn("Usando continue")
while(carros[i]){
    if(i == 1){
        break
        i++
        //continue
    }
    console.log(carros[i])
    i++
}