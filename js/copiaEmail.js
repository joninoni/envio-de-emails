//Variables
const inputEmail=document.querySelector("#email");
const inputAsunto=document.querySelector("#asunto");
const inputMensaje=document.querySelector("#mensaje");
const btnEnviar=document.querySelector(`button[type="submit"]`);
const btnReset=document.querySelector(`button[type="reset"]`);
const formulario=document.querySelector("#formulario");
const spinner=document.querySelector("#spinner");
//Objecto principal
const email={
   email:"",
   asunto:"",
   mensaje:"",
}

//Eventos
document.addEventListener("DOMContentLoaded",()=>{
   inputEmail.addEventListener("blur",leerCampo);
   inputAsunto.addEventListener("blur",leerCampo);
   inputMensaje.addEventListener("blur",leerCampo);
   formulario.addEventListener('submit',enviarEmail);
   btnReset.addEventListener("click",(e)=>{
      e.preventDefault();
      restearFormulario();
   })
});
function enviarEmail(e){
   e.preventDefault();
   spinner.classList.add("flex");
   spinner.classList.remove("hidden");
   setTimeout(() => {
      spinner.classList.add("hidden");
      spinner.classList.remove("flex");
      restearFormulario();
      const mensajeExito=document.createElement("p");
      mensajeExito.textContent='mensaje enviado correctamente';
      mensajeExito.classList.add("bg-green-500","p-2","text-white","text-center","rounded-lg","mt-10","font-bold","text-sm","uppercase");
      formulario.appendChild(mensajeExito);
      setTimeout(() => {
         mensajeExito.remove();
      }, 3000);
   }, 3000);
    
}
//Funciones
function leerCampo(e){//funcion que lee cada campo 
   const campoId=e.target.id;
   const referencia=e.target.parentElement;
   //verifica que se haya escrito algo
   if(e.target.value.trim()===""){
      mostrarMensaje(`El campo ${campoId} es obligatorio`,referencia);//si no hay nada escrito se manda un mensaje
      email[e.target.name]="";
      comprobarEmail();
      return;
   }
   if(e.target.id ==="email" &&!validarEmail(e.target.value)){
      mostrarMensaje(`El campo ${campoId} no es valido`,referencia);
      email[e.target.name]="";
      comprobarEmail();
      return;
   }
   limpiarAlerta(referencia);
   //Asigna lo escrito en el campo a el objecto principal
   email[e.target.name]=e.target.value.trim().toLowerCase();
   comprobarEmail();
}
function mostrarMensaje(mensaje,referencia){ 
   limpiarAlerta(referencia);
   const error=document.createElement("p");
   error.textContent=mensaje
   error.classList.add("bg-red-600","text-white","p-2","text-center");
   referencia.appendChild(error);      
}
function limpiarAlerta(referencia){
   const alerta=referencia.querySelector(".bg-red-600");
   if(alerta){
      alerta.remove();
   }
}
function validarEmail(email){
   const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
   const resultado=regex.test(email);
   return resultado;
}
function comprobarEmail(){
   //habilita o desabilita el boton de enviar
   if(Object.values(email).includes('')){//es para que no haya campos vacios
      btnEnviar.disabled=true;
      btnEnviar.classList.add("opacity-50");
      return;
   }
   btnEnviar.disabled=false;
   btnEnviar.classList.remove("opacity-50");
}
function restearFormulario(){
      email.email="";
      email.asunto="";
      email.mensaje="";
      formulario.reset();
      comprobarEmail();
}