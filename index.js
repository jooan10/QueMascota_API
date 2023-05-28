require("dotenv/config");
require("./database/connectdb.js");

const express = require("express");
const authRouter = require('./routers/auth.route.js');

const app = express();

app.use(express.json());

app.use('/api/v1/auth', authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("📡📡📡 http://localhost:" + PORT));
