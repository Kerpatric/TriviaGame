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
    question: "Why were M&M's invented?",
    answers: [""],
    correctAnswer: "",
    image: "assets/images/.gif",
}, {
    question: "Why were M&M's invented?",
    answers: [""],
    correctAnswer: "",
    image: "assets/images/.gif",
}, {
    question: "Why were M&M's invented?",
    answers: [""],
    correctAnswer: "",
    image: "assets/images/.gif",
}, {
    question: "Why were M&M's invented?",
    answers: [""],
    correctAnswer: "",
    image: "assets/images/.gif",
}, {
    question: "Why were M&M's invented?",
    answers: [""],
    correctAnswer: "",
    image: "assets/images/.gif",
}, {
}
]