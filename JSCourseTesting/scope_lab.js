// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

let userRole = "admin";
let accessLevel ;

if(userRole === "admin"){
    accessLevel = "full";
}
else if(userRole === "editor"){
    accessLevel = "partial";
}
else{
    accessLevel = "none";
}

console.log(accessLevel); // Output: "full"

let isLoggedIn = true;
let userMessage;

if(isLoggedIn){
    if(userRole === "admin"){
        userMessage = "Welcome Admin! You have full access.";
    }
    else if(userRole === "editor"){
        userMessage = "Welcome Editor! You have partial access.";
    }
    else{
        userMessage = "please log in to access your account.";
    }
}

console.log("User Message:", userMessage);

//Arrow funtion
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;