/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.tomcat.util.http.fileupload.FileItem;
import org.apache.tomcat.util.http.fileupload.disk.DiskFileItemFactory;
import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;
import org.apache.tomcat.util.http.fileupload.servlet.ServletRequestContext;

/**
 *
 * @author Eduardo Carbajal Reyes
 */
@WebServlet(name = "actualizarCalendarioEscolar", urlPatterns = {"/actualizarCalendarioEscolar"})
public class actualizarCalendarioEscolar extends HttpServlet {

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

        File destino = new File("C:\\Users\\m_cr2\\Desktop\\MIV_IMCE\\web\\Vista\\DocumentosPDF\\CalendarioEscolar");
        ServletRequestContext src = new ServletRequestContext(request);
        String grupoProfesor = null;
        String propietarioHorario = null;
        String idGrupoProfesor = null;

        //Si el formulario es enviado con Multipart
        if (ServletFileUpload.isMultipartContent(request)) {
            try {
//                        out.println("Funciona?2");
                DiskFileItemFactory factory = new DiskFileItemFactory((1024 * 1024), destino);
                /*ServletFileUpload esta clase convierte los input file a FileItem*/
                ServletFileUpload upload = new ServletFileUpload(factory);
                List lista = upload.parseRequest(src);
//                        out.println(lista.size()+"parametros Recibidos");
                File file = null;

                String valorCampo;
                String nombreCampo;
                //recorre la lista
                Iterator it = lista.iterator();
                while (it.hasNext()) {
                    FileItem item = (FileItem) it.next();
                    item = (FileItem) item;

                    file = new File(item.getName());
                    /*Se escribe en el servidor*/
                    item.write(new File(destino, file.getName()));
                    out.println(Util.LEYENDA_ACTUALIZACION_HORARIO_CORRECTA);

                }

            } catch (Exception ex) {
//                     out.println(ex);   
            }

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
