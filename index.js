import "dotenv/config";
import "./database/connectdb.js";

import express from "express";
import authRouter from './routers/auth.route.js';
import pet from './routers/pet.route.js';

let app = express();

app.use(express.json());


app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      let method = req.body._method;
      delete req.body._method;
      return method;
    } 
}));

app.use('/api/v1/auth', authRouter);
app.use('/', pet)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("📡📡📡 http://localhost:" + PORT));