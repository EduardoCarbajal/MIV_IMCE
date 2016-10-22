/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import javax.swing.JOptionPane;

/**
 *
 * @author Eduardo
 * Esta clase realiza la conexi�n al gestor de base de datos SQL Server
 */
public class Conexion {

    private Connection conexion = null;
    private Statement sentenciaSQL = null;

    public void Conectar() {
        try {
            String controlador = "com.mysql.jdbc.Driver";
            final String server = "localhost";
            final String dbName = "MIV";
            final String user = "root";
            final String password = "";
            Class.forName(controlador).newInstance();
            conexion = DriverManager.getConnection("jdbc:mysql://" + server +"/"+ dbName , user , password);
            sentenciaSQL = getConexion().createStatement();
        } catch (ClassNotFoundException e) {
            System.out.println("No se pudo cargar el controlador: " + e.getMessage());
        } catch (SQLException e) {
            System.out.println("Excepcion SQL: " + e.getMessage());
        } catch (InstantiationException e) {
            System.out.println("Objeto no creado. " + e.getMessage());
        } catch (IllegalAccessException e) {
            System.out.println("Acceso ilegal. " + e.getMessage());
        }
    }//Fin conectar

    public void cerrar() {
        try {
            if (getSentenciaSQL() != null) {
                getSentenciaSQL().close();
            }
            if (getConexion() != null) {
                getConexion().close();
            }
        } catch (SQLException ignorada) {
        }
    }//fin cerrar

    public Connection getConexion() {
        return conexion;
    }//fin getConexion

    public Statement getSentenciaSQL() {
        return sentenciaSQL;
    }//fin getSentenciaSQL 
    
}//fin clase conexi�n;


