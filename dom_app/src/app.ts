/// <reference types="../node_modules/types-for-adobe/Illustrator/2015.3"/>

function openDocument(){
  $.writeln('in the openDocument() function.');
  var fileRef = new File("~/Product Templates (Master)/Art Evaluation Form/Art_Evaluation_Form.indd");
  $.writeln(fileRef.fullName);

  var docRef = app.open(fileRef);
}


function sayHi() {
  let text = 'Hi there.';
  $.writeln(text);
  alert(text);
  return text;
}
