import mongoose from "mongoose";

try {
    //Con esta URI se podria levantar en local
    await mongoose.connect('mongodb://localhost:27017/quemascota');
    //Y con esta segunda seria para levantarlo a través del VPS
    //await mongoose.connect('mongodb://mymongodb/quemascota');
    console.log("Connect DB ok 👋");
} catch (error) {
    console.log("Error de conexión a mongodb:" + error);
}