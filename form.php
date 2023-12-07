<?php

	require_once 'core/MailSmtp.php';

	if($_POST["action"] == 'send'){
		$nombre = $_POST['nombre'];
		$mail = $_POST['mail'];
		$comentario = $_POST['comentario'];

		$arrOutput = array();
		$arrOutput['nombre'] = $nombre;
		$arrOutput['mail'] = $mail;
		$arrOutput['comentario'] = $comentario;
		
		extract($arrOutput);
		ob_start();
		require('templates/emails/template_form_empresa.php');
		$template =  ob_get_clean();
		
		$para = "pablo@maineriyasociados.com.ar";
		// $para = "franco@positivemedia.com.ar";
		$asunto = "Mail de contacto desde Maineri y asociados";
		
		$ret = mail_smtp($para, $asunto, utf8_decode($template));
	
		echo $ret;
	}
?>