//Enrutador que contiene los servicios que llama el servidor.

import express from "express";
import { Pet } from "../models/Pet.js";

const router = express.Router();

//Servicio GET /Pets
router.get('/', (req, res) => {
    Pet.find().then(resultado => {
        res.status(200).send({ ok: true, resultado: resultado });
       }).catch(error => {
       res.status(500).send({ok: false, error: "No se encontraron Pets"});
    });
});

//Sercicio GET /Pets/:id
router.get('/:id', (req, res) => {
    Pet.findById(req.params['id']).then(resultado=>{
        res.status(200).send({ok:true,resultado:resultado});
    }).catch(error=>{
        res.status(400).send({ok: false,error: "Pet no encontrado."});
    });
});

//Servicio POST /Pets
router.post('/', (req, res) => {
    let nuevoPet = new Pet({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        edad: req.body.edad,
        jugadores: req.body.jugadores,
        tipo: req.body.tipo,
        precio: req.body.precio,
        imagen: req.body.imagen
    })

    nuevoPet.save().then(resultado => {
        res.status(200).send({ ok: true, resultado: resultado });
    }).catch(error => {
        res.status(400).send({ ok: false, error: "Error insertando Pet" })
    });
});

// Servicio PUT /Pets/id
router.put('/:id', (req, res) => {
    let PetModificado ={
        nombre : req.body.nombre,
        descripcion : req.body.descripcion,
        edad : req.body.edad,
        numero : req.body.numero,
        tipo : req.body.tipo,
        precio : req.body.precio,
        imagen:req.body.imagen
    }
    Pet.findByIdAndUpdate(req.params['id'],PetModificado,{new:true}).then(resultado => {
        res.status(200).send({ ok: true, resultado: resultado });
    }).catch(error => {
        res.status(400).send({ ok: false, error: "Error modificando Pet" })
    });
});

// Servicio PUT /Pets/ediciones/:idPet
router.put('/ediciones/:idPet', (req, res) => {
   let edicionModificada={
    nombreEdicion:req.body.nombreEdicion,
    anyo:req.body.anyo
   }

   Pet.findByIdAndUpdate(req.params['idPet'],{new:true}).then(resultado =>{
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