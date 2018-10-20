//  constructor
function BlackjackGame() {
    this.total = 0;
    this.card = 0;
}
//Prototype
BlackjackGame.prototype.play=function(){
    this.nextCard();
    this.total += this.card;
    this.checkResult();
}
BlackjackGame.prototype.nextCard=function(){
    this.card = parseInt((Math.random() * 13) + 1); // number between 1-13
        console.log("Next Card... " + this.card);

};

BlackjackGame.prototype.checkResult=function(){
    console.log("Total = " + this.total);
        if (this.total > 21) {
            console.log("You lost! Play Again?")
            this.total = 0;
        } else if (this.total == 21) {
            console.log("You won!  Play Again?")
            this.total = 0;
        }

};

BlackjackGame.prototype.stand=function(){
    this.total = 0;
        console.log("Scared huh? Let's start again");

};

var game = new BlackjackGame();

game.play()
//=> CARD = 9
//=> Total = 9

game.play()
//=> CARD = 11
//=> Total = 20

game.stand()
//=> Scared huh? Let's start again

game.play()
//=> CARD = 12
//=> Total = 12

game.play()
//=> CARD = 11
//=> Total = 21
//=> You Win!  Play Again?