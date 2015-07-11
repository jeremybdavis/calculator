var $calculateBtn = document.getElementById('calculateBtn');
var $answer = document.getElementById('answer');


var calculate = function() {
  var $numOne = document.getElementById('num_one').value;
  var $numTwo = document.getElementById('num_two').value;

  var total = $numOne * $numTwo;
  $answer.innerHTML = total;

  return total;

};

$calculateBtn.onclick = calculate;
