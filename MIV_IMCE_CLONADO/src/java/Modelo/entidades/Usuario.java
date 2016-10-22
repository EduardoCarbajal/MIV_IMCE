/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo.entidades;

import Controlador.Persistence;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author m_cr2
 */
public class Usuario {
    private String id_usuario = null;
    private String nombre = null;
    private String ap_paterno = null;
    private String ap_materno = null;
    private String email = null;
    private String nivel_acceso = null;
    private String idGrupo;
    private String claveUsuario;
    private String status;
    private String sql;
    private String mensaje;
    Persistence per = new Persistence();
   

    
    public void asignarDatosUsuario(String identificadorUsuario){
        try {
            String sql = "SELECT * FROM usuario us INNER JOIN administrador admin ON us.id_usuario = admin.id_usuario"
                    + " WHERE us.id_usuario="+identificadorUsuario;
            ResultSet cdrDU = per.consulta(sql);
            String validar = null;
            while(cdrDU.next()){
                validar = cdrDU.getString("id_usuario");
            }
            if(validar != null){
                cdrDU = per.consulta(sql);
                while(cdrDU.next()){
                    setId_usuario(cdrDU.getString("id_usuario"));
                    setNombre(cdrDU.getString("nombre"));
                    setAp_paterno(cdrDU.getString("ap_paterno"));
                    setAp_materno(cdrDU.getString("ap_materno"));
                    setClaveUsuario(cdrDU.getString("numero_empleado"));
                    setEmail(cdrDU.getString("email"));
                    setNivel_acceso(cdrDU.getString("nivel_acceso"));
                    setStatus(cdrDU.getString("status"));
//                    setIdGrupo(cdrDU.getString("id_grupo"));
                }
                
            }else{
                String sqlAlu = "SELECT * FROM usuario us INNER JOIN alumno al ON us.id_usuario = al.id_usuario"
                        + " WHERE us.id_usuario="+identificadorUsuario;
                                   
                ResultSet cdrAl = per.consulta(sqlAlu);
                while(cdrAl.next()){
                    setId_usuario(cdrAl.getString("id_usuario"));
                    setNombre(cdrAl.getString("nombre"));
                    setAp_paterno(cdrAl.getString("ap_paterno"));
                    setAp_materno(cdrAl.getString("ap_materno"));
                    setEmail(cdrAl.getString("email"));
                    setNivel_acceso(cdrAl.getString("nivel_acceso"));
                    setIdGrupo(cdrAl.getString("id_grupo"));
                    setClaveUsuario(cdrAl.getString("matricula"));
                    setStatus(cdrAl.getString("status"));
                }
                
            }
        } //Fin método asignar valores
        catch (SQLException ex) {
            Logger.getLogger(Usuario.class.getName()).log(Level.SEVERE, null, ex);
        }
        }
    
    
    public String actualizarInformacionUsuario(){
        
        try {
            String validartipoUsuario = "select id_usuario from alumno where id_usuario="+getId_usuario();
            String usuarioAlumno = null;
            String statusUsuario = Boolean.parseBoolean(getStatus()) == false ? "0" : "1"; 
            
            ResultSet idUsuario = per.consulta(validartipoUsuario);
            
            while(idUsuario.next()){
                usuarioAlumno = idUsuario.getString("id_usuario");
            }
            
            if(usuarioAlumno == null){//El usuario es administrador
                sql = "UPDATE usuario set "
                        + "nombre = '"+getNombre()+"' , "
                        + "ap_paterno = '"+getAp_paterno()+"' , "
                        + "ap_materno = '"+getAp_materno()+"' ,"
                        + "email = '"+getEmail()+"' ,"
                        + "status = "+statusUsuario+" WHERE id_usuario="+getId_usuario();
                per.actualizar(sql);
                mensaje = "La información del usuario "+getNombre()+" "+getAp_paterno()+" fue actualizada de manera exitosa.";
            }else{//El usuario es alumno
                 sql = "UPDATE usuario set "
                        + "nombre = '"+getNombre()+"' , "
                        + "ap_paterno = '"+getAp_paterno()+"' , "
                        + "ap_materno = '"+getAp_materno()+"' ,"
                        + "email = '"+getEmail()+"' ,"
                        + "status = "+statusUsuario+" WHERE id_usuario="+getId_usuario();
                 per.actualizar(sql);
                 mensaje = "La información del usuario "+getNombre()+" "+getAp_paterno()+" fue actualizada de manera exitosa.";
            }
        } catch (SQLException ex) {
            Logger.getLogger(Usuario.class.getName()).log(Level.SEVERE, null, ex);
            mensaje = "Ocurrió un error al actualizar la información";
        }
        
        return mensaje;
    }
    
    public String getId_usuario() {
        return id_usuario;
    }

    public String getNombre() {
        return nombre;
    }

    public String getAp_paterno() {
        return ap_paterno;
    }

    public String getAp_materno() {
        return ap_materno;
    }

    public String getEmail() {
        return email;
    }

    public String getNivel_acceso() {
        return nivel_acceso;
    }

    public void setId_usuario(String id_usuario) {
        this.id_usuario = id_usuario;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setAp_paterno(String ap_paterno) {
        this.ap_paterno = ap_paterno;
    }

    public void setAp_materno(String ap_materno) {
        this.ap_materno = ap_materno;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setNivel_acceso(String nivel_acceso) {
        this.nivel_acceso = nivel_acceso;
    }

    public String getIdGrupo() {
        return idGrupo;
    }

    public void setIdGrupo(String idGrupo) {
        this.idGrupo = idGrupo;
    }

    public String getClaveUsuario() {
        return claveUsuario;
    }

    public void setClaveUsuario(String claveUsuario) {
        this.claveUsuario = claveUsuario;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
        
    
        
    }
