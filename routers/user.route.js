import express from "express";
import { User } from "../models/User.js";

const router = express.Router();

//Servicio para descargar APK
router.get('/download', function(req, res) {
    try {
      const rootDir = process.cwd();
      const filePath = rootDir + '/apk/QueMascota.apk';
      res.download(filePath);
    } catch (error) {
      console.error('Error en la descarga del archivo:', error);
      res.status(500).send('Error en la descarga del archivo');
    }
});
  

//Servicio GET /Users
router.get('/', (req, res) => {
    User.find().then(usuarios => {
        res.status(200).send({usuarios});
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
        name: req.body.name,
        surname: req.body.surname,
        birthdate: req.body.birthdate,
        avatar: req.body.avatar,
        username: req.body.username,
        phone: req.body.phone,
        pets: req.body.pets,
        likes: req.body.likes,
        dislikes: req.body.dislikes
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

export default router