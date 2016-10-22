/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo;

import Controlador.Persistence;
import Modelo.entidades.Usuario;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Eduardo Carbajal Reyes
 */
@WebServlet(name = "consultarUsuario", urlPatterns = {"/consultarUsuario"})
public class consultarUsuario extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
            processRequest(request, response);
            
            response.setContentType("text/html;charset=UTF-8");
            PrintWriter out = response.getWriter();
            
            String idUsuario = request.getParameter("idUsuario");
            String selectedAdmin = "";
            String selectedUsuario = "";
            String status = "";
            
            Usuario usuario = new Usuario();
            usuario.asignarDatosUsuario(idUsuario);
            
            if(usuario.getNivel_acceso().equals("1")){
                selectedAdmin = "selected";
            }else if(usuario.getNivel_acceso().equals("0")){
                selectedUsuario = "selected";
            }
            
            if(usuario.getStatus().equals("1")){
                status = "checked";
            }else if(usuario.getStatus().equals("0")){
                status="";
            }
            
            out.println("<table>");
                    out.println("<input type='text' disabled='true' style='display:none' id='idUsuarioModUsuario' value='"+usuario.getId_usuario()+"'>");
                    out.println("<tr><td>Clave de usuario</td>");
                    out.println("<td><input type='text' id='claveUsuarioModUsuario' disabled value='"+usuario.getClaveUsuario()+"'></td></tr>");
                    out.println("<tr><td>Nombre de usuario</td>");
                    out.println("<td><input type='text' id='nomUsuarioModUsuario' value='"+usuario.getNombre()+"'></td></tr>");
                    out.println("<tr><td>Apellido paterno</td>");
                    out.println("<td><input type='text' id='patUsuarioModUsuario' value='"+usuario.getAp_paterno()+"'></td></tr>");
                    out.println("<tr><td>Apellido materno</td>");
                    out.println("<td><input type='text' id='matUsuarioModUsuario' value='"+usuario.getAp_materno()+"'></td></tr>");
                    out.println("<tr><td>Correo electrónico</td>");
                    out.println("<td><input type='text' id='emailUsuarioModUsuario' value='"+usuario.getEmail()+"'></td></tr>");
                    out.println("<tr><td>Tipo de usuario</td>");
                    out.println("<td> <div class=\"input-field col s12\">"
                            + "<select disabled id='tipoUsuarioModUsuario'>"
                            + "<option>Seleccione una opción</option>"
                            + "<option "+selectedAdmin+">Administrador</option>"
                            + "<option "+selectedUsuario+">Usuario estándar</option>"
                            + "</select></div></td>");
                    out.println("<tr><td>Usuario Activo</td>");
                    out.println("<td><div class=\"switch\">\n" +
                    "    <label>\n" +
                    "      No\n" +
                    "      <input id='statusUsuarioModUsuario' type=\"checkbox\" "+status+">\n" +
                    "      <span class=\"lever\"></span>\n" +
                    "      Si\n" +
                    "    </label>\n" +
                    "  </div></td>");
                    out.println("<tr><td> <a id=\"actualizarInformacion\" class=\"waves-effect waves-orange btn\" href=\"#\">Actualizar datos</a><br><br></td></tr>");
            out.println("</table>");
        
        
        
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
