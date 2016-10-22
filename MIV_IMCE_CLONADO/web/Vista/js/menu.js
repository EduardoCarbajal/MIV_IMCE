//Cuando el documento este listo ejecuta la función main
$(document).ready(main);

var contador = 1;

function main(){
	$('.menu_bar').click(function(){
            $('#menu').attr('class','');
            $('#menu').attr('padding-left','0');
		if(contador == 1){
			$('nav').animate({
				left : '0'
			});
			contador = 0;
		}else{
			$('nav').animate({
				left : '-100%'
			});
			contador = 1;
		}
	});
}