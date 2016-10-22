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
@WebServlet(name = "cargarDetalleInformacionGeneral", urlPatterns = {"/cargarDetalleInformacionGeneral"})
public class cargarDetalleInformacionGeneral extends HttpServlet {

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
        Persistence per = new Persistence();
        ResultSet cdr = null;

        String modulo = request.getParameter("modulo");

        if (modulo.equals("horarios")) {
            cdr = per.consulta("select h.id_horario, g.nombre from horario h INNER JOIN grupo g ON g.id_horario = h.id_horario where h.status=1;");
            out.println("<h2>"+Util.HORARIOS+"</h2>");
            out.println("<h3>" + Util.LEYENDA_SELECCIONE_HORARIO_PROFESOR_GRUPO + "</h3>");
            out.println(" <div class=\"input-field col s12\">\n"
                    + "                <select id=\"opcionAConsultar\">\n"
                    + "                  <option disabled selected id=''>Seleccione una opción</option>");
            out.println("<option value='grupo'>Grupo</option>");
             out.println("<option value='profesor'>Profesor</option>");
           
            out.println("                </select>\n"
                    + "<label>Seleccione una opción del menú</label>\n"
                    + "</div>");
            out.println("<div id='tablaHorarios' style='display:none'></div>");

        } else if (modulo.equals("calendarioEscolar")) {
             out.println("<h2>"+Util.CALENDARIO_ESCOLAR+"</h2>");
            out.println("<iframe src='../DocumentosPDF/CalendarioEscolar/CalendarioEscolar.pdf' style='width:950px; height:500px;' frameborder='0'></iframe>");

        } else if (modulo.equals("talleres")) {
            String detalleTaller = "";
            cdr = per.consulta("select t.nombre_taller, t.descripcion, t.horario, l.nombre from taller t INNER JOIN lugar l ON l.id_lugar = t.id_lugar where t.status=1;");

             out.println("<h2>"+Util.TALLERES+"</h2>");
            out.println("<h3>" + Util.HAGA_CLICK_MAS_DETALLES + "</h3>");

            out.println("<ul class=\"collapsible\" data-collapsible=\"accordion\">");
            try {
                while (cdr.next()) {
                    detalleTaller = "Descripción: "+cdr.getString(2)+"</br>"
                            + "Horario: "+cdr.getString(3)+"</br>"
                            + "Lugar del taller: "+cdr.getString(4);

                    out.println("<li>");
                    out.println(" <li>\n"
                            + "      <div class=\"collapsible-header\">" + cdr.getString(1) + "</div>\n"
                            + "      <div class=\"collapsible-body\"><p>"+ detalleTaller + "</p></div>\n"
                            + "    </li>");
//                            + "<div class=\\\"collapsible-header\\\">" + cdr.getString(2) + "</div>"
//                            + "<p><div class=\\\"collapsible-body\\\"><p>" + cdr.getString(3) + "</p></div>"
                    out.println("</li>");
                }
            } catch (SQLException ex) {
                Logger.getLogger(cargarDetalleInformacionGeneral.class.getName()).log(Level.SEVERE, null, ex);
            }
            out.println("</ul>");

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
