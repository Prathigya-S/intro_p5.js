function preload(){

}

function setup(){
    canvas=createCanvas(450,370);
    canvas.position(110,250);

    camera=createCapture(VIDEO);
    camera.hide();

    tint_color="";
}

function draw(){
    image(camera,0,0,450,370);
    tint(tint_color);
}

function take_snapshot(){
    save("captured_photo.png");
}

function filter_color(){
    tint_color=document.getElementById("text_box").value;
}