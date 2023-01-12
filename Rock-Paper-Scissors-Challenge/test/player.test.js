import { expect } from "chai";
import Player from "../src/player.js";

describe("player.js test", () => {
    const name = `mockName`;

    it("Should take a name as a parameter", () => {
        const playerTest = new Player('Amy', 'scissors')

        expect(playerTest.name).to.be.eql('Amy');
    })

    it("Should take a choice as a parameter", () => {
        const playerTest = new Player('Amy', 'scissors')

        expect(playerTest.choice).to.be.eql('scissors');
    })


});