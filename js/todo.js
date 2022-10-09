const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // document.querySelector("#todo-form input"); 과 동일
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDo();
}

function paintTodo(newTodo) {
    const li = document.createElement("li"); // html의 li tag element를 만듦.
    li.id = newTodo.id;
    const span = document.createElement("span"); // html의 span tag element를 만듦.
    span.innerText =  newTodo.text; // 위에서 만들어진 span 변수의 태그 내부의 텍스트값(innerText)에 사용자로부터 입력 받은 newTodo를 입력
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);  // li 변수 내에 자식 요소로 span 변수를 추가함
    li.appendChild(button); 
    toDoList.appendChild(li); // todo 값까지 들어있는 최종 li(incl. span)변수를 toDoList 변수(문서내 요소)에 추가
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; // 입력 받은 todo 값을 newTodo 변수로 옮기는 작업
    toDoInput.value = ""; // 입력 및 저장 후 Form을 비우는 작업
    const newTodoObj = {
        text:newTodo,
        id: Date.now(), //random id로 활용할 현재시간을 millie sec 단위로 나타내는 function
    };
    toDos.push(newTodoObj); // 입력 된 item의 object를 array에 입력(push)
    paintTodo(newTodoObj); // newTodoObj 를 paintTodo function으로 전달
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}

