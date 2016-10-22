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
 * @author Eduardo Carbajal Reyes
 */
public final class Taller {

    private String idTaller = null;
    private String nombreTaller = null;
    private String decripcionTaller = null;
    private String lugarTaller = null;
    private String horarioTaller = null;
    private String status = null;
    private Persistence per = new Persistence();
    private ResultSet cdr;

    private Taller() {

    }

    private static final Taller taller = new Taller();

    public static Taller getTaller() {
        return taller;
    }

    public void setIdTaller(String idTaller) {
        this.idTaller = idTaller;
    }

    public void setNombreTaller(String nTaller) {
        this.nombreTaller = nTaller;
    }

    public void setDecripcionTaller(String descTaller) {
        this.decripcionTaller = descTaller;
    }

    public void setHorarioTaller(String horarioTaller) {
        this.horarioTaller = horarioTaller;
    }

       
    public void setLugarTaller(String lugarTaller) {
        this.lugarTaller = lugarTaller;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getIdTaller() {
        return idTaller;
    }

    public String getNombreTaller() {
        return nombreTaller;
    }

    public String getDecripcionTaller() {
        return decripcionTaller;
    }

    public String getHorarioTaller() {
        return horarioTaller;
    }
    
    
    public String getLugarTaller() {
        return lugarTaller;
    }

    public String getStatus() {
        return status;
    }
    
    public void asignarDatosTaller(String idTaller){
        String sentenciaSQL = "select id_taller, nombre_taller, descripcion, horario, lugar.nombre, status from taller inner join lugar ON lugar.id_lugar = taller.id_lugar where taller.id_taller="+idTaller;
        cdr = per.consulta(sentenciaSQL);
        try {
            while(cdr.next()){
                setIdTaller(cdr.getString(1));
                setNombreTaller(cdr.getString(2));
                setDecripcionTaller(cdr.getString(3));
                setHorarioTaller(cdr.getString(4));
                setLugarTaller(cdr.getString(5));
                setStatus(cdr.getString(6));
            }
        } catch (SQLException ex) {
            Logger.getLogger(Taller.class.getName()).log(Level.SEVERE, null, ex);
        }

    }
    
    public String grabarDatosTaller(){
        String sql = "insert into taller values(null,'"+getNombreTaller()+"','"+getDecripcionTaller()+"','"+getHorarioTaller()+"',"+getLugarTaller()+",1);";
        
        return per.insertar(sql);
    }
    
    public String actualizarDatosTaller(String idTaller, String nombreTaller, String descripcionTaller, String horarioTaller, String lugarTaller, String statusTaller){
       
        int status = statusTaller.equals("true") ? 1 : 0;
        String mensaje = null;
        
        String updateInfoTaller = "update taller set "
                + "nombre_taller='"+nombreTaller+"', "
                + "descripcion = '"+descripcionTaller+"',"
                + "horario='"+horarioTaller+"',"
                + "id_lugar = "+lugarTaller+","
                + "status = "+status+""
                + " where id_taller ="+idTaller;
        
        return mensaje = per.actualizar(updateInfoTaller).equals("") ? "Guardado exitosamente" : "Error al guardar";
    }

}
