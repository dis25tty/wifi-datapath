<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
    $con = mysqli_connect('localhost', 'root', '', 'datapath');   
    if(!$con){
        die("Connection Failed :".mysqli_connect_error());
    }      
    $sql="select * from `ap`";
    $res=mysqli_query($con,$sql);
    if(!$res){
        http_response_code(404);
        die(mysqli_error($con));
    }
    echo '[';
    for($i=0;$i<mysqli_num_rows($res);$i++){
        echo($i>0?',':'').json_encode(mysqli_fetch_object($res));
    }
    echo ']';

    $con->close();

    ?>