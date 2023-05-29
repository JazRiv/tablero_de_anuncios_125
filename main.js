izquierda = 0;
derecha = 0;
distancia = 0;

function setup(){
    canvas = createCanvas(300, 300);
    background("green");
    video = createCapture(VIDEO);
    video.position(300, 100);
    video.size(300, 300);
    poses = ml5.poseNet(video, modelolisto);
    poses.on("pose", obtener);
}

function draw(){
    background("green");
    textSize(distancia);
    fill("white");
    text("hola", 50, 200);
}

function modelolisto(){
    console.log("modelo listo");
}

function obtener(resultado){
    if(resultado.length > 0){
        console.log(resultado);
        izquierda = resultado[0].pose.leftWrist.x;
        derecha = resultado[0].pose.rightWrist.x;
        distancia = Math.floor(izquierda - derecha);
        document.getElementById("tamano").innerHTML = "el tamaño de la fuente es:" + distancia;
    }
}