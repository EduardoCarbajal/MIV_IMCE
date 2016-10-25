<%-- 
    Document   : sesion
    Created on : 12/04/2016, 01:25:54 AM
    Author     : m_cr2
--%>
<%@page import="java.sql.ResultSet"%>
<%@page import="Modelo.entidades.Usuario"%>
<%@page import="Controlador.Persistence"%>
<%@page import="Modelo.Util" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<head>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" charset="utf-8">
        <link rel="stylesheet" type="text/css" href="../js/jqueryUI/jquery-ui.css">
        <link rel="stylesheet" type="text/css" href="../css/materialize.css">
        <!--<link rel="stylesheet" type="text/css" href="../js/fancyBox/jquery.fancybox.css">-->
        <link rel="stylesheet" type="text/css" href="../css/datetimepicker.css">
        <link rel="stylesheet" type="text/css" href="../css/styles.css">
        <link rel="stylesheet" type="text/css" href="../js/dataTables/dataTables.css">
        <link rel="stylesheet" type="text/css" href="../js/alertify/css/alertify.css">
        <!--<link rel="stylesheet" type="text/css" href="../js/bxslider/jquery.bxslider.css">-->
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
        <title><%= Util.MIV %></title>
        
        
        <%
            String usuario = null;
            usuario = (String) session.getAttribute("usuario");
            HttpSession sesion = request.getSession();
            Usuario us = new Usuario();
            Persistence per = new Persistence();
            if (usuario == null || usuario.trim() == null || usuario.trim() == "") {
        %>
        <script type='text/javascript'>window.location='../../index.jsp'</script>
</head>
    <% 
        }else{
            String identificadorUsuario = String.valueOf(sesion.getAttribute("usuario"));
            String idUsuario = null;
            String query = "SELECT us.id_usuario from usuario us INNER JOIN administrador ad "
                    + "ON us.id_usuario = ad.id_usuario WHERE numero_empleado='"+identificadorUsuario+"'";
            ResultSet cdrDU = per.consulta(query);
            while(cdrDU.next()){
                idUsuario = cdrDU.getString("id_usuario");
            }
            if(idUsuario != null){
               us.asignarDatosUsuario(idUsuario); 
            }else{
                query = "SELECT us.id_usuario from usuario us INNER JOIN alumno al "
                    + "ON us.id_usuario = al.id_usuario WHERE matricula='"+identificadorUsuario+"'";
                ResultSet cdrAl = per.consulta(query);
                while(cdrAl.next()){
                    idUsuario = cdrAl.getString("id_usuario");
                }
                
                us.asignarDatosUsuario(idUsuario);
            }

            String tUsuario = us.getNivel_acceso();

        %>       
                    
<header>
<!--<h1 id="Bienvenida"><%= Util.BIENVENIDA_MIV %></h1>
<div class="menu_bar">
	<a href="#" class="bt-menu"><span><img class="hamburguer" src="img/hamburguer.png"></span>Menú</a>
</div>
<p id="usuariolog"><%="Bienvenid@ "+us.getNombre()+" "+us.getAp_paterno()+" "+us.getAp_materno()%></p>-->

<div class="navbar-fixed">

<nav id="nav">
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo"><%= Util.UNIVERSIDAD_SIGLAS %></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#" id="pagInicioSesion"><img src="../img/Icons/ic_home_black_24dp_2x.png" height="40px"><%= Util.INICIO %></a></li>
        <li><a href="#" id="trazaRuta"><img src="../img/Icons/ic_navigation_black_24dp_2x.png" height="40px"><%= Util.TRAZAR_RUTAS %></a></li>
        <li><a href="#" id="mapascroquis"><img src="../img/Icons/ic_language_black_24dp_2x.png" height="40px"><%= Util.MAPAS_CROQUIS %></a></li>
        <li><a href="#" id="informacionGeneral"><img src="../img/Icons/ic_info_outline_black_24dp_2x.png" height="40px"><%= Util.INFORMACION_GENERAL %></a></li>
        <li><a href="#" id="logout"><img src="../img/Icons/ic_lock_open_black_24dp_2x.png" height="40px"><%= Util.CERRAR_SESION+ " de "+us.getNombre()+" "+us.getAp_paterno()+" "+us.getAp_materno()%> </a></li>
      </ul>
    </div>
  </nav>
</div>
</header>
        <body>
            
            <input type="text" value="<%=us.getNivel_acceso()%>" id="tUsu" disabled="true" hidden="true">
<div id="contenedor" class="contenedor">
<div class="diapositivas" id='diapositivas'>
    
    <h1 id="Bienvenida"><%= Util.BIENVENIDA_MIV %></h1>
    <%@include file="principalSesion.jsp" %>
	    <% 
 }%>
</div>
<div class="otroContenidoSesion">
</div>
</div>
<!--Creación de div que contiene el formulario de inicio de sesión -->
<!--<div id="ventanaModal" style="display: none;">
<table id="tblLogin">
    <tr><td>Usuario: </td><td><input type="text" id="usr" maxlength="10" onkeypress="return validarNumeros(event)">/td></tr>
<tr><td>Clave de acceso: </td><td><input type="password" id="psw"></td></tr>
<tr><td colspan="2" align="center"><input type="button" id="acceder" value="Acceder"></td></tr>
<tr><td style="display: none;">Casilla vacia</td></tr>
<tr><td colspan="2" align="right">&iquest;Usuario nuevo? <a href="#" id="registroUsuario">Registrate</a></td></tr>
</table>
</div>-->


</body>
<!--<footer id="footer">Copyright 2016 Powered by IMCE</footer>-->
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
                <h5 class="black-text">Vinculos importantes</h5>
                <ul>
                  <li><a class="black-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="black-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="black-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="black-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
              <div class="container black-text">
            <%= Util.POWERED_BY_IMCE %>
            <a class="black-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
            
            <script type="text/javascript" src="../js/jquery.js"></script>
            <script type="text/javascript" src="../js/materialize.js"></script>
             <script type="text/javascript" src="../js/ManejadorEventos.js"></script>
            <!--<script type="text/javascript" src="../js/fancyBox/jquery.fancybox.js"></script>-->
            <script type="text/javascript" src="../js/jqueryUI/jquery-ui.js"></script>
            <script type="text/javascript" src="../js/ManejadorEventosSesion.js"></script>
            <script type="text/javascript" src="../js/menu.js"></script>
            <script type="text/javascript" src="../js/alertify/alertify.js"></script>
            <!--<script type="text/javascript" src="../js/bxslider/jquery.bxslider.js"></script>-->
            <script type="text/javascript" src="../js/dataTables/dataTables.js"></script>
            <script type="text/javascript" src="../js/datetimepicker.js"></script>
        </body>
</html>
