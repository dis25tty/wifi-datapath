<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
$con = mysqli_connect('localhost', 'root', '','datapath');

$rs=1;
// get the post records
$INTERFACE = $_POST['iface'];
$VLAN_ID = $_POST['vid'];
$BRIDGEIP = $_POST['bip'];
$res = mysqli_query($con, "select * from vlan");
// echo "hello";
if($VLAN_ID>1 && $VLAN_ID<=4094)
{if($res)
{
        while($row=mysqli_fetch_assoc($res)){
// database insert SQL code
if($row['vid']==$VLAN_ID){
        $rs=0;
        break;
}
}
}

else {
        echo "Error fetching USER information: " . mysqli_error($con);
    }
$arr=array(0,0,0,0);
$k=0;
// echo strlen($BRIDGEIP);
    for($i=0;$i<strlen($BRIDGEIP);$i++){
        if(is_numeric($BRIDGEIP[$i])){
            $arr[$k]=$arr[$k]*10+(int)$BRIDGEIP[$i];

        }
        else{
            echo $arr[$k]."".$k;
            $k++;}
    }
    // echo($arr[0]."  ".$arr[1]."  ".$arr[2]."  ".$arr[3]);
// database insert SQL code
if($rs){

    $sql = "INSERT INTO `VLAN` (`iface`, `vid`, `bip`) VALUES ('$INTERFACE', '$VLAN_ID', '$BRIDGEIP')";
    
    // insert in database 
    $r = mysqli_query($con, $sql);
    
    if($r)
    {
        echo " VLAN ADDED SUCCESSFULLY";
    }
    else {
        echo "Error: " . mysqli_error($con);
    }
}
else{
    echo "VID = ".$VLAN_ID."  Already Exists";
}}
else{
    echo "VLAN ID exceeds the limit";
}
?>

