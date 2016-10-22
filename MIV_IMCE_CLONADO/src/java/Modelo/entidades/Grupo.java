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
public class Grupo {
    
    private String idGrupo;
    private String nombre;
    private String idHorario;
    private String idLugar;
    private String idEspecialidad;
    private Persistence per = new Persistence();
    private ResultSet cdrInfoGrupo;
    
    private String sqlConsultaInformacionGrupo;
    
    public void asignarInformacionGrupo(String claveGrupo){
        sqlConsultaInformacionGrupo = "select * from grupo where id_grupo="+claveGrupo;
        cdrInfoGrupo = per.consulta(sqlConsultaInformacionGrupo);
        
        try {
            while(cdrInfoGrupo.next()){
                setIdGrupo(cdrInfoGrupo.getString("id_grupo"));
                setIdHorario(cdrInfoGrupo.getString("id_horario"));
                setIdLugar(cdrInfoGrupo.getString("id_lugar"));
                setIdEspecialidad(cdrInfoGrupo.getString("id_especialidad"));
            }
        } catch (SQLException ex) {
            Logger.getLogger(Grupo.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        
    }

    public String getIdGrupo() {
        return idGrupo;
    }

    public void setIdGrupo(String idGrupo) {
        this.idGrupo = idGrupo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getIdHorario() {
        return idHorario;
    }

    public void setIdHorario(String idHorario) {
        this.idHorario = idHorario;
    }

    public String getIdLugar() {
        return idLugar;
    }

    public void setIdLugar(String idLugar) {
        this.idLugar = idLugar;
    }

    public String getIdEspecialidad() {
        return idEspecialidad;
    }

    public void setIdEspecialidad(String idEspecialidad) {
        this.idEspecialidad = idEspecialidad;
    }
    
    
    
}
