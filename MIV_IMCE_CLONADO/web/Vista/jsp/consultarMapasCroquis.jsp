<%-- 
    Document   : consultarMapasCroquis
    Created on : 25/06/2016, 05:29:07 PM
    Author     : Eduardo Carbajal Reyes
--%>

<%@page import="java.sql.ResultSet"%>
<%@page import="Controlador.Persistence"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <!--Checar esto porque tarda más en cargar la página, arreglar porque no carga el select para poder quitarlo-->
        <script src="../js/ManejadorEventos.js"></script>
    </head>
    <body>
        <h2>Consultar mapas y croquis de la institución</h2>
        
        <div class="input-field col s12">
                <select id="mapaCroquis">
                  <option>Seleccione una opción</option>
                  <option>General</option>
                  <%
                      Persistence per = new Persistence();
                      ResultSet cdr = null;
                      cdr = per.consulta("select * from lugar;");
                      while(cdr.next()){%>
                      <option><%= cdr.getString(2) %></option>  
                      <%}
                      
                      %>
                </select>
               <label>Seleccione un edificio</label>
              </div>
    <div id="Mapa">

    </div>
       
    </body>
</html>
