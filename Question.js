class Question{

    constructor(){

        this.title = createElement('h3');
        this.question = createElement('h2');
        this.option1 = createElement('h2');
        this.option2 = createElement('h2');
        this.option3 = createElement('h2');
        this.option4 = createElement('h2');
        this.input1 = createInput("Enter Correct Option No.");
        this.input2 = createInput("Enter Name");
        this.button = createButton("Submit");

    }

    hide(){

        this.question.hide();
        this.option1.hide();
        this.option2.hide();
        this.option3.hide();
        this.option4.hide();
        this.input1.hide();

    }

    display(){

        this.title.html("MyQuiz Game");
        this.title.position(750, 100);

        this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter? ");
        this.question.position(500, 180);

        this.option1.html("1: Everyone");
        this.option1.position(500, 200);

        this.option2.html("2: Envelope");
        this.option2.position(500, 220);

        this.option3.html("3: Estimate");
        this.option3.position(500, 240);

        this.option4.html("4: Example");
        this.option4.position(500, 260);

        this.input1.position(500, 330);

        this.button.position(700, 350);

        this.button.mousePressed(()=>{

            this.title.hide();
            this.input1.hide();
            this.button.hide();
            contestant.name = this.input2.value();
            contestantCount += 1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);

        })

    }

}