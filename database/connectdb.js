const mongoose = require('mongoose');

try {
    await mongoose.connect('mongodb://mymongodb/quemascota', {useNewUrlParser: true});
    console.log("Connect DB ok 👋");
} catch (error) {
    console.log("Error de conexión a mongodb:" + error);
}