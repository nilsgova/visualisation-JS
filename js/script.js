 document.getElementById("myButton").addEventListener("click", myFunction);


function myFunction() {
    var button = document.getElementById("myButton").classList.toggle("button");
    var container = document.getElementById("myContainer").classList.toggle("container");
    var title = document.getElementById("myTitle").classList.toggle("title");
    var cards = document.getElementById("myCards").classList.toggle("cards");
    var card1 = document.getElementById("myCard");
    card1.classList.toggle("card");
    card1.classList.toggle("card-1");
    var card2 = document.getElementById("myCard2").classList.toggle("card");
    var card3 = document.getElementById("myCard3").classList.toggle("card");
    var body = document.getElementById("myBody").classList.toggle("body");
}
