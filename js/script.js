 // create a function when the button is clicked
 var button = document.getElementById("myButton").addEventListener("click", myFunctionSwitcher);

 // store the changeMe class in a variable
 var changeMe = document.getElementById("changeMe");

 // function that will toggle the body classes
 function bodyFunc() {
     document.getElementById("myBody").classList.toggle("body");
     changeMe.innerHTML = "Now we added some basic styling to the body";
 }

 // function that will toggle the container and title classes
 function containerFunc() {
     document.getElementById("myContainer").classList.toggle("container");
     document.getElementById("myTitle").classList.toggle("title");
     changeMe.innerHTML = "Some basic styling to the heading and body";
 }

 // function that will toggle the card classes
 function cardsFunc() {
     document.getElementById("myCards").classList.toggle("cards");
     var card1 = document.getElementById("myCard");
     card1.classList.toggle("card");
     card1.classList.toggle("card-1");
     document.getElementById("myCard2").classList.toggle("card");
     document.getElementById("myCard3").classList.toggle("card");
     changeMe.innerHTML = "This is starting to look better";
 }

 // function that will add the button classes
 function buttonFunc() {
     var button = document.getElementById("myButton");
     button.classList.toggle("button");
     button.innerHTML = "Restart !";
     changeMe.innerHTML = "And finaly the button !";
 }

 // store the functions in a array
 var myFunctions = [bodyFunc, containerFunc, cardsFunc, buttonFunc];
 var nextFunction = 0;

 // a function that will how many times the button is clicked and reset after reaching the limit of the array
 function myFunctionSwitcher() {
     if (nextFunction < myFunctions.length) {
         myFunctions[nextFunction]();
         nextFunction++;
     } else {
         bodyFunc();
         containerFunc();
         cardsFunc();
         buttonFunc();
         changeMe.innerHTML = "This is a webpage without css";
         nextFunction = 0;
         document.getElementById("myButton").innerHTML = "Click Me!";
     }
 };

