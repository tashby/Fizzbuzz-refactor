$(document).ready(function(){

var EnteredNum = prompt("Enter a number");
console.log(EnteredNum);
if (isAnumber(EnteredNum) && isAdecimal(EnteredNum)){
FizzBuzz(EnteredNum)
}
else {console.log("Bad Bad User");
window.location.reload();
}
});

function isAnumber(input){
    var parsed = parseInt(input);
    if (isNaN(parsed)){
        return false;
    }
    else { return true;}
}

function isAdecimal(input){
    var 
}

function fizzyBuzzy (num){


    if (num % 15 === 0){
        return "FizzBuzz";
    }
    else if (num % 3 ===0){
        return "Fizz";
    }
    else if (num % 5 === 0){
        return "Buzz";
    }
    else{
        return num;
    }
};
    function FizzBuzz(num){

        for (var i = 1; i <= num; i++) {
            console.log(fizzyBuzzy(i))
        } 

    }