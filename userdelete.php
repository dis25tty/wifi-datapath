<?php
// database connection code
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
$con = mysqli_connect('localhost', 'root', '', 'datapath');
// get the Id of the record to delete
$rs=0;
$email = $_POST['email'];
$res=mysqli_query($con,"SELECT * FROM USER where `email` = '$email'");


if($res)
{
    $rs = mysqli_query($con, "DELETE FROM `USER` WHERE `email` = '$email'");
    echo "User Deleted". $rs." Successfully";
}
else{
    echo "Record not found";
    $rs=0;
}

?>
