<?php 
$errors = '';
$myemail = 'dan@dan-hogan.com';
// if(empty($_POST['name'])  || 
//    empty($_POST['email']) || 
//    empty($_POST['phone']) || 
//    empty($_POST['message']))
// {
//     echo "<script type='text/javascript'>alert(\"All fields are required. \nThis form has been reset to protect from spam.\");</script>";
//     header('Location: ..index.html');
// }

$name = $_POST['name']; 
$email = $_POST['email'];
$phone = $_POST['phone']; 
$message = $_POST['message']; 

// if (!preg_match(
// "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
// $email_address))
// {
//     header('Location: ../index.html');
//     echo "<script type='text/javascript'>alert(\"The email address given is invalid. \nThis form has been reset to protect from spam.\");</script>";
// }

if( empty($errors))
{
	$to = $myemail; 
	$email_subject = "Contact form submission from Portfolio";
	$email_body = "You have received a new enquiry. ".
	" Here are the details:\n Name: $name \n Email: $email \n Phone: $phone \n Message: \n $message"; 
	
	$headers = "From: $email\n"; 
	$headers .= "Reply-To: $email";
	
	mail($to,$email_subject,$email_body,$headers);
	header('Location: ../index.html');
} 
?>