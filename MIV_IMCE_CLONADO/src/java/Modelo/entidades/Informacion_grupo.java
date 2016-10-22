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
public class Informacion_grupo {
    private String idInformacionIdGrupo;
    private String idInformacion;
    private String idGrupo;
    private Persistence per = new Persistence();
    private String sqlConsulta;
    ResultSet cdrConsulta;
    
    public void asignarInformacionGrupo(String idInformacion){
        sqlConsulta = "select * from informacion_grupo where id_informacion="+idInformacion;
        cdrConsulta = per.consulta(sqlConsulta);
        try {
            while(cdrConsulta.next()){
                setIdInformacionIdGrupo(cdrConsulta.getString("id_informacion_grupo"));
                setIdInformacion(cdrConsulta.getString("id_informacion"));
                setIdGrupo(cdrConsulta.getString("id_grupo"));
            }
        } catch (SQLException ex) {
            Logger.getLogger(Informacion_grupo.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public String getIdInformacionIdGrupo() {
        return idInformacionIdGrupo;
    }

    public void setIdInformacionIdGrupo(String idInformacionIdGrupo) {
        this.idInformacionIdGrupo = idInformacionIdGrupo;
    }

    public String getIdInformacion() {
        return idInformacion;
    }

    public void setIdInformacion(String idInformacion) {
        this.idInformacion = idInformacion;
    }

    public String getIdGrupo() {
        return idGrupo;
    }

    public void setIdGrupo(String idGrupo) {
        this.idGrupo = idGrupo;
    }
    
    
    
}
