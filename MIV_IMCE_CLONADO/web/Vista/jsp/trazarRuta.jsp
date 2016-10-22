<%-- 
    Document   : trazarRuta
    Created on : 18/04/2016, 09:45:58 AM
    Author     : Eduardo Carbajal Reyes
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <h1>Trazar ruta</h1>
        <p>En este apartado debe seleccionar un punto de origen y un punto de destino, posteriormente pulse
        el botón Trazar ruta y automaticamente aparecerá la ruta más corta.</p>
        
            <table>
                <tr>
                    <td>Origen:</td>
                    <td> 
                        <div class='input-field col s12'>
                        <select id='origenTrazarRuta'>
                            <option>Edificio A</option>
                            <option>Edificio B</option>
                            <option>Edificio C</option>
                        </select>
                        </div>
                    </td>
                    <td>Destino:</td>
                    <td>
                        <div class='input-field col s12'>
                        <select id='destinotrazarRuta'>
                            <option>Edificio A</option>
                            <option>Edificio B</option>
                            <option>Edificio C</option>
                        </select>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><input type="button" id="btntrazarRuta" value="Trazar ruta"></td>
                </tr>
            </table>
        <canvas id="canvasTrazarRuta" width="350" height="350" style="border:1px solid #000000;">
            <p>El navegador no soporta canvas</p>
        </canvas>
        <p>Hola</p>
    </body>
</html>
