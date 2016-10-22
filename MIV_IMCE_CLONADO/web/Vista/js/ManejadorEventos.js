//Cuando termine de cargar el documento que comience con la transición de las diapositivas
$(document).ready(function () {
//        $('#slideshowHolder').jqFancyTransitions({ width: 670, height: 400 });
//          $('.slider').slider({full_width: true});
    //Inicaralizar los select para que me muestren como el framework lo requiere
    $('select').material_select();
    //Inicializa elementos del framework necesarios
    $('.materialboxed').materialbox();
    //Iniciarlizar la función que nos muestra el slider
    $('.bxslider').bxSlider({
        infiniteLoop: true,
        hideControlOnEnd: true,
        mode: 'fade',
        auto: true
    });

});//Fin ready


//Evento al dar click en el link Trazar ruta
$(document).on('click', '#trazaRuta', function () {
    
    var rutaImagen;
    rutaImagen = "Vista/img/Mapas/planoGeneral.jpg";
    $.ajax({
        type: 'POST',
        url: 'CargarTrazarRuta',
        data: {
            rutaImagen : rutaImagen
        },
        success: function (data) {
            $('.otroContenidoSesion').html(data);
            $('#origenTrazarRuta').material_select();
            $('#destinotrazarRuta').material_select();
             $('.otroContenidoSesion').css('display', 'block');
            $('.otroContenidoSesion').css('width', '60%');
            $('.otroContenidoSesion').css('height', 'auto');
            $('.otroContenidoSesion').css('margin-left', '22%');
            $('.diapositivas').css('display', 'none');
        cargarImagenCanvas();
        },
        error: function (data) {
            rutaImagen = "../../Vista/img/Mapas/planoGeneral.jpg";
                    $.ajax({
                type: 'POST',
                url: '../../CargarTrazarRuta',
                data: {
                    rutaImagen : rutaImagen
                },
                success: function (data) {
                    $('.otroContenidoSesion').html(data);
                    $('#origenTrazarRuta').material_select();
                    $('#destinotrazarRuta').material_select();
                     $('.otroContenidoSesion').css('display', 'block');
        $('.otroContenidoSesion').css('width', '60%');
        $('.otroContenidoSesion').css('height', 'auto');
        $('.otroContenidoSesion').css('margin-left', '22%');
        $('.diapositivas').css('display', 'none');
                cargarImagenCanvas();
                },
                error: function (data) {
                    alert(data);
                }
            });
        }
    });
});

//Funcion para cargar imagen en el canvas al cargar el archivo
function cargarImagenCanvas() {
   var canvas = document.getElementById("canvasTrazarRuta");
   var cxt = canvas.getContext("2d");
//   cxt.fillStyle="blue";
//   cxt.fillRect(0,0,100,50);
    var img = document.getElementById("source");
 //pasamos la imagen al 2d del canvas y se dibujará
 //en 0 0 podemos poner las cordenadas de donde empezar a dibujar la imagen
cxt.drawImage(img, 0, 0);

};

//TRAZAR RUTA
$(document).on('click', '#btntrazarRuta', function(){
    var origen = $('#origenTrazarRuta').val();
    var destino =  $('#destinotrazarRuta').val();
    
    if(origen === null || origen === ''){
        alertify.alert("Debe seleccionar un origen válido.");
    }else if(destino === null || destino === ''){
        alertify.alert("Debe seleccionar un destino válido.");
    }else{
        if(origen === destino){
            alertify.alert("No puedes elegir el mismo edificio como origen y destino");
        }else if(origen==="Edificio A" & destino === "Edificio J" || origen === "Edificio J" & destino === "Edificio A"){
            limpiarCanvas();
            cargarImagenCanvas();
            ruta_A_J();
        }else if(origen==="Edificio A" & destino === "Edificio I" || origen === "Edificio I" & destino === "Edificio A"){
            limpiarCanvas();
            cargarImagenCanvas();
            ruta_A_I();
        }else if(origen==="Edificio A" & destino === "Edificio K" || origen === "Edificio K" & destino === "Edificio A"){
            limpiarCanvas();
            cargarImagenCanvas();
            ruta_A_K();
        }else if(origen==="Edificio A" & destino === "Edificio L" || origen === "Edificio L" & destino === "Edificio A"){
            limpiarCanvas();
            cargarImagenCanvas();
            ruta_A_L();
        }
    }
});

function limpiarCanvas(){
    var canvas = document.getElementById("canvasTrazarRuta");
    canvas.width=canvas.width;
}


