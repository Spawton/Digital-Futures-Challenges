import Player from "../src/Player.js";

class RockPaperScissors {
    options = ["rock", "paper", "scissors"];
    player = null;
    computerChoice = this.computerMove();
    message = "";

    setupPlayer(name, choice) {
        this.player = new Player(name, choice);
    }

    computerMove() {
        const random = Math.floor(Math.random() * this.options.length);
        return this.options[random];
    }

    play() {
        if (this.player.choice === this.computerChoice) {
            this.message = "It's a draw!"
        }
        if (this.player.choice === "rock" && this.computerChoice === "scissors") {
            this.message = "You win, yay!"
        }
        if (this.player.choice === "paper" && this.computerChoice === "rock") {
            this.message = "You win, yay!"
        }
        if (this.player.choice === "scissors" && this.computerChoice === "paper") {
            this.message = "You win, yay!"
        }
        if (this.player.choice === "rock" && this.computerChoice === "paper") {
            this.message = "Too bad, you lose!"
        }
        if (this.player.choice === "paper" && this.computerChoice === "scissors") {
            this.message = "Too bad, you lose!"
        }
        if (this.player.choice === "scissors" && this.computerChoice === "rock") {
            this.message = "Too bad, you lose!"
        }
        return this.message;
    }
}

export default RockPaperScissors;