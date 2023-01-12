import express from 'express';
import RockPaperScissors from '../src/RockPaperScissors.js';

export const router = express.Router();

router.post('/', (req, res) => {
    const choice = req.body.choice;
    const name = req.app.locals.name;
    req.app.locals.choice = choice;
    const rps = new RockPaperScissors();
    rps.setupPlayer(name, choice);
    rps.computerMove();
    const message = rps.play();

    res.render('winner', {
        name: name,
        choice: choice,
        computer: rps.computerChoice,
        message: message
    });
})

