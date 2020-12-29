const toDoForm=document.querySelector(".js-toDoForm");
const toDoInput=toDoForm.querySelector('input');
const toDoList=document.querySelector(".js-toDoList");


const todos_ls='toDos';
const toDos=[];

function saveToDos(){
    localStorage.setItem(todos_ls, JSON.stringify(toDos));
    
}

function paintToDo(text){
    const li=document.createElement("li");
    const delBtn=document.createElement("button");
    delBtn.innerHTML="❌";
    const span=document.createElement("span");
    const newId=toDos.length +1;

    span.innerText=text
    toDoList.appendChild(li);
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id=newId;
    const toDoObj={
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();

}


function handleSubmit(event){
    event.preventDefault();
    const currentValue=toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}


function Something(toDo){
    paintToDo(toDo.text);
}


function loadToDos(){
    const loadedToDos=localStorage.getItem(todos_ls);
    if(loadedToDos!==null){
        const parsedToDos=JSON.parse(loadedToDos);
        parsedToDos.forEach(Something);
    }
}





function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);

}
init();
