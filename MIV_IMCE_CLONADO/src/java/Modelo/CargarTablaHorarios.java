/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo;

import Controlador.Persistence;
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
@WebServlet(name = "CargarTablaHorarios", urlPatterns = {"/CargarTablaHorarios"})
public class CargarTablaHorarios extends HttpServlet {

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
        Persistence per = new Persistence();
        ResultSet cdr = null;
        
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        
        String grupoProfesor = request.getParameter("grupoProfesor");
        if(grupoProfesor.equals("grupo")){
            cdr = per.consulta("select h.id_horario, g.nombre, es.especialidad, lu.nombre from horario h INNER JOIN grupo g ON g.id_horario = h.id_horario INNER JOIN lugar lu ON lu.id_lugar = g.id_lugar INNER JOIN especialidad es ON es.id_especialidad = g.id_especialidad where h.status=1;");
             out.println("<table id='tablaConsultaHorarios'>");
                    out.println("<thead>");
                    out.println("<tr>");
                    out.println("<td style='display:none'>id_horario</td>");
                    out.println("<td>Grupo</td>");
                    out.println("<td>Especialidad</td>");
                    out.println("<td>Edificio</td>");
                    out.println("</tr>");
                    out.println("</thead>");
                    out.println("<tbody>");
            
                try {
                    while(cdr.next()){
                        out.println("<tr>");
                        out.println("<td style='display:none'>"+cdr.getString("id_horario")+"</td>");
                        out.println("<td>"+cdr.getString(2)+"</td>");
                        out.println("<td>"+cdr.getString(3)+"</td>");
                        out.println("<td>"+cdr.getString(4)+"</td>");
                        out.println("</tr>");
                    }
                } catch (SQLException ex) {
                    Logger.getLogger(gestionInformacionGral.class.getName()).log(Level.SEVERE, null, ex);
                }
            
                    out.println("</tbody>");
                    out.println("</table>");
                    out.println("<div id='modalCargaHorarios' style='display:none'></div>");
            
        }else if(grupoProfesor.equals("profesor")){
            cdr = per.consulta("select pro.id_horario, usu.nombre, usu.ap_paterno, usu.ap_materno from usuario usu INNER JOIN profesor pro ON pro.id_usuario = usu.id_usuario INNER JOIN horario h ON h.id_horario = pro.id_horario where h.status = 1;");
             out.println("<table id='tablaConsultaHorarios'>");
                    out.println("<thead>");
                    out.println("<tr>");
                    out.println("<td style='display:none'>id_horario</td>");
                    out.println("<td>Apellido paterno</td>");
                    out.println("<td>Apellido materno</td>");
                    out.println("<td>Nombre(s)</td>");
                    out.println("</tr>");
                    out.println("</thead>");
                    out.println("<tbody>");
            
                try {
                    while(cdr.next()){
                        out.println("<tr>");
                        out.println("<td style='display:none'>"+cdr.getString("id_horario")+"</td>");
                        out.println("<td>"+cdr.getString(3)+"</td>");
                        out.println("<td>"+cdr.getString(4)+"</td>");
                        out.println("<td>"+cdr.getString(2)+"</td>");
                        out.println("</tr>");
                    }
                } catch (SQLException ex) {
                    Logger.getLogger(gestionInformacionGral.class.getName()).log(Level.SEVERE, null, ex);
                }
            
                    out.println("</tbody>");
                    out.println("</table>");
                    out.println("<div id='modalCargaHorarios' style='display:none'></div>");
            
        }
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
