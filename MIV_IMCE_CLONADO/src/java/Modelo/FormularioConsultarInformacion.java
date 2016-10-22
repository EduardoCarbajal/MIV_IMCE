/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo;

import Modelo.entidades.Especialidad;
import Modelo.entidades.Grupo;
import Modelo.entidades.Informacion;
import Modelo.entidades.Informacion_grupo;
import java.io.IOException;
import java.io.PrintWriter;
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
@WebServlet(name = "FormularioConsultarInformacion", urlPatterns = {"/FormularioConsultarInformacion"})
public class FormularioConsultarInformacion extends HttpServlet {

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
        
        String idInformacion = request.getParameter("idInformacion");
        Informacion info = new Informacion();
        Informacion_grupo infoGrupo = new Informacion_grupo();
        Grupo grupo = new Grupo();
        Especialidad especialidad = new Especialidad();
        
        
        String status="";
        
         
        
        try {
            info.asignarInformacion(idInformacion);
            infoGrupo.asignarInformacionGrupo(idInformacion);
        grupo.asignarInformacionGrupo(infoGrupo.getIdGrupo());
        especialidad.asignarInformacionEspecialidades(grupo.getIdEspecialidad());
            
            if(info.getStatus().equals("1")){
                status = "checked";
            }else if(info.getStatus().equals("0")){
                status="";
            }
            
//            out.println(idInformacion);
             out.println(Util.LEYENDA_ACTUALIZAR_INFORMACION_GENERAL);
             out.println("<input type='text' style='display:none;' id='id_informacion' value='"+idInformacion+"'>");
                    out.println("<table>");
                    out.println("<tr><td>"+Util.ASUNTO+"</td>");
                    out.println("<td><input type='text' id='asuntoActualizar' value='"+info.getAsunto()+"'></td></tr>");
                    out.println("<tr><td>"+Util.DESCRIPCION+"</td><td> <div class=\"input-field col s12\">\n" +
                                "<textarea id=\"mensajeActualizar\" class=\"materialize-textarea\" length=\"100\">"+info.getDescripcion()+"</textarea>\n" +
                                "<label for=\"mensaje\">Mensaje</label>\n" +
                                "</div></td></tr>");
                    
                    //Aquí poner una condición por carrera para seleccionar la opción del select pertinente
                    if(especialidad.getEspecialidad().equals(Util.ITI)){
                    out.println("<tr><td>"+Util.LEYENDA_PUBLICO_DIRIGIDO+"</td>"
                            + "<td><div class=\"input-field col s12\">\n" +
                            "    <select id='publicoActualizar' multiple>\n" +
                            "      <option value=\"\" disabled selected>Seleccione una opcion</option>\n" +
                            "      <option value='publicoGeneral'>Público en general</option>\n" +
                            "      <option selected='selected' value='ITIC'>"+Util.ITI+"</option>\n" +
                            "      <option value='IGE'>Ingeniería Gesión Empresarial</option>\n"
                            + "    <option value='IME'>Ingeniería Mecatrónica</option> "
                            + "    </select>\n <label>Selección de público</label>\n" +
                            "  </div></td>"
                            + "</tr>");
                    }
                    
                     
                    
                    out.println("<tr><td>"+Util.FECHA_INICIO+"</td><td><input type='text' value='"+info.getFechaInicio()+"' id='fechaInicioActualizar'></td></tr>");
                    out.println("<tr><td>"+Util.FECHA_FIN+"</td><td><input type='text' value='"+info.getFechaFin()+"' id='fechaFinActualizar'></td></tr>");
                    
                    out.println("<tr><td>Información activa</td>");
                    out.println("<td><div class=\"switch\">\n" +
                    "    <label>\n" +
                    "      No\n" +
                    "      <input id='statusInfoGeneral' type=\"checkbox\" "+status+">\n" +
                    "      <span class=\"lever\"></span>\n" +
                    "      Si\n" +
                    "    </label>\n" +
                    "  </div></td></tr>");
                    
                    out.println("<tr><td align='center'><a id=\"actualizarInfoGeneral\" class=\"waves-effect waves-orange btn\" href=\"#\">"+Util.BOTON_ACTUALIZAR_INFORMACION+"</a></td></tr>");
                    
                    out.println("</table>");
            
        } catch (SQLException ex) {
            Logger.getLogger(FormularioConsultarInformacion.class.getName()).log(Level.SEVERE, null, ex);
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
