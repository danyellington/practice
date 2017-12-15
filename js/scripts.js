//Business Logic
function containOne(number, char){ //number is input by user. char assigned in else if function (1, 0) number = entire input while i = specific character inside input. char is what loop is searching for inside the input string
  var number =  number.toString(); //turns user input to string so it can run through loops
  for(var i = 0; i<=number.length; i++){//length goes through each number input by user starting at 0 (number.length/ number is char) .length goes through each number
    if(number[i]===char){ //if input number is char as defined in else if statements (1, 0)
      return true; //returns "beep" and/or "boop" string
    }
  }
  return false; // does not contain 1 or 0, returns user input or user input and/or "dave" string depending on loop result
}

function isDivisible(num1, num2){ //num1=[i] num2 = 3
  num1 = parseInt(num1); //parseInt makes input a number to go through loop instead of string in order for maths to work
  num2 = parseInt(num2);
  if(num1 % num2 === 0){ //num1 = number input by user % number defined in if statement (3)
    return true; //displays "dave" string after completing for loop i % 3 if i = divisible by 3
  }
  else {
    return false; //is not divisible, returns input from user and/or "beep" "boop" string depending on other loops
  }
}


function beepBoop(number) { //number is user input being called to function beepBoop which contains divisibility, 1, or 0 functions.
  //debugger;
  var results = [];//empty space to place users input after it's run through loops
  var dave = "sorry" //string that displays if parameter conditions are met in inDivisible function
  var boop = "boop" //displays for 0
  var beep = "beep" //displays for 1

  for(var i = 0; i < number; i++) { //starts at 0 and counts through string until it reaches the number input by user, incrementing 1 each loop
    if (isDivisible(i, 3)) { // isDivisible is function counting each number and attempting to divide by 3. (1,2,"sorry", 3, 4, 5, "sorry")
        results[i] = dave; //if any number within user input divisibleby three, replace with "dave" string
    }
    else if (containOne(i, '1')) { //containOne is the number input by the user [i] looped through to find 1. char = 1 as defined in this specific function
      results[i] = boop;
    }
    else if (containOne(i, '0')) { //char defined as 0
      results[i] = beep; //results = all numbers input and any numbers input that meet conditions displayed as "beep"
    }
    else {
      results[i] = i;      } //
    }
    return results;//must return at the end of
                 //function to make stuff available to other parts of code
  }

  //User Interface
$(document).ready(function() { //makes document ready when page loads
  $("form#beepBoop").submit(function(event) {
    debugger; //submit form (button contained in form) event function prevents reload
    event.preventDefault();//prevenDefault prevents entire page from reloading, only displays form submission
    var input = $("input#input").val(); //input from form
    var beepBoopString = beepBoop(input); //input from form called to beepBoop function. begins for loop, starting with isDivisible, then containOne for 1 and 0.
    $(".results").text(beepBoopString.toString());//beepBoop function results turned to string and displayed in text
  });
  //var results = countToFifty(); //must call function to run it! results is an array.
//console.log(results);
  //$(".results").append(results);
});

    //results.push(i);

   //must return at the end of
                //function to make stuff available to other parts of code
