// price_gte=100&price_lte=499
//q=mouse   q=query -> consulta
import {Usuario,UsuarioManagement} from "./Usuario.js";
export {manejoDeUsuarios}



const btnFormRegistro = document.getElementById('form-register-btn');
btnFormRegistro.addEventListener("click", e => {
    e.preventDefault();

    const RegisterName =  document.getElementById('registerName').value;
    const RegisterUserName =  document.getElementById('registerUsername').value;
    const RegisterEmail =  document.getElementById('registerEmail').value;
    const RegisterPassword =  document.getElementById('registerPassword').value;
    let radioSeleccionado = document.getElementsByClassName('ipt-radio-register');
    for(let radio of radioSeleccionado){
        if(radio.checked){
            radioSeleccionado = radio.value
        }
    }
    let usuario = new Usuario(RegisterName,RegisterUserName,RegisterEmail,RegisterPassword,radioSeleccionado);
    manejoDeUsuarios.postDatos(usuario);
    })
let manejoDeUsuarios = new UsuarioManagement();

// seccion de tablas

let botonOffcanvas = document.getElementById('btn-offCanvas').
addEventListener("click", function(){
    manejoDeUsuarios.obtenerDatos();
})


