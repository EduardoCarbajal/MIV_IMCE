<%-- 
    Document   : informacionGeneralAdmon
    Created on : 16/08/2016, 01:17:37 PM
    Author     : Eduardo Carbajal Reyes
--%>

<%@page import="Modelo.Util"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <body>
        <h1><%= Util.GESTION_INFORMACION_GENERAL%></h1>
        <%= Util.SELECCIONE_MODULO_GESTIONAR%>
        <table id="tablaGestionModulos">
            <tr>
                <td>
                    <div class="card small orange">
                        <div class="card-image waves-effect waves-block waves-orange">
                            <img class="activator" src="../img/mods/modUsuarios.jpg">
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4"><%= Util.USUARIOS%></span>
                            <p><%= Util.CONSULTA_MODIFICACION_BAJA_USUARIOS%></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4"><%= Util.USUARIOS%></span>
                            <p><%= Util.SELECCIONE_ACCION_REALIZAR%><br>
                                <!--<a href="#">Crear usuario</a><br>-->
                                <!--<a href="#">Dar de baja a un usuario</a><br>-->
                                <a href="#" id="modGestionModificarUsuario"><%= Util.CONSULTA_MODIFICACION_BAJA_USUARIOS%></a><br>
                                <!--<a href="#" id="modGestionConsultarUsuario">Consultar usuarios</a></p>-->
                        </div>
                    </div>
                </td>
                <td>
                    <div class="card small orange">
                        <div class="card-image waves-effect waves-block waves-orange">
                            <img class="activator" src="../img/mods/modInfoEscolar.jpg">
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4"><%= Util.INFORMACION_INSTITUCIONAL%></span>
                            <p><%= Util.VISUALIZAR_MODIFICAR_ELIMINAR_Y_AGREGAR_INFORMACION%></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4"><%= Util.INFORMACION_INSTITUCIONAL%></span>
                            <p><%= Util.SELECCIONE_ACCION_REALIZAR%><br>
                                <a href="#" id="modGestionAltaInformacion"><%= Util.ALTA_INFORMACION%></a><br>
                                <a href="#" id="modGestionModificacionInformacion"><%= Util.CONSULTA_MODIFICACION_BAJA_INFORMACION%></a><br>
                        </div>
                    </div>
                </td>
            </tr>



            <tr>
                <td>
                    <div class="card small orange">
                        <div class="card-image waves-effect waves-block waves-orange">
                            <img class="activator" src="../img/mods/modHorarios.jpg">
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4"><%= Util.HORARIOS%></span>
                            <p><%= Util.CONSULTA_MODIFICACION_ELIMINACION_HORARIOS%></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Horarios</span>
                            <p>Seleccione que acción desea realizar:<br>
                                <a href="#" id="mosGestionAltaHorarios"><%= Util.ALTA_HORARIOS%></a><br>
                                <a href="#" id="modGestionConsultaModificacionHorarios"><%= Util.CONSULTA_MODIFICACION_ELIMINACION_HORARIOS%></a><br>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="card small orange">
                        <div class="card-image waves-effect waves-block waves-orange">
                            <img class="activator" src="../img/mods/talleres.png">
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4"><%= Util.TALLERES%></span>
                            <p><%= Util.GESTION_TALLERES%></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4"><%= Util.TALLERES%></span>
                            <p><%= Util.SELECCIONE_ACCION_REALIZAR%><br>
                                <a href="#" id="modGestionAltaTaller"><%= Util.ALTA_INFORMACION_TALLERES%></a><br>
                                <a href="#" id="modGestionConsultaModificaTaller"><%= Util.CONSULTA_MODIFICACION_ELIMINACION_HORARIOS%></a><br>
                        </div>
                    </div>
                </td>
            </tr>

            <tr>
                <td>
                    <div class="card small orange">
                        <div class="card-image waves-effect waves-block waves-orange">
                            <img class="activator" src="../img/mods/calendarioEscolar.png">
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4"><%= Util.CALENDARIO_ESCOLAR%></span>
                            <p><%= Util.GESTION_CALENDARIO_ESCOLAR%></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4"><%= Util.CALENDARIO_ESCOLAR%></span>
                            <p><%= Util.SELECCIONE_ACCION_REALIZAR%><br>
                                <a href="#" id="modGestionModificarCalendarioEscolar"><%= Util.CONSULTA_MODIFICACION_ELIMINACION_CALENDARIO_ESCOLAR%></a><br>
                        </div>
                    </div>
                </td>
                <td>

                </td>
            </tr>



        </table>   



        <!--Ventana modal para cargar las páginas de gestion-->
        <div id="ventanaModalGestionInfoGral" style="display:none">

        </div>

        <div id="ventanaModalSecundaria" style="display: none">

        </div>


    </body>
</html>
