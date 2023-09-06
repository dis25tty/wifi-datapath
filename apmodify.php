<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
$con = mysqli_connect('localhost', 'root', '','datapath');

// Check if the form was submitted for modifying a ap record

$validate=$_POST['validate'];
// Get the apID and the modified values from the form

$anam = $_POST['anam']; // Assuming your input field for ap_ID is named "ap_ID"
$fetchSql = "select * from `ap` where `anam` = '$anam'";
$result = mysqli_query($con, $fetchSql);
if($validate==3){
    $apip = $_POST['apip'];
// $PASSWORD = $_POST['password'];    
    $iface = $_POST['iface'];
  
    $iface = mysqli_real_escape_string($con, $iface);
    $apip = mysqli_real_escape_string($con, $apip);
   
   // Database update SQL code
   if ($apip=="" or $iface=="" )
       echo "Fill all fields";
       else
    {    
    $updateSql = "UPDATE `ap` SET `apip` = '$apip', `iface` = '$iface'  WHERE `anam` = '$anam' ";
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
    // echo"valid anam".$row['firstname'];
    
    // Escape the modified values to prevent SQL injection
    $data =array('apip'=>$row['apip'],'iface'=>$row['iface']);
    echo json_encode($data);
}
else
    echo "Error Invalid AP name";

// echo("saxdfgthyjugik");
?>

