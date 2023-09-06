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
$anam = $_POST['anam'];
$apip = $_POST['apip'];
$res = mysqli_query($con, "select * from AP");
// echo "hello";
if(strlen($anam)>0 && strlen($anam)<=32)
{if($res)
{
        while($row=mysqli_fetch_assoc($res)){
// database insert SQL code
if($row['anam']==$anam){
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
// echo strlen($apip);
    for($i=0;$i<strlen($apip);$i++){
        if(is_numeric($apip[$i])){
            $arr[$k]=$arr[$k]*10+(int)$apip[$i];

        }
        else{
            $k++;}
    }
// database insert SQL code
if(($arr[0]==255 && $arr[1]==255 && $arr[2]==255 && $arr[3]==255) or ($arr[0]==00 && $arr[1]==00 && $arr[2]==00 && $arr[3]==00))
{
echo  "The IP address is reserved,therefore can't be assinged";
}
else{
if($rs){

    $sql = "INSERT INTO `AP` (`iface`, `anam`, `apip`) VALUES ('$INTERFACE', '$anam', '$apip')";
    
    // insert in database 
    $r = mysqli_query($con, $sql);
    
    if($r)
    {
        echo " AP ADDED SUCCESSFULLY";
    }
    else {
        echo "Error: " . mysqli_error($con);
    }
}
else{
    echo "VID = ".$anam."  Already Exists";
}}}
else{
    echo "AP name exceeds the limit";
}
?>

