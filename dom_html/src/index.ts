// declare var CSInterface: any;
// import CSInterface from "CSInterface";

/* 1) Create an instance of CSInterface. */
let csInterface = new CSInterface();

/* 2) Make a reference to your HTML button and add a click handler. */
let openButton = document.querySelector("#open-button");
if (openButton) {
  console.log('Found the open-button');
  openButton.addEventListener("click", saySomething);
}

/* 3) Write a helper function to pass instructions to the ExtendScript side. */
function openDoc() {
  console.log('button clicked.');
  // @ts-ignore
  csInterface.evalScript("openDocument()");
  console.log('after evalScript.');
}

function saySomething() {
  csInterface.evalScript("sayHi()", function(result) {
    let text = result;
    alert(text);
  });
}
