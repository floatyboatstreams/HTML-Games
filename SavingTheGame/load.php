<?php
    $conn = new mysqli("localhost", "bob", "hello", "stream");

    $sql = "SELECT * FROM main WHERE id=1";

    $result = $conn->query($sql);

    $player = new stdClass();

    if($result->num_rows > 0){
        while($row = $result->fetch_assoc()){
            $player->id = $row['id'];
            $player->x = $row['x'];
            $player->y = $row['y'];
        }
    }

    print(json_encode($player));

?>
