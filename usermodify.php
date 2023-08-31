<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
$con = mysqli_connect('localhost', 'root', '','datapath');

// Check if the form was submitted for modifying a VLAN record

$validate=$_POST['validate'];
// Get the VLANID and the modified values from the form

$email = $_POST['email']; // Assuming your input field for VLAN_ID is named "VLAN_ID"
$fetchSql = "select * from `USER` where `email` = '$email'";
$result = mysqli_query($con, $fetchSql);
if($validate==3){
    $first = $_POST['first'];
// $PASSWORD = $_POST['password'];    
    $last = $_POST['last'];
    $pin = $_POST['zip'];
    $area = $_POST['address'];
    
    $city = $_POST['city'];
    $state = $_POST['state'];
    $vlan = $_POST['vlan'];
    $ap=$_POST['ap'];
    $last = mysqli_real_escape_string($con, $last);
    $first = mysqli_real_escape_string($con, $first);
    $pin = mysqli_real_escape_string($con, $pin);
    $area = mysqli_real_escape_string($con, $area);
    $city = mysqli_real_escape_string($con, $city);
    $vlan = mysqli_real_escape_string($con, $vlan);
    $ap = mysqli_real_escape_string($con, $ap);
   // Database update SQL code
   if ($first=="" or $last=="" or
       $vlan=="" or
       $area=="" or
       $ap=="" or
       $city=="" or
       $state=="" 
     )
       echo "Fill all fields";
       else
    {    
    $updateSql = "UPDATE `USER` SET `firstname` = '$first', `lastname` = '$last' ,`pincode`='$pin' ,`area_work`='$area' WHERE `email` = '$email' ";
   // Update record in the database
   $rs =  mysqli_query($con, $updateSql);

   if ($rs) {
       echo "Modified Succesfully";
   } else {
       echo "Error modifying USER record: " . mysqli_error($con);
   }
}
}
else  if (mysqli_num_rows($result)) {
    $row = mysqli_fetch_assoc($result);
    // echo"valid email".$row['firstname'];
    
    // Escape the modified values to prevent SQL injection
    $data =array('first'=>$row['firstname'],'last'=>$row['lastname'],'pincode'=>$row['pincode'],'area_work'=>$row['area_work']);
    echo json_encode($data);
}
else
    echo "Error Invalid Email";

// echo("saxdfgthyjugik");
?>

