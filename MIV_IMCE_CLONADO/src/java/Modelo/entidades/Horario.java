/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo.entidades;

/**
 *
 * @author Eduardo Carbajal Reyes
 */
public class Horario {
    private static final Horario horario = new Horario();
    private String idHorario;
    private String nombreArchivo;
    private String status;
    
    private Horario() {
    }
    
    
    
    public static Horario getHorario() {
        return horario;
    }

    public String getIdHorario() {
        return idHorario;
    }

    public String getNombreArchivo() {
        return nombreArchivo;
    }

    public String getStatus() {
        return status;
    }
    
    public void setIdHorario(String idHorario) {
        this.idHorario = idHorario;
    }

    public void setNombreArchivo(String nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
    }

    public void setStatus(String status) {
        this.status = status;
    }
    
    
    
}
