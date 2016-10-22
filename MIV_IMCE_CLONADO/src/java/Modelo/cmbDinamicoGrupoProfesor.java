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
@WebServlet(name = "cmbDinamicoGrupoProfesor", urlPatterns = {"/cmbDinamicoGrupoProfesor"})
public class cmbDinamicoGrupoProfesor extends HttpServlet {

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
        
        String tipoCombo = request.getParameter("tipoCombo");
        Persistence per = new Persistence();
        String consulta = tipoCombo.equals("grupo") ? "select id_grupo, nombre from grupo;" : "select id_usuario, nombre, ap_paterno, ap_materno from usuario where id_usuario in(select id_usuario from profesor);";
        ResultSet cdrComboDinamico = per.consulta(consulta);
        
        try {        
       if(tipoCombo.equals("grupo")){
            
            out.println("<div class=\"input-field col s12\">");
            out.println("<select id='cmbDinamicoGrupoProfesor' name='cmbDinamicoGrupoProfesor'>");
            out.println("<option disabled selected>"+Util.SELECCIONE_GRUPO+"</option>");
            while(cdrComboDinamico.next()){
                out.println("<option value='"+cdrComboDinamico.getString("id_grupo")+"'>"+cdrComboDinamico.getString("nombre")+"</option>");
            }
            out.println("</select><div>");
        
       }else if(tipoCombo.equals("profesor")){
           
            out.println("<div class=\"input-field col s12\">");
            out.println("<select id='cmbDinamicoGrupoProfesor' name='cmbDinamicoGrupoProfesor'>");
            out.println("<option disabled selected>"+Util.SELECCIONE_PROFESOR+"</option>");
            while(cdrComboDinamico.next()){
                out.println("<option value='"+cdrComboDinamico.getString("id_usuario")+"'>"+cdrComboDinamico.getString("nombre")+" "+cdrComboDinamico.getString("ap_paterno")+" "+cdrComboDinamico.getString("ap_materno")+"</option>");
            }
            out.println("</select><div>");
        
       }
       
       } catch (SQLException ex) {
            Logger.getLogger(cmbDinamicoGrupoProfesor.class.getName()).log(Level.SEVERE, null, ex);
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
