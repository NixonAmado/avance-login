export {verRegistro}
import {manejoDeUsuarios} from "./index.js";

async function verRegistro(usuarios){
    let tableBody = document.getElementById('t-body'); 
    tableBody.innerHTML ="";         
    for (let index = 0; index < usuarios.length; index++) {
        tableBody.innerHTML += 
        `
        <tr id=${usuarios[index].id}>
            <th scope="row">${usuarios[index].id}</th>
            <td>${usuarios[index].nombre}</td>
            <td>${usuarios[index].usuario}</td>
            <td>${usuarios[index].email}</td>
            <td>password</td>
            <td>${usuarios[index].sexo}</td>
            <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-danger btn-eliminar" >Eliminar</button>
                <button type="button" class="btn btn-warning btn-editar" >Editar</button>
                </div>
            </td>

        </tr>
        `       
    }
    let btnEliminar = document.getElementsByClassName('btn-eliminar');
    for (let index = 0; index < btnEliminar.length; index++) {
        
        btnEliminar[index].addEventListener("click", function(e) {
            let tr = e.target.closest("tr"); 
            let idTr = tr.id;
            manejoDeUsuarios.eliminarDatos(idTr)
        
        })
    
    };
}








