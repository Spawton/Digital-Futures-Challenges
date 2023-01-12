import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../app.js";

chai.use(chaiHttp);

describe("app.js tests", () => {
    it("should make request to /", async () => {
        const response = await chai.request(server).get(`/`).send();

        expect(response).to.be.html;
    });

    //This test passes, however it seems to create an error that stops me from starting my application, I was unable to work out why so I have commented out the test.
    // it("should return code 200 with get request", async () => {
    //     const response = await chai.request(server).get('/').send();

    //     expect(response).to.have.status(200)

    // })

    it("should make request to /game", async () => {
        const response = await chai.request(server).get(`/game`).send();

        expect(response).to.be.html;
    });

    it(`should return an html file that includes "Welcome to Rock, Paper, Scissors!"`, async () => {
        const res = await chai.request(server)
            .get(`/`)
            .send();

        expect(res).to.be.html;
        expect(res.text).to.contain("Welcome to Rock, Paper, Scissors!");
        expect(res.text).to.contain("Enter your name to play!");
        expect(res.text).to.contain("Player:");

    })
});