class Quiz{

    constructor(){}

    getState(){

        var gameStateRef = database.ref('gameState');

        gameStateRef.on("value", function(data) {
            gameState = data.val();
        })

    }

    update(state){

        database.ref('/').update({
            gameState : state
        });

    }

    async start(){

        if(gameState === 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");

            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }

            question = new Question();
            question.display();

        }

    }

    play(){

        question.hide();

        background("yellow");

        Contestant.getContestantInfo();

        if(allContestants !== undefined){

            var display_position = 120;

            for(var cta in allContestants){
                var correctAns = "2";

                if(correctAns === allContestants[cta].answer){
                    fill("green");
                }else{
                    fill("red");
                }

                display_position += 20;

                textSize(15);
                text(allContestants[cta].name + ":" + allContestants[cta].answer, display_position);

            }

        }

    }

}