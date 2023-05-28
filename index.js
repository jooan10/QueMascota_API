import "dotenv/config";
import "./database/connectdb.js";

import express from "express";
import authRouter from './routers/auth.route.js';
import user from './routers/user.route.js';
import pet from './routers/pet.route.js';


const app = express();

app.use(express.json());

app.use('/api/v1/auth',authRouter);
app.use('/user',user);
app.use('/pet',pet);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("📡📡📡 http://localhost:" + PORT));