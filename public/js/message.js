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
    const { error } = await supabase
      .from('mensajes')
      .insert({ nombre: nombre.value, email: email.value, mensaje: mensaje.value }).then(response => 
      {
        if (response.status === 201) {
          const fondo = document.querySelector(".fondo-mensaje");
          fondo.style.display = "flex";
          setTimeout(function () {
            fondo.classList.add("animacion-fondo");
          }, 100);
          setTimeout(function () {
            fondo.classList.remove("animacion-fondo");
          }, 1900);
          setTimeout(function () {
            fondo.style.display = "none";
          }, 2500);
        }
      })
    document.getElementById("form-mensaje").submit();
  }
}

window.sendMessage = sendMessage;