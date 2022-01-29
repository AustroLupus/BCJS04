console.log("archivo script.js cargado");

/* let colors=["rgb(204, 51, 255)","rgb(255, 102, 153)", "rgb(204, 255, 51)", "rgb(102, 255, 102)", "rgb(51, 255, 204)", "rgb(102, 102, 204)"]; */
let colors=[];
let hard=6;
let easy=3;
let mode=hard
generateRandomColors(mode);

let pickedColor=pickColor(); 
document.getElementById('colorDisplay').innerHTML=pickedColor;

const cuadrados=document.querySelectorAll(".square");

hacerCuadrados();

function hacerCuadrados(){
    for(i=0; i<colors.length;i++){
        /* console.log(cuadrados[i])*/
        console.log(colors[i])
        cuadrados[i].style.backgroundColor=colors[i];
        cuadrados[i].addEventListener("click",function(){
            let clickedColor=getComputedStyle(this);
            console.log(clickedColor.backgroundColor);    
            if (pickedColor==clickedColor.backgroundColor){
                console.log("Color correcto");
                document.getElementById('message').innerHTML="&iexcl;Correcto!"
                document.querySelector("h1").style.backgroundColor=pickedColor;
                changeColors(pickedColor)
                document.getElementById('reset').innerText="Play again?"
            }else{
                console.log("color equivocado");
                (this).style.backgroundColor="#232323";
                document.getElementById('message').innerHTML="Intentalo Nuevamente"
            }
        })
    }
}

document.getElementById('reset').addEventListener("click",function(){
    generateRandomColors(mode);
    pickedColor=pickColor(); 
    document.getElementById('colorDisplay').innerHTML=pickedColor;
    for(i=0; i<colors.length;i++){
        cuadrados[i].style.backgroundColor=colors[i];
    }
    document.getElementById('message').innerHTML=""
    document.querySelector("h1").style.backgroundColor="#232323";
    document.getElementById('reset').innerText="Nuevos Colores"
});


function changeColors(winningColor){
    for (i=0; i<colors.length; i++){
        cuadrados[i].style.backgroundColor=winningColor;
    }
}
function randomColor(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let colorRandom="rgb("+r+", "+g+", "+b+")"
    return colorRandom
}
function pickColor(){
    let indice=Math.floor(Math.random()*colors.length);
    return colors[indice]
}
function generateRandomColors(cant){
    for(i=0;i<cant;i++){
        colors[i]=randomColor();
    }
}

document.getElementById('easy').addEventListener("click",function(){
    document.getElementById('easy').className="selected";
    document.getElementById('hard').removeAttribute("class");
    mode=easy;
    console.log("click en easy");
});

document.getElementById('hard').addEventListener("click",function(){
    document.getElementById('hard').className="selected";
    document.getElementById('easy').removeAttribute("class");
    mode=hard;
    console.log("click en hard")
});