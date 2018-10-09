// declare var CSInterface: any;

/* 1) Create an instance of CSInterface. */
// import CSInterface from "CSInterface";

let csInterface = new CSInterface();

/* 2) Make a reference to your HTML button and add a click handler. */
let openButton = document.querySelector("#open-button");
if (openButton) {
  console.log('Found the open-button');
  openButton.addEventListener("click", openDoc);
}

/* 3) Write a helper function to pass instructions to the ExtendScript side. */
function openDoc() {
  console.log('button clicked.');
  // @ts-ignore
  csInterface.evalScript("openDocument()");
  console.log('after evalScript.');
}
