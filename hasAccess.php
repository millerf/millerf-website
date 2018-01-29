<?php
//		error_reporting(E_ALL);
//		ini_set('display_errors','On');

		$from = 'fab@millerf.com';
		$headers = "From: ".$from."\n" ;
		$headers.= "Content-type: text/plain; charset=UTF-8\r\n";
		$headers.= "Reply-To: ".$from."\n" ;
		$headers.= "X-Mailer: PHP/".phpversion()."\n" ;
		
		
		if(!isset($_GET['nom'])){
		
			mail('millerf81@gmail.com','acces au site, param INEXISTANT','vennant de '.$_SERVER['HTTP_REFERER'].'
			Le site n\'est pas donné en parametres',$headers);	
			echo 0;
			return;
		}

		$dbname='sites_externes';
		$host='localhost';
		$user='admin';
		$pass='ba2reses';
		
	
		$db=mysql_connect($host,$user,$pass) or die("Impossible de se connecter : " . mysql_error());;
		mysql_select_db($dbname);
		if($db==FALSE){
			mail('millerf81@gmail.com','acces au site '.$_GET['nom'],'Non connecté à la BDD',$headers);	
			echo 0;
			return;
			
		}
		
		mysql_query("SET NAMES UTF8"); 
		
		
		
		$sql = 'SELECT * FROM `sites_externes` WHERE `nom` =\''.urldecode($_GET['nom']).'\' LIMIT 1;';
		$res = mysql_query($sql);
		
		if($res == FALSE){
			echo mysql_error();
			return;
		}
		
		if(mysql_num_rows($res)==0){
			mail('millerf81@gmail.com','acces au site '.$_GET['nom'],'Ce site n\'existe pas dans la table `sites_externes`.sites_externes 
			'.$sql,$headers);	
			echo 0;
			return;
		}
	
		
		$res = mysql_fetch_array($res);
		if($res['acces']!=0){
			mail('millerf81@gmail.com','acces au site '.$_GET['nom'],'Le site n\'a plus d\'accès
			'.$sql,$headers);	
		}
		echo $res['acces'];
		return;
		

?>