console.log("archivo script.js cargado");

let colors=[];
let hard=6;
let easy=3;
let mode=hard
generateRandomColors(mode);

let pickedColor=pickColor(); 
document.getElementById('colorDisplay').innerHTML=pickedColor;

const cuadrados=document.querySelectorAll(".square");

/* hacerCuadrados();

function hacerCuadrados(){
} */

for(i=0; i<mode;i++){
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

document.getElementById('reset').addEventListener("click",function(){
    reinicio();
});

function reinicio(){
    prepararCuadrados();
    generateRandomColors(mode);
    pickedColor=pickColor(); 
    document.getElementById('colorDisplay').innerHTML=pickedColor;
    for(i=0; i<colors.length;i++){
        cuadrados[i].style.backgroundColor=colors[i];
    }
    document.getElementById('message').innerHTML=""
    document.querySelector("h1").style.backgroundColor="#232323";
    document.getElementById('reset').innerText="Nuevos Colores"
    
}

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
    let indice=Math.floor(Math.random()*mode);
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
    /* colors.length=0; */
    reinicio();
    console.log("click en easy");
});

document.getElementById('hard').addEventListener("click",function(){
    document.getElementById('hard').className="selected";
    document.getElementById('easy').removeAttribute("class");
    mode=hard;
    /* colors.length=0; */
    reinicio();
    console.log("click en hard")
});

function prepararCuadrados(){
    if (mode==easy){
        for (i=3;i<6; i++){
            cuadrados[i].setAttribute("hidden","true");
        }
    }else{
        for(i=0;i<6;i++){
            cuadrados[i].removeAttribute("hidden");
        }
    }
} 