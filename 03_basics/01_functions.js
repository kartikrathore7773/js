

function saymyname(){
console.log("K");
console.log("A");
console.log("R");
console.log("T");
console.log("I");
console.log("K");
}

//saymyname()

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}
const result = addTwoNumbers(3,4)
// console.log("result:", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

 console.log(loginUserMessage("Kartik"))
console.log(loginUserMessage("Kartik"))