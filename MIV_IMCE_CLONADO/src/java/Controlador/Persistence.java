/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controlador;

import Modelo.Conexion;
import Modelo.Conexion;
import Modelo.ConexionDos;
import Modelo.ConexionDos;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.apache.commons.codec.digest.DigestUtils;

/**
 *
 * @author m_cr2
 */


public class Persistence {
    ResultSet cdr;
    Statement sentenciaSQL = null;
    String msg = null;
    Conexion con = new Conexion();
    ConexionDos conDos = new ConexionDos();
    String idUsuario = null;
    Statement sentenciaSQLDos = null;

    public Persistence() {

        con.Conectar();
        conDos.ConectarDos();
        sentenciaSQL = con.getSentenciaSQL();
        sentenciaSQLDos = conDos.getSentenciaSQLDos();
        
    }
    
    public ResultSet consulta(String query) {
        try {
            cdr = sentenciaSQL.executeQuery(query);
        } catch (SQLException se) {
            System.out.println("Error SQL: " + se);
        } catch(NullPointerException npe){
            System.out.println("Error" +npe);
        }
        return cdr;
    }//fin metodo consulta
    
       public String actualizar(String query){
           msg = "";
        try {
            sentenciaSQL.execute(query);
       } catch (SQLException ex) {
           msg = "Error: " + ex;
        }
        return msg;
    }

    public String insertar(String values) {
        try {
            sentenciaSQL.execute(values);
            msg = "guardado exitosamente";
        } catch (SQLException ex) {
            msg = "Error"+ex;
        }
        return msg;
    }
 
    
    public String validarUsuario(String usuario, String password){
        try {
            String validar = null;
            //Consultar en la tabla administrador
            String sql = "Select * from administrador where numero_empleado = '"+ usuario+"'";
            ResultSet cdrr = consulta(sql);
            while(cdrr.next()){//Si la consula trae registros almacenar el id_empleado en una variable para validar posteriormente
             validar = cdrr.getString("id_usuario");
            }//Fin while
            if(validar != null){
                //Si es diferente de nulo significa que encontro el registro en la tabla
                //posteriormente validamos el password
                String sql2 = "SELECT password, numero_empleado from usuario us "
                        + "INNER JOIN administrador ad ON us.id_usuario = ad.id_usuario "
                        + "WHERE ad.id_usuario = '"+validar+"'";
                String user = null;
                String psw = null;
                ResultSet resultados = consulta(sql2);
                while(resultados.next()){
                    user = resultados.getString("numero_empleado");
                    psw = resultados.getString("password");
                }
                asignaridUsuario(user);
                if(user.trim().equals(usuario.trim()) && psw.trim().equals(encrypt(password).trim())){//validar que el usuario y contraseña coincidan con los que estan almacenados en la base
                    msg = "1";
                    //una vez validado el usuario y la contraseña creamos la sesión para el administrador
                    
                }
            }else{//En caso contario indica que es alumno
                    //Consultar en la tabla alumno
                String sqlA = "Select * from alumno where matricula = '"+ usuario+"'";
                ResultSet cdrrA = consulta(sqlA);
                while(cdrrA.next()){//Si la consula trae registros almacenar la matricula en una variable para validar posteriormente
                      validar = cdrrA.getString("id_usuario");
                }//Fin while
                
                 String sql2 = "SELECT password, matricula from usuario us "
                        + "INNER JOIN alumno al ON us.id_usuario = al.id_usuario "
                        + "WHERE al.id_usuario = '"+validar+"'";
                String user = null;
                String psw = null;
                ResultSet resultados = consulta(sql2);
                while(resultados.next()){
                    user = resultados.getString("matricula");
                    psw = resultados.getString("password");
                }
                asignaridUsuario(user);
                if(user.trim().equals(usuario.trim()) && psw.trim().equals(encrypt(password.trim()))){//validar que el usuario y contraseña coincidan con los que estan almacenados en la base
                    msg = "0";
                    //una vez validado el usuario y la contraseña creamos la sesión para el alumno
                    
                }
            }
            } catch (SQLException ex) {
            System.out.print(ex);
        }catch(NullPointerException npe){
            System.out.println("Error: "+npe);
        }
            
        
        return msg;
    }
       
    public void asignaridUsuario(String idUsuario){
        this.idUsuario = idUsuario;
    }
    
    public String recuperaidUsuario(){
        return idUsuario;
    }
    
