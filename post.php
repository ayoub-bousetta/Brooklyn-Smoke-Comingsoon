<?php header("Content-Type: application/json"); ?>
<?php header('Content-Type: charset=utf-8'); ?><?php




//Your re-captcha info
$secret = '********';
$action = 'action';

$subject = 'Brooklyn Smoke Coming Soon';
$message = $_POST['message'];
$from = $_POST['email'];
$tel = $_POST['tel'];
$name = $_POST['nom'];



$err=array();

    if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])) {


$verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['g-recaptcha-response']);
        $responseData = json_decode($verifyResponse);
  


        if ($responseData->success) {


//Send email after Success
    $to = "testman@gmail.com";
$txt = " <strong>Nom</strong>: " .$name. "<br> <strong>Email</strong>: ".$from. " <br><strong>Telephone</strong>: ".$tel." <br><strong>Message</strong>: ".$message;
//$headers = "From: direction@ijmt.tv"."\r\n" ."CC: nouraelallam6@gmail.com";
$headers =  'From: Brooklyn Smoke <testman@gmail.com>' . "\r\n" ;
$headers .= 'Cc: metoo@ebsmaroc.com;' . "\r\n";
// $headers .= 'Bcc: campaign@ebsmaroc.net' . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset: utf8\r\n";

mail($to,$subject,$txt,$headers);


            $err['msg']=true;


        
        }else{
                        
                        $err['msg']=false;
                   
        
           
        }

        
   }else{

      $err['msg']=false;


   }


   

echo json_encode($err);

?>