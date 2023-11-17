function elementFromHtml(html) {
  const template = document.createElement('template');

  template.innerHTML = html.trim();

  return template.content;
}

function popupText() {
  principal = document.getElementById("principal");
  h1 = principal.querySelector("h1");
  h2 = principal.querySelector("h2");
  coleccionBotones = document.getElementById("coleccion-botones");
  boton = coleccionBotones.querySelectorAll("a");
  h1.classList.add("mostrar-principal");
  divFlecha = document.getElementById("div-flecha");
  setTimeout(function () {
    h2.classList.add("mostrar-principal");
  }, 300);
  setTimeout(function () {
    img = boton[0].querySelector("img");
    img.classList.add("mostrar-principal");
  }, 900);
  setTimeout(function () {
    img = boton[1].querySelector("img");
    img.classList.add("mostrar-principal");
  }, 1200);
  setTimeout(function () {
    img = boton[2].querySelector("img");
    img.classList.add("mostrar-principal");
  }, 1500);
  setTimeout(function () {
    divFlecha.classList.add("mostrar-principal");
  }, 1800);
}

window.addEventListener('load', popupText);

var atPhone = false;

var pagina = document.getElementById("pagina");
var paginaScroll = pagina.scrollTop;

var sobreMi = document.getElementById("sobre-mi");
var tecnologias = document.getElementById("tecnologias");
var proyectos = document.getElementById("proyectos");
var contacto = document.getElementById("contacto");

var paginaRect = pagina.getBoundingClientRect();
var sobreMiRect = sobreMi.getBoundingClientRect();
var tecnologiasRect = tecnologias.getBoundingClientRect();
var contactoRect = contacto.getBoundingClientRect();

var sobreMiY = document.getElementById("sobre-mi").offsetTop - window.innerHeight / 2;
var tecnologiasY = document.getElementById("tecnologias").offsetTop - window.innerHeight / 2;
var proyectosY = document.getElementById("proyectos").offsetTop - window.innerHeight / 2;
var contactoY = document.getElementById("contacto").offsetTop - window.innerHeight / 1.6;

function headerChange() {
  sobreMiY = document.getElementById("sobre-mi").offsetTop - window.innerHeight / 2;
  tecnologiasY = document.getElementById("tecnologias").offsetTop - window.innerHeight / 2;
  proyectosY = document.getElementById("proyectos").offsetTop - window.innerHeight / 2;
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
    const barra1Proyectos = document.getElementById('a-proyectos').getElementsByClassName("barra-1")[0];
    const barra2Proyectos = document.getElementById('a-proyectos').getElementsByClassName("barra-2")[0];
    const barra1Contacto = document.getElementById('a-contacto').getElementsByClassName("barra-1")[0];
    const barra2Contacto = document.getElementById('a-contacto').getElementsByClassName("barra-2")[0];

    if (pagina.scrollTop >= sobreMiY - 1 && pagina.scrollTop < tecnologiasY - 1) {
      barra1SobreMi.classList.add("barra-1-moved");
      barra2SobreMi.classList.add("barra-2-moved");
      if (barra1Tecnologias.classList.contains("barra-1-moved")) {
        barra1Tecnologias.classList.remove("barra-1-moved");
        barra2Tecnologias.classList.remove("barra-2-moved");
      }
      if (barra1Proyectos.classList.contains("barra-1-moved")) {
        barra1Proyectos.classList.remove("barra-1-moved");
        barra2Proyectos.classList.remove("barra-2-moved");
      }
      if (barra1Contacto.classList.contains("barra-1-moved")) {
        barra1Contacto.classList.remove("barra-1-moved");
        barra2Contacto.classList.remove("barra-2-moved");
      }
    } else if (pagina.scrollTop >= tecnologiasY - 1 && pagina.scrollTop < proyectosY - 1) {
      barra1Tecnologias.classList.add("barra-1-moved");
      barra2Tecnologias.classList.add("barra-2-moved");
      if (barra1SobreMi.classList.contains("barra-1-moved")) {
        barra1SobreMi.classList.remove("barra-1-moved");
        barra2SobreMi.classList.remove("barra-2-moved");
      }
      if (barra1Proyectos.classList.contains("barra-1-moved")) {
        barra1Proyectos.classList.remove("barra-1-moved");
        barra2Proyectos.classList.remove("barra-2-moved");
      }
      if (barra1Contacto.classList.contains("barra-1-moved")) {
        barra1Contacto.classList.remove("barra-1-moved");
        barra2Contacto.classList.remove("barra-2-moved");
      }
    } else if (pagina.scrollTop >= proyectosY - 1 && pagina.scrollTop < contactoY - 1) {
      barra1Proyectos.classList.add("barra-1-moved");
      barra2Proyectos.classList.add("barra-2-moved");
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
    } else if (pagina.scrollTop >= contactoY - 1) {
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
      if (barra1Proyectos.classList.contains("barra-1-moved")) {
        barra1Proyectos.classList.remove("barra-1-moved");
        barra2Proyectos.classList.remove("barra-2-moved");
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
      if (barra1Proyectos.classList.contains("barra-1-moved")) {
        barra1Proyectos.classList.remove("barra-1-moved");
        barra2Proyectos.classList.remove("barra-2-moved");
      }
      if (barra1Contacto.classList.contains("barra-1-moved")) {
        barra1Contacto.classList.remove("barra-1-moved");
        barra2Contacto.classList.remove("barra-2-moved");
      }
    }
  }

  if (pagina.scrollTop >= sobreMiY - 1 && pagina.scrollTop < tecnologiasY - 1) {
    sobreMi.classList.add("mostrar-seccion");
    tecnologias.classList.remove("mostrar-seccion");
  } else if (pagina.scrollTop >= tecnologiasY - 1 && pagina.scrollTop < proyectosY - 1) {
    sobreMi.classList.add("mostrar-seccion");
    tecnologias.classList.add("mostrar-seccion");
    proyectos.classList.remove("mostrar-seccion");
  } else if (pagina.scrollTop >= proyectosY - 1 && pagina.scrollTop < contactoY - 1) {
    sobreMi.classList.add("mostrar-seccion");
    tecnologias.classList.add("mostrar-seccion");
    proyectos.classList.add("mostrar-seccion");
    contacto.classList.remove("mostrar-seccion");
  } else if (pagina.scrollTop >= contactoY - 1) {
    sobreMi.classList.add("mostrar-seccion");
    tecnologias.classList.add("mostrar-seccion");
    proyectos.classList.add("mostrar-seccion");
    contacto.classList.add("mostrar-seccion");
  } else {
    sobreMi.classList.remove("mostrar-seccion");
  }
}

