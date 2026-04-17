// =============================
//         COLA (QUEUE)
// =============================

class Cola {
  constructor() {
    this.elementos = [];
  }

  // Agregar número al final (enqueue)
  agregar(numero) {
    if (typeof numero !== "number") {
      console.log("⚠️  Solo se permiten datos numéricos.");
      return;
    }
    this.elementos.push(numero);
    console.log(`✅ Número agregado a la cola: ${numero}`);
    console.log(`📋 Cola actual:`, this.elementos);
    console.log("----------------------------");
  }

  // Eliminar número del frente (dequeue)
  eliminar() {
    if (this.estaVacia()) {
      console.log("⚠️  La cola está vacía, no hay nada que eliminar.");
      return null;
    }
    const eliminado = this.elementos.shift();
    console.log(`🗑️  Número eliminado de la cola: ${eliminado}`);
    console.log(`📋 Cola actual:`, this.elementos);
    console.log("----------------------------");
    return eliminado;
  }

  // Verificar si está vacía
  estaVacia() {
    return this.elementos.length === 0;
  }
}

// =============================
//           PRUEBAS
// =============================

const cola = new Cola();

cola.agregar(10);
cola.agregar(25);
cola.agregar(37);
cola.agregar(42);

cola.eliminar();
cola.eliminar();
cola.eliminar();
cola.eliminar();
cola.eliminar(); // Intento sobre cola vacía

