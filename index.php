<?php session_start(); ?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Javier Alemán</title>
  <link rel='stylesheet' type='text/css' media='screen' href='styles.css'>
</head>

<body onload="headerChange()">

  <div id="header">
    <h1 onclick="scrollToY(0)">Javier Alemán</h1>
    <a id="a-sobre-mi" onclick="scrollToY(1)">Sobre mi
      <div class="barra-1"></div>
      <div class="barra-2"></div>
    </a>
    <a id="a-tecnologias" onclick="scrollToY(2)">Tecnologías
      <div class="barra-1"></div>
      <div class="barra-2"></div>
    </a>
    <a id="a-contacto" onclick="scrollToY(3)">Contacto
      <div class="barra-1"></div>
      <div class="barra-2"></div>
    </a>
  </div>
  <div id="principal">
    <h1 data-content="Javier Alemán">Javier Alemán</h1>
    <h2 data-content="Desarrollador de aplicaciones especializado en front-end">Desarrollador de aplicaciones
      especializado en front-end</h2>
    <div id="coleccion-botones">
      <a href="https://www.linkedin.com/in/javier-alem%C3%A1n-rodr%C3%ADguez-4975a1285/" target="_blank"><img
          src="./public/img/linkedin.png"></a>
      <a href="https://github.com/JaviARo" target="_blank"><img src="./public/img/github.png"></a>
      <a href="./public/CV-16-07-23.pdf" target="_blank"><img src="./public/img/pdf.png"></a>
    </div>
  </div>
  <div data-content="o" id="flecha" onclick="scrollToY(1)"></div>
  <div class="seccion" id="sobre-mi">
    <h1>Sobre mi</h1>
    <div class="debajo">
      <img id="foto-perfil" src="./public/img/yo.JPG" />
      <p>Desarrollador de aplicaciones especializado en front-end, interesado en la tecnología y en aplicar sus
        conocimientos así como mejorar. <br /><br />Titulado en Desarrollo de Aplicaciones Multiplataforma. <br /><br /> 2 meses de contrato en prácticas desarrollando una aplicación de
        gestión interna para trabajos de serigrafía.</p>
    </div>
  </div>
  <div class="seccion" id="tecnologias">
    <h1>Tecnologías</h1>
    <p>He aprendido y puesto en práctica las siguientes tecnologías para realizar mis proyectos:</p>
    <div class="grid-img">
      <div class="container-img">
        <img src="./public/img/html.png" />
      </div>
      <div class="container-img">
        <img src="./public/img/css.png" />
      </div>
      <div class="container-img">
        <img src="./public/img/js.png" />
      </div>
      <div class="container-img">
        <img src="./public/img/react.png" />
      </div>
      <div class="container-img">
        <img src="./public/img/php.png" />
      </div>
      <div class="container-img">
        <img src="./public/img/sass.png" />
      </div>
      <div class="container-img">
        <img src="./public/img/styled-components.png" />
      </div>
      <div class="container-img">
        <img src="./public/img/mysql.png" />
      </div>
      <div class="container-img">
        <img src="./public/img/laravel.png" />
      </div>
      <div class="container-img" id="center">
        <img src="./public/img/figma.png" />
      </div>
    </div>
  </div>
  <div class="seccion" id="contacto">
    <h1>Contacto</h1>
    <div class="foto-email">
      <img src="./public/img/mensaje-1.png">
    </div>
    <p>javialemanrod@gmail.com</p>
    <form id="form-mensaje" method='post' action='createmensaje.php'>
      <label id="label-nombre">
        <div class="label-texto">
          <p>Nombre y apellidos</p>
        </div>
        <input id="nombre" class="form-input" type="text" maxlength="50" name="nombre" onkeydown="leftCharacters(this)" onkeyup="leftCharacters(this)">
        <p class="p-input">50</p>
      </label>
      <label id="label-email">
        <div class="label-texto">
          <p>E-mail</p>
          <p class="campo-obligatorio">*Campo obligatorio</p>
        </div>
        <input id="email" class="form-input" type="text" maxlength="50" name="email" onkeydown="leftCharacters(this)" onkeyup="leftCharacters(this)">
        <p class="p-input">50</p>
      </label>
      <label id="label-mensaje">
        <div class="label-texto">
          <p>Escriba aquí su mensaje</p>
          <p class="campo-obligatorio">*Campo obligatorio</p>
        </div>
        <textarea id="mensaje" class="form-input" name="mensaje" rows="3" maxlength="500" onkeydown="leftCharacters(this)" onkeyup="leftCharacters(this)"></textarea>
        <p class="p-textarea">500</p>
      </label>
      <div class="boton-form" onclick="sendMessage()">
        <p>Enviar mensaje</p>
      </div>
    </form>
  </div>

  <?php
    if (isset($_SESSION['enviado'])) {
      echo '
      <div class="fondo-mensaje">
        <div>
          <img src="./public/img/mensaje-2.png">
          <h1>¡Mensaje enviado!</h1>
        </div>
      </div>
      ';
      unset($_SESSION['enviado']);
    }
  ?>
  
  <script type="text/javascript" src="./script.js"></script>
</body>

</html>