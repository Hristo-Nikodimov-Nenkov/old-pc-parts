import {Router} from "express";
import {processorController} from "../controllers/index.js";

const processorRouter = Router();

processorRouter.get("/:id?", processorController.getProcessor);
processorRouter.post("/", processorController.addProcessor);
processorRouter.put("/:id", processorController.updateProcessor);
processorRouter.delete("/:id", processorController.removeProcessor);

export default processorRouter;