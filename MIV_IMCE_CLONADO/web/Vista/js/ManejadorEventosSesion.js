$(document).ready( function(){
          //Inicaralizar los select para que me muestren como el framework lo requiere
          $('select').material_select();
          //Inicializa elementos del framework necesarios
           $('.materialboxed').materialbox();
           $(".fancybox").fancybox();
          
          //Evitar que se muestre el segundo contenedor en la página sesión
          $('.otroContenidoSesion').css('display','none');
           //Iniciarlizar la función que nos muestra el slider
           
           
     $('.slider').slider({full_width: true});
          
    });