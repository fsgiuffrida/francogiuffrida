function openCloseMenu(){
	if($('.ham').attr('class') == 'ham hamRotate ham4'){
		$('.ham').attr('class', 'ham hamRotate ham4 active');
	}
	else{
		$('.ham').attr('class', 'ham hamRotate ham4');
	}
	$('.wrp_hamburguer').toggleClass('active');
	$('.menu_desplegable').toggleClass('active');
	$('body').toggleClass('overflowHidden');
	// $('.fondo_black_header').toggleClass('active');
}


$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
// On-page links
	if (
		location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		&& 
		location.hostname == this.hostname
	) {
		// Figure out element to scroll to
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		// Does a scroll target exist?
		if (target.length) {
		// Only prevent default if animation is actually gonna happen
		event.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top - 120
		}, 1000, function() {
		});
		}
	}
});

function enviarForm(idFrm){
	if($("#"+idFrm).isValid({}, {}, true)) {
		$('#layerLoad').css('display','block');
		$.post("/form.php", $("#"+idFrm).serialize(), function(data) {
			$('#layerLoad').css('display','none');
			$('#layerMailOk').fadeIn('fast');
			setTimeout(function(){$('#layerMailOk').fadeOut('fast');}, 4000);
		});
	}
}