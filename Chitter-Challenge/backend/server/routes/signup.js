import express from 'express';
import User from '../models/user.model.js';

export const router = express.Router();

router.post('/', async (req, res) => {

    const user = req.body;
    console.log(">> user: " + user)
    const newUser = new User(user);
    console.log(">> newUser: " + newUser)

    await newUser.save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(error => {
            console.log("Error: " + error.message)
            res.status(400).send(error.message)
        });
});

export { router as signup }; 