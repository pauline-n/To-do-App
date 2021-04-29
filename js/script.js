let ourInput = document.querySelector(".our-input");
let ourBtn = document.querySelector(".our-btn");
let ourTodolist = document.querySelector(".our-todolist")

// console.log(ourInput, ourBtn, ourTodolist);

function AddTodo(){
    if(ourInput.value.length>0){
    console.log(ourInput.value);
    // creating our 'li' dynamically using Javascript
    let ourLi = document.createElement('li');
    // const todo = {
    //        id: Date.now(),
    //        name: item,
    //        complete: false
    // };
    // todos.push(todo);
    // addToLocalStorage(todos);
    // here we are setting the innerHTML to the input value
    // concatenate the value to an html element
    // ourLi.innerHTML = ourInput.value+"<button>delete</button>";
    ourLi.innerHTML = `${ourInput.value}<button class="del-btn"> x </button>`
    // this adds the li we created on line 10 into our ol in the html file
    ourTodolist.appendChild(ourLi)

    ourInput.value = "";
    RemoveTodo()
    FinishedTodos()
    // todos()
    // addToLocalStorage()
    }else{
        alert("Please enter a correct value")
    };
}
// ourBtn.addEventListener("click", AddTodo)
ourInput.addEventListener("change", AddTodo)

// remove todo
function RemoveTodo(){
    let removeBtns = document.querySelectorAll('.del-btn');

    removeBtns.forEach(function(button){
        button.addEventListener('click', function(){
            this.parentElement.remove();
        });
    });
}

function FinishedTodos(){
    let ourtodos = document.querySelectorAll("li");
    ourtodos.forEach(function(li){
        li.addEventListener("click", function(){
            // li.style.textDecoration="line-through";
                li.classList.toggle("finished");

        })
    })
}
// function todos(){
// let todos = [];


// }
// function addToLocalStorage(todos) {
//   // conver the array to string then store it.
//   localStorage.setItem('todos', JSON.stringify(todos));
//   // render them to screen
//   renderTodos(todos);
// }