//after clicking start this removes the button
$("#start").on("click", function () {
    $(this).remove();
    console.log("Click Click")
});

var questions = [{
    question: "Why were M&M's invented?",
    answers: ["WWII soldiers in the desert", "It was an accident", "Disney Parks"],
    correctAnswer: "WWII soldiers in the desert",
    image: "assets/images/m&m.gif",
}, {
    question: "Which band was once the official Disney Land band?",
    answers: ["Reel Big Fish", "Streetlight Manifest", "Suburban Legends", "The Mighty Mighty Bosstones"],
    correctAnswer: "Suburban Legends",
    image: "assets/images/disney.gif",
}, {
    question: "Can dogs look up?",
    answers: ["Yes", "No"],
    correctAnswer: "Yes",
    image: "assets/images/dog.gif",
}, {
    question: "Which of the following is not a Star Wars quote?",
    answers: ["Luke, I am your father", "Join me and together we will rule the galaxy as father and son", "No, I am your father", "Do it!"],
    correctAnswer: "Luke, I am your father",
    image: "assets/images/starwars.gif",
}, {
    question: "Which came first?",
    answers: ["The Doberman Pinscher", "The Miniature Pinscher"],
    correctAnswer: "The Miniature Pinscher",
    image: "assets/images/doge.gif",
}, {
}];