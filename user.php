<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
// header('Access-Control-Allow-Origin');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
$con = mysqli_connect('localhost', 'root', '','datapath');

// get the post records
$FIRSTNAME = $_POST['first'];
$PASSWORD = $_POST['password'];
$EMAIL_ID = $_POST['email'];

$last = $_POST['last'];
$pin = $_POST['zip'];
$area = $_POST['address'];

$city = $_POST['city'];
$state = $_POST['state'];
$vlan = $_POST['vlan'];
$ap=$_POST['ap'];
$rs=1;
// echo $FIRSTNAME;
$res=mysqli_query($con,"SELECT * FROM USER");
if($res)
{
        while($row=mysqli_fetch_assoc($res)){
// database insert SQL code
if($row['email']==$EMAIL_ID){
        $rs=0;
        break;
}
}
}

else {
        echo "Error fetching USER information:$last " . mysqli_error($con);
    }
// insert in database 

if($rs)
{
    // (`firstname`,`lastname`,`pincode`,`area_work`, `password`,`phno`,`email`)
        
        $sql = "INSERT INTO `USER` (`firstname`,`lastname`,`pincode`,`area_work`, `password`,`phno`,`email`) VALUES ('$FIRSTNAME','$last','$pin','$area', '$PASSWORD','$vlan','$EMAIL_ID')"; 
        $rs = mysqli_query($con, $sql);
        if($rs){

                echo " USER ADDED SUCCESSFULLY";
        }
        else {
          echo "Error:$last ". mysqli_error($con);
        }
}
else{
        echo "already exist";
}
?>

