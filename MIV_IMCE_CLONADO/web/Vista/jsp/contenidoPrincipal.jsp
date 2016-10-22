<%@page import="Modelo.Util" %>
<header>
    <h1 id="Bienvenida"><%= Util.BIENVENIDA_MIV %></h1>
<div class="menu_bar">
    <a href="#" class="bt-menu"><span><img class="hamburguer" src="../img/hamburguer.png"></span>Menú</a>
</div>

<nav id="nav">
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo"><%= Util.UNIVERSIDAD_SIGLAS %></a>
      <ul class="right hide-on-med-and-down" id="menu">
          <li><a href="#"><img src="Vista/img/Icons/ic_home_black_24dp_2x.png" height="40px"><%= Util.INICIO %></a></li>
          <li><a href="#" id="trazaRuta"><img src="Vista/img/Icons/ic_navigation_black_24dp_2x.png" height="40px"><%= Util.TRAZAR_RUTAS %></a></li>
          <li><a href="#" id="mapascroquisPrincipal"><img src="Vista/img/Icons/ic_language_black_24dp_2x.png" height="40px"><%= Util.MAPAS_CROQUIS %></a></li>
          <li><a href="#"><img src="Vista/img/Icons/ic_info_outline_black_24dp_2x.png" height="40px"><%= Util.INFORMACION_GENERAL %></a></li>
          <li><a href="#" id="login"><img src="Vista/img/Icons/ic_lock_open_black_24dp_2x.png" height="40px"><%= Util.INICIAR_SESION %></a></li>
      </ul>
    </div>
  </nav>

        
<!--<nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="#" title="home"><img id="homeIcon" src="Vista/img/home.png"></a></li>
		<li id="trazaRuta"><a href="#" title="ruta"><img id="rutaIcon" src="Vista/img/ruta.png"></a></li>
		<li><a href="#" title="mapa"><img id="mapaIcon" src="Vista/img/mapa.png"></a></li>
		<li><a href="#" title="info"><img id="infoIcon" src="Vista/img/info.png"></a></li>
		<li><a href="#" title="login" id="login"><img id="loginIcon" src="Vista/img/login.png"></a></li>
      </ul>
    </div>
  </nav>-->
</header>
<div id="contenedor" class="contenedor">
<div class="diapositivas" id='diapositivas'>
   <ul class="bxslider">
        <li><img class="imgSlider" src="Vista/img/infoSlider3.png" alt="slider"></li>
            <li><img class="imgSlider" src="Vista/img/infoSlider.png" alt="slider"></li>
          <li><img class="imgSlider" src="Vista/img/infoSlider2.jpg" alt="slider"></li>
          <li><img class="imgSlider" src="Vista/img/infoSlider4.jpg" alt="slider"></li>
        </ul>
</div>
    <div class="otroContenidoSesion" style='display: none;'>
</div>
    
</div>
<!--Creación de div que contiene el formulario de inicio de sesión -->
<div id="ventanaModal" style="display: none;">
     <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s10">
            <i class="prefix">
            <img src="Vista/img/Icons/ic_account_circle_black_24dp_2x.png" width="35px">
            </i>
          <input id="usr" type="text" class="validate" maxlength="10" onkeypress="return validarNumeros(event)">
          <label for="icon_prefix">Usuario</label>
        </div><br><br><br><br>
        <div class="input-field col s10">
            <i class="material-icons prefix">
                <img src="Vista/img/Icons/ic_vpn_key_black_24dp_2x.png" width="35px">
            </i>
          <input id="psw" type="password" class="validate">
          <label for="icon_telephone">Contraseña</label>
        </div><br><br><br><br><br>
        <a id="acceder" class="waves-effect waves-orange btn" href="#">Acceder</a><br><br>
        &iquest;Usuario nuevo? <a href="#" id="linkRegistro">Registrate</a>
      </div>
    </form>
  </div>
</div>

<!--Creación de div que contiene el formulario de resgistro de usuario -->
<div id="ventanaModalRegistro" style="display: none;">
<table id="tblLogin">
    <tr><td>Usuario: </td><td><input type="text" id="usrNuevo" maxlength="10" onkeypress="return validarNumeros(event)"></td></tr>
<tr><td>Clave de acceso: </td><td><input type="password" id="psw1"></td></tr>
<tr><td>Verificar clave de acceso: </td><td><input type="password" id="psw2"></td></tr>
<tr><td id="mostrarValidacionContrasena" colspan="2"></td></tr>
<tr><td colspan="2" align="center"><input type="button" id="registroNuevoUsuario" class="btn waves-effect waves-orange" value="Registrarse"></td></tr>
<tr><td style="display: none;">Casilla vacia</td></tr>
</table>
</div>


<footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="black-text"><%= Util.UNIVERSIDAD_METROPOLITANA %></h5>
                <p class="black-text text-lighten-4">
                    <%= Util.DIRECCION_UNIVERSIDAD %>
                    <br><%= Util.TELEFONO_UNIVERSIDAD %>
                    <br><%= Util.CORREO_UNIVERSIDAD %>
                </p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="black-text">Sitios de interes</h5>
                <ul>
                  <li><a class="black-text text-lighten-3" href="#!">Enlace 1</a></li>
                  <li><a class="black-text text-lighten-3" href="#!">Enlace 2</a></li>
                  <li><a class="black-text text-lighten-3" href="#!">Enlace 3</a></li>
                  <li><a class="black-text text-lighten-3" href="#!">Enlace 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
              <div class="container black-text">
            © 2016 Powered by IMCE
            <a class="black-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>