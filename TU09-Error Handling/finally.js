try {
  /// Se va a intentar ejecutar
  /// Si hay algo que falla -> Salta al catch
  //// Debajo de lo que falla -> NUNCA SE EJECUTA

  const obj = { a: 1, b: 2 };
  const resultado = obj.a + obj.b;
  console.log('Todo bien');
} catch (error) {
  // SOLO se ejecuta si en el bloque de arriba hay error.
  // Si no hay errores el catch NUNCA SE EJECUTA
  console.log('Ha habido un error');
}

/// SE EJECUTA SIEMPRE
console.log('Estoy ejecutando el finally');
