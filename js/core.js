$(document).ready(function(){

jQuery('.serv_block').hover(
		function(){
			$(this).find('.cover_serv_block').fadeIn();
		},
		function(){
			$(this).find('.cover_serv_block').fadeOut();
		});

});