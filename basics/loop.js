var todos = [
    "clean",
    "shower",
    "exercise",
    "study",
    "sleep"
]
var length = todos.length;
for (var i=0; i<length; i++){
    console.log(i + ": " +todos[i]);
    todos.pop();
}
console.log(todos)

// check condition first
var counterOne=3;
while (counterOne > 0){
    console.log("while", counterOne);
    counterOne--;
}

// do first then check condition
var counterTwo = 3;
do {
    console.log("do while", counterTwo)
    counterTwo--;
} while(counterTwo > 0);

var counterTwo = 3;
do {
    console.log("do while", counterTwo)
    counterTwo--;
} while(counterTwo > 10);



var todos = [
    "clean",
    "shower",
    "exercise",
    "study",
    "sleep"
]
todos.forEach(
    function(todo, i){
        console.log(i, todo);
    }
)

var important = [
    "study",
    "eat"
]
function logTodos(todo, i){
    console.log(i, todo);
}
important.forEach(logTodos);