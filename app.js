window.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('registroForm');
    var resultado = document.getElementById('resultado');
    formulario.addEventListener('submit', function (event) {
        // Validaciones previas antes de preventDefault
        event.preventDefault();
        var edadValor = document.getElementById('edad').value.trim();
        var usuario = {
            nombre: document.getElementById('nombre').value.trim(),
            apellidoPaterno: document.getElementById('apellidoPaterno').value.trim(),
            edad: edadValor ? parseInt(edadValor, 10) : NaN,
            genero: document.getElementById('genero').value.trim()
        };
        if (!usuario.nombre || !usuario.apellidoPaterno || isNaN(usuario.edad) || !usuario.genero) {
            resultado.textContent = 'Por favor, complete todos los campos correctamente.';
            resultado.style.color = 'red';
            return;
        }
        resultado.textContent = "Registro exitoso: ".concat(usuario.nombre, " ").concat(usuario.apellidoPaterno, ", Edad: ").concat(usuario.edad, ", Género: ").concat(usuario.genero);
        resultado.style.color = '#0078d4';
    });
});