    public String crearNuevoUsuario(String usuario, String paswOriginal){
        String resultadoProceso= null;
        String password = encrypt(paswOriginal);
        
            String alumnoExistente = null;
            String adminExistente = null;
            String consBuscarAlumnoExiste = "select id_usuario from alumno where matricula = '"+usuario+"'";
            String consBuscarAdminExiste = "select id_usuario from administrador where numero_empleado = '"+usuario+"'";
            try {
                    ResultSet alumnoExiste = sentenciaSQL.executeQuery(consBuscarAlumnoExiste);

                    while(alumnoExiste.next()){
                        alumnoExistente = alumnoExiste.getString("id_usuario");
                    }
                        
                    ResultSet adminExiste = sentenciaSQL.executeQuery(consBuscarAdminExiste);
                    
                    while(adminExiste.next()){
                        adminExistente = adminExiste.getString("id_usuario");
                    }
            } catch (SQLException ex) {
            Logger.getLogger(Persistence.class.getName()).log(Level.SEVERE, null, ex);
            }
            
            if(alumnoExistente != null || adminExistente != null){
                resultadoProceso = "Ya existe un usuario registrado con esa información";
                
            }else{
            try {
                if(usuario.length()==10){//Es alumno
                        String nombre = null;
                        String paterno = null;
                        String materno = null;
                        String email = null;
                        ResultSet verificarExistencia = sentenciaSQLDos.executeQuery("Select * from alumnos where matricula='"+usuario+"'");
                        while(verificarExistencia.next()){
                            nombre = verificarExistencia.getString("nombre");
                            paterno = verificarExistencia.getString("paterno");
                            materno = verificarExistencia.getString("materno");
                            email = verificarExistencia.getString("email");
                        }//fin while que llena los datos del alumno en caso de que exista en el registro escolar

                        if(nombre == null || paterno == null || materno == null){//Registro no existente
                            resultadoProceso = "No existen datos relacionados con la matricula ingresada, verifica los datos o acude al área de servicios escolares de tu institución";
                        }else{//Los datos existen en el registro escolar procedemos a insertar en la tabla usuario y alumno
                            String insertarTablaUsuario = "insert into usuario values (null,'"+nombre+"','"+paterno+"','"+materno+"','"+email+"','"+password+"',0)";
                            sentenciaSQL.execute(insertarTablaUsuario);
                            //Recuperar el id del usuario para insertarlo en la tabla de alumnos
                            ResultSet idTablaUsuario = sentenciaSQL.executeQuery("Select id_usuario from usuario where email='"+email+"'");
                            String idUsuario = null;
                            while(idTablaUsuario.next()){//Almacenar el resultado en una variable para insertarlo después en la tabla alumno
                                idUsuario = idTablaUsuario.getString("id_usuario");
                            }
                            String insertarTablaAlumno = "insert into alumno values("+idUsuario+",1,'"+usuario+"')";
                            sentenciaSQL.execute(insertarTablaAlumno);
                            resultadoProceso= "1";
                        }
                }else{//Es administrador
                        String nombre = null;
                        String paterno = null;
                        String materno = null;
                        String email = null;
                        ResultSet verificarExistencia = sentenciaSQLDos.executeQuery("Select * from docentes where clave_empleado='"+usuario+"'");
                        while(verificarExistencia.next()){
                            nombre = verificarExistencia.getString("nombre");
                            paterno = verificarExistencia.getString("paterno");
                            materno = verificarExistencia.getString("materno");
                            email = verificarExistencia.getString("email");
                        }//fin while que llena los datos del alumno en caso de que exista en el registro escolar

                        if(nombre == null || paterno == null || materno == null){//Registro no existente
                            resultadoProceso = "No existen datos relacionados con el número de empleado ingresado, verifica los datos o acude al área correspondiente para validar tus datos.";
                        }else{//Los datos existen en el registro escolar procedemos a insertar en la tabla usuario y alumno
                            String insertarTablaUsuario = "insert into usuario values (null,'"+nombre+"','"+paterno+"','"+materno+"','"+email+"','"+password+"',0)";
                            sentenciaSQL.execute(insertarTablaUsuario);
                            //Recuperar el id del usuario para insertarlo en la tabla de alumnos
                            ResultSet idTablaUsuario = sentenciaSQL.executeQuery("Select id_usuario from usuario where email='"+email+"'");
                            String idUsuario = null;
                            while(idTablaUsuario.next()){//Almacenar el resultado en una variable para insertarlo después en la tabla alumno
                                idUsuario = idTablaUsuario.getString("id_usuario");
                            }
                            String insertarTablaAlumno = "insert into administrador values("+idUsuario+",1,'"+usuario+"')";
                            sentenciaSQL.execute(insertarTablaAlumno);
                            resultadoProceso= "1";
                        }
                }
            } catch (SQLException ex) {
                Logger.getLogger(Persistence.class.getName()).log(Level.SEVERE, null, ex);
                resultadoProceso = ex.getMessage();
            }
                
            }
        
        return resultadoProceso;
    }//Fin crear nuevo usuario
    
    public String encrypt(String cadena){
        String encryptedData = DigestUtils.sha512Hex(cadena);
        return encryptedData;
    }//Fin encrypt
    
//    public static void main(String args[]){
//        Persistence per = new Persistence();
//        System.out.println(per.encrypt("Nougat7"));
//    }
}
