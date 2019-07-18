<?php

//Import PHPMailer classes into the global namespace
namespace PHPMailer\PHPMailer;
require_once('gmailcredentials.php');
//Import PHPMailer classes into the global namespace
//use PHPMailer\PHPMailer\PHPMailer;
require_once('PHPMailer/src/Exception.php');
require_once('PHPMailer/src/PHPMailer.php');
require_once('PHPMailer/src/SMTP.php');
// require '../vendor/autoload.php';


//Create a new PHPMailer instance
$mail = new PHPMailer;

//Tell PHPMailer to use SMTP
$mail->isSMTP();

//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 2; /* CHANGE THIS TO 0 for production*/

//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';
// use
// $mail->Host = gethostbyname('smtp.gmail.com');
// if your network does not support SMTP over IPv6

//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 587;

//Set the encryption system to use - ssl (deprecated) or tls
$mail->SMTPSecure = 'tls';

//Whether to use SMTP authentication
$mail->SMTPAuth = true;

//Username to use for SMTP authentication - use full email address for gmail
$mail->Username = EMAIL;/* PUT YOUR EMAIL ADDRESS CONSTANT HERE*/;

//Password to use for SMTP authentication
$mail->Password = PASSWORD/* PUT YOUR EMAIL PASSWORD HERE*/;

//Set who the message is to be sent from
$mail->setFrom('phongtserver@gmail.com'/* put your gmail server email address here*/ , "Daemon Mailer" /* put your gmail server name here. you don't really have one, so make it easy to understand, for example: 'mailer daemon'*/);

//Set an alternative reply-to address
$mail->addReplyTo("test@test.com"/* add the user's email here so when you click "reply" in your email, you reply to them*/, "test test"/* put the user's name here*/);

//Set who the message is to be sent to
$mail->addAddress("phongoli0@gmail.com"/* PUT YOUR REGULAR GMAIL ACCOUNT HERE*/,"Phong" /* PUT YOUR NAME HERE*/);

//Set the subject line
$mail->Subject = "test"/* PUT THE SUBJECT HERE*/;

//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
/* make a message body here:*/
$HTMLbody = "
    <div>name: test </div>
    <div>email: test@test.com</div>
    <div>subject: /*the subject of the message here*/</div>
    <div>ip address: {$_SERVER['SERVER_ADDR']}</div>
    <div>message: test</div>
";
$textBody = "
    name: test 
    email: test@test.com
    subject: /*the subject of the message here*/
    ip address: {$_SERVER['SERVER_ADDR']}
    message: test
";
$mail->msgHTML( $HTMLbody, __DIR__); // this isn't used here

//Replace the plain text body with one created manually
$mail->AltBody = $textBody;

//Attach an image file
//$mail->addAttachment('images/phpmailer_mini.png');

//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
    //Section 2: IMAP
    //Uncomment these to save your message in the 'Sent Mail' folder.
    #if (save_mail($mail)) {
    #    echo "Message saved!";
    #}
}


?>