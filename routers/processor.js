import {Router} from "express";
import {processorController} from "../controllers/index.js";
import processorListingRouter from "./processorListing.js";

const processorRouter = Router({mergeParams: true});

processorRouter.get("/:id?", processorController.getProcessor);
processorRouter.post("/", processorController.addProcessor);
processorRouter.put("/:id", processorController.updateProcessor);
processorRouter.delete("/:id", processorController.removeProcessor);

processorRouter.use("/:processorId/listings", processorListingRouter);

export default processorRouter;