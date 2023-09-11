
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
    $con = mysqli_connect('localhost', 'root', '', 'datapath');   
    if(!$con){
        die("Connection Failed :".mysqli_connect_error());
    }      
    $email = $_GET['email']; // Assuming your input field for VLAN_ID is named "VLAN_ID"
$fetchSql = "select * from `USER` where `email` = '$email'";
$result = mysqli_query($con, $fetchSql);
    if(!$result){
        http_response_code(404);
        die(mysqli_error($con));
    }
    echo '[';

        echo json_encode(mysqli_fetch_object($result));
    echo ']';

    $con->close();

    ?>
