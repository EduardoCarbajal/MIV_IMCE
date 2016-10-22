/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo;

/**
 *
 * @author Eduardo Carbajal Reyes
 */
public abstract interface Util {
    //Mensajes
    public static final String ERROR_GUARDAR_INFORMACION = "Ocurrió un error al guardar la información";
    public static final String INFORMACION_GUARDADA_EXITOSAMENTE = "Informacion guardada exitosamente";
    
    
    //Etiquetas de actualizar información general
    public static final String FECHA_INICIO = "Fecha de inicio:";
    public static final String FECHA_FIN = "Fecha de fin:";
    public static final String ASUNTO = "Asunto:";
    public static final String DESCRIPCION = "Descripción:"; 
    public static final String LEYENDA_MODIFICAR_INFORMACION_GENERAL = "Haga doble click en la fila donde se encuentre la información que desea modificar";
    public static final String LEYENDA_PUBLICO_DIRIGIDO = "A que público va dirigido:";
    public static final String LEYENDA_AGREGAR_INFORMACION_GENERAL = "Si desea agregar información general por favor ingrese los datos que se requieren:";
     public static final String LEYENDA_ACTUALIZAR_INFORMACION_GENERAL = "Cambie los campos que requiera actualizar y haga click en el botón Actualizar:";
    public static final String ICONO_USUARIO_ADMINISTRADOR = "<img src='../img/Icons/ic_build_black_24dp_2x.png' width=25>";
    public static final String ICONO_USUARIO_ESTANDAR = "<img src='../img/Icons/ic_account_circle_black_24dp_2x.png' width=25>";
    public static final String ICONO_INFORMACION_ACTIVA =  "<img src='../img/Icons/ic_check_circle_black_24dp_2x.png' width=25>";
    public static final String ICONO_INFORMACION_INACTIVA = "<img src='../img/Icons/ic_cancel_black_24dp_2x.png' width=25>";
    public static final String BOTON_ACTUALIZAR_INFORMACION = "Actualizar información";
    public static final String ITI = "Ingeniería en Tecnologías de la Información y Comunicación";
    
    
    //Etiquetas datos de la universidad
    public static final String UNIVERSIDAD_METROPOLITANA = "Universidad Metropolitana del Valle de Texcoco";
    public static final String UNIVERSIDAD_SIGLAS = "UMVT";
    public static final String DIRECCION_UNIVERSIDAD = "";
    public static final String TELEFONO_UNIVERSIDAD = "";
    public static final String CORREO_UNIVERSIDAD = "";
    
    
    //Etiquetas MIV
    public static final String MIV = "Módulo de Información Virtual";
    public static final String BIENVENIDA_MIV = "Bienvenid@ al M&oacute;dulo de Informaci&oacute;n Virtual";
    
    
    //Etiquetas Menú
    public static final String INICIO = "Inicio";
    public static final String TRAZAR_RUTAS = "Trazar ruta";
    public static final String MAPAS_CROQUIS = "Mapas y croquis";
    public static final String INFORMACION_GENERAL = "Información general";
    public static final String INICIAR_SESION = "Iniciar sesión";
    public static final String CERRAR_SESION = "Cerrar sesión";
    
    //Etiquetas página principal sesión usuario estándar
    public static final String INFORMACION_RELEVANTE = "Información relevante para la comunidad";
    
    //Etiquetas footer
    public static final String POWERED_BY_IMCE = "© 2016 Powered by IMCE";
    
    //Etiquetas gestion información general
    public static final String GESTION_INFORMACION_GENERAL = "Gestión de información general.";
    public static final String SELECCIONE_MODULO_GESTIONAR = "Seleccione el módulo que requiere gestionar";
    public static final String USUARIOS = "Usuarios";
    public static final String INFORMACION_INSTITUCIONAL = "Información institucional";
    public static final String HORARIOS = "Horarios";
    public static final String INFORMACION_CUBICULOS = "Información de cubiculos";
    public static final String SELECCIONE_ACCION_REALIZAR = "Seleccione la acción que desa ejecutar:";
    public static final String CONSULTA_MODIFICACION_BAJA_USUARIOS = "Consultar, modificar o dar de baja usuario";
    public static final String VISUALIZAR_MODIFCAR_BAJA_USUARIO = "Visualiza, modificar y dar de baja información de usuarios";
    public static final String VISUALIZAR_MODIFICAR_ELIMINAR_Y_AGREGAR_INFORMACION = "Visualizar, modificar, eliminar y crear información.";
    public static final String MODIFICACION_CONSULTA_BAJA_HORARIOS = "Visualizar, modificar, eliminar y agregar información de horarios.";
    public static final String GESTION_INFORMACION_CUBICULOS = "Visualizar, modificar, eliminar y agregar información de cubiculos.";
    public static final String ALTA_INFORMACION = "Agregar información institucional";
    public static final String CONSULTA_MODIFICACION_BAJA_INFORMACION = "Consulta, modificación o dar de baja información.";
    public static final String ALTA_HORARIOS = "Agregar horario";
    public static final String CONSULTA_MODIFICACION_ELIMINACION_HORARIOS = "Consultar, modificar o dar de baja horarios.";
    public static final String ALTA_INFORMACION_CUBICULOS = "Agregar información de cubiculos";
    public static final String CONSULTA_MODIFICACION_ELIMINACION_CUBICULOS = "Consultar, modificar, dar de baja y agregar información sobre cubiculos";
    
    
    //Talleres
    public static final String TALLERES = "Talleres";
    public static final String GESTION_TALLERES = "Consultar, modificar, dar de baja y agregar información sobre talleres";
    public static final String ALTA_INFORMACION_TALLERES= "Agregar información de talleres";
    public static final String CONSULTA_MODIFICACION_ELIMINACION_TALLERES= "Consultar, modificar, dar de baja y agregar información sobre talleres";
    public static final String LEYENDA_ALTA_TALLERES = "Llene los datos requeridos en el siguiente formulario para agregar información de un taller.";
    public static final String LEYENDA_MODIFICAR_TALLER = "Haga doble click en la fila donde se encuentre la información que desea modificar.";
    public static final String NOMBRE_TALLER = "Nombre del taller";
    public static final String DESCRIPCION_TALLER = "Descripción del taller";
    public static final String HORARIO_TALLER = "Horario del taller";
    public static final String LUGAR_TALLER = "Ubicación del taller";
    public static final String BTN_GUARDAR_TALLER = "Guardar información del taller.";
    public static final String TALLER_ACTIVO = "Taller activo";
    public static final String LEYENDA_SELECCIONE_TALLER_MENU = "Seleccione el taller que desea consultar en el menú desplegable que se muestra a continuación.";
    
    
    //Calendario escolar
    public static final String CALENDARIO_ESCOLAR = "Calendario escolar";
    public static final String GESTION_CALENDARIO_ESCOLAR = "Consultar, modificar y dar de baja información sobre calendario escolar";
//    public static final String ALTA_INFORMACION_CALENDARIO_ESCOLAR= "Agregar información de calendario escolar";
    public static final String CONSULTA_MODIFICACION_ELIMINACION_CALENDARIO_ESCOLAR = "Consultar, modificar y dar de baja información sobre calendario escolar";
    public static final String BTN_ACTUALIZAR_CALENDARIO = "Actualizar calendario escolar";
    public static final String LEYENDA_ACTUALIZACION_HORARIO_CORRECTA = "Calendario escolar actualizado correctamente.";
    
    //Etiquetas módulo Gestion de horarios
    
    public static final String RELLENE_EL_FORMULARIO = "Ingrese la información del horario que desea capturar:";
    public static final String SELECCIONE_PDF = "Seleccione el PDF que desea usar:";
    public static final String SELECCIONE_GRUPO_PROFESOR = "Seleccione si es grupo o profesor al que pertenece el horario";
    public static final String SELECCIONE_GRUPO = "Seleccione el grupo al que pertenece el horario";
    public static final String SELECCIONE_PROFESOR = "Seleccione el profesor al que pertenece el horario";
    public static final String BOTON_CARGAR_HORARIO = "Cargar horario";
    public static final String LEYENDA_MODIFICAR_HORARIO= "Haga doble click en la fila donde se encuentre la información del horario que desea modificar";
    public static final String GRUPO = "Nombre del grupo";
    public static final String NOMBRE_ARCHIVO = "Nombre del archivo";
    public static final String BOTON_ACTUALIZAR_HORARIO = "Actualizar horario";
    public static final String LEYENDA_SELECCIONE_HORARIO_DE_LA_TABLA = "Haga doble click en el horario que desea consultar en la siguiente tabla";
    public static final String LEYENDA_SELECCIONE_HORARIO_PROFESOR_GRUPO = "Seleccione si desea consultar horario de profesor o de grupo";
    
    //Trazar ruta
    public static final String DESCRIPCION_TRAZAR_RUTA = "En este apartado debe seleccionar un punto de origen y un punto de destino, posteriormente pulse el botón Trazar ruta y automaticamente aparecerá la ruta más corta.";

    
    
    public static final String HAGA_CLICK_MAS_DETALLES = "Haga click en la fila donde se encuentra la información de la que desea más información.";
    
    
}
