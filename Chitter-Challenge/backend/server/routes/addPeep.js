import express from 'express';
import Peep from '../models/peeps.model.js';

const router = express.Router();


router.route(`/`)
    .post((req, res) => {

        const newPeep = new Peep(req.body);
        newPeep.save(err => {
            if (err) {
                res.send(err);
            }
            else {
                res.send({ message: `Peep Uploaded` });
            }
        });
    })

    .get((req, res) => {
        Peep.find({}, (error, peeps) => {
            console.log(peeps);
            error ? res.status(404).json({ error: 'Peeps not found' }) : res.json(peeps);
        })
    })


export { router as addPeep }; 