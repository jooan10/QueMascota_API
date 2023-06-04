import express from 'express';
import { login, register } from '../controllers/auth.controller.js';
import { body } from 'express-validator';
import { validationResultExpress } from '../middlewares/validationResultExpress.js';
import { User } from "../models/User.js";

const router = express.Router();

router.get('/prueba', (req, res) => {
    res.status(200).send({ ok: true, resultado: "PORFA FUNCIONA!!" });
});

router.post('/register', (req, res) => {
    res.status(500).send({result:req.body})

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
        long: req.body.long
    })

    nuevoUser.save().then(resultado => {
        res.status(200).send({ ok: true, resultado: resultado });
    }).catch(error => {
        res.status(400).send({ ok: false, error: "Error insertando User" })
    });
});

/*
router.post("/register",[
    body('email','Formato de email incorrecto').trim().isEmail().normalizeEmail(),
    body('password','Formato de password incorrecto').trim().isLength({min: 8})],
    validationResultExpress,
    register
);
*/

router.post("/login",[
    body('email','Formato de email incorrecto').trim().isEmail().normalizeEmail(),
    body('password','Formato de password incorrecto').trim().isLength({min: 8})],
    validationResultExpress,
    login
);


export default router;