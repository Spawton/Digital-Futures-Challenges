import Users from "../server/models/user.model.js";
import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../server.js";
import testUser from "./testData/testusers.js";
const testDataArray = testUser.signup;
chai.use(chaiHttp);

describe(`Testing requests on the database`, () => {
    const testServer = chai.request(server).keepOpen();

    beforeEach(async () => {
        try {
            await Users.deleteMany();
            console.log(`Database cleared`);
        } catch (error) {
            console.log(`Error clearing`);
            throw new Error();
        }
        try {
            await Users.insertMany(testDataArray);
            console.log(`Database populated with test Peeps`);
        } catch (error) {
            console.log(`Error inserting`);
            // Terminate the test
            throw new Error();
        }
    });
    describe(`/signup create a new user`, () => {

        it(`should create a Successful Registration for User`, async () => {
            let signup = {
                username: "gamer123",
                name: "Isaac",
                email: "test1@email.com",
                password: "password",
            };

            const res = await testServer.post(`/signup`).send(signup);
            expect(res).to.have.status(200);
            expect(res.body).to.be.an(`object`);
        });
    });
});