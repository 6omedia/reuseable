<?php

	// find what kind of email from POST email type eg... jingle, radioad or contact form
	
	header('Content-Type: application/json');

	$theData = json_decode($_POST['values']);

	// EMAIL
	$msgBody = '';

	$size = sizeof($theData);
	
	for($i=0; $i<$size; $i++){
	
		$msgBody .= $theData[$i]->feildName . ': ' . $theData[$i]->value . '\r\n';

	}

	require_once('config.php');

	try {

		$message = Swift_Message::newInstance()
			->setSubject('Edv')
			->setFrom($from)
			->setTo($to)
			->setBody($bodyMsg);

		$transport = Swift_SmtpTransport::newInstance($smtp_server, 25)
			->setUsername($username)
			->setPassword($password);

		$mailer = Swift_Mailer::newInstance($transport);
		$result = $mailer->send($message);

		if($result){
			$responseArray['success'] = '1';
			echo json_encode($responseArray);
		}else{
			$responseArray['success'] = '0';
			echo json_encode($responseArray);
		}

	}catch(Exception $e){
		echo json_encode($e->getMessage());
	}


	// echo json_encode($msgBody);

?>
