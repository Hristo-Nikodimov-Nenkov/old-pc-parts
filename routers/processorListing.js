import {Router} from "express";
import {processorListingController} from "../controllers/index.js";

const processorListingRouter = Router({mergeParams: true});

processorListingRouter.get("/:id?", processorListingController.getListing);
processorListingRouter.post("/", processorListingController.addListing);
processorListingRouter.put("/:id", processorListingController.updateListing);
processorListingRouter.delete("/:id", processorListingController.removeListing);

export default processorListingRouter;