function ruta_A_J(){
    var canvas = document.getElementById("canvasTrazarRuta");
    var cxt = canvas.getContext("2d");
    
    cxt.moveTo(260,163);
    cxt.lineTo(225,163);
    
    cxt.moveTo(225,163);
    cxt.lineTo(225,290);
    
    cxt.moveTo(225,290);
    cxt.lineTo(250,290);
    
    cxt.moveTo(250,290);
    cxt.lineTo(250,280);
    
    cxt.lineWidth = 5;
    cxt.strokeStyle = "#0000000";
    cxt.stroke();
}

function ruta_A_I(){
    var canvas = document.getElementById("canvasTrazarRuta");
    var cxt = canvas.getContext("2d");
    // X Y
    cxt.moveTo(260,163);
    cxt.lineTo(225,163);
    
    cxt.moveTo(225,163);
    cxt.lineTo(225,290);
    
    cxt.moveTo(225,290);
    cxt.lineTo(317,290);
    
    cxt.lineWidth = 5;
    cxt.strokeStyle = "#0000000";
    cxt.stroke();
}

function ruta_A_K(){
    var canvas = document.getElementById("canvasTrazarRuta");
    var cxt = canvas.getContext("2d");
    // X Y
    cxt.moveTo(260,163);
    cxt.lineTo(225,163);
    
    cxt.moveTo(225,163);
    cxt.lineTo(225,290);
    
    cxt.moveTo(225,290);
    cxt.lineTo(311,290);
    
    cxt.moveTo(311,290);
    cxt.lineTo(311,313);
    
    cxt.lineWidth = 5;
    cxt.strokeStyle = "#0000000";
    cxt.stroke();
}

function ruta_A_L(){
    var canvas = document.getElementById("canvasTrazarRuta");
    var cxt = canvas.getContext("2d");
    // X Y
    cxt.moveTo(260,163);
    cxt.lineTo(225,163);
    
    cxt.moveTo(225,163);
    cxt.lineTo(225,290);
    
    cxt.moveTo(225,290);
    cxt.lineTo(150,290);
    
    cxt.moveTo(150,290);
    cxt.lineTo(150,305);
    
    cxt.lineWidth = 5;
    cxt.strokeStyle = "#0000000";
    cxt.stroke();
}


//Modal iniciar sesión
$(document).on('click', '#login', function () {
    //Asignar el valor vacio a las cajas de texto de ventanaModalón cada que se abra la ventana modal
    $('#usr').val("");
    $('#psw').val("");
    $('#ventanaModal').dialog(
            {modal: true,
                title: "Inicio de sesión",
                width: 400,
                height: 410,
                show: "fold",
                hide: "fold"});
});


//Recuperar los valores para iniciar sesión
$(document).on('click', '#acceder', function () {
    var usuario = $('#usr').val();
    var password = $('#psw').val();

    //validar que los campos no esten vacios
    if (usuario.length === 0 || password.length === 0) {
        Materialize.toast('No puedes dejar un campo vacio', 4000);
    } else if (usuario.length < 10) {
        Materialize.toast('Usuario inválido', 4000);
    } else if (password.length <= 6) {
        Materialize.toast("La longitud de la contraseña debe contener mínimo 6 caracteres", 4000);
    } else if (!password.match(/[A-z]/)) {
        alertify.error("La contraseña debe contener una minúscula");
    } else if (!password.match(/[A-Z]/)) {
        alertify.error("La contraseña debe contener una letra mayúscula");
    } else if (validaNumero(password) === false) {
        alertify.error("La contraseña debe contener un número");
    } else {//validar que la contraseña contenga una letra mayúscula, una miniscula, un número y un carácter especial FALTA
        validaUsuario(usuario, password);
    }


});

//Función que nos ayuda a validar que en la caja de texto unicamente sean ingresados números
function validaSoloNumeros(e) {
    var charCode;
    charCode = e.keyCode;
    status = charCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

//Enviar los valores de las cajas de texto de inicio de sesión para validar si el usuario es válido
function validaUsuario(usuario, password) {
    $.ajax({
        type: 'POST',
        url: 'CtrlLogin',
        data: {
            user: usuario,
            pass: password
        },
        success: function (data) {
            if (data === "1" || data === "0") {//Si los datos de inicio de sesión son correcto
                window.location = 'Vista/jsp/sesion.jsp';
            } else {//Si existe algun error con los datos de inicio de sesión
                Materialize.toast('Verifique los datos de inicio de sesión seán correctos', 4000);
            }
        },
        error: function (data) {
            alert('ERROR EN AJAX' + data);
        }
    });
}

//función para que sólo deje escribir números
function validarNumeros(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8)
        return true; // para la tecla de retroseso
    else if (tecla == 0 || tecla == 9)
        return true;
    //patron =/^[a-zA-ZñÑ ]$/; // Solo acepta letras
    patron = /[0-9\s]/;// -> solo numeros
    te = String.fromCharCode(tecla);
    return patron.test(te);
}//Fin función validar números

