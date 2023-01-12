import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../app.js";

chai.use(chaiHttp);

describe("game router tests", () => {
    beforeEach(async () => {
        //create a player
        const player = 'mockName'
        const res = await chai.request(server).post('/game').send(player)
    });

    it("should make successful get request to /game", async () => {
        const res = await chai.request(server).get(`/game`).send()
        expect(res).to.have.status(200)
    });

    it("should return code 200 with get request", async () => {
        const response = await chai.request(server).get('/game').send();

        expect(response).to.have.status(200)

    })
});