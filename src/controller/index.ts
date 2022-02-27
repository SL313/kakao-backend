import express from "express";
//import schoolController from "./school.controller";
import todoController from "./todo.controller";

const router = express.Router();

//router.use("/schools", schoolController);
router.use("/todos", todoController);

export default router;
