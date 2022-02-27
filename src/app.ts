import express from "express";
import { createServer, Server } from "http";
import controller from "./controller";
import bodyParser from "body-parser";
import database from "./config/database";
import cors from "cors";

const app = express();

app.use(cors());

database.sync({
  alter: true,
});
app.use(bodyParser.json());
app.use(controller);

const server = createServer(app);
server.listen(process.env.PORT || 5000);
