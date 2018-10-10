/// <reference types="../node_modules/types-for-adobe/Illustrator/2015.3"/>

function openDocument() {
  $.writeln("in the openDocument() function.");
  const fileRef = new File(
    "~/Product Templates (Master)/Art Evaluation Form/Art_Evaluation_Form.indd",
  );
  $.writeln(fileRef.fullName);

  const docRef = app.open(fileRef);
}

function sayHi() {
  const text = "Hi there.";
  const talker = new Talker();
  const newText = talker.sayHello();
  $.writeln(newText);
  alert(newText);
  return newText;
}

class Talker {
  public sayHello() {
    return "Talker says 'Hi!'";
  }
}
