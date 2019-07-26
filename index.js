
var oddorevenButton = $('.oddorevenbutton');
var numberContainer1 = $('.input1');
var return1 = $('.return1');

oddorevenButton.on('click',showAnswer1);


function showAnswer1(){
  if (numberContainer1.val() % 2 === 0) {
  	return1.append('<h2>Even Number</h2>');
  }
  else{
  	return1.append('<h2>Odd Number</h2>');
  }

}


var multipleof3Button = $('.multipleof3button');
var numberContainer2 = $('.input2');
var return2 = $('.return2');

multipleof3Button.on('click', showAnswer2);

function showAnswer2(){
  if (numberContainer2.val() % 3 === 0) {
    return2.append('<h2>Buzz</h2>');
  }

  else if numberContainer2.val() % 5 === 0) {
    return2.append('<h2>Fizz</h2>')
  }


}
