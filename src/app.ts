import express from "express";
import bodyParse from "body-parser";
import cors from "cors";
//require("./models/seeds");

//const { responseError } = require("./middlewares/errors");

const app = express();
//const routes = require("./routes");

app.use(cors());
app.use(bodyParse.json());

//app.use(responseError);

export default app;
