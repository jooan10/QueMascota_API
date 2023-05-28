import express from "express";
import { Pet } from "../models/Pet.js";

const router = express.Router();

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