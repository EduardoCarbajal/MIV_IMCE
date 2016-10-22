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
@WebServlet(name = "ConsultarHorario", urlPatterns = {"/ConsultarHorario"})
public class ConsultarHorario extends HttpServlet {
    Persistence per = new Persistence();
    ResultSet cdr = null;

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
          
          String idHorario = request.getParameter("idHorario");
          String consulta = "select * from horario where id_horario='"+idHorario+"'";
          String nombreArchivo = null;
          String status = null;
          
          cdr = per.consulta(consulta);
                    
        try {
            while(cdr.next()){
                nombreArchivo = cdr.getString(2);
                status = cdr.getString(3);
                
            }
            
            out.println("<iframe src='../DocumentosPDF/Horarios/"+nombreArchivo+"' style='width:950px; height:500px;' frameborder='0'></iframe>");
            out.println("<table>"
                    + "<tr><td><input class=\"waves-effect waves-orange btn\" id='btnCargarHorario' type='button' value='"+Util.BOTON_ACTUALIZAR_HORARIO+"'></td></tr>");
            out.println("<tr>");
             if(status.equals("1")){
                            out.println("<td>"+Util.ICONO_INFORMACION_ACTIVA+"</td>");
                        }else{
                            out.println("<td>"+Util.ICONO_INFORMACION_INACTIVA+"</td>");
                        }
                        out.println("</tr>");
            out.println("</table>");
        } catch (SQLException ex) {
            Logger.getLogger(ConsultarHorario.class.getName()).log(Level.SEVERE, null, ex);
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
