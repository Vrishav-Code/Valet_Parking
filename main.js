canvas= document.getElementById("lol")
ctx= canvas.getContext("2d")

greencar_width=75;
greencar_height=100;
car_x=5;
car_y=225;
carimg="car2.png";
backgroundImg="parkingLot.jpg";

function add() {

    backgroundImage= new Image()
    backgroundImage.onload= uploadbackground
    backgroundImage.src= backgroundImg

    carImage= new Image()
    carImage.onload= uploadcar
    carImage.src=carimg
}

function uploadcar() {
    ctx.drawImage(carImage,car_x,car_y,greencar_width,greencar_height)
}
function uploadbackground() {
    ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height)
}

window.addEventListener("keydown",mykeydown)

function mykeydown(e) {
    keypressed=e.keyCode
    console.log(keypressed)

    if (keypressed=="37")
    {
        left()
        console.log("Left key is pressed")
    }
    if (keypressed=="38")
    {
        up()
        console.log("Top key is pressed")
    }
    if (keypressed=="39")
    {
        right()
        console.log("Right key is pressed")
    }
    if (keypressed=="40")
    {
        bottom()
        console.log("Bottom key is pressed")
    } 
}
function left() {
    if (car_x>=0) {
    car_x=car_x-10
    console.log("Left arrow is pressed. X="+car_x+"Y="+car_y)
    uploadbackground()
    uploadcar()
    }  
}

function right() {
    if (car_x<=700) {
    car_x=car_x+10
    console.log("Right arrow is pressed. X="+car_x+"Y="+car_y)
    uploadbackground()
    uploadcar()
    }  
}

function up() {
    if (car_y>=0) {
    car_y=car_y-10
    console.log("Top arrow is pressed. X="+car_x+"Y="+car_y)
    uploadbackground()
    uploadcar()
    }  
}

function bottom() {
    if (car_y<=500) {
    car_y=car_y+10
    console.log("Bottom arrow is pressed. X="+car_x+"Y="+car_y)
    uploadbackground()
    uploadcar()
    }  
}
