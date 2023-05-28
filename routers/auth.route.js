import express from 'express';
import { login, register } from '../controllers/auth.controller.js';
import { body } from 'express-validator';
import { validationResultExpress } from '../middlewares/validationResultExpress.js';

import { User } from "../models/User.js";
import { Pet } from "../models/Pet.js";

const router = express.Router();

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




//Servicio GET /Users
router.get('/user/', (req, res) => {
    User.find().then(resultado => {
        res.status(200).send({ ok: true, resultado: resultado });
       }).catch(error => {
       res.status(500).send({ok: false, error: "No se encontraron Users"});
    });
});

//Sercicio GET /Users/:id
router.get('/user/:id', (req, res) => {
    User.findById(req.params['id']).then(resultado=>{
        res.status(200).send({ok:true,resultado:resultado});
    }).catch(error=>{
        res.status(400).send({ok: false,error: "User no encontrado."});
    });
});

//Servicio POST /Users
router.post('/user/', (req, res) => {
    let nuevoUser = new User({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        surname: req.body.surname,
        birthdate: req.body.birthdate,
        avatar: req.body.avatar,
        username: req.body.username,
        phone: req.body.phone,
        creationdate: req.body.creationdate,
        lastupdatedate: req.body.lastupdatedate,
        lat: req.body.lat,
        long: req.body.long
    })

    nuevoUser.save().then(resultado => {
        res.status(200).send({ ok: true, resultado: resultado });
    }).catch(error => {
        res.status(400).send({ ok: false, error: "Error insertando User" })
    });
});

// Servicio PUT /Users/id
router.put('/user/:id', (req, res) => {
    let UserModificado ={
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        surname: req.body.surname,
        birthdate: req.body.birthdate,
        avatar: req.body.avatar,
        username: req.body.username,
        phone: req.body.phone,
        creationdate: req.body.creationdate,
        lastupdatedate: req.body.lastupdatedate,
        lat: req.body.lat,
        long: req.body.long
    }
    User.findByIdAndUpdate(req.params['id'],UserModificado,{new:true}).then(resultado => {
        res.status(200).send({ ok: true, resultado: resultado });
    }).catch(error => {
        res.status(400).send({ ok: false, error: "Error modificando User" })
    });
});

//Servicio DELETE
router.delete('/user/:id', (req, res) => {
    User.findByIdAndRemove(req.params['id'])
        .then(resultado => {
            if (resultado)
                res.status(200).send({ ok: true, resultado: resultado });
            else
                res.status(400).send({ ok: false, error: "User no encontrado" });
        }).catch(error => {
            res.status(400).send({ ok: false, error: "Error borrando User" });
        })
});




//Servicio GET /Pets
router.get('/pet/', (req, res) => {
    Pet.find().then(resultado => {
        res.status(200).send({ ok: true, resultado: resultado });
       }).catch(error => {
       res.status(500).send({ok: false, error: "No se encontraron Pets"});
    });
});

//Sercicio GET /Pets/:id
router.get('/pet/:id', (req, res) => {
    Pet.findById(req.params['id']).then(resultado=>{
        res.status(200).send({ok:true,resultado:resultado});
    }).catch(error=>{
        res.status(400).send({ok: false,error: "Pet no encontrado."});
    });
});

//Servicio POST /Pets
router.post('/pet/', (req, res) => {
    let nuevoPet = new Pet({
        type: req.body.type,
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        creationdate: req.body.creationdate,
        lastupdatedate: req.body.lastupdatedate,
        description: req.body.description,
        images: req.body.images
    })

    nuevoPet.save().then(resultado => {
        res.status(200).send({ ok: true, resultado: resultado });
    }).catch(error => {
        res.status(400).send({ ok: false, error: "Error insertando Pet" })
    });
});

// Servicio PUT /Pets/id
router.put('/pet/:id', (req, res) => {
    let PetModificado = {
        type: req.body.type,
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        creationdate: req.body.creationdate,
        lastupdatedate: req.body.lastupdatedate,
        description: req.body.description,
        images: req.body.images
    }
    Pet.findByIdAndUpdate(req.params['id'],PetModificado,{new:true}).then(resultado => {
        res.status(200).send({ ok: true, resultado: resultado });
    }).catch(error => {
        res.status(400).send({ ok: false, error: "Error modificando Pet" })
    });
});

//Servicio DELETE
router.delete('/pet/:id', (req, res) => {
    Pet.findByIdAndRemove(req.params['id'])
        .then(resultado => {
            if (resultado)
                res.status(200).send({ ok: true, resultado: resultado });
            else
                res.status(400).send({ ok: false, error: "Pet no encontrado" });
        }).catch(error => {
            res.status(400).send({ ok: false, error: "Error borrando Pet" });
        })
});

export default router;