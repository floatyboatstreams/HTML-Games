<?php
    $conn = new mysqli("localhost", "bob", "hello", "stream");

    if(!empty($_POST['x'])){
        $sql = "UPDATE main SET x=" . $_POST['x'] . ", y=" . $_POST['y']. " WHERE id=" . $_POST['id'];

        $conn->query($sql);
    }

?>
