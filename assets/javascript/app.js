//after clicking start this removes the button
$("#start").on("click", function () {
    $(this).remove();
    game.loadQuestion();
    console.log("Click Click")
});

$(document).on('click', '.answer-button', function (e) {
    game.clicked(e);
})

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

var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("TIME UP");
            game.timeUp();
        }
    },
    loadQuestion: function () {
        timer = setInterval(game.countdown, 1000);
        $("#subwrapper").html("<h2>" + questions[game.currentQuestion].question +
            "</h2>");
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $("#subwrapper").append("<button class='answer-button' id ='button-" + i + "'data-name='" + questions[game.currentQuestion].answers[i] + "'>" + questions[game.currentQuestion].answers[i] + "</button>");
        }
    },
    nextQuestion: function () {
        game.counter = 30;
        $('#counter').html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },
    timeUp: function () {

    },
    results: function () {

    },
    clicked: function (e) {
        clearInterval(timer);
        if ($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
            game.answeredCorrectly();
        } else {
            game.answeredIncorrectly();
        }
    },
    answeredCorrectly: function () {
        console.log("YOU GOT IT!");
        clearInterval(timer);
        game.correct++;
        $("#subwrapper").html('<h2> You got it right!</h2>');
        if (game.currentQuestion == questions.lenght - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    answeredIncorrectly: function () {
        console.log("WRONG!");
        clearInterval(timer);
        game.incorrect++;
        $("#subwrapper").html('<h2> You got it wrong!</h2>');
        if (game.currentQuestion == questions.lenght - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    reset: function () {

    }
}