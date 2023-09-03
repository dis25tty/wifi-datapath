

<?php
// database connection code
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
$con = mysqli_connect('localhost', 'root', '', 'datapath');


   
$vid = $_POST['vid'];
$fetchVlanIdsSql = "SELECT * FROM VLAN where `vid` = '$vid'";
        
$resultVlanIds = mysqli_query($con, $fetchVlanIdsSql);

// get the Id of the record to delete

// database delete SQL code
if(mysqli_num_rows($resultVlanIds))
{$sql = "DELETE FROM `VLAN` WHERE `vid` = '$vid'";

// delete record from the database
$rs = mysqli_query($con, $sql);

if ($rs) {
    echo "VLAN VID : ". $vid ."  Removed Successfully";
} else {
    echo "Error deleting VLAN record: " . mysqli_error($con);
}}
else{
    echo "VID : ".$vid." not found";
}
?>

  
