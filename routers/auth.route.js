import express from 'express';
import { login, register } from '../controllers/auth.controller.js';
import { body } from 'express-validator';
import { validationResultExpress } from '../middlewares/validationResultExpress.js';
import { User } from "../models/User.js";

const router = express.Router();

router.post('/register', (req, res) => {
    let nuevoUser = new User({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        surname: req.body.surname,
        birthdate: req.body.birthdate,
        avatar: req.body.avatar,
        username: req.body.username,
        phone: req.body.phone,
        lat: req.body.lat,
        long: req.body.long,
        likes: req.body.likes,
        dislikes: req.body.dislikes
    })

    nuevoUser.save().then(resultado => {
        res.status(200).send({ ok: true, resultado: resultado });
    }).catch(error => {
        res.status(400).send({ ok: false, error: "Error insertando User"+ error });
    });
});

router.post("/login",[
    body('email','Formato de email incorrecto').trim().isEmail().normalizeEmail(),
    body('password','Formato de password incorrecto').trim().isLength({min: 8})],
    validationResultExpress,
    login
);

export default router;