import mongoose from "mongoose";

try {
    await mongoose.connect('mongodb://127.0.0.1:27017/quemascota', {useNewUrlParser: true});
    console.log("Connect DB ok 👋");
} catch (error) {
    console.log("Error de conexión a mongodb:" + error);
}