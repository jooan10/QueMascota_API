import express from "express";
import { User } from "../models/User.js";

const router = express.Router();

//Servicio GET /Users
router.get('/', (req, res) => {
    User.find().then(resultado => {
        res.status(200).send({ ok: true, resultado: resultado });
       }).catch(error => {
       res.status(500).send({ ok: false, error: "No se encontraron usuarios", error });
    });
});

//Sercicio GET /Users/:id
router.get('/:id', (req, res) => {
    User.findById(req.params['id']).then(resultado=>{
        res.status(200).send({ ok:true,resultado:resultado });
    }).catch(error=>{
        res.status(400).send({ ok: false,error: "Usuario no encontrado.", error });
    });
});

// Servicio PUT /Users/id
router.put('/:id', (req, res) => {
    let UserModificado ={
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
    }
    User.findByIdAndUpdate(req.params['id'],UserModificado,{new:true}).then(resultado => {
        res.status(200).send({ ok: true, resultado: resultado });
    }).catch(error => {
        res.status(400).send({ ok: false, error: "Error modificando usuario", error })
    });
});

//Servicio DELETE
router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params['id'])
        .then(resultado => {
            if (resultado)
                res.status(200).send({ ok: true, resultado: resultado });
            else
                res.status(400).send({ ok: false, error: "Usuario no encontrado", error });
        }).catch(error => {
            res.status(400).send({ ok: false, error: "Error borrando usuario", error });
        })
});

export default router;