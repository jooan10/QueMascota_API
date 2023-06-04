import "dotenv/config";
import "./database/connectdb.js";

import express from "express";
import cors from "cors";
import authRouter from './routers/auth.route.js';
import users from './routers/user.route.js';
import pets from './routers/pet.route.js';


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', users);
app.use('/api/v1/pets', pets);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("📡📡📡 http://localhost:" + PORT));
