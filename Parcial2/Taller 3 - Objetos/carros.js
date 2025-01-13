// Clase Conductor
class Conductor {
    #licencia; // Propiedad privada
  
    constructor(nombre, licencia) {
      this.nombre = nombre;
      this.#licencia = licencia;
      this.rutas = []; // Lista de rutas registradas
    }
  
    // Método para obtener la licencia
    getLicencia() {
      return this.#licencia;
    }
  
    // Método para registrar una ruta
    registrarRuta(ruta) {
      this.rutas.push(ruta);
      console.log(`Ruta ${ruta} registrada para el conductor ${this.nombre}.`);
    }
  }
  
  // Clase Vehículo
  class Vehiculo {
    constructor(modelo, placaNumber) {
      this.modelo = modelo;
      this.placaNumber = placaNumber;
    }
  
    // Método para obtener el número de placa
    getNumeroPlaca() {
      return this.placaNumber;
    }
  }
  
  // Clase ConductorVIP (hereda de Conductor)
  class ConductorVIP extends Conductor {
    constructor(nombre, licencia) {
      super(nombre, licencia); // Llama al constructor de la clase base
      this.vehiculosPreferidos = []; // Lista de vehículos preferidos
    }
  
    // Método para asignar un vehículo preferido
    asignaVehiculoPref(vehiculo) {
      this.vehiculosPreferidos.push(vehiculo);
      console.log(
        `Vehículo preferido (${vehiculo.modelo} - ${vehiculo.placaNumber}) asignado al conductor VIP ${this.nombre}.`
      );
    }
  }
  
  // Ejemplo
    const conductor1 = new Conductor("Juan Pérez", "LIC12345");
  
  conductor1.registrarRuta("Ruta 101");
  conductor1.registrarRuta("Ruta 202");
  
  console.log(`Licencia de ${conductor1.nombre}: ${conductor1.getLicencia()}`);
  
  const vehiculo1 = new Vehiculo("Sedán", "XYZ-9876");
  
  console.log(`Número de placa del vehículo: ${vehiculo1.getNumeroPlaca()}`);
  
  const conductorVIP1 = new ConductorVIP("Laura Gómez", "VIP56789");
  
  conductorVIP1.asignaVehiculoPref(vehiculo1);
  
  conductorVIP1.registrarRuta("Ruta VIP 303");
  