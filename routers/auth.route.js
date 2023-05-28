const express = require("express");

const  login = require('../controllers/auth.controller.js');
const  register = require('../controllers/auth.controller.js');
const  body  = require('express-validator');
const  validationResultExpress  = require('../middlewares/validationResultExpress.js');

let router = express.Router();

router.get('/prueba', (req, res) => {
    res.status(200).send({ ok: true, resultado: "PORFA FUNCIONA!!" });
});

router.post("/register",[
    body('email','Formato de email incorrecto').trim().isEmail().normalizeEmail(),
    body('password','Formato de password incorrecto').trim().isLength({min: 8})],
    validationResultExpress,
    register
);

router.post("/login",[
    body('email','Formato de email incorrecto').trim().isEmail().normalizeEmail(),
    body('password','Formato de password incorrecto').trim().isLength({min: 8})],
    validationResultExpress,
    login
);


module.exports = router;