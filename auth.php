<?php
session_start();

// Database connection code
$con = mysqli_connect('localhost', 'root', '', 'datapath');

if (!$con) {
    echo "Connection failed!";
    exit();
}

if (isset($_POST['email']) && isset($_POST['password'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Sanitize input (optional)
    $email = mysqli_real_escape_string($con, $email);
    $password = mysqli_real_escape_string($con, $password);

    // Database query
    $sql = "SELECT * FROM USER WHERE email = '$email' AND PASSWORD = '$password'";
    $result = mysqli_query($con, $sql);

    // Check result
    if (mysqli_num_rows($result) === 1) {
        $row = mysqli_fetch_assoc($result);

        // Successful login
        $_SESSION['user_name'] = $row['user_name'];
        $_SESSION['name'] = $row['name'];
        header("Location: http://localhost:5173?email=".$row['email']); // Redirect to datapath.html
        exit();
    } 
    else {
        // Failed login
        header("Location: index2.php?error=Incorrect Login or Password");
        exit();
    }
} else {
    header("Location: index2.php");
    exit();
}
?>

