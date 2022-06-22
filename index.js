    var nombre;
    var correo;
    var asunto;
    var mensaje;
    var error;
    var finalError = "";
    var mensajesError;

function validarDatos(){

    error = 0;
    mensajesError = [];

    nombre = document.getElementById('nombre').value;
    correo = document.getElementById('correo').value;
    asunto = document.getElementById('asunto').value;
    mensaje = document.getElementById('mensaje').value;

    if(nombre === null || nombre === ""){
        mensajesError.push("Ingrese el nombre");
        error = 1;
    }

    if(correo === null || correo === ""){
        mensajesError.push(" Ingrese el correo");
        error = 1;
    }

    if(asunto === null || asunto === ""){
        mensajesError.push(" Ingrese el asunto");
        error = 1;
    }

    if(mensaje === null || mensaje === ""){
        mensajesError.push(" Ingrese el mensaje");
        error = 1;
    }

    if(error === 1){
        mensajesError.forEach(x => {
            (x !== undefined)?x:""
        });
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: mensajesError,
          });
    }
    else {
        console.log("Nombre: "+nombre+
         "\nCorreo: "+correo+
         "\nAsunto: "+asunto+
         "\nMensaje: "+mensaje);
    }
}

function borrarDatos(){
    document.getElementById('nombre').value = "";
    document.getElementById('correo').value = "";
    document.getElementById('asunto').value = "";
    document.getElementById('mensaje').value = "";
}