

<?php
// database connection code
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
$con = mysqli_connect('localhost', 'root', '', 'datapath');


   
$anam = $_POST['anam'];
$fetchVlanIdsSql = "SELECT * FROM ap where `anam` = '$anam'";
        
$resultVlanIds = mysqli_query($con, $fetchVlanIdsSql);

// get the Id of the record to delete

// database delete SQL code
if(mysqli_num_rows($resultVlanIds))
{$sql = "DELETE FROM `AP` WHERE `anam` = '$anam'";

// delete record from the database
$rs = mysqli_query($con, $sql);

if ($rs) {
    echo "AP name : ". $anam ."  Removed Successfully";
} else {
    echo "Error deleting AP record: " . mysqli_error($con);
}}
else{
    echo "Ap name : ".$anam." not found";
}
?>

  
