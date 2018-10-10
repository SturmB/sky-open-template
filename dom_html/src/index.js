"use strict";
// declare var CSInterface: any;
// import CSInterface from "CSInterface";
/* 1) Create an instance of CSInterface. */
var csInterface = new CSInterface();
/* 2) Make a reference to your HTML button and add a click handler. */
var openButton = document.querySelector("#open-button");
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
    csInterface.evalScript("sayHi()", function (result) {
        var text = result;
        alert(text);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0NBQWdDO0FBQ2hDLHlDQUF5QztBQUV6QywyQ0FBMkM7QUFDM0MsSUFBSSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztBQUVwQyxzRUFBc0U7QUFDdEUsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN4RCxJQUFJLFVBQVUsRUFBRTtJQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUNyQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0NBQ3BEO0FBRUQsK0VBQStFO0FBQy9FLFNBQVMsT0FBTztJQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMvQixhQUFhO0lBQ2IsV0FBVyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBRUQsU0FBUyxZQUFZO0lBQ25CLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLFVBQVMsTUFBTTtRQUMvQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUM7UUFDbEIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2QsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIn0=