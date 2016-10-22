/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo.entidades;

import Controlador.Persistence;
import Modelo.Util;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author Eduardo Carbajal Reyes
 */
public class Informacion {
    
    private String idInformacion;
    private String asunto;
    private String descripcion;
    private String fechaInicio;
    private String fechaFin;
    private String status;
    
    private ResultSet cdrInformacion;
    private Persistence per = new Persistence();
    
    private String sqlObtenerInformacion;
    
    
    public void asignarInformacion(String idInformacion) throws SQLException{
         sqlObtenerInformacion = "select * from informacion where id_informacion="+idInformacion;
         
         cdrInformacion =  per.consulta(sqlObtenerInformacion);
         
         while(cdrInformacion.next()){
             setIdInformacion(cdrInformacion.getString("id_informacion"));
             setAsunto(cdrInformacion.getString("asunto"));
             setDescripcion(cdrInformacion.getString("descripcion"));
             setFechaInicio(cdrInformacion.getString("fecha_inicio"));
             setFechaFin(cdrInformacion.getString("fecha_fin"));
             setStatus(cdrInformacion.getString("status"));
         }
    }
    
    public String actualizarInformacion(){
        String mensaje;
        String sqlActualizarInformacionGeneral = "update informacion set "
                + "asunto='"+getAsunto()+"',"
                + "descripcion='"+getDescripcion()+"',"
                + "fecha_inicio = '"+getFechaInicio()+"',"
                + "fecha_fin = '"+getFechaFin()+"',"
                + "status = "+getStatus()+""
                + " where id_informacion='"+getIdInformacion()+"'";
        
//        mensaje = sqlActualizarInformacionGeneral;
        String respuesta = per.actualizar(sqlActualizarInformacionGeneral);
        
        if(respuesta.contains("Error")){
            mensaje = Util.ERROR_GUARDAR_INFORMACION;
        }else{
            mensaje = Util.INFORMACION_GUARDADA_EXITOSAMENTE;
        }
        
        
        
        return mensaje;
    }
    

    public String getIdInformacion() {
        return idInformacion;
    }

    public void setIdInformacion(String idInformacion) {
        this.idInformacion = idInformacion;
    }

    public String getAsunto() {
        return asunto;
    }

    public void setAsunto(String asunto) {
        this.asunto = asunto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(String fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public String getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(String fechaFin) {
        this.fechaFin = fechaFin;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
    
    
    
}
