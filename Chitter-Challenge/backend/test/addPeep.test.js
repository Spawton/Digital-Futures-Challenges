import Peeps from "../server/models/peeps.model.js";
import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../server.js";
import testPeeps from "./testData/testPeeps.js";
const testDataArray = testPeeps.peeps;


chai.use(chaiHttp);

describe('Server Tests on addPeeps', () => {
    const testServer = chai.request(server).keepOpen();

    beforeEach(async () => {
        try {
            await Peeps.deleteMany();
            console.log(`Peeps in collection cleared`);
        } catch (err) {
            console.log(`Error clearing Peeps`);
            throw new Error(`Clearing database error`);
        }

        try {
            await Peeps.insertMany(testPeeps);
            console.log(`Peeps added to the collection`);
        } catch (err) {
            console.log(`Insertion error`)
            throw new Error(`Insertion error`)
        }

    })

    it(`should return all of the Peeps as an array`, async () => {
        const res = await testServer.get(`/`).send();

        expect(res).to.have.status(200);
        expect(res.body).to.be.an(`array`);
        expect(res.body.length).to.equal(testDataArray.length);
    });

    describe(`test /user route to create a peep `, () => {
        it(`should create a SuccessFul Post request`, async () => {
            let peep = {
                username: "amy",
                message: "This is a peep",
            };

            const res = await testServer.post(`/user`).send(peep);

            expect(res).to.have.status(200);
            expect(res.body).to.be.an(`object`);
        });
    });
});

