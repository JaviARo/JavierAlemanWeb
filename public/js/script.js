function elementFromHtml(html) {
  const template = document.createElement('template');

  template.innerHTML = html.trim();

  return template.content;
}

var atPhone = false;

var sobreMi = document.getElementById("sobre-mi");
var tecnologias = document.getElementById("tecnologias");
var contacto = document.getElementById("contacto");

var sobreMiY = document.getElementById("sobre-mi").offsetTop - window.innerHeight / 2;
var tecnologiasY = document.getElementById("tecnologias").offsetTop - window.innerHeight / 2;
var contactoY = document.getElementById("contacto").offsetTop - window.innerHeight / 1.6;

function headerChange() {
  sobreMiY = document.getElementById("sobre-mi").offsetTop - window.innerHeight / 2;
  tecnologiasY = document.getElementById("tecnologias").offsetTop - window.innerHeight / 2;
  contactoY = document.getElementById("contacto").offsetTop - window.innerHeight / 1.6;

  headerBarScroll();
}

window.addEventListener('resize', headerChange);

function headerBarScroll() {
  if (window.innerWidth >= 600) {
    const barra1SobreMi = document.getElementById('a-sobre-mi').getElementsByClassName("barra-1")[0];
    const barra2SobreMi = document.getElementById('a-sobre-mi').getElementsByClassName("barra-2")[0];
    const barra1Tecnologias = document.getElementById('a-tecnologias').getElementsByClassName("barra-1")[0];
    const barra2Tecnologias = document.getElementById('a-tecnologias').getElementsByClassName("barra-2")[0];
    const barra1Contacto = document.getElementById('a-contacto').getElementsByClassName("barra-1")[0];
    const barra2Contacto = document.getElementById('a-contacto').getElementsByClassName("barra-2")[0];

    if (window.scrollY >= sobreMiY - 1 && window.scrollY < tecnologiasY - 1) {
      barra1SobreMi.classList.add("barra-1-moved");
      barra2SobreMi.classList.add("barra-2-moved");
      if (barra1Tecnologias.classList.contains("barra-1-moved")) {
        barra1Tecnologias.classList.remove("barra-1-moved");
        barra2Tecnologias.classList.remove("barra-2-moved");
      }
      if (barra1Contacto.classList.contains("barra-1-moved")) {
        barra1Contacto.classList.remove("barra-1-moved");
        barra2Contacto.classList.remove("barra-2-moved");
      }
    } else if (window.scrollY >= tecnologiasY - 1 && window.scrollY < contactoY - 1) {
      barra1Tecnologias.classList.add("barra-1-moved");
      barra2Tecnologias.classList.add("barra-2-moved");
      if (barra1SobreMi.classList.contains("barra-1-moved")) {
        barra1SobreMi.classList.remove("barra-1-moved");
        barra2SobreMi.classList.remove("barra-2-moved");
      }
      if (barra1Contacto.classList.contains("barra-1-moved")) {
        barra1Contacto.classList.remove("barra-1-moved");
        barra2Contacto.classList.remove("barra-2-moved");
      }
    } else if (window.scrollY >= contactoY - 1) {
      barra1Contacto.classList.add("barra-1-moved");
      barra2Contacto.classList.add("barra-2-moved");
      if (barra1SobreMi.classList.contains("barra-1-moved")) {
        barra1SobreMi.classList.remove("barra-1-moved");
        barra2SobreMi.classList.remove("barra-2-moved");
      }
      if (barra1Tecnologias.classList.contains("barra-1-moved")) {
        barra1Tecnologias.classList.remove("barra-1-moved");
        barra2Tecnologias.classList.remove("barra-2-moved");
      }
    } else {
      if (barra1SobreMi.classList.contains("barra-1-moved")) {
        barra1SobreMi.classList.remove("barra-1-moved");
        barra2SobreMi.classList.remove("barra-2-moved");
      }
      if (barra1Tecnologias.classList.contains("barra-1-moved")) {
        barra1Tecnologias.classList.remove("barra-1-moved");
        barra2Tecnologias.classList.remove("barra-2-moved");
      }
      if (barra1Contacto.classList.contains("barra-1-moved")) {
        barra1Contacto.classList.remove("barra-1-moved");
        barra2Contacto.classList.remove("barra-2-moved");
      }
    }
  }
  if (window.scrollY >= sobreMiY - 1 && window.scrollY < tecnologiasY - 1) {
    sobreMi.classList.add("mostrar-seccion");
    tecnologias.classList.remove("mostrar-seccion");
  } else if (window.scrollY >= tecnologiasY - 1 && window.scrollY < contactoY - 1) {
    sobreMi.classList.add("mostrar-seccion");
    tecnologias.classList.add("mostrar-seccion");
    contacto.classList.remove("mostrar-seccion");
  } else if (window.scrollY >= contactoY - 1) {
    sobreMi.classList.add("mostrar-seccion");
    tecnologias.classList.add("mostrar-seccion");
    contacto.classList.add("mostrar-seccion");
  } else {
    sobreMi.classList.remove("mostrar-seccion");
  }
}

