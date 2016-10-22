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
@WebServlet(name = "gestionInformacionGral", urlPatterns = {"/gestionInformacionGral"})
public class gestionInformacionGral extends HttpServlet {

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
        Persistence per = new Persistence();
        
        String modulo;
        String accion;
        String consulta;
        String consultaInformacion;
        ResultSet cdr;
        
        modulo = request.getParameter("modulo").trim();
        accion = request.getParameter("accion").trim();
        
        
        consultaInformacion = "select * from informacion";
        consulta = "select * from usuario";
        cdr = per.consulta(consulta);
        
        
        
        
        if(modulo.equals("usuarios")){
            switch (accion){
                case "alta": 
                    break;
                case "baja":
                    break;
                case "modificar":
                    out.println("<h2>Haga doble click en la fila donde se encuentre el usuario que desea modificar</h2>");
                    out.println("<table id='tableModModificarUsuarios'>");
                    out.println("<thead>");
                    out.println("<tr>");
                    out.println("<td style='display:none'>id_usuario</td>");
                    out.println("<td>Apellido paterno</td>");
                    out.println("<td>Apellido materno</td>");
                    out.println("<td>Nombre(s)</td>");
                    out.println("<td>Correo electrónico</td>");
                    out.println("<td>Tipo de usuario</td>");
                    out.println("</tr>");
                    out.println("</thead>");
                    out.println("<tbody>");
            
                try {
                    while(cdr.next()){
                        out.println("<tr>");
                        out.println("<td style='display:none'>"+cdr.getString("id_usuario")+"</td>");
                        out.println("<td>"+cdr.getString("ap_paterno")+"</td>");
                        out.println("<td>"+cdr.getString("ap_materno")+"</td>");
                        out.println("<td>"+cdr.getString("nombre")+"</td>");
                        out.println("<td>"+cdr.getString("email")+"</td>");
                        if(cdr.getString("nivel_acceso").equals("1")){
                            out.println("<td>"+Util.ICONO_USUARIO_ADMINISTRADOR+"</td>");
                        }else{
                            out.println("<td>"+Util.ICONO_USUARIO_ESTANDAR+"</td>");
                        }
                        
                        out.println("</tr>");
                    }
                } catch (SQLException ex) {
                    Logger.getLogger(gestionInformacionGral.class.getName()).log(Level.SEVERE, null, ex);
                }
            
                    out.println("</tbody>");
                    out.println("</table>");
                    break;
//                case "consulta":
//                    out.println("<table id='tableModConsUsuarios'>");
//                    out.println("<thead>");
//                    out.println("<tr>");
//                    out.println("<td>Apellido paterno</td>");
//                    out.println("<td>Apellido materno</td>");
//                    out.println("<td>Nombre(s)</td>");
//                    out.println("<td>Correo electrónico</td>");
//                    out.println("<td>Tipo de usuario</td>");
//                    out.println("</tr>");
//                    out.println("</thead>");
//                    out.println("<tbody>");
//            
//                try {
//                    while(cdr.next()){
//                        out.println("<tr>");
//                        out.println("<td>"+cdr.getString("ap_paterno")+"</td>");
//                        out.println("<td>"+cdr.getString("ap_materno")+"</td>");
//                        out.println("<td>"+cdr.getString("nombre")+"</td>");
//                        out.println("<td>"+cdr.getString("email")+"</td>");
//                        if(cdr.getString("nivel_acceso").equals("1")){
//                            out.println("<td>"+usuarioAdmin+"</td>");
//                        }else{
//                            out.println("<td>"+usuarioAlumno+"</td>");
//                        }
//                        
//                        out.println("</tr>");
//                    }
//                } catch (SQLException ex) {
//                    Logger.getLogger(gestionInformacionGral.class.getName()).log(Level.SEVERE, null, ex);
//                }
//            
//                    out.println("</tbody>");
//                    out.println("</table>");
//                    break;
                default:
                    out.println("Acción no válida");
            }
            
        }else if(modulo.equals("infoGeneral")){
            switch(accion){
                case "alta":
                    out.println(Util.LEYENDA_AGREGAR_INFORMACION_GENERAL);
                    out.println("<table>");
                    out.println("<tr><td>"+Util.ASUNTO+"</td>");
                    out.println("<td><input type='text' id='asunto'></td></tr>");
                    out.println("<tr><td>"+Util.DESCRIPCION+"</td><td> <div class=\"input-field col s12\">\n" +
                                "<textarea id=\"mensaje\" class=\"materialize-textarea\" length=\"100\"></textarea>\n" +
                                "<label for=\"mensaje\">Mensaje</label>\n" +
                                "</div></td></tr>");
                    out.println("<tr><td>"+Util.LEYENDA_PUBLICO_DIRIGIDO+"</td>"
                            + "<td><div class=\"input-field col s12\">\n" +
                            "    <select id='publico' multiple>\n" +
                            "      <option value=\"\" disabled selected>Seleccione una opcion</option>\n" +
                            "      <option value='publicoGeneral'>Público en general</option>\n" +
                            "      <option value='ITIC'>Ingeniería TIC</option>\n" +
                            "      <option value='IGE'>Ingeniería Gesión Empresarial</option>\n"
                            + "    <option value='IME'>Ingeniería Mecatrónica</option> "
                            + "    </select>\n <label>Selección de público</label>\n" +
                            "  </div></td>"
                            + "</tr>");
                    out.println("<tr><td>"+Util.FECHA_INICIO+"</td><td><input type='text' id='fechaInicio'></td></tr>");
                    out.println("<tr><td>"+Util.FECHA_FIN+"</td><td><input type='text' id='fechaFin'></td></tr>");
                    out.println("<tr><td align='center'><a id=\"guardarInfoGeneral\" class=\"waves-effect waves-orange btn\" href=\"#\">Guardar información general</a></td></tr>");
                    out.println("</table>");
                    break;
                case "modificacionConsulta":
                    out.println("<h3>"+Util.LEYENDA_MODIFICAR_INFORMACION_GENERAL+"</h3>");
                    out.println("<table id='tableModModificarInfoGeneral'>");
                    out.println("<thead>");
                    out.println("<tr>");
                    out.println("<td style='display:none'>id_informacion</td>");
                    out.println("<td>"+Util.ASUNTO+"</td>");
                    out.println("<td>"+Util.DESCRIPCION+"</td>");
                    out.println("<td>"+Util.FECHA_INICIO+"</td>");
                    out.println("<td>"+Util.FECHA_FIN+"</td>");
                    out.println("<td>Estado</td>");
                    out.println("</tr>");
                    out.println("</thead>");
                    out.println("<tbody>");
            
                try {
                    cdr = per.consulta(consultaInformacion);
                    
                    while(cdr.next()){
                        out.println("<tr>");
                        out.println("<td style='display:none'>"+cdr.getString("id_informacion")+"</td>");
                        out.println("<td>"+cdr.getString("asunto")+"</td>");
                        out.println("<td>"+cdr.getString("descripcion")+"</td>");
                        out.println("<td>"+cdr.getString("fecha_inicio")+"</td>");
                        out.println("<td>"+cdr.getString("fecha_fin")+"</td>");
                        if(cdr.getString("status").equals("1")){
                            out.println("<td>"+Util.ICONO_INFORMACION_ACTIVA+"</td>");
                        }else{
                            out.println("<td>"+Util.ICONO_INFORMACION_INACTIVA+"</td>");
                        }
                        
                        out.println("</tr>");
                    }
                } catch (SQLException ex) {
                    Logger.getLogger(gestionInformacionGral.class.getName()).log(Level.SEVERE, null, ex);
                }
            
                    out.println("</tbody>");
                    out.println("</table>");
                    
                    
                    break;
                default: 
                    out.println("Acción inválida");
            }
            
        }else if(modulo.equals("horarios")){
            switch(accion){
                
                case "alta":
                    out.println("<h3>"+Util.RELLENE_EL_FORMULARIO+"</h3>");
                    out.println("<form enctype=\"multipart/form-data\" id=\"formSubirHorario\" method=\"post\">");
                    out.println("<table>");
                    out.println("<tr><td>"+Util.SELECCIONE_PDF+"</td>"
                            + "<td><input id='horarioPDF' name='horarioPDF' type='file'></td></tr>");
                    out.println("<tr><td>"+Util.SELECCIONE_GRUPO_PROFESOR+"</td>");
                       out.println("<td><div class=\"input-field col s12\">"
                            + "<select id='seleccionGrupoProfesor' name='seleccionGrupoProfesor'>"
                            + "<option disabled selected>Seleccione una opción</option>"
                            + "<option value='grupo'>Grupo</option>"
                            + "<option value='profesor'>Profesor</option>"
                            + "</select></div></td></tr>");
                       out.println("<tr>"
                               + "<td><div id='grupoProfesor'></div></td>"
                               + "<td><div id='comboGrupoProfesor'></div></td>"
                               + "</tr>");
                       out.println("<tr><td><input class=\"waves-effect waves-orange btn\" id='btnCargarHorario' type='button' value='"+Util.BOTON_CARGAR_HORARIO+"'></td></tr>");
                    out.println("</table>");
                    out.println("</form>");
                    break;
                    
                case "modificacionConsulta" :
                    
                    
                    out.println("<h3>"+Util.LEYENDA_MODIFICAR_HORARIO+"</h3>");
                    out.println("<table id='tableModModificarHorarios'>");
                    out.println("<thead>");
                    out.println("<tr>");
                    out.println("<td style='display:none'>id_horario</td>");
                    out.println("<td>"+Util.GRUPO+"</td>");
                    out.println("<td>"+Util.NOMBRE_ARCHIVO+"</td>");
                    out.println("<td>Estado</td>");
                    out.println("</tr>");
                    out.println("</thead>");
                    out.println("<tbody>");
            
                try {
                    consultaInformacion = "select horario.id_horario, nombre, nombre_archivo, status from grupo inner join horario ON horario.id_horario = grupo.id_horario;";
                    cdr = per.consulta(consultaInformacion);
                    
                    while(cdr.next()){
                        out.println("<tr>");
                        out.println("<td style='display:none'>"+cdr.getString("id_horario")+"</td>");
                        out.println("<td>"+cdr.getString("nombre")+"</td>");
                        out.println("<td>"+cdr.getString("nombre_archivo")+"</td>");
                        if(cdr.getString("status").equals("1")){
                            out.println("<td>"+Util.ICONO_INFORMACION_ACTIVA+"</td>");
                        }else{
                            out.println("<td>"+Util.ICONO_INFORMACION_INACTIVA+"</td>");
                        }
                        out.println("</tr>");
                    }
                } catch (SQLException ex) {
                    Logger.getLogger(gestionInformacionGral.class.getName()).log(Level.SEVERE, null, ex);
                }
            
                    out.println("</tbody>");
                    out.println("</table>");
                    
                    
                    break;
                default:
                    
                
            }
        }else if(modulo.equals("talleres")){
            String consultaDatosLugar = "select * from lugar;";
            cdr = per.consulta(consultaDatosLugar);
            switch(accion){
                case "agregar":
                    out.println("<table>");
                    out.println("<tr><td'>"+Util.LEYENDA_ALTA_TALLERES+"</td></tr>");
                    out.println("<tr>"
                            + "<td>"+Util.NOMBRE_TALLER+"</td>"
                            + "<td><input type='text' id='nombreTaller'></td>"
                            + "</tr>");
                    out.println("<tr>"
                            + "<td>"+Util.DESCRIPCION_TALLER+"</td>"
                            + "<td><div class=\"input-field col s12\">\n" +
                                "<textarea id=\"descripcionTaller\" class=\"materialize-textarea\" length=\"100\"></textarea>\n" +
                                "<label for=\"mensaje\">"+Util.DESCRIPCION_TALLER+"</label>\n" +
                                "</div></td>"
                            + "</tr>");
                    out.println("<tr>"
                            + "<td>"+Util.HORARIO_TALLER+"</td>"
                            + "<td><input type='text' id='horarioTaller'></td>"
                            + "</tr>");
                    out.println("<tr>"
                            + "<td>"+Util.LUGAR_TALLER+"</td>"
                            + "<td>"
                            + "<div class=\"input-field col s12\">"
                            + "<select id='seleccionLugarTaller' name='seleccionLugarTaller'>"
                            + "<option disabled selected value=''>Seleccione una opción</option>");
            {
                try {
                    while(cdr.next()){
                        out.println("<option value='"+cdr.getString(1)+"'>"+cdr.getString(2)+"</option>");
                    }
                } catch (SQLException ex) {
                    Logger.getLogger(gestionInformacionGral.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
                            out.println("</select></div>"
                            + "</td>"
                            + "</tr>");
                    out.println("</table>");
                     out.println("<tr><td><input class=\"waves-effect waves-orange btn\" id='btnGuardarTaller' type='button' value='"+Util.BTN_GUARDAR_TALLER+"'></td></tr>");
                    break;
                    
                case "modificacionConsulta":
                    
                    
                    
                    out.println("<h3>"+Util.LEYENDA_MODIFICAR_TALLER+"</h3>");
                    out.println("<table id='tableModModificarTalleres'>");
                    out.println("<thead>");
                    out.println("<tr>");
                    out.println("<td style='display:none'>id_taller</td>");
                    out.println("<td>"+Util.NOMBRE_TALLER+"</td>");
                    out.println("<td>"+Util.DESCRIPCION_TALLER+"</td>");
                    out.println("<td>"+Util.HORARIO_TALLER+"</td>");
                    out.println("<td>"+Util.LUGAR_TALLER+"</td>");
                    out.println("<td>Estado</td>");
                    out.println("</tr>");
                    out.println("</thead>");
                    out.println("<tbody>");
            
                try {
                    consultaInformacion = "select id_taller, nombre_taller, descripcion, horario, lugar.nombre, status from taller inner join lugar ON lugar.id_lugar = taller.id_lugar;";
                    cdr = per.consulta(consultaInformacion);
                    
                    while(cdr.next()){
                        out.println("<tr>");
                        out.println("<td style='display:none'>"+cdr.getString(1)+"</td>");
                        out.println("<td>"+cdr.getString(2)+"</td>");
                        out.println("<td>"+cdr.getString(3)+"</td>");
                        out.println("<td>"+cdr.getString(4)+"</td>");
                        out.println("<td>"+cdr.getString(5)+"</td>");
                        if(cdr.getString(6).equals("1")){
                            out.println("<td>"+Util.ICONO_INFORMACION_ACTIVA+"</td>");
                        }else{
                            out.println("<td>"+Util.ICONO_INFORMACION_INACTIVA+"</td>");
                        }
                        out.println("</tr>");
                    }
                } catch (SQLException ex) {
                    Logger.getLogger(gestionInformacionGral.class.getName()).log(Level.SEVERE, null, ex);
                }
            
                    out.println("</tbody>");
                    out.println("</table>");
                    
                    
                    
                    
                    
                    break;
                default:
            }
            
        }else if(modulo.equals("calendarioEscolar")){
            switch(accion){
                case "modificacionConsulta":
                    out.println("<iframe src='../DocumentosPDF/CalendarioEscolar/CalendarioEscolar.pdf' style='width:950px; height:400px;' frameborder='0'></iframe>");
                    out.println("<br><input class=\"waves-effect waves-orange btn\" id='btnActualizarCalendario' type='button' value='"+Util.BTN_ACTUALIZAR_CALENDARIO+"'>");
                    out.println("<div id='formActualizarCalendarioEscolar'></div>");
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
