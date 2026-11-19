function saludar(nombre) { 
    return "Hola, " + nombre + "!"; 
} 

function sumar(a, b) { 
    return a + b; 
} 

function esMayorEdad(edad) { 
    return edad >= 18; 
} 

function cambiarTexto() { 
    const parrafo = document.querySelector('.pie p strong'); 
    if (parrafo) { 
        parrafo.textContent = '¡JavaScript ejecutado correctamente en Cúbica!'; 
    } 
} 

