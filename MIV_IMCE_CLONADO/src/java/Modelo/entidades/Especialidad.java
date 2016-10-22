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
public class Especialidad {
    private String idEspecialidad;
    private String especialidad;
    private ResultSet cdrEspecialidades;
    private Persistence per = new Persistence();
    private String sqlInformacionEspecialidades;
    
    public void asignarInformacionEspecialidades(String claveEspecialidad){
        sqlInformacionEspecialidades = "select * from especialidad where id_especialidad="+claveEspecialidad;
        cdrEspecialidades = per.consulta(sqlInformacionEspecialidades);
        
        try {
            while (cdrEspecialidades.next()) {
                setIdEspecialidad(cdrEspecialidades.getString("id_especialidad"));
                setEspecialidad(cdrEspecialidades.getString("especialidad"));
            }
        } catch (SQLException ex) {
            Logger.getLogger(Especialidad.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public String getIdEspecialidad() {
        return idEspecialidad;
    }

    public void setIdEspecialidad(String idEspecialidad) {
        this.idEspecialidad = idEspecialidad;
    }

    public String getEspecialidad() {
        return especialidad;
    }

    public void setEspecialidad(String especialidad) {
        this.especialidad = especialidad;
    }
    
    
    
}
