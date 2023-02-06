// Arrays
var animals = ["cat", 'tiger', 'dog'];
console.log(animals);

var function_list = [
    function apple(){
        console.log("first function")
        console.log("apple")
    },
    function orange(){
        console.log("second function")
        console.log("orange")
    },
    true,
    undefined,
    "mixed list apples"
]
console.log("End of Arrays tutorials")
console.log("")


// Objects
var user = {
    name:"john",
    age:"34",
    hobby:"soccer",
    isMarried:false
};

console.log(user['name']);
console.log(user.age);

user.favouriteFood = "spinach";
console.log(user.favouriteFood);

user.isMarried = true;
console.log(user.isMarried);