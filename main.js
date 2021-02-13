canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverwidth=100;
roverheight=90;
background_image="mars.jpg";
rover_image="rover.png";
roverx=10;
rovery=10;
function add() {
    backgroundimgtag=new Image();
    backgroundimgtag.onload=uploadbackground;

    backgroundimgtag.src=background_image;

    roverimgtag=new Image();
    roverimgtag.onload=uploadrover;
    
    roverimgtag.src=rover_image;


}
function uploadbackground(){
    ctx.drawImage(backgroundimgtag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(roverimgtag,roverx,rovery,roverwidth,roverheight);

}
window.addEventListener("keydown",myKeydown);
function myKeydown(e){
    keypressed=e.keyCode;
    if(keypressed=='38'){
        up();
        console.log("up");

    }
    if(keypressed=='40'){
        down();
        console.log("down");

    }
    if(keypressed=='39'){
        right();
        console.log("right");

    }
    if(keypressed=='37'){
        left();
        console.log("left");

    }
        
    
}
