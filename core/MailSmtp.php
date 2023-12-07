<?php

	require_once "MailLib/class.phpmailer.php";
	require_once "MailLib/class.smtp.php";

	function mail_smtp($destino, $asunto, $body) {
		$mail = new PHPMailer();
		
		$mail->IsSMTP(); 
		
		$mail->Host = "c2550736.ferozo.com";
		// $mail->Host = "mail.positivemedia.com.ar";
		$mail->Port = 465;
		//este parametro va si es una cuenta de gmail
		$mail->SMTPSecure = 'ssl';
		
		$mail->From = "fsgiuffrida@gmail.com";
		// $mail->From = "franco@positivemedia.com.ar";
		$mail->FromName = "Franco Giuffrida";
		$mail->Subject = $asunto;
		$mail->MsgHTML($body);
		
		$mail->AddAddress($destino, $destino);
		
		$mail->SMTPAuth = true;
		
		$mail->Username = "fsgiuffrida@gmail.com";
		// $mail->Username = "franco@positivemedia.com.ar";
		$mail->Password = "Juan080221";
		
		if(!$mail->Send()) {
			$ret = $mail->ErrorInfo;
		} else {
			$ret = "Enviado";
		}
		
		return $ret;
	}

?>