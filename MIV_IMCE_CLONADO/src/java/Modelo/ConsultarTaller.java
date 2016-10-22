/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo;

import Controlador.Persistence;
import Modelo.entidades.Taller;
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
@WebServlet(name = "ConsultarTaller", urlPatterns = {"/ConsultarTaller"})
public class ConsultarTaller extends HttpServlet {

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
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        ResultSet cdr;
        String status = null;

        String idTaller = request.getParameter("idTaller");
        Taller taller = Taller.getTaller();
        taller.asignarDatosTaller(idTaller);
        cdr = per.consulta("select * from lugar");

        if (taller.getStatus().equals("1")) {
            status = "checked";
        } else if (taller.getStatus().equals("0")) {
            status = "";
        }

        out.println("<input type='text' id='idTaller' style='display:none' value='"+taller.getIdTaller()+"'>");
        out.println("<table>");
        out.println("<tr>"
                + "<td>" + Util.NOMBRE_TALLER + "</td>"
                + "<td><input type='text' value='" + taller.getNombreTaller() + "' id='actualizarNombreTaller'></td>"
                + "</tr>");
        out.println("<tr>"
                + "<td>" + Util.DESCRIPCION_TALLER + "</td>"
                + "<td><div class=\"input-field col s12\">\n"
                + "<textarea id=\"descripcionTaller\" class=\"materialize-textarea\" length=\"100\">" + taller.getDecripcionTaller() + "</textarea>\n"
                + "<label for=\"mensaje\">" + Util.DESCRIPCION_TALLER + "</label>\n"
                + "</div></td>"
                + "</tr>");
        out.println("<tr>"
                + "<td>" + Util.HORARIO_TALLER + "</td>"
                + "<td><input type='text' id='actualizarHorarioTaller' value='" + taller.getHorarioTaller() + "'></td>"
                + "</tr>");
        out.println("<tr>"
                + "<td>" + Util.LUGAR_TALLER + "</td>"
                + "<td><div class='input-field col s12'>"
                + "<select id='actualizarLugarTaller' name='actualizarLugarTaller'>"
                + "<option disabled selected value=''>Seleccione una opción</option>");
        try {
            while (cdr.next()) {
                if(cdr.getString(2).equals(taller.getLugarTaller())){
                out.println("<option selected value='" + cdr.getString(1) + "'>" + cdr.getString(2) + "</option>");
                }else{
                     out.println("<option value='" + cdr.getString(1) + "'>" + cdr.getString(2) + "</option>");
                }
            }
        } catch (SQLException ex) {
            Logger.getLogger(ConsultarTaller.class.getName()).log(Level.SEVERE, null, ex);
        }
        out.println("/select></div></td></tr>");

        out.println("<tr><td>" + Util.TALLER_ACTIVO + "</td>");
        out.println("<td><div class=\"switch\">\n"
                + "    <label>\n"
                + "      No\n"
                + "      <input id='statusTaller' type=\"checkbox\" " + status + ">\n"
                + "      <span class=\"lever\"></span>\n"
                + "      Si\n"
                + "    </label>\n"
                + "  </div></td>");
        out.println("<tr><td> <a id=\"actualizarInfoTaller\" class=\"waves-effect waves-orange btn\" href=\"#\">Actualizar datos</a><br><br></td></tr>");

        out.println("");
        out.println("");
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