window.addEventListener('scroll', headerBarScroll);

function scrollToY(option) {
  var destinationY = 0;
  switch (option) {
    case 0:
      destinationY = 0;
      break;
    case 1:
      destinationY = document.getElementById("sobre-mi").offsetTop - window.innerHeight * 0.2;
      break;
    case 2:
      destinationY = document.getElementById("tecnologias").offsetTop - window.innerHeight * 0.3;
      break;
    case 3:
      destinationY = document.documentElement.scrollHeight - window.innerHeight;
      break;
  }


  const initialY = window.scrollY;
  const diffY = destinationY - initialY;
  const startTime = performance.now();

  function scrollStep(timestamp) {
    const currentTime = timestamp || performance.now();
    const elapsedTime = currentTime - startTime;

    window.scrollTo(0, easeInOut(elapsedTime, initialY, diffY));

    if (elapsedTime < 1000) {
      requestAnimationFrame(scrollStep);
    }
  }

  function easeInOut(t, b, c) {
    // Función de aceleración para suavizar el scroll
    t /= 1000 / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(scrollStep);
}

function leftCharacters(input) {
  label = input.parentNode;
  var p = "";
  if(label.querySelector(".p-input")){
    p = label.querySelector(".p-input");
  } else {
    p = label.querySelector(".p-textarea")
  }
  switch (p.classList.value) {
    case "p-input":
    case "p-input pocos-caracteres":
    case "p-input sin-caracteres":
      p.innerHTML = 50 - input.value.length;
      if(p.innerHTML > 25){
        if(p.classList.contains("pocos-caracteres")) {
          p.classList.remove("pocos-caracteres");
        }
      } else if(p.innerHTML <= 25 && p.innerHTML > 0) {
        p.classList.add("pocos-caracteres");
        if(p.classList.contains("sin-caracteres")) {
          p.classList.remove("sin-caracteres");
        }
      } else {
        p.classList.add("sin-caracteres");
        if(p.classList.contains("pocos-caracteres")) {
          p.classList.remove("pocos-caracteres");
        }
      }
      break;
    case "p-textarea":
    case "p-textarea pocos-caracteres":
    case "p-textarea sin-caracteres":
      p.innerHTML = 500 - input.value.length;
      if(p.innerHTML > 250){
        if(p.classList.contains("pocos-caracteres")) {
          p.classList.remove("pocos-caracteres");
        }
      } else if(p.innerHTML <= 250 && p.innerHTML > 0) {
        p.classList.add("pocos-caracteres");
        if(p.classList.contains("sin-caracteres")) {
          p.classList.remove("sin-caracteres");
        }
      } else {
        p.classList.add("sin-caracteres");
        if(p.classList.contains("pocos-caracteres")) {
          p.classList.remove("pocos-caracteres");
        }
      }
      break;
  }
}

fotoEmail = document.querySelector(".foto-email");
fotoEmailImg = fotoEmail.querySelector("img");
fotoEmail.addEventListener('mouseover', function() {
  fotoEmail.classList.add('foto-email-blanco');
  setTimeout(function() {
    fotoEmailImg.src = "./img/mensaje-3.png";
  }, 150);
})
fotoEmail.addEventListener('mouseleave', function() {
  fotoEmail.classList.remove('foto-email-blanco');
  setTimeout(function() {
    fotoEmailImg.src = "./img/mensaje-1.png";
  }, 150);
})