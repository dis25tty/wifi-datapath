<!-- gre_view.php -->

<?php
        function userview(){
            $con = mysqli_connect('localhost', 'root', '', 'datapath');         
        // database connection code

        // Fetch VLAN data from the database

        $selectSql = "SELECT * FROM USER";

        $result = mysqli_query($con, $selectSql);

        if ($result) {

                while ($row = mysqli_fetch_assoc($result)) {
                //     echo "<tr>";
                // echo "<td>Name            :".$row['firstname']." ".$row['lastname']."</td><br>";
                // echo "<td>PASSWORD        :".$row['password']."</td><br>";
                //  echo "<td>EMAIL-ID       :".$row['email']."</td><br>";
                //  echo "<td>Phone no       :".$row['phno']."</td><br>";
                //  echo "<td>Pincode        :".$row['pincode']."</td><br>";
                //  echo "<td>Area/Workstation:".$row['area_work']."</td><br>";
                //  echo "<td>Id             :".$row['id']."</td><br>";
                // echo "<br></tr><br>";
                $data =array('first'=>$row['firstname'],'last'=>$row['lastname'],'pincode'=>$row['pincode'],'area_work'=>$row['area_work']);
                echo json_encode($data);

            }
        } else {
            echo "Error fetching USER information: " . mysqli_error($con);
        }
    }
    // userview();
    ?>


