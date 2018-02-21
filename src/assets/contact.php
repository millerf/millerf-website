<?
if(isset($_GET['lang'])) $_GET['lang'] = strtoupper($_GET['lang']);
include_once('../cgi-bin/settings_millerf.inc.php');

if(isset($_SERVER['REMOTE_ADDR'])){
	/*

	mail('fab@millerf.com','visite de millerf.com','

	page: '.(isset($_GET['page'])?$_GET['page']:'accueil').'
	adresse: '.$_SERVER['REMOTE_ADDR'].'
	lang: '.Languages::getLang().'

	'.file_get_contents('http://api.hostip.info/get_html.php?ip='.$_SERVER['REMOTE_ADDR'].'&position=true').'

	');	*/
}



			//contact
				if(isset($_POST['email'])  ){
					$ttl=0;
					
						if($_POST['email']==''){
							echo("false");
						}else{
							// Cache::set('send_contact'.session_id(),'',10);
							mail('fab@millerf.com',
								' Nouveau Contact de millerf.com',
								' Qqun ('.$_SERVER['REMOTE_ADDR'].') essaye de prendre contact : '.htmlspecialchars($_POST['email']) .
								' message : '.htmlspecialchars($_POST['message'])
							);

							echo("true");
						}
				} else{
				    echo("false -  POST not configured");
				    print_r($_POST);
				}

?>
