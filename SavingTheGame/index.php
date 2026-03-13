<html>
    <head>
        <title>SavingTheGame</title>
        <style>
            * {
                margin: 0;
                padding: 0;
            }
            canvas {
                border: 1px solid black;
                margin: 15px auto 0 auto;
                display: block;
            }
        </style>
    </head>
    <body>
        <canvas id="canvas" width=900 height=600></canvas>
    </body>
    <script type="text/javascript">

        let canvas = document.getElementById("canvas");
        let can = canvas.getContext("2d");

        document.onkeydown = function(e){
            if(e.keyCode == 87){ //W
                controls.up = true;
            }
            if(e.keyCode == 83){ //S
                controls.down = true;
            }
            if(e.keyCode == 65){ //A
                controls.left = true;
            }
            if(e.keyCode == 68){ //D
                controls.right = true;
            }
        }

        document.onkeyup = function(e){
            if(e.keyCode == 87){ //W
                controls.up = false;
            }
            if(e.keyCode == 83){ //S
                controls.down = false;
            }
            if(e.keyCode == 65){ //A
                controls.left = false;
            }
            if(e.keyCode == 68){ //D
                controls.right = false;
            }
        }

        let controls = {
            up: false,
            down: false,
            left: false,
            right: false
        };

        let player = {
            x: 15,
            y: 15,
            width: 50,
            height: 50
        };

        function update(){
            if(controls.up){
                player.y -= 5;
            }
            if(controls.down){
                player.y += 5;
            }
            if(controls.left){
                player.x -= 5;
            }
            if(controls.right){
                player.x += 5;
            }
            saveData();
        }

        function render(){
            can.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
            can.fillStyle = "blue";
            can.fillRect(player.x, player.y, player.width, player.height);
        }

        setInterval(function(){
            update();
            render();
        }, 1000/60)



        async function load(){
          await fetch("load.php").then(response => {
            if(response.ok){
              return response.json();
            }
            throw Error("Response not OK!");
          })
          .then(data => {
            console.log(data);
            player.x = parseFloat(data.x);
            player.y = parseFloat(data.y);
          })
          .catch(error => {
            console.log(error);
          });
        }
        load();

        async function saveData(){

          let formData = new FormData();
          formData.append("id", 1);
          formData.append("x", player.x);
          formData.append("y", player.y)

          await fetch("save.php", {
            method: "POST",
            body: formData
          }).then(response => {
            if(!response.ok){
              throw Error("Response not OK!");
            }
          })
          .catch(error => {
            console.log(error);
          });
        }
    </script>
</html>
