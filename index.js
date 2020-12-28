const title=document.querySelector("#title");

const click_class= "clicked";

// function handleClick(){
//     const hassClass=title.classList.contains(click_class);
//     const currentClass=title.className;
//     if(hassClass){
//         title.classList.remove(click_class);
//     }else{
//         title.classList.add(click_class);
//     }
// }

function handleClick(){
    title.classList.toggle(click_class);
}

function init(){
    title.addEventListener("click",handleClick);

}

init();

