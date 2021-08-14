<?php
if ((isset($_POST['extras'])) && (strlen(trim($_POST['extras'])) > 0)) {
    $extras = stripslashes(strip_tags($_POST['extras']));
} else {
    $extras = '';
}
if ((isset($_POST['fdmrms'])) && (strlen(trim($_POST['fdmrms'])) > 0)) {
    $fdmrms = stripslashes(strip_tags($_POST['fdmrms']));
} else {
    $fdmrms = '';
}
if ((isset($_POST['fdname'])) && (strlen(trim($_POST['fdname'])) > 0)) {
    $fdname = stripslashes(strip_tags($_POST['fdname']));
} else {
    $fdname = 'No name entered';
}
if ((isset($_POST['fdemail'])) && (strlen(trim($_POST['fdemail'])) > 0)) {
    $fdemail = stripslashes(strip_tags($_POST['fdemail']));
} else {
    $fdemail = 'No email entered';
}
if ((isset($_POST['fadmessage'])) && (strlen(trim($_POST['fadmessage'])) > 0)) {
    $fadmessage = stripslashes(strip_tags($_POST['fadmessage']));
} else {
    $fadmessage = 'No message entered';
}
if ((isset($_POST['po'])) && (strlen(trim($_POST['po'])) > 0)) {
    $po = stripslashes(strip_tags($_POST['po']));
} else {
    $po = 'Payment option not selected';
}
if ((isset($_POST['selectedCar'])) && (strlen(trim($_POST['selectedCar'])) > 0)) {
    $selectedCar = stripslashes(strip_tags($_POST['selectedCar']));
} else {
    $selectedCar = '';
}

if ((isset($_POST['pickup'])) && (strlen(trim($_POST['pickup'])) > 0)) {
    $pickup = stripslashes(strip_tags($_POST['pickup']));
} else {
    $pickup = '';
}

if ((isset($_POST['dropoff'])) && (strlen(trim($_POST['dropoff'])) > 0)) {
    $dropoff = stripslashes(strip_tags($_POST['dropoff']));
} else {
    $dropoff = '';
}

if ((isset($_POST['date'])) && (strlen(trim($_POST['date'])) > 0)) {
    $date = stripslashes(strip_tags($_POST['date']));
} else {
    $date = '';
}

if ((isset($_POST['time'])) && (strlen(trim($_POST['time'])) > 0)) {
    $date = stripslashes(strip_tags($_POST['time']));
} else {
    $time = '';
}
ob_start();
?>
<html>
<head>
    <style type="text/css">
    </style>
</head>
<body>
<table width="550" border="0" cellspacing="0" cellpadding="15">
    <tr bgcolor="#eeffee">
        <td>Name</td>
        <td><?php echo $fdmrms; ?> <?php echo $fdname; ?></td>
    </tr>
    <tr bgcolor="#eeeeff">
        <td>Email</td>
        <td><?php echo $fdemail; ?></td>
    </tr>
    <tr bgcolor="#eeffee">
        <td>Message</td>
        <td><?php echo $fadmessage; ?></td>
    </tr>
    <tr bgcolor="#eeeeff">
        <td>Payment options</td>
        <td><?php echo $po; ?></td>
    </tr>
    <tr bgcolor="#eeffee">
        <td>Extras</td>
        <td><?php echo $extras; ?></td>
    </tr>
    <tr bgcolor="#eeffee">
        <td>Selected Car</td>
        <td><?php echo $selectedCar; ?></td>
    </tr>
    <tr bgcolor="#eeffee">
        <td>Pick Up</td>
        <td><?php echo $pickup; ?></td>
    </tr>
    <tr bgcolor="#eeffee">
        <td>Drop Off</td>
        <td><?php echo $dropoff; ?></td>
    </tr>
    <tr bgcolor="#eeffee">
        <td>Date</td>
        <td><?php echo $date; ?></td>
    </tr>
    <tr bgcolor="#eeffee">
        <td>Time</td>
        <td><?php echo $time; ?></td>
    </tr>
</table>
</body>
</html>
<?php
$body = ob_get_contents();

$to = 'lakshmi.devaraj@themadrasstudio.com';
$toname = 'Lakshmi Devaraj';
//$anotheraddress = 'email@example.com';
//$anothername = 'Another Name';

require("phpmailer.php");

$mail = new PHPMailer();

$mail->From = $fdemail;
$mail->FromName = $name;
$mail->AddAddress($to, $toname); // Put your email
//$mail->AddAddress($anotheraddress,$anothername); // addresses here

$mail->WordWrap = 50;
$mail->IsHTML(true);

$mail->Subject = "Demo Form:  Subscribe Form submitted";
$mail->Body = $body;
$mail->AltBody = $message;

if (!$mail->Send()) {
    $recipient = $to;
    $subject = 'Subscribe failed';
    $content = $body;
    mail($recipient, $subject, $content, "From: $name\r\nReply-To: $email\r\nX-Mailer: DT_formmail");
    exit;
}
?>
