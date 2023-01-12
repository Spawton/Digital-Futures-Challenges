import express from 'express';
import dotenv from 'dotenv';

import { router as gameRouter } from './routes/game.js';
import { router as indexRouter } from './routes/index.js';
import { router as winnerRouter } from './routes/winner.js';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use(`/game`, gameRouter);
app.use(`/winner`, winnerRouter);

const server = app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
});

export default server;