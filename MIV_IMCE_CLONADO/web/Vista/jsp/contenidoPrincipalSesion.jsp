<%@page import="javax.swing.JOptionPane"%>
<%@page import="Modelo.entidades.Usuario"%>
<%@page import="Controlador.Persistence"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="Modelo.Util"%>
<header>
<h1 id="Bienvenida"><%= Util.BIENVENIDA_MIV %></h1>
<div class="menu_bar">
	<a href="#" class="bt-menu"><span><img class="hamburguer" src="img/hamburguer.png"></span>Menú</a>
</div>
<%
    Usuario us = new Usuario();
%>
<p id="usuariolog"><%= "Bienvenid@ "+us.getNombre()+" "+us.getAp_paterno()+" "+us.getAp_materno()%></p>

<nav id="nav">
    <div class="nav-wrapper">
      <!--<a href="#!" class="brand-logo">Logo</a>-->
      <ul class="right hide-on-med-and-down">
          <li><a href="#"><i class="material-icons left" id="pagInicioSesion">store</i>Inicio</a></li>
        <li><a href="#" id="trazaRuta"><i class="material-icons left">room</i>Trazar ruta</a></li>
        <li><a href="#" id="mapascroquis"><i class="material-icons left">language</i>Mapas y croquis</a></li>
        <li><a href="#"><i class="material-icons left">info_outline</i>Información general</a></li>
        <li><a href="#" id="logout"><i class="material-icons left">lock_outline</i>Cerrar sesión</a></li>
      </ul>
    </div>
  </nav>
</header>
<div id="contenedor" class="contenedor">
<div class="diapositivas">
	    <% 
                if(us.getNivel_acceso().equals("0")){
               %>
               <div id="contenedorAnuncios">
                    <h1>Anuncios importantes</h1>
                    <% 
                        Persistence pers = new Persistence();
                        String sqlInfo = "select info.id_informacion, asunto, descripcion, fecha_inicio, fecha_fin, status from informacion info "
                                + "INNER JOIN informacion_grupo info_gru ON info_gru.id_informacion = info.id_informacion "
                                + "INNER JOIN grupo ON grupo.id_grupo = info_gru.id_grupo "
                                + "INNER JOIN alumno al ON al.id_grupo = grupo.id_grupo "
                                + "where id_usuario ="+us.getId_usuario()+" and status = 1" ;
                        ResultSet info = pers.consulta(sqlInfo);
                        while(info.next()){
                          %> 
                           <div class="row">
                            <div class="col s12 m30">
                              <div class="card orange darken-1">
                                <div class="card-content black-text">
                                  <span class="card-title"><%=info.getString("asunto")%></span>
                                  <p>
                              <%=info.getString("descripcion")%></p>
                                </div>
                              </div>
                            </div>
                          </div>
                  <%}%>
               </div>
               <% }else{ %>
              <ul class="bxslider">
                    <li><img src="../img/infoSlider.png" width="700"></li>
                  <li><img src="../img/infoSlider2.jpg" width="700"></li>
                  <li><img src="../img/infoSlider.png" width="700"></li>
               </ul>
            
            <% } %>
</div>
</div>
<!--Creación de div que contiene el formulario de inicio de sesión -->
<div id="ventanaModal" style="display: none;">
<table id="tblLogin">
    <tr><td>Usuario: </td><td><input type="text" id="usr" maxlength="10" onkeypress="return validarNumeros(event)"></input></td></tr>
<tr><td>Clave de acceso: </td><td><input type="password" id="psw"></input></td></tr>
<tr><td colspan="2" align="center"><input type="button" id="acceder" value="Acceder"></input></td></tr>
<tr><td style="display: none;">Casilla vacia</td></tr>
<tr><td colspan="2" align="right">&iquest;Usuario nuevo? <a href="#" id="registroUsuario">Registrate</a></td></tr>
</table>
</div>


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
                <h5 class="black-text">Links</h5>
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
            © 2016 Powered by IMCE
            <a class="black-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>