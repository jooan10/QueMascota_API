import "dotenv/config";
import "./database/connectdb.js";

import express from "express";
import authRouter from './routers/auth.route.js';


let app = express();

app.use(express.json());

app.use('/api/v1/auth',authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("📡📡📡 http://localhost:" + PORT));