//Variables
const inputEmail=document.querySelector("#email");
const inputAsunto=document.querySelector("#asunto");
const inputMensaje=document.querySelector("#mensaje");
const btnEnviar=document.querySelector(`button[type="submit"]`);
const btnReset=document.querySelector(`button[type="reset"]`);
const formulario=document.querySelector("#formulario");
//Eventos
document.addEventListener("DOMContentLoaded",()=>{
   inputEmail.addEventListener("blur",leerCampo)
   inputAsunto.addEventListener("blur",leerCampo)
   inputMensaje.addEventListener("blur",leerCampo)
});

//Funciones
function leerCampo(e){//funcion que lee cada campo 
   const campoId=e.target.id;
   const referencia=e.target.parentElement;
   //verifica que se haya escrito algo
   if(e.target.value.trim()===""){
      mostrarMensaje(`El campo ${campoId} es obligatorio`,referencia);//si no hay nada escrito se manda un mensaje
   }
   else{

   }
}
function mostrarMensaje(mensaje,referencia){
   const alerta=referencia.querySelector('.bg-red-600');
   if (!alerta) {
      const error=document.createElement("p");
      error.textContent=mensaje
      error.classList.add("bg-red-600","text-white","p-2","text-center");
      referencia.appendChild(error);
   }
}