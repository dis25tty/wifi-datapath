<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
$con = mysqli_connect('localhost', 'root', '','datapath');

// Check if the form was submitted for modifying a VLAN record

    // Get the VLANID and the modified values from the form
$email = $_POST['email']; // Assuming your input field for VLAN_ID is named "VLAN_ID"

$first = $_POST['first'];
// $PASSWORD = $_POST['password'];

$last = $_POST['last'];
$pin = $_POST['zip'];
$area = $_POST['address'];

$city = $_POST['city'];
$state = $_POST['state'];
$vlan = $_POST['vlan'];
$ap=$_POST['ap'];
$validate=$_POST['validate'];
$fetchSql = "select * from `USER` where `email` = '$email'";
$result = mysqli_query($con, $fetchSql);

if ($result) {
        // Fetch the VLAN record as an associative array
        $userRecord = mysqli_fetch_assoc($result);

        // Modify the fetched record with the new values
// 	$userRecord['password'] = $modifiedPassword;
// $userRecord['firstname'] = $modifiedName;


// Escape the modified values to prevent SQL injection
    $last = mysqli_real_escape_string($con, $last);
     $first = mysqli_real_escape_string($con, $modifiedName);
     $pin = mysqli_real_escape_string($con, $pin);
     $area = mysqli_real_escape_string($con, $area);
     $city = mysqli_real_escape_string($con, $city);
     $vlan = mysqli_real_escape_string($con, $vlan);
     $ap = mysqli_real_escape_string($con, $ap);

    // Database update SQL code
    if (
        $first=="" ||
        $last=="" ||
        $vlan=="" ||
        $address=="" ||
        $ap=="" ||
        $city=="" ||
        $state=="" ||
      )
        echo "Fill all fields";
        else if($validate===2)
{    $updateSql = "UPDATE `USER` SET `firstname` = '$First', `lastname` = '$last' `pincode`='$pin' `area_work`='$area' `city`=$city `state`=$state WHERE `email` = '$email' ";
    // Update record in the database
    $rs =  mysqli_query($con, $updateSql);

    if ($rs) {
        echo "Modified Succesfully";
    } else {
        echo "Error modifying USER record: " . mysqli_error($con);
    }
}
// else{}
}
else{
    echo "Error Invalid Email";
}
?>

