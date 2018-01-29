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

$page = isset($_GET['page'])?$_GET['page']:'accueil';

$t = new Template('header.tpl.html');
$t->assign('lang',Languages::getLang() == 'FR'?'EN':'FR');
$t->assign('lang_html',strtolower(Languages::getLang()));
$t->assign('title',' - '._t($page));
$t->assign('page',$page);

$t->getPage(true);


$t = new Template('menu.tpl.php');
eval($t->getPage()); 




?>        
        <div id="content" >
        
		<?
			
			$t = new Template('pages/'.$page.'.tpl.html');
			
			
			

			//contact
			if($page == 'dans la boite' ){
				$t->assign('error','');
				if(isset($_POST['email'])  ){
					$ttl=0;
					if(Cache::is('send_contact'.session_id(),$ttl)){
						$t->assign('error',_t('error_1').' '.$ttl.' '._t('error_2'));	
					}else{
						
						if($_POST['email']==''){
							$t->assign('error','Mmmmm... C\'est vide.');
						}else{
							Cache::set('send_contact'.session_id(),'',10);	
							mail('fab@millerf.com',
								' Nouveau Contact de millerf.com',
								' Qqun ('.$_SERVER['REMOTE_ADDR'].') essaye de prendre contact : '.htmlspecialchars($_POST['email']));
							
							$t->assign('error','Bien reçu, nous vous contacterons sous 24h.');	
						}
					}
				}
			}
			

			$t->getPage(true);
		
        ?>
		</div>
<?
       
 	$t = new Template('footer.tpl.html');
	$t->getPage(true);

?>