import express from 'express';
import Peep from '../models/peeps.model.js';

const router = express.Router();


router.route("/")

    .get((req, res) => {
        Peep.find({}, (error, peeps) => {
            console.log(peeps);
            error ? res.status(404).json({ error: 'Peeps not found' }) : res.json(peeps);
        })

    })

export { router as peeps };  