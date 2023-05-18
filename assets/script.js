var topics = ["HTML", "CSS", "Git", "JavaScript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (var i = 0; i < topics.length; i++) {
        console.log(topics[i]);
    }
}

function selectTopic() {
    if (randomTopic === "HTML") {
        console.log("Let's study HTML!");
    } else if (randomTopic === "CSS") {
        console.log("Let's study CSS!");
    } else if (randomTopic === "Git") {
        console.log("Let's study Git!");
    } else if (randomTopic === "JavaScript") {
        console.log("Let's study JavaScript!");
    } else {
        console.log("Please try again!");
    }
}
console.log("Here are the topics we learned through prework!");
listTopics();
console.log("Which topic should we study first?");
selectTopic();

var count = 0;
function collapseCards() {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    count += 1;
    console.log("collapseCards is working " + count + "times");
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var card = this.nextElementSibling;
            if (card.style.display === "block") {
                card.style.display = "none";
            } else {
                card.style.display = "block";
            }
            
        });
    }
}

collapseCards();