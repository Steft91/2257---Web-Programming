//Tienes un arreglo de objetos donde cada objeto representa a un estudiante (10 estudiantes) con su nombre y las calificaciones

let estudiantes = [
    {nombre: "Andrés", calificaciones:[ 15, 16, 17]},
    {nombre: "Juan", calificaciones:[ 14, 16, 17]},
    {nombre: "Cami", calificaciones:[ 15, 14, 17]},
    {nombre: "Fernanda", calificaciones:[ 15, 16, 14]},
    {nombre: "Alisson", calificaciones:[ 15, 18, 17]},
    {nombre: "Maykel", calificaciones:[ 15, 17, 17]},
    {nombre: "Gabriela", calificaciones:[ 15, 16, 15]},
    {nombre: "Marcelo", calificaciones:[ 13, 16, 17]},
    {nombre: "Rúben", calificaciones:[ 15, 16, 17]},
    {nombre: "Martina", calificaciones:[ 15, 13, 16]},
]


//Agregar nuevas calificaciones a los estudiantes.

// Agregar calificaciones manualmente sin usar push
estudiantes[0].calificaciones[estudiantes[0].calificaciones.length] = 20;
estudiantes[0].calificaciones[estudiantes[0].calificaciones.length] = 14;

estudiantes[1].calificaciones[estudiantes[1].calificaciones.length] = 18;
estudiantes[1].calificaciones[estudiantes[1].calificaciones.length] = 19;

estudiantes[2].calificaciones[estudiantes[2].calificaciones.length] = 10;
estudiantes[2].calificaciones[estudiantes[2].calificaciones.length] = 15;

estudiantes[3].calificaciones[estudiantes[3].calificaciones.length] = 15;
estudiantes[3].calificaciones[estudiantes[3].calificaciones.length] = 14;

estudiantes[4].calificaciones[estudiantes[4].calificaciones.length] = 18;
estudiantes[4].calificaciones[estudiantes[4].calificaciones.length] = 13;

estudiantes[5].calificaciones[estudiantes[5].calificaciones.length] = 19;
estudiantes[5].calificaciones[estudiantes[5].calificaciones.length] = 11;

estudiantes[6].calificaciones[estudiantes[6].calificaciones.length] = 17;
estudiantes[6].calificaciones[estudiantes[6].calificaciones.length] = 14;

estudiantes[7].calificaciones[estudiantes[7].calificaciones.length] = 18;
estudiantes[7].calificaciones[estudiantes[7].calificaciones.length] = 15;

estudiantes[8].calificaciones[estudiantes[8].calificaciones.length] = 10;
estudiantes[8].calificaciones[estudiantes[8].calificaciones.length] = 18;

estudiantes[9].calificaciones[estudiantes[9].calificaciones.length] = 16;
estudiantes[9].calificaciones[estudiantes[9].calificaciones.length] = 13;


let mejorEstudiante = estudiantes[0]
let peorEstudiante = estudiantes[0]



for (let i = 0; i < estudiantes.length; i++) {
    //Determinar el máximo y mínimo de las calificaciones de cada estudiante.
    let suma = 0;
    let maximo = estudiantes[i].calificaciones[0];
    let minimo = estudiantes[i].calificaciones[0];
  
    for (let j = 0; j < estudiantes[i].calificaciones.length; j++) {
      suma += estudiantes[i].calificaciones[j];
      if (estudiantes[i].calificaciones[j] > maximo) {
        maximo = estudiantes[i].calificaciones[j];
      }
      if (estudiantes[i].calificaciones[j] < minimo) {
        minimo = estudiantes[i].calificaciones[j];
      }
    }

    //Calcular el promedio de cada estudiante.
    let promedio = suma / estudiantes[i].calificaciones.length;
  
    //Clasificación por calificación: Al clasificar a los estudiantes, si su promedio es:
    // Mayor o igual a 16, clasificar como "Excelente".
    // Mayor o igual a 12 pero menor a 16, clasificar como "Bueno".
    // Mayor o igual a 8 pero menor a 12, clasificar como "Aprobado".
    // Menor a 8, clasificar como "Reprobado".
    let clasificacion = "";
    if (promedio >= 16) {
      clasificacion = "Excelente";
    } else if (promedio >= 12) {
      clasificacion = "Bueno";
    } else if (promedio >= 8) {
      clasificacion = "Aprobado";
    } else {
      clasificacion = "Reprobado";
    }
  
    estudiantes[i].promedio = promedio;
    estudiantes[i].clasificacion = clasificacion;
    estudiantes[i].maximo = maximo;
    estudiantes[i].minimo = minimo;
  
    //Encontrar el estudiante con el mejor promedio.
    if (promedio > mejorEstudiante.promedio || mejorEstudiante.promedio === undefined) {
      mejorEstudiante = estudiantes[i];
    }
    //Encontrar el estudiante con el peor promedio.
    if (promedio < peorEstudiante.promedio || peorEstudiante.promedio === undefined) {
      peorEstudiante = estudiantes[i];
    }
  }

  for (let i = 0; i < estudiantes.length; i++) {
    console.log(`'${estudiantes[i].nombre}:'`);
    console.log(`' Clasificación: ${estudiantes[i].clasificacion}'`);
    console.log(`' Promedio: ${estudiantes[i].promedio}'`);
    console.log(`' Calificación más alta: ${estudiantes[i].maximo}'`);
    console.log(`' Calificación más baja: ${estudiantes[i].minimo}'`);
    console.log("'.------------------------.'");
  }
  
  console.log(
    `'El estudiante con el peor promedio es ${peorEstudiante.nombre} con un promedio de ${peorEstudiante.promedio}'`
  );
  console.log(
    `'El estudiante con el mejor promedio es ${mejorEstudiante.nombre} con un promedio de ${mejorEstudiante.promedio}'`
  );
  