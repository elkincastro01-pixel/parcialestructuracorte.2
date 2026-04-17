// =============================
//         PILA (STACK)
// =============================

class Pila {
  constructor() {
    this.elementos = [];
  }

  // Agregar elemento (push)
  agregar(objeto) {
    this.elementos.push(objeto);
    console.log(`✅ Agregado a la pila:`, objeto);
    console.log(`📦 Pila actual:`, this.elementos);
    console.log("----------------------------");
  }

  // Eliminar elemento (pop)
  eliminar() {
    if (this.estaVacia()) {
      console.log("⚠️  La pila está vacía, no hay nada que eliminar.");
      return null;
    }
    const eliminado = this.elementos.pop();
    console.log(`🗑️  Eliminado de la pila:`, eliminado);
    console.log(`📦 Pila actual:`, this.elementos);
    console.log("----------------------------");
    return eliminado;
  }

  // Verificar si está vacía
  estaVacia() {
    return this.elementos.length === 0;
  }

  // Ver el tope sin eliminar
  tope() {
    return this.elementos[this.elementos.length - 1];
  }
}

// =============================
//           PRUEBAS
// =============================

const pila = new Pila();

pila.agregar({ Nombre: "Orlando", Edad: 30 });
pila.agregar({ Nombre: "María", Edad: 25 });
pila.agregar({ Nombre: "Carlos", Edad: 22 });

pila.eliminar();
pila.eliminar();
pila.eliminar();
pila.eliminar(); // Intento sobre pila vacía