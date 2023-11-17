import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { SUPABASE_URL, SUPABASE_KEY } from './config.js';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

async function sendMessage() {
  var labelEmail = document.getElementById("label-email");
  var labelMensaje = document.getElementById("label-mensaje");
  var nombre = document.getElementById("nombre");
  var email = document.getElementById("email");
  var mensaje = document.getElementById("mensaje");
  if (email.value.trim() == "" || mensaje.value.trim() == "") {
    if (email.value.trim() == "") {
      labelEmail.getElementsByClassName("campo-obligatorio")[0].classList.add("mostrar");
    }
    if (mensaje.value.trim() == "") {
      labelMensaje.getElementsByClassName("campo-obligatorio")[0].classList.add("mostrar");
    }
  } else {
    const fondo = document.querySelector(".fondo-mensaje");
    const carga = document.querySelector("#carga");
    const enviando = document.querySelector("#h1-enviando");
    fondo.style.display = "flex";
    carga.style.display = "block";
    enviando.style.display = "block";
    const { error } = await supabase
      .from('mensajes')
      .insert({ nombre: nombre.value, email: email.value, mensaje: mensaje.value }).then(response => 
      {
        if (response.status === 201) {
          carga.style.display = "none";
          enviando.style.display = "none";

          const msgImg = fondo.querySelector("img");
          const enviado = document.querySelector("#h1-enviado");
          msgImg.style.display = "block";
          enviado.style.display = "block";
          
          setTimeout(function () {
            fondo.classList.add("animacion-fondo");
          }, 100);
          setTimeout(function () {
            fondo.classList.remove("animacion-fondo");
          }, 1900);
          setTimeout(function () {
            msgImg.style.display = "none";
            enviado.style.display = "none";
            fondo.style.display = "none";
            labelEmail.getElementsByClassName("campo-obligatorio")[0].classList.remove("mostrar");
            labelMensaje.getElementsByClassName("campo-obligatorio")[0].classList.remove("mostrar");
          }, 2500);
        }
      })
    document.getElementById("form-mensaje").submit();
  }
}

window.sendMessage = sendMessage;