//Cerrar sesión
$(document).on('click', '#logout', function () {
    alertify
            .okBtn("Aceptar")
            .cancelBtn("Cancelar")
            .confirm("¿Está seguro que desea cerrar la sesión actual?", function () {
                $.ajax({
                    type: 'POST',
                    url: '../jsp/CerrarSession.jsp',
                    success: function () {
                        window.location = '../../index.jsp';
                        window.location.reload();
                    },
                    error: function () {
                        alert('Error al cerrar sesión');
                    }
                });
            });




});


//Modal registro usuarui
$(document).on('click', '#linkRegistro', function () {
    $('#ventanaModalRegistro').dialog(
            {modal: true,
                title: "Registro de usuario",
                width: 450,
                height: 350,
                show: "fold",
                hide: "fold"});
});


//Registrar usuario
$(document).on('click', '#registroNuevoUsuario', function () {
//    alertify
//  .alert("This is an alert dialog.", function(){
//    alertify.message('OK');
//  });
    var pass1 = $('#psw1').val().trim();
    var pass2 = $('#psw2').val().trim();
    var usrNuevo = $('#usrNuevo').val().trim();
    var usrNuevo = $('#usrNuevo').val().trim();

    if (usrNuevo.length === 0 || pass1.length === 0 || pass2.length === 0 || usrNuevo.length < 10) {//Valida que los campos no esten vacios
        alertify.error("No puedes dejar campos vacios");
    } else if (pass1.length < 6 || pass2.length < 6) {
        alertify.error("La longitud de la contraseña debe contener mínimo 6 caracteres");
    } else if (!pass1.match(/[A-z]/)) {
        alertify.error("La contraseña debe contener una minúscula");
    } else if (!pass1.match(/[A-Z]/)) {
        alertify.error("La contraseña debe contener una letra mayúscula");
    } else if (validaNumero(pass1) === false) {
        alertify.error("La contraseña debe contener un número");
    } else if (pass1 === pass2) {
        //alertify.success("Las contraseñas coinciden");
        $('#psw1').css("border-color", "green");
        $('#psw2').css("border-color", "green");
        $.ajax({
            type: 'POST',
            url: 'creaUsuarioNuevo',
            data: {
                user: usrNuevo,
                psw: pass1
            },
            success: function (data) {
                if (data === "1" || data === "0") {//Si el usuario se registro correctamente
                    alertify
                            .okBtn("Aceptar")
                            .cancelBtn("")
                            .confirm("Registro almacenado correctamente", function () {
                                window.location.reload();
                            }, function () {
                                window.location.reload();
                            });
//                     alertify.alert("Registro almacenado correctamente");
//                     window.location.reload();
                } else {//Si existe algun error con los datos de inicio de sesión
                    alertify.alert(data);
//                   Materialize.toast('Verifique los datos de inicio de sesión sean correctos', 4000);
                }
            },
            error: function (data) {
                alert('ERROR EN AJAX' + data);
            }
        });
    } else {
        alertify.error("Las contraseñas no coinciden");
        $('#psw1').css("border-color", "red");
        $('#psw2').css("border-color", "red");
    }

});

function validaNumero(cadena) {
    var i = 0;
    var valida = true;
    for (i = 0; i < cadena.length; i++) {
        if (isNaN(cadena.charAt(i))) {
            valida = false;
        } else {
            valida = true;
        }
    }
    return valida;
}//Fin validar numero

//Cargar el documento en el contenedor Mapas y croquis dentro de la sesión
$(document).on('click', '#mapascroquis', function () {
    $('.otroContenidoSesion').load('../jsp/consultarMapasCroquis.jsp');
    $('#mapaCroquis').material_select();
    $('.diapositivas').css('display', 'none');
    $('.otroContenidoSesion').css('display', 'block');
    $('.otroContenidoSesion').css('width', '50%');
    $('.otroContenidoSesion').css('height', '400px');
    $('.otroContenidoSesion').css('margin-left', '24%');
});

$(document).on('click', '#pagInicioSesion', function () {
    $('.diapositivas').css('display', 'block');
    $('.otroContenidoSesion').css('display', 'none');
});

//Mostrar el mapa cada vez que cambie la opción del combo
$(document).on('change', '#mapaCroquis', function () {
    if ($(this).val() === "Seleccione una opción") {
        alert("Debes seleccionar un edificio");
    } else {
        // $('#Mapa').html("Cargar imagen de "+$(this).val());
        //alert("Cargar imagen de "+$(this).val());
        var mapa = $(this).val();
        $.ajax({
            type: 'POST',
            url: '../../dibujarMapa',
            data: {
                option: mapa
            },
            success: function (data) {
                $('#Mapa').html(data);
            },
            error: function () {
                alert('ERROR AL CARGAR EL ELEMENTO SOLICITADO');
            }
        });
    }

});


$(document).on('click', '#mapascroquisPrincipal', function () {
    $('.otroContenidoSesion').load('Vista/jsp/consultarMapasCroquis.jsp');
    $('#mapaCroquis').material_select();
    $('.diapositivas').css('display', 'none');
    $('.otroContenidoSesion').css('display', 'block');
});


$(document).on('click', '#informacionGeneral', function () {
    //Debemos de validar que tipo de usuario es: si es administrador debe mostrar al gestión, si es alumno solo debe mostrar info
    var tUsu = $('#tUsu').val().trim();
//    alert(tUsu);
    //Si es 1 significa que es administrador
    if (tUsu === "0") {
        $.ajax({
        type: 'POST',
        url: '../../informacionGeneral',
        data: {
        },
        success: function (data) {
            $('.otroContenidoSesion').html(data);
            $('#infoAConsultar').material_select();
            $('.otroContenidoSesion').fadeIn();
            $('.otroContenidoSesion').css('display', 'block');
            $('.otroContenidoSesion').css('width', '60%');
            $('.otroContenidoSesion').css('height', 'auto');
            $('.otroContenidoSesion').css('margin-left', '22%');
            $('.diapositivas').css('display', 'none');
        },
        error: function () {
            alert('ERROR AL CARGAR EL ELEMENTO SOLICITADO');
        }
    });
    
//        $('.otroContenidoSesion').load('informacionGeneral.jsp');
//        $('#infoAConsultar').material_select();
//        $('.diapositivas').css('display', 'none');
//        $('.otroContenidoSesion').css('display', 'block');
    } else if (tUsu === "1") {
        $('.otroContenidoSesion').load('informacionGeneralAdmon.jsp');
        $('.otroContenidoSesion').css('display', 'block');
        $('.otroContenidoSesion').css('width', '60%');
        $('.otroContenidoSesion').css('height', 'auto');
        $('.otroContenidoSesion').css('margin-left', '22%');
        $('.diapositivas').css('display', 'none');
    }
});

//Cargar los datos que podra consultar el usuario
$(document).on('change', '#infoAConsultar', function(){
    var moduloConsultar = $(this).val();
    if(moduloConsultar === ""){
        alertify.error("Debe seleccionar una opción");
    }else{
        $.ajax({
        type: 'POST',
        url: '../../cargarDetalleInformacionGeneral',
        data: {
            modulo : moduloConsultar
        },
        success: function (data) {
              $('#formularioConsulta').html(data);
                $('.collapsible').collapsible({
                accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
              });
              $('#opcionAConsultar').material_select();
              $('#formularioConsulta').fadeIn();
              $('#formularioConsulta').css('display' , 'block');
        },
        error: function () {
            alert('ERROR AL CARGAR EL ELEMENTO SOLICITADO');
        }
    });
    }
});

//$(document).on('click', '#modGestionConsultarUsuario', function(){
//    var modulo = 'usuarios';
//    var accion = 'consulta';
//    var nombreTabla = "#tableModConsUsuarios";
//    ajaxModulos(modulo, accion, nombreTabla);
//});

$(document).on('click', '#modGestionModificarUsuario', function () {
    var modulo = 'usuarios';
    var accion = 'modificar';
    var nombreTabla = "#tableModModificarUsuarios";
    var tituloVentana = "Consulta de usuarios";
    var select = "";
    ajaxModulos(modulo, accion, nombreTabla, tituloVentana, select);
});

$(document).on('click', '#modGestionAltaInformacion', function () {
    var modulo = "infoGeneral";
    var accion = "alta";
    var nombreTabla = "";
    var tituloVentana = "Agregar información general.";
    var select = "#publico";

    ajaxModulos(modulo, accion, nombreTabla, tituloVentana, select);

});

