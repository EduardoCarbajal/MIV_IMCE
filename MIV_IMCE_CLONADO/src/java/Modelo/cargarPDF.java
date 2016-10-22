/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo;

import Controlador.Persistence;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

/**
 *
 * @author Eduardo Carbajal Reyes
 */
@WebServlet(name = "cargarPDF", urlPatterns = {"/cargarPDF"})
public class cargarPDF extends HttpServlet {
    
    private String result = "";
     private String id = "";
     
           String grupoProfesor = null;
           String idGrupoProfesor = null;
           
        String fileName = null;
        String tipo;
        String valorCampo;
        Persistence per = new Persistence();
    
      private ServletFileUpload configure() {
        DiskFileItemFactory factory = new DiskFileItemFactory();
        ServletFileUpload sfu = new ServletFileUpload(factory);
        System.out.println("Objetos creados");

        int thr = 64*1024; // 64 KBytes
        factory.setSizeThreshold(thr);
        System.out.println("Limite de memoria " + thr);

        int sm = 3*1024*1024; // 5 MByte
        sfu.setSizeMax(sm);
        System.out.println("Limite de tamanio " + sm);

        return sfu;
    }
      
       private void upload(HttpServletRequest request, ServletFileUpload sfu)
            throws FileUploadException, Exception {
        List fileItems = sfu.parseRequest(request);
//        System.out.println(fileItems.size() + " parÃ¡metros recibidos");

        // Iteramos por cada parÃ¡metro recibido
        FileItem param = null;
//        System.out.println("Comenzamos la iteraciÃ³n");
        for (Object item : fileItems) //For each
        {
            param = (FileItem)item;
            if (param.isFormField()) { //datos
                
               if(param.getFieldName().equals("seleccionGrupoProfesor")){
                   grupoProfesor = param.getString();
               }else if(param.getFieldName().equals("cmbDinamicoGrupoProfesor")){
                   idGrupoProfesor = param.getString();
               }
               
               if(grupoProfesor != null){
                   idGrupoProfesor = param.getString();
               }
//                System.out.println("Recibiendo " + param.getFieldName() + " = " + param.getString());
//                id = param.getString();
            } else { //archivos
//                System.out.println("Recibiendo " + param.getFieldName() + " = " + param.getName());
                fileName = param.getName();

                // construimos un objeto file para recuperar la ruta completa
                File file = new File(param.getName()); //Cambia el nombre
                System.out.println("El nombre del archivo será " + param.getName());
                
                //ruta por defecto para guardar
//                System.out.println(file.getAbsolutePath());

                //usamos solo el nombre y asignamos nuestra ruta
                
                file = new File("C:\\\\Users\\\\m_cr2\\\\Desktop\\\\MIV_IMCE\\\\web\\\\Vista\\\\DocumentosPDF\\\\Horarios\\" + file.getName());
                param.write(file);
//                System.out.println(file.getAbsolutePath());
            }
        }
        
        result += "Archivo "+fileName+" para el grupo "+grupoProfesor+ " "+idGrupoProfesor;
    }

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
 try {
      ServletFileUpload sfu;
              sfu = configure();
            
            upload(request, sfu);
//            result = "Horario subido correctamente";
//out.println("Archivo "+fileName+" para el "+grupoProfesor+ " con id "+idGrupoProfesor);
String query = "insert into horario values(null,'"+fileName+"',1);";
String queryGrupoProfesor = grupoProfesor.equals("grupo") ? "update grupo set id_horario=(select id_horario from horario order by(id_horario) desc limit 1) where id_grupo ="+idGrupoProfesor+";" : "update profesor set id_horario=(select id_horario from horario order by(id_horario) desc limit 1) where id_usuario ="+idGrupoProfesor+";";

out.println(per.insertar(query));
out.println(per.insertar(queryGrupoProfesor));

            
            
        } catch (FileUploadException ex) {
            result += "Upload error: "+ ex.getMessage();
        } catch (Exception ex) {
//            result += "Error: "+ ex.getMessage();
        } finally {
            out.println("Horario subido corrctamente");
            out.close();
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
