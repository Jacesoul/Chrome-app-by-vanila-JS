const body=document.querySelector("body");
const img_number=5;

// function handleImgLoad(){
//     console.log("finish loading")
// }

function paintImage(imgNumber){
    const image=new Image();
    image.src=`images/${imgNumber+1}.jpg`
    image.classList.add("bgImage");
    body.appendChild(image)
    //image.addEventListener("loadend",handleImgLoad)
}

function genRandom(){
    const number=Math.floor(Math.random()*img_number);
    return number;
}

function init(){
    const randomNumber=genRandom(); 
    paintImage(randomNumber)
}

init();
