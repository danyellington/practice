function count(number) {
  var number = number.toString();
  debugger;
  for (var i = 0; i< number.length; i++);


function Divisible(num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  if (num1 % num2 === 0) {
    return true;
  }
    else {
      return false;
    }
  }

function beep(number) {
  //for (var i = 0; i<= number.length; i++);
  if (i === 0);
  return dave;
}

function boop(number) {
  //for (var i = 0; i<= number.length; i++);
  if (i === 1);
  return boop;
}
}

function BeepBoop(number) {
  var results = [];
  var beep = "beep";
  var boop = "boop";
  var dave = "sorry";

  for (var i = 0; 1 < number; i++) {
    if (divisible([i] === 0)) {
      results[i] = dave;
    }

    else if (beep(i === 0)) {
      results[i] = beep;
    }

    else if (boop(i === 1)) {
      results[i] = boop;
    }

    else {
      results[i] = i;
    }

    return results;
  }
}


  $(document).ready(function() {
    $("form#beepBoop").submit(function(event) {
      event.preventDefault();
      var input = $("input#input").val();
      debugger;
      var boopstring = count(input);
      var input = BeepBoop(results);
      (".results").text(results.toString());
    });
  });
