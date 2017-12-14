$(document).ready(function() {



var results = countToFifty(); //must call function to run it! results is an array.
//console.log(results);
$(".results").append(results);



});

function countToFifty() {
  //debugger;
  var results = [ ];
  var dave = "sorry"

  for(var i = 0; i < 50; i++) {
    //debugger;

    if (i % 3 == 0) { // no comparison here rn

      results.push(dave);
      debugger;
      //do something to our results array here.

    } else {
      results.push(results);
      }


    }
    return results;//must return at the end of
                 //function to make stuff available to other parts of code
  }



    //results.push(i);

   //must return at the end of
                //function to make stuff available to other parts of code
