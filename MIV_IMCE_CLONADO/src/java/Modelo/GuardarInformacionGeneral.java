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
import java.util.LinkedList;
import java.util.Queue;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.JOptionPane;

/**
 *
 * @author Eduardo Carbajal Reyes
 */
@WebServlet(name = "GuardarInformacionGeneral", urlPatterns = {"/GuardarInformacionGeneral"})
public class GuardarInformacionGeneral extends HttpServlet {

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

        String asunto = request.getParameter("asunto");
        String mensaje = request.getParameter("mensaje");
        String fechaInicio = request.getParameter("fechaInicio");
        String fechaFin = request.getParameter("fechaFin");
        String publico = request.getParameter("publico");
        
        String sqlRecuperarIdEspecialidad = null;
        String sqlInsertaInformacion = null;
        String sqlRecuperaIdInformacion = null;
        ResultSet idGrupos = null;
        ResultSet claveInfo = null;
        String claveInformacion = null;
        Queue<String> consultasInserccionTablaInfoGrupo = new LinkedList();
        String sqlInserccionTablaInfoGrupo = "";
        
        Persistence per = new Persistence();
        
        //Arreglo con cada carrera que fue seleccionado en el formulario
        String [] especialidadInformacion = publico.split("-");
        
        
        //Switch para que haga una determianda acción con cada carrera
        for(int ei = 0 ; ei < especialidadInformacion.length ; ei++){
            switch(especialidadInformacion[ei]){
                case "ITIC":
                    //sentencia para recuperar todos los id's de los grupos que sean de ITI
                    sqlRecuperarIdEspecialidad = "select id_grupo from grupo where id_especialidad=(select id_especialidad from especialidad where especialidad='"+Util.ITI+"');";
                    idGrupos = per.consulta(sqlRecuperarIdEspecialidad);
                    
                    if (idGrupos == null) {//En caso de no existir grupos relacionados con la especialidad
                        out.println("No existen grupos relacionados a esta especialidad");
                    } else {
                        sqlInsertaInformacion = "insert into informacion values(null,'" + asunto + "','" + mensaje + "','" + fechaInicio + "','" + fechaFin+"',1);";
                        if (per.insertar(sqlInsertaInformacion).equals("guardado exitosamente")) {//Si la información se guardo correctamente
                            try {
                                sqlRecuperaIdInformacion = "select id_informacion from informacion order by(id_informacion) desc limit 1;";
                                claveInfo = per.consulta(sqlRecuperaIdInformacion);
                                while(claveInfo.next()){
                                    claveInformacion = claveInfo.getString("id_informacion");
                                }
                                
                                idGrupos = null;
                                idGrupos = per.consulta(sqlRecuperarIdEspecialidad);
                                
                                while (idGrupos.next()) {//Agregar las consultas a la fila
                                    out.println(per.insertar("insert into informacion_grupo (id_informacion, id_grupo) values("+claveInformacion+","+idGrupos.getString("id_grupo")+");"));
                                    break;
                                }
                                
                                
//                                while (consultasInserccionTablaInfoGrupo.poll() != null) {//Desencolamos y el valor se compara con null
//                                      System.out.println(per.insertar(consultasInserccionTablaInfoGrupo.peek()));
//                                }
                                
                                //Quitar el null que se agrega al final de la cadena y que marca error SQL
//                                out.println(sqlInserccionTablaInfoGrupo.replace("null", ""));

//                                System.out.println(sqlInserccionTablaInfoGrupo.replace("null", "").trim());
//                                out.println(per.insertar(sqlInserccionTablaInfoGrupo.replace("null", "").trim()));
                                
                            } catch (SQLException ex) {
                                out.println(Util.ERROR_GUARDAR_INFORMACION+ex);
                            }
                        }else{//Error al guardar la información
                            out.println(Util.ERROR_GUARDAR_INFORMACION);
                        }

                    }
                    
                    break;
                    
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