pagina.addEventListener('scroll', headerBarScroll);


function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  let para = 0;
  switch (String(elementId)) {
    case 'sobre-mi':
      para = window.innerHeight * 0.2;
      break;
    case 'tecnologias':
    case 'proyectos':
      para = window.innerHeight * 0.3;
      console.log(para)
      break;
  }
  if (pagina && element) {
    pagina.scrollTo({
      top: element.offsetTop - para,
      behavior: 'smooth'
    });
  }
  console.log(para)
}

function leftCharacters(input) {
  label = input.parentNode;
  var p = "";
  if (label.querySelector(".p-input")) {
    p = label.querySelector(".p-input");
  } else {
    p = label.querySelector(".p-textarea")
  }
  switch (p.classList.value) {
    case "p-input":
    case "p-input pocos-caracteres":
    case "p-input sin-caracteres":
      p.innerHTML = 50 - input.value.length;
      if (p.innerHTML > 25) {
        if (p.classList.contains("pocos-caracteres")) {
          p.classList.remove("pocos-caracteres");
        }
      } else if (p.innerHTML <= 25 && p.innerHTML > 0) {
        p.classList.add("pocos-caracteres");
        if (p.classList.contains("sin-caracteres")) {
          p.classList.remove("sin-caracteres");
        }
      } else {
        p.classList.add("sin-caracteres");
        if (p.classList.contains("pocos-caracteres")) {
          p.classList.remove("pocos-caracteres");
        }
      }
      break;
    case "p-textarea":
    case "p-textarea pocos-caracteres":
    case "p-textarea sin-caracteres":
      p.innerHTML = 500 - input.value.length;
      if (p.innerHTML > 250) {
        if (p.classList.contains("pocos-caracteres")) {
          p.classList.remove("pocos-caracteres");
        }
      } else if (p.innerHTML <= 250 && p.innerHTML > 0) {
        p.classList.add("pocos-caracteres");
        if (p.classList.contains("sin-caracteres")) {
          p.classList.remove("sin-caracteres");
        }
      } else {
        p.classList.add("sin-caracteres");
        if (p.classList.contains("pocos-caracteres")) {
          p.classList.remove("pocos-caracteres");
        }
      }
      break;
  }
}

fotoEmail = document.querySelector(".foto-email");
fotoEmailImg = fotoEmail.querySelector("img");
fotoEmail.addEventListener('mouseover', function () {
  fotoEmail.classList.add('foto-email-blanco');
  setTimeout(function () {
    fotoEmailImg.src = "./img/mensaje-4.png";
  }, 150);
})
fotoEmail.addEventListener('mouseleave', function () {
  fotoEmail.classList.remove('foto-email-blanco');
  setTimeout(function () {
    fotoEmailImg.src = "./img/mensaje-1.png";
  }, 150);
})

const elementoSeguidor = document.getElementById('elemento-seguidor');

// Escuchar el evento 'mousemove' en el documento
document.addEventListener('mousemove', (event) => {
  // Obtener las coordenadas del cursor del mouse
  const xi = event.clientX;
  const yi = event.clientY;

  let ancho = elementoSeguidor.getBoundingClientRect().width;
  let x = xi - ancho/2;
  let y = yi + 10;

  // Actualizar la posición del elemento seguidor
  elementoSeguidor.style.left = `${x}px`;
  elementoSeguidor.style.top = `${y}px`;
});

function scrollDown(contenedor) {
  let proyectoVisible = contenedor.getElementsByClassName("proyecto-visible")[0];
  let tituloTecnologias = contenedor.getElementsByClassName("titulo-tecnologias")[0];

  contenedor.scrollTo({
    top: tituloTecnologias.offsetTop - (proyectoVisible.getBoundingClientRect().height * 0.03),
    behavior: 'smooth'
  });

  elementoSeguidor.style.opacity = 1;
}

function scrollUp(contenedor) {
  contenedor.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  elementoSeguidor.style.opacity = 0;
}