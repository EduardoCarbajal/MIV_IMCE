/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author Eduardo
 * Esta clase realiza la conexi�n al gestor de base de datos SQL Server
 */
public class ConexionDos {

    private Connection conexion = null;
    private Statement sentenciaSQLDos = null;

    public void ConectarDos() {
        try {
            String controlador = "com.mysql.jdbc.Driver";
            final String server = "localhost";
            final String user = "root";
            final String dbName = "datosescuela";
            final String password = "";
            Class.forName(controlador).newInstance();
            conexion = DriverManager.getConnection("jdbc:mysql://" + server +"/"+ dbName , user , password);
            sentenciaSQLDos = getConexionDos().createStatement();
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

    public void cerrarDos() {
        try {
            if (getSentenciaSQLDos() != null) {
                getSentenciaSQLDos().close();
            }
            if (getConexionDos() != null) {
                getConexionDos().close();
            }
        } catch (SQLException ignorada) {
        }
    }//fin cerrar

    public Connection getConexionDos() {
        return conexion;
    }//fin getConexion

    public Statement getSentenciaSQLDos() {
        return sentenciaSQLDos;
    }//fin getSentenciaSQL 
    
}//fin clase conexi�n;


