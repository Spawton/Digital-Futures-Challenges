import express from 'express';
// const Battle = require('../src/battle.js');


export const router = express.Router();

router.post('/', (req, res) => {
    const name = req.body.player;
    console.log(name);
    req.app.locals.name = name;
    res.redirect("/game");
});

router.get('/', (req, res) => {
    const player = req.app.locals.name;
    res.render("game", {
        name: player,
    });
})


