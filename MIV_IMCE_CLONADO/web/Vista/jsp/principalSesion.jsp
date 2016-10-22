<%-- 
    Document   : principalSesion
    Created on : 23/07/2016, 08:29:03 PM
    Author     : Eduardo Carbajal Reyes
--%>

<%@page import="java.sql.ResultSet"%>
<%@page import="Controlador.Persistence"%>
<%@page import="Modelo.Util" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%
                       if(us.getNivel_acceso().equals("0")){
               %>
               <div id="contenedorAnuncios">
                    <h1><%= Util.INFORMACION_RELEVANTE %></h1>
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
               
               <% }else{ %>
    <ul class="bxslider">
        <li><img class="imgSlider" src="../img/infoSlider3.png" alt="slider"></li>
            <li><img class="imgSlider" src="../img/infoSlider.png" alt="slider"></li>
          <li><img class="imgSlider" src="../img/infoSlider2.jpg" alt="slider"></li>
          <li><img class="imgSlider" src="../img/infoSlider4.jpg" alt="slider"></li>
        </ul>
            
            <% } %>
            </div>
    </body>
</html>
