$(document).ready(function() {

    var enteredNum = prompt("Enter a number");
    console.log(enteredNum);
    if (isAnumber(enteredNum) && isAdecimal(enteredNum)) {
        fizzBuzz(enteredNum)
    } else {
        console.log("Bad Bad User");
        window.location.reload();
    }
});

function isAnumber(input) {
    var parsed = parseInt(input);
    if (isNaN(parsed)) {
        console.log(parsed);
        return false;
    } else {
        console.log(parsed);
        return true;
    }
}

function isAdecimal(input) {
    if (input % 1 != 0){
        Math.floor(input);
        return false; 
    } else {
        return true;
    }
}

function fizzyBuzzy(num) {


    if (num % 5 === 0 && num % 3 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return num;
    }
};

function fizzBuzz(num) {

    for (var i = 1; i <= num; i++) {
        console.log(fizzyBuzzy(i))
    }

}