$(document).on('click', '#modGestionModificacionInformacion', function () {
    var modulo = "infoGeneral";
    var accion = "modificacionConsulta";
    var nombreTabla = "#tableModModificarInfoGeneral";
    var tituloVentana = "Consulta, modificación y dar de baja información general";
    var select = "";

    ajaxModulos(modulo, accion, nombreTabla, tituloVentana, select);
});


function ajaxModulos(modulo, accion, nombreTabla, tituloVentana, select) {
    $.ajax({
        type: 'POST',
        url: '../../gestionInformacionGral',
        data: {
            modulo: modulo,
            accion: accion
        },
        success: function (data) {
            $('#ventanaModalGestionInfoGral').html(data);
            $(nombreTabla).DataTable();
            $(select).material_select();

            //hacer que funcione el calendario
            $("#fechaInicio").datepicker({
                dateFormat: "yy/mm/dd",
                dayNames: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
                dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
                firstDay: 0,
                minDate: 0,
                gotoCurrent: true,
                monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            });
            $("#fechaFin").datepicker({
                dateFormat: "yy/mm/dd",
                dayNames: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
                dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
                firstDay: 0,
                minDate: 0,
                gotoCurrent: true,
                monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            });
            $('#ventanaModalGestionInfoGral').dialog({
                modal: true,
                title: tituloVentana,
                width: 1000,
                height: 700,
                show: "fold",
                hide: "fold"});

        },
        error: function () {
            alert('ERROR AL CARGAR EL ELEMENTO SOLICITADO');
        }
    });
}


//Acción al hacer click en las filas de edición de usuario
$(document).on('dblclick', '#tableModModificarUsuarios tbody tr', function () {
    var nTds = $('td', this);
    var id_usuario;

    id_usuario = $(nTds[0]).text();

    $.ajax({
        type: 'POST',
        url: '../../consultarUsuario',
        data: {
            idUsuario: id_usuario
        },
        success: function (data) {
            $('#ventanaModalSecundaria').html(data);
            $('#tipoUsuarioModUsuario').material_select();
            $('#ventanaModalSecundaria').dialog({
                modal: true,
                title: "Modificar usuario",
                width: 500,
                height: 800,
                show: "fold",
                hide: "fold"});
        },
        error: function () {
            alert('ERROR AL CARGAR EL ELEMENTO SOLICITADO');
        }
    });


});


$(document).on('click', '#actualizarInformacion', function () {
    var nombre = $('#nomUsuarioModUsuario').val().trim();
    var paterno = $('#patUsuarioModUsuario').val().trim();
    var materno = $('#matUsuarioModUsuario').val().trim();
    var idUsuario = $('#idUsuarioModUsuario').val().trim();
    var email = $('#emailUsuarioModUsuario').val().trim();

    var status = $('#statusUsuarioModUsuario').prop("checked");
    var nivelAcceso = $('#tipoUsuarioModUsuario').val();

    if (nombre === "" | paterno === "" | materno === "" | idUsuario === "" | email === "") {
        alertify.alert("Debe llenar todos los campos");
    } else {
        $.ajax({
            type: 'POST',
            url: '../../actualizarInformacionUsuario',
            data: {
                nombre: nombre,
                paterno: paterno,
                materno: materno,
                idUsuario: idUsuario,
                email: email,
                status: status,
                nivelAcceso: nivelAcceso
            },
            success: function (data) {
                alertify.alert(data);
            },
            error: function () {
                alert('ERROR AL CARGAR EL ELEMENTO SOLICITADO');
            }
        });
    }



});

$(document).on('click', '#guardarInfoGeneral', function () {
    var asunto = $('#asunto').val().trim();
    var mensaje = $('#mensaje').val().trim();
    var fechaInicio = $('#fechaInicio').val().trim();
    var fechaFin = $('#fechaFin').val().trim();
    var publicoArreglo = $('#publico').val();
    var publico = "";

    if (asunto === "" | mensaje === "" | fechaInicio === "" | fechaFin === "" | publicoArreglo === null | publicoArreglo.length === 0) {
        alertify.alert("Debes llenar todos los campos");
    } else {
        for (var i = 0; i < publicoArreglo.length; i++) {
            publico += publicoArreglo[i] + "-";
        }

        $.ajax({
            type: 'POST',
            url: '../../GuardarInformacionGeneral',
            data: {
                asunto: asunto,
                mensaje: mensaje,
                fechaInicio: fechaInicio,
                fechaFin: fechaFin,
                publico: publico
            },
            success: function (data) {
                alertify.alert(data);
            },
            error: function () {
                alert('ERROR AL CARGAR EL ELEMENTO SOLICITADO');
            }
        });
    }


});




$(document).on('dblclick', '#tableModModificarInfoGeneral tbody tr', function () {
    var nTds = $('td', this);
    var id_informacion;

    id_informacion = $(nTds[0]).text();
//   alert(id_informacion);

    $.ajax({
        type: 'POST',
        url: '../../FormularioConsultarInformacion',
        data: {
            idInformacion: id_informacion
        },
        success: function (data) {
            $('#ventanaModalSecundaria').html(data);
            $('#publicoActualizar').material_select();
            //hacer que funcione el calendario
            $("#fechaInicio").datepicker({
                dateFormat: "yy/mm/dd",
                dayNames: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
                dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
                firstDay: 0,
                minDate: 0,
                gotoCurrent: true,
                monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            });
            $("#fechaFin").datepicker({
                dateFormat: "yy/mm/dd",
                dayNames: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
                dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
                firstDay: 0,
                minDate: 0,
                gotoCurrent: true,
                monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            });
            $('#ventanaModalSecundaria').dialog({
                modal: true,
                title: "Modificar usuario",
                width: 1000,
                height: 800,
                show: "fold",
                hide: "fold"});
        },
        error: function () {
            alert('ERROR AL CARGAR EL ELEMENTO SOLICITADO');
        }
    });


});

$(document).on('click', '#actualizarInfoGeneral', function () {

    var id_informacion = $('#id_informacion').val().trim();
    var asunto = $('#asuntoActualizar').val().trim();
    var descripcion = $('#mensajeActualizar').val().trim();
    var publicoArreglo = $('#publicoActualizar').val();
    var fechaInicio = $('#fechaInicioActualizar').val().trim();
    var fechaFin = $('#fechaFinActualizar').val().trim();
    var status = $('#statusInfoGeneral').prop("checked");
    var publico;

    if (id_informacion === "" | asunto === "" | descripcion === "" | fechaInicio === "" | fechaFin === "" | publicoArreglo === null | publicoArreglo.length === 0) {
        alertify.alert("Debes llenar todos los campos");
    } else {
        for (var i = 0; i < publicoArreglo.length; i++) {
            publico += publicoArreglo[i] + "-";
        }

        $.ajax({
            type: 'POST',
            url: '../../actualizarInformacionGeneral',
            data: {
                idInformacion: id_informacion,
                asunto: asunto,
                descripcion: descripcion,
                fechaInicio: fechaInicio,
                fechaFin: fechaFin,
                publico: publico,
                status: status
            },
            success: function (data) {
                alertify.alert(data);
            },
            error: function () {
                alert('ERROR AL CARGAR EL ELEMENTO SOLICITADO');
            }
        });


    }


});


$(document).on('click', '#mosGestionAltaHorarios', function () {
    var modulo = "horarios";
    var accion = "alta";
    var nombreTabla = "";
    var tituloVentana = "Alta de horario";
    var select = "#seleccionGrupoProfesor";
    ajaxModulos(modulo, accion, nombreTabla, tituloVentana, select);

});

$(document).on('change', '#seleccionGrupoProfesor', function () {
    var valorSelect = $('#seleccionGrupoProfesor').val();
    if (valorSelect === "grupo") {
        $('#grupoProfesor').html("Seleccione el grupo al que pertenece el horario");
    } else if (valorSelect === "profesor") {
        $('#grupoProfesor').html("Seleccione el profesor al que pertenece el horario");
    }

    $.ajax({
        type: 'POST',
        url: '../../cmbDinamicoGrupoProfesor',
        data: {
            tipoCombo: valorSelect
        },
        success: function (data) {

            $('#comboGrupoProfesor').html(data);
            $('#cmbDinamicoGrupoProfesor').material_select();
        },
        error: function () {
            alert('ERROR AL CARGAR EL ELEMENTO SOLICITADO');
        }
    });



});


//Subir el archivo
$(document).on('click', '#btnCargarHorario', function () {
    var formulario = $('#formSubirHorario').get(0); 
    var formData = new FormData(formulario);
        
    var nombreArchivo = $('#horarioPDF').val();
    var grupoProfesor = $('#seleccionGrupoProfesor').val();
    var cmbGrupoProfesor = $('#cmbDinamicoGrupoProfesor').val();
    
//    formData.append("seleccionGrupoProfesor", grupoProfesor);
//    formData.append("cmbDinamicoGrupoProfesor", cmbGrupoProfesor);
    
    var extension = (nombreArchivo.substring(nombreArchivo.lastIndexOf("."))).toLowerCase();

    if (extension !== ".pdf") {//validar que el formato del archivo este en PDF
        alertify.error('El archivo que selecciono no está en formato PDF');
    } else if(grupoProfesor === null){
        alertify.error('Debe seleccionar si el horario pertenece a un grupo o profesor.');
    }else if(cmbGrupoProfesor === null){
        alertify.error('Debe seleccionar un grupo o profesor.');
    }    else {
        
        $.ajax({
            type: "POST",
            async: false,
            url: '../../cargarPDF',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,   // tell jQuery not to set contentType
            success: function (data) {
                alert(data);
            },
            error: function () {
                alert('ERROR AL CARGAR EL ELEMENTO SOLICITADO');
            }
        });

    }

});

//Modificación de horarios
$(document).on('click', '#modGestionConsultaModificacionHorarios', function () {
    var modulo = "horarios";
    var accion = "modificacionConsulta";
    var nombreTabla = "#tableModModificarHorarios";
    var tituloVentana = "Consulta, modificación y dar de baja horarios";
    var select = "";

    ajaxModulos(modulo, accion, nombreTabla, tituloVentana, select);
});


//Actualizar información del horario
$(document).on('dblclick', '#tableModModificarHorarios tbody tr', function () {
    var nTds = $('td', this);
    var id_horario;

    id_horario = $(nTds[0]).text();

//    alert(id_horario + " queda pendiente este módulo ante la incapacidad de subir un PDF :S");

       $.ajax({
            type:'POST',
            url: '../../ConsultarHorario',
            data:{
                idHorario : id_horario
            },
            success: function(data){
              $('#ventanaModalSecundaria').html(data);
              $('#tipoUsuarioModUsuario').material_select();
              $('#ventanaModalSecundaria').dialog({
                        modal: true,
                        title: "Modificar horario",
                        width: 1000,
                        height: 800,
                        show: "fold",
                        hide: "fold"});
            },
            error:function(){
                alert('ERROR AL CARGAR EL ELEMENTO SOLICITADO'); 
            }
        });


});

//Alta de información sobre talleres
$(document).on('click', '#modGestionAltaTaller', function () {
    var modulo = "talleres";
    var accion = "agregar";
    var nombreTabla = "";
    var tituloVentana = "Agregar información de talleres.";
    var select = "#seleccionLugarTaller";

    ajaxModulos(modulo, accion, nombreTabla, tituloVentana, select);
});

//Guardar información del taller
$(document).on('click','#btnGuardarTaller',function(){
    var nombre = $('#nombreTaller').val().trim();
    var descripcion = $('#descripcionTaller').val().trim();
    var horario = $('#horarioTaller').val().trim();
    var lugar = $('#seleccionLugarTaller').val();
    
    if(nombre === "" || nombre === null || descripcion === "" || descripcion === null || horario === "" || horario === null || lugar === "" || lugar === null){
        alertify.alert("Debe llenar todos los campos");
    }else{
        $.ajax({
            type:'POST',
            url: '../../guardarInformacionTaller',
            data:{
                nombre : nombre,
                descripcion : descripcion,
                horario : horario,
                lugar : lugar
            },
            success: function(data){
                alertify.alert(data);
            },
            error:function(){
                alert('ERROR AL CARGAR EL ELEMENTO SOLICITADO'); 
            }
    });
}
    
});

//Consulta, modifica, elimina taller
$(document).on('click','#modGestionConsultaModificaTaller', function(){
    var modulo = "talleres";
    var accion = "modificacionConsulta";
    var nombreTabla = "#tableModModificarTalleres";
    var tituloVentana = "Consulta, modificación y dar de baja talleres";
    var select = "";

    ajaxModulos(modulo, accion, nombreTabla, tituloVentana, select);
});



//Actualizar información de talleres
$(document).on('dblclick', '#tableModModificarTalleres tbody tr', function () {
    var nTds = $('td', this);
    var id_taller;

    id_taller = $(nTds[0]).text();

//    alert(id_taller);

       $.ajax({
            type:'POST',
            url: '../../ConsultarTaller',
            data:{
                idTaller : id_taller
            },
            success: function(data){
              $('#ventanaModalSecundaria').html(data);
              $('#actualizarLugarTaller').material_select();
              $('#ventanaModalSecundaria').dialog({
                        modal: true,
                        title: "Modificar horario",
                        width: 1000,
                        height: 800,
                        show: "fold",
                        hide: "fold"});
            },
            error:function(){
                alert('ERROR AL CARGAR EL ELEMENTO SOLICITADO'); 
            }
        });


});
$(document).on('click', '#actualizarInfoTaller', function(){
    var idTaller = $('#idTaller').val();
    var nombreTaller = $('#actualizarNombreTaller').val();
    var descripcionTaller = $('#descripcionTaller').val();
    var horarioTaller = $('#actualizarHorarioTaller').val();
    var lugarTaller = $('#actualizarLugarTaller').val();
    var statusTaller = $('#statusTaller').prop("checked");
    
//    alert(nombreTaller+descripcionTaller+horarioTaller+lugarTaller+status);

 $.ajax({
            type:'POST',
            url: '../../actualizarInfoTaller',
            data:{
                idTaller : idTaller,
                nombreTaller : nombreTaller,
                descripcionTaller : descripcionTaller,
                horarioTaller : horarioTaller,
                lugarTaller : lugarTaller,
                statusTaller : statusTaller
            },
            success: function(data){
                alertify.alert(data);
            },
            error:function(){
                alert('ERROR AL CARGAR EL ELEMENTO SOLICITADO'); 
            }
        });

});

$(document).on('click', '#modGestionModificarCalendarioEscolar', function(){
    var modulo = "calendarioEscolar";
    var accion = "modificacionConsulta";
    var nombreTabla = "";
    var tituloVentana = "Consulta, modificación y dar de baja calendario escolar";
    var select = "";

    ajaxModulos(modulo, accion, nombreTabla, tituloVentana, select);
});

//Mostrar el div con el formulario para actualizar el calendario escolar
$(document).on('click', '#btnActualizarCalendario', function(){
    var formulario = "<br>Actualizar calendario escolar<br>\n\
        <form enctype=\"multipart/form-data\" id=\"formActualizarHorario\" method=\"post\">"
                    + "Seleccione archivo en formato PDF &nbsp;"
                    + "<input id='calendarioEscolar' name='calendarioEscolar' type='file'>"
                    + "<br><input class=\"waves-effect waves-orange btn\" id='btnActualizacionHorario' type='button' value='Actualizar'>"
      + "</form>";
    $('#formActualizarCalendarioEscolar').html(formulario);
});

//ACtualizar el calendario
$(document).on('click', '#btnActualizacionHorario', function(){
    var formulario = $('#formActualizarHorario').get(0);
    var Nombrearchivo = $('#calendarioEscolar').val();
    var formData = new FormData(formulario);
    
    var extension = (Nombrearchivo.substring(Nombrearchivo.lastIndexOf("."))).toLowerCase();

    if (extension !== ".pdf") {//validar que el formato del archivo este en PDF
        alertify.error('El archivo que selecciono no está en formato PDF');
    } else {
        
        $.ajax({
            type: "POST",
            async: false,
            url: '../../actualizarCalendarioEscolar',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,   // tell jQuery not to set contentType
            success: function (data) {
                alert(data);
            },
            error: function () {
                alert('ERROR AL CARGAR EL ELEMENTO SOLICITADO');
            }
        });
    }


});

//Consultar horario de profesor o de grupo
$(document).on('change','#opcionAConsultar', function(){
    var grupoProfesor = $('#opcionAConsultar').val();
    
     $.ajax({
            type: "POST",
            url: '../../CargarTablaHorarios',
            data: {
                grupoProfesor : grupoProfesor},
            success: function (data) {
                $('#tablaHorarios').html(data);
                $('#tablaHorarios').fadeIn();
                $('#tablaConsultaHorarios').DataTable();
            },
            error: function () {
                alert('ERROR AL CARGAR EL ELEMENTO SOLICITADO');
            }
        });
});

$(document).on('dblclick', '#tablaConsultaHorarios tbody tr', function () {
    var nTds = $('td', this);
    var idHorario = $(nTds[0]).text();
    
    $.ajax({
            type: "POST",
            url: '../../ConsultarHorario',
            data: {
                idHorario : idHorario},
            success: function (data) {
                $('#modalCargaHorarios').html(data);
                 $('#modalCargaHorarios').dialog({
                        modal: true,
                        title: "Consultar horario",
                        width: 1000,
                        height: 800,
                        show: "fold",
                        hide: "fold"});
            },
            error: function () {
                alert('ERROR AL CARGAR EL ELEMENTO SOLICITADO');
            }
        });
});