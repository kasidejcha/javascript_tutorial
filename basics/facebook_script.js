var database = [
    {
    username: "kasidej",
    password: "admin"
    }
];

var newsfeed = [
    {
        username: "Bob",
        timeline: "feed01"
    },
    {
        username: "Bob twins",
        timeline: "feed02"
    }
];

var userNamePrompt = prompt("Input username:");
var passwordPrompt = prompt("Input password:");

function signIn(user, pass) {
    if (user == database[0].username && pass == database[0].password){
        console.log(newsfeed);
    } else {
        alert("Invalid username & password")
    }
};

signIn(userNamePrompt, passwordPrompt);