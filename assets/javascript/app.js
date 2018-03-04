//after clicking start this removes the button
$("#start").on("click", function () {
    $(this).remove();
    game.loadQuestion();
    console.log("Click Click")
});
//click event to start checking the answer clicked against the DOM
$(document).on('click', '.answer-button', function (e) {
    game.clicked(e);
})

$(document).on('click', '#reset', function () {
    game.reset();
})
//questions to ask object
var questions = [{
    question: "Why were M&M's invented?",
    answers: ["WWII soldiers in the desert", "It was an accident", "Disney Parks"],
    correctAnswer: "WWII soldiers in the desert",
    image: "assets/images/m&m.gif",
}, {
    question: "Which band was once the official Disney Land band?",
    answers: ["Reel Big Fish", "Streetlight Manifesto", "Suburban Legends", "The Mighty Mighty Bosstones"],
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
}];
//Game Object
var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    unanswered: 0,
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
        $('#subwrapper').html("<h2>Time Remaining <span id='counter'>30 </span> Seconds</h2>");
        $("#subwrapper").append("<h2>" + questions[game.currentQuestion].question +
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
        clearInterval(timer);
        game.unanswered++;
        $("#subwrapper").html('<h2> OUT OF TIME! </h2>');
        $('#subwrapper').append('<h3>The Correct answer was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    results: function () {
        clearInterval(timer);
        $('#subwrapper').html("<img src ='/assets/images/GO.gif'>");
        $('#subwrapper').append("<h3>Correct: " + game.correct + "</h3>");
        $('#subwrapper').append("<h3>Incorrect: " + game.incorrect + "</h3>");
        $('#subwrapper').append("<h3>Unanswered: " + game.unanswered + "</h3");
        $('#subwrapper').append("<button id='reset'>RESET</button>");

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
        $("#subwrapper").append('<img src= ' + questions[game.currentQuestion].image + '>');
        if (game.currentQuestion == questions.length - 1) {
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
        $('#subwrapper').append('<h3>The Correct answer was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    reset: function () {
        game.currentQuestion = 0;
        game.counter = 0;
        game.correct = 0;
        game.incorrect = 0;
        game.unanswered = 0;
        game.loadQuestion();
    }
}