// Definimos la función principal
async function obtenerFrase() {
    const contenedor = document.getElementById('display-area');
    
    try {
        const respuesta = await fetch('https://dummyjson.com/quotes/random');
        if (!respuesta.ok) throw new Error("Error de red");
        const datos = await respuesta.json();

        const fecha = new Date().toLocaleString();

        contenedor.innerHTML = `
            <div class="quote-card">
                <p><strong>"${datos.quote}"</strong></p>
                <span>— ${datos.author}</span>
                <br><small>Consultado: ${fecha}</small>
            </div>
        `;
    } catch (error) {
        contenedor.innerHTML = "<p>Error al conectar con la API.</p>";
    }
}

// ESTA PARTE ES CLAVE: 
// Espera a que el HTML esté listo antes de buscar el botón
window.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btn-generate');
    
    if (boton) {
        boton.onclick = obtenerFrase;
        obtenerFrase(); // Carga la primera frase automáticamente
    } else {
        console.error("No se encontró el botón con ID 'btn-generate'. Revisa tu HTML.");
    }
});

