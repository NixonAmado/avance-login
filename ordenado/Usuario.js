export {Usuario,UsuarioManagement} 
import {verRegistro} from "./tablasDeRegistro.js"

const URL = "http://localhost:3000"
const headers = new Headers ({'Content-Type': 'application/json'});


function configurarAccion(accion,data="no necesita"){
 
    let config ={
        method:`${accion}`,
        headers: headers,
      }
    return config  
}


class Usuario {
    constructor(nombre,usuario,email,password,sexoId){
        this.nombre = nombre,
        this.usuario = usuario,
        this.email= email,
        this.sexoId = Number(sexoId),
        this.password = password,
        this.sexo = this.sexoId==1? "masculino" : "femenino";

    }
}

class UsuarioManagement{
    async obtenerDatos(){
        let data = await (await fetch(`${URL}/usuario`)).json();
        verRegistro(data);
    }
    async postDatos(data){
        await fetch(`${URL}/usuario`,configurarAccion("POST",data));
    }
    async actualizarDatos(){
        await fetch(`${URL}/usuario`,configurarAccion("PUT",data))
    }
    async eliminarDatos(id){
        try {
            await fetch(`${URL}/usuario/${id}`,configurarAccion("DELETE"))                
        } catch (error) {
            console.error("errorrrrr",error);
        }
    }        
}