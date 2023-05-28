require("dotenv/config");
require("./database/connectdb.js");

const express = require("express");
const authRouter = require('./routers/auth.route.js');
const users = require('./routers/user.route.js');
const pets = require('./routers/pet.route.js');

let app = express();

app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', users);
app.use('/api/v1/pet', pets);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("📡📡📡 http://localhost:" + PORT));
