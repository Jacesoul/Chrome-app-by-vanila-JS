const toDoForm=document.querySelector(".js-toDoForm");
const toDoInput=toDoForm.querySelector('input');
const toDoList=document.getElementsByClassName('js-toDoList');


const todos_ls='toDos';


function paintToDo(text){
    console.log(text);
}



function handleSubmit(event){
    event.preventDefault();
    const currentValue=toDoInput.value;
    paintToDo(currentValue);
    //toDoInput.value="";
}



function loadToDos(){
    const toDos=localStorage.getItem(todos_ls);
    if(toDos!==null){

    }    
}








function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);

}
init();
