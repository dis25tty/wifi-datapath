<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
$con = mysqli_connect('localhost', 'root', '','datapath');

// Check if the form was submitted for modifying a VLAN record

$validate=$_POST['validate'];
// Get the VLANID and the modified values from the form

$vid = $_POST['vid']; // Assuming your input field for VLAN_ID is named "VLAN_ID"
$fetchSql = "select * from `vlan` where `vid` = '$vid'";
$result = mysqli_query($con, $fetchSql);
if($validate==3){
    $bip = $_POST['bip'];
// $PASSWORD = $_POST['password'];    
    $iface = $_POST['iface'];
  
    $iface = mysqli_real_escape_string($con, $iface);
    $bip = mysqli_real_escape_string($con, $bip);
   
   // Database update SQL code
   if ($bip=="" or $iface=="" )
       echo "Fill all fields";
       else
    {    
    $updateSql = "UPDATE `vlan` SET `bip` = '$bip', `iface` = '$iface'  WHERE `vid` = '$vid' ";
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
    // echo"valid vid".$row['firstname'];
    
    // Escape the modified values to prevent SQL injection
    $data =array('bip'=>$row['bip'],'iface'=>$row['iface']);
    echo json_encode($data);
}
else
    echo "Error Invalid Email";

// echo("saxdfgthyjugik");
?>

