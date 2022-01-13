var canvas=new fabric.Canvas("myCanvas");
var block_image_width=30;
var block_image_height=30;
var player_x=10;
var player_y=10;
var player_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });   
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });   
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    var key_pressed=e.keyCode;
    console.log(key_pressed);
    if(e.shiftKey=true && key_pressed=="80"){
        console.log("p and shift key are pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }


    if(e.shiftKey=true && key_pressed=="77"){
        console.log("m and shift key are pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(key_pressed == "38"){

        up();
        console.log("up arrow pressed");
    }
    if(key_pressed == "40"){

        down();
        console.log("down arrow pressed");
    }
    if(key_pressed == "37"){

        left();
        console.log("left arrow pressed");
    }
    if(key_pressed == "39"){

        right();
        console.log("right arrow pressed");
    }
    if(key_pressed == "67"){

        new_image("cloud.jpg");
        console.log("letter c is pressed");
    }
    if(key_pressed == "68"){

        new_image("dark_green.png");
        console.log("letter d is pressed");
    }
    if(key_pressed == "71"){

        new_image("ground.png");
        console.log("letter g is pressed");
    }
    if(key_pressed == "76"){

        new_image("light_green.png");
        console.log("letter l is pressed");
    }
    if(key_pressed == "82"){

        new_image("roof.jpg");
        console.log("letter r is pressed");
    }
    if(key_pressed == "84"){

        new_image("trunk.jpg");
        console.log("letter t is pressed");
    }
    if(key_pressed == "85"){

        new_image("unique.png");
        console.log("letter u is pressed");
    }
    if(key_pressed == "87"){

        new_image("wall.jpg");
        console.log("letter w is pressed");
    }
    if(key_pressed == "89"){

        new_image("yellow_wall.png");
        console.log("letter y is pressed");
    }

}

function up(){
    if (player_y >= 0){
        player_y = player_y - block_image_height;
        console.log ("the block image height = "+ block_image_height);
        console.log ("x position of the player is = "+ player_x + " and the y position of the player is ="+ player_y);
        canvas.remove(player_object);
        player_update();


    }
}

function down(){
    if (player_y <= 450){
        player_y = player_y + block_image_height;
        console.log ("the block image height = "+ block_image_height);
        console.log ("x position of the player is = "+ player_x + " and the y position of the player is ="+ player_y);
        canvas.remove(player_object);
        player_update();


    }
}

function left(){
    if (player_x >= 0){
        player_x = player_x - block_image_width;
        console.log ("the block image width = "+ block_image_width);
        console.log ("x position of the player is = "+ player_x + " and the y position of the player is ="+ player_y);
        canvas.remove(player_object);
        player_update();


    }
}

function right(){
    if (player_x <= 840){
        player_x = player_x + block_image_width;
        console.log ("the block image width = "+ block_image_width);
        console.log ("x position of the player is = "+ player_x + " and the y position of the player is ="+ player_y);
        canvas.remove(player_object);
        player_update();


    }
}
