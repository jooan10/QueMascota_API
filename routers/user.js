//Enrutador que contiene los servicios que llama el servidor.

import express from "express";
import { User } from "../models/User.js";

const router = express.Router();

//Servicio GET /Users
router.get('/', (req, res) => {
    User.find().then(resultado => {
        res.status(200).send({ ok: true, resultado: resultado });
       }).catch(error => {
       res.status(500).send({ok: false, error: "No se encontraron Users"});
    });
});

//Sercicio GET /Users/:id
router.get('/:id', (req, res) => {
    User.findById(req.params['id']).then(resultado=>{
        res.status(200).send({ok:true,resultado:resultado});
    }).catch(error=>{
        res.status(400).send({ok: false,error: "User no encontrado."});
    });
});

//Servicio POST /Users
router.post('/', (req, res) => {
    let nuevoUser = new User({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        edad: req.body.edad,
        jugadores: req.body.jugadores,
        tipo: req.body.tipo,
        precio: req.body.precio,
        imagen: req.body.imagen
    })

    nuevoUser.save().then(resultado => {
        res.status(200).send({ ok: true, resultado: resultado });
    }).catch(error => {
        res.status(400).send({ ok: false, error: "Error insertando User" })
    });
});

// Servicio PUT /Users/id
router.put('/:id', (req, res) => {
    let UserModificado ={
        nombre : req.body.nombre,
        descripcion : req.body.descripcion,
        edad : req.body.edad,
        numero : req.body.numero,
        tipo : req.body.tipo,
        precio : req.body.precio,
        imagen:req.body.imagen
    }
    User.findByIdAndUpdate(req.params['id'],UserModificado,{new:true}).then(resultado => {
        res.status(200).send({ ok: true, resultado: resultado });
    }).catch(error => {
        res.status(400).send({ ok: false, error: "Error modificando User" })
    });
});

// Servicio PUT /Users/ediciones/:idUser
router.put('/ediciones/:idUser', (req, res) => {
   let edicionModificada={
    nombreEdicion:req.body.nombreEdicion,
    anyo:req.body.anyo
   }

   User.findByIdAndUpdate(req.params['idUser'],{new:true}).then(resultado =>{
        resultado.ediciones.push(edicionModificada);
        resultado.save().then(resultado =>{
            res.status(200).send({ok:true,resultado:resultado});
        });
    }).catch(error =>{
        res.status(400).send({ok:false,error:"Error añadiendo la edición."})
    });
});

//Servicio DELETE
router.delete('/:id', (req, res) => {
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

export default router;