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
@WebServlet(name = "CargarTrazarRuta", urlPatterns = {"/CargarTrazarRuta"})
public class CargarTrazarRuta extends HttpServlet {

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
        String query = "select * from lugar";
        ResultSet cdr = per.consulta(query);
        String options = "";
        
        try {
                            while(cdr.next()){
                                options += "<option value='"+cdr.getString(2)+"'>"+cdr.getString(2)+"</option>";
                            }
                        } catch (SQLException ex) {
                            Logger.getLogger(CargarTrazarRuta.class.getName()).log(Level.SEVERE, null, ex);
                        }
        
        String rutaImagen = request.getParameter("rutaImagen");
        
        out.println("<h1>Trazar ruta</h1>\n" +
"        <p>"+Util.DESCRIPCION_TRAZAR_RUTA+"</p>\n" +
"        \n" +
"            <table>\n" +
"                <tr>\n" +
"                    <td>Origen:</td>\n" +
"                    <td> \n" +
"                        <div class='input-field col s12'>\n" +
"                        <select id='origenTrazarRuta'>"
                + "<option value='' disabled selected value=''>Seleccione una opción</option>");
                        
        
                out.println(options+"</select>\n" +
"                        </div>\n" +
"                    </td>\n" +
"                    <td>Destino:</td>\n" +
"                    <td>\n" +
"                        <div class='input-field col s12'>\n" +
"                        <select id='destinotrazarRuta'>"
                 + "<option value='' disabled selected value=''>Seleccione una opción</option>");
                       
                    out.println(options+"</select>\n" +
"                        </div>\n" +
"                    </td>\n" +
                " <td><a id=\"btntrazarRuta\" class=\"waves-effect waves-orange btn\" href=\"#\">"+Util.TRAZAR_RUTAS+"</a></td>"+
"                </tr>\n" +
"                <tr>\n" +
"                </tr>\n" +
"            </table>\n" +
"        <canvas id=\"canvasTrazarRuta\" width=\"700\" height=\"700\" style=\"border:1px solid #000000;\">\n" +
"            <p>El navegador no soporta canvas</p>\n" +
"        </canvas>");
        out.println("<div style=\"display:none;\">\n" +
"  <img id=\"source\" src='"+rutaImagen+"'\n" +
"       width=\"600\" height=\"600\">\n" +
"</div>");
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
