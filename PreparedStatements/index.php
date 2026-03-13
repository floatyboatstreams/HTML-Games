<?php
    $conn = new mysqli("localhost", "bob", "hello", "stream");

    $submitted = "FloatyBoat";
    if(preg_match('/^[a-zA-Z]+$/', $submitted)){

        $stmt = $conn->prepare("SELECT * FROM main WHERE name=? AND nickname=?");
        $stmt->bind_param("ss", $submitted, $nickname);
        $stmt->execute();
        $result = $stmt->get_result();

        if($result->num_rows > 0){
            while($row = $result->fetch_assoc()){
                print($row['id'] . "<br>");
                print($row['name'] . "<br>");
                print($row['nickname'] . "<br>");
            }
        }



        //OLD
        $sql = "SELECT * FROM main WHERE name='" . $submitted . "'";
        $result = $conn->query($sql);
        if($result->num_rows > 0){
            while($row = $result->fetch_assoc()){
                print($row['id'] . "<br>");
                print($row['name'] . "<br>");
                print($row['nickname'] . "<br>");
            }
        }
    }
?>
