var gameState = 0;
var contestantCount, database, quiz, question, contestant, allContestants;

function setup(){

    createCanvas(800, 500);

    database = firebase.database();

    quiz = new Quiz();
    quiz.getState();
    quiz.start();

}

function draw(){

    background("pink");

    if(contestantCount === 4){
        quiz.update(1);
    }

    if(gameState === 1){
        clear();
        quiz.play();
    }

}