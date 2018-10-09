/// <reference types="types-for-adobe/illustrator/2015.3"/>

function openDocument(){
  $.writeln('in the openDocument() function.');
  var fileRef = new File("~/Product Templates (Master)/Art Evaluation Form/Art_Evaluation_Form.indd");
  $.writeln(fileRef.fullName);

  var docRef = app.open(fileRef);
}
