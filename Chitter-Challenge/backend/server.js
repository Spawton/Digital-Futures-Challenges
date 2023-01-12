import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import { peeps } from './server/routes/getPeep.js';
import { signup } from './server/routes/signup.js'
import { login } from './server/routes/login.js';
import { addPeep } from './server/routes/addPeep.js';

dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
});

const app = express();

const connection = async () => {
    console.log(`Connecting to database at: ${process.env.DATABASE}`);
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log(`Connected to the database at: ${process.env.DATABASE}`);
    } catch (e) {
        console.log(`Database failed to connect: ${e.message}`);
    }
};

app.use(cors());
app.use(bodyParser.json());
app.use(`/`, peeps);
app.use(`/user`, addPeep);
app.use(`/signup`, signup);
app.use(`/login`, login);

connection();

const server = app.listen(process.env.PORT, () => {
    console.log(`App is listening at http://localhost:${process.env.PORT}`);
});

export default server;

