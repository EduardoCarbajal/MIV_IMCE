package Modelo;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Eduardo Carbajal Reyes
 */
@WebServlet(urlPatterns = {"/dibujarMapa"})
public class dibujarMapa extends HttpServlet {

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
        String mapaElegido = request.getParameter("option");
        out.println("<br><h3>Usted eligió el mapa "+mapaElegido+"</h3><br>");
        switch(mapaElegido.trim()){
            case "General":
                out.print("<a class=\"fancybox\" rel=\"group\" href='../../Vista/img/Mapas/planoGeneral.jpg'>"
                        + "<img class='materialboxed responsive-img initialized' width=\"200\"  alt='Mapa' src='../../Vista/img/Mapas/planoGeneral.jpg'/></a>");
                break;
            case "Edificio C":
                 out.print("<a class=\"fancybox\" rel=\"group\" href='../../Vista/img/Mapas/CPB.png'><img width=\"200\" alt='Mapa' src='../../Vista/img/Mapas/CPB.png'/></a>"
                    + "<a class=\"fancybox\" rel=\"group\" href='../../Vista/img/Mapas/CPA.png'><img width=\"200\" alt='Mapa' src='../../Vista/img/Mapas/CPA.png'/></a>");
                break;
            default:
                out.print("<a class=\"fancybox\" rel=\"group\" href='../../Vista/img/Mapas/p1.jpg'><img width=\"200\" alt='Mapa' src='../../Vista/img/Mapas/p1.jpg'/></a>"
                    + "<a class=\"fancybox\" rel=\"group\" href='../../Vista/img/Mapas/p2.jpg'><img width=\"200\" alt='Mapa' src='../../Vista/img/Mapas/p2.jpg'/></a>");
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
