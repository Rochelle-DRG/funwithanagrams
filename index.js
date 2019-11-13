/**** FUN WITH ANAGRAMS! ***
Input: an array of strings
Output: an array of strings minus any strings 
    that were anagrams of a previous string */


let noAnagrams = {
    input: ["asdf", "qwer", "sdgg", "fdhg"],
    expectedOutput: ["asdf", "qwer", "sdgg", "fdhg"]
}
let oneAnagram = {
    input: ["asdf", "qwer", "fdsa", 'fdhg'],
    expectedOutput: ["asdf", "qwer", "fdhg"]
}
let allAnagrams = {
    input: ["asdf", "sdfa", "sadf", "fasd"],
    expectedOutput: ["asdf"]
}
let spacesAnagrams = {
    input: ["Hyland is cool", "looc si dnalyH", "Roses are Independent", "Hire me", "for your team resplendent"],
    expectedOutput: ["Hyland is cool", "Roses are Independent", "Hire me", "for your team resplendent"]
}
let capsAnagrams = {
    input: ["AaA", "aAa", "BAB"],
    expectedOutput: ["AaA", "BAB"]
}
let capsAnagrams2 = {
    input: ["Hello", "Rose", "esor", "Michelle", "Minisha"],
    expectedOutput: ["Hello", "Rose", "Michelle", "Minisha"]
}


function funWithAnagrams(inputArray) {
    let outputArray = [];
    let sortedArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        let sortedString = inputArray[i].toUpperCase().split("").sort().join("");
        if (!sortedArray.includes(sortedString)){
            outputArray.push(inputArray[i]);
        }
        sortedArray.push(sortedString);
    }
    return outputArray;
}
// funWithAnagrams(oneAnagram.input);

function testFWA(inputArray){
    // console.log(funWithAnagrams(inputArray.input));
    console.log(inputArray.expectedOutput);
    if (JSON.stringify(funWithAnagrams(inputArray.input)) === JSON.stringify(inputArray.expectedOutput)) {
        console.log("pass");
    }
    else console.log("fail");
}

// testFWA(noAnagrams);
// testFWA(oneAnagram);
// testFWA(allAnagrams);
// testFWA(spacesAnagrams);
// testFWA(capsAnagrams);
// testFWA(capsAnagrams2);

/** FOR FRONT-END TESTING MY ANAGRAM FUN **/

let userInputArray = ["Hello", "Rose","esor","Michelle", "Minisha"];
let userInputDisplay = "["+userInputArray.toString()+"]";
// console.log(userInputDisplay);

let updateDisplayString = function(){
    userInputDisplay = "["+userInputArray.toString()+"]";
    document.getElementById("display-array").innerHTML = userInputDisplay;
    console.log(userInputArray);
    console.log(userInputDisplay);
}
updateDisplayString(); //test
let clearArray = function(){
    userInputArray = [];
    updateDisplayString();

    console.log("array cleared");
    console.log(userInputArray);
    console.log(userInputDisplay);
    document.getElementById("output").innerHTML = "Output:";
}

let addToTestArray = function() {
    let inputValue = document.getElementById("userInput").value;
    userInputArray.push(inputValue);
    updateDisplayString();
    document.getElementById("userInput").value="";
    getOutput();
}

let getOutput = function() {
    let result = funWithAnagrams(userInputArray);
    let displayOutput = "Output: ["+result.toString()+"]";
    document.getElementById("output").innerHTML = displayOutput;
}
getOutput();

