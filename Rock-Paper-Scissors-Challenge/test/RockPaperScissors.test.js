import chai, { expect } from "chai";
import RockPaperScissors from "../src/RockPaperScissors.js";


describe('Rock, Paper, Scissors tests', () => {

    let player;
    let game;

    beforeEach(() => {
        player = `mockName`;
        game = new RockPaperScissors();
    })

    it("should create a player", () => {
        game.setupPlayer('player', 'scissors');
        expect(game).to.have.property("player");
    });

    it("should create player with correct name and choice", () => {
        game.setupPlayer(player, 'scissors');

        expect(game.player.name).to.be.equals("mockName");
        expect(game.player.choice).to.be.equal('scissors');
    });

    it('Should return a random number index within the array', () => {
        const computer = game.computerMove()

        expect(computer).to.be.an('string');
    })

    it('Should return this.message', () => {
        game.setupPlayer('Amy', 'scissors');
        game.computerMove()
        const message = game.play()

        expect(message).to.be.an('string');
    })
})

describe("Testing the Computer logic", () => {

    const computer = new RockPaperScissors();
    const compData = computer.computerMove();

    it("Testing that the computer choice is a valid option", () => {
        expect(compData).to.be.a(`string`);
        expect(computer.options).contains(compData);
    });
    it("Testing computer should generate an array of Rock, Paper, Scissors", () => {
        expect(computer.options).to.have.lengthOf(3);
        expect(computer.options).to.be.an(`Array`);
        expect(computer.options).to.contain.oneOf([`rock`, `paper`, `scissors`]);
    });
});