import {Router} from "express";
import {listingController} from "../controllers/index.js";

const listingRouter = Router();

listingRouter.get("/:id?", listingController.getListing);
listingRouter.post("/", listingController.addListing);
listingRouter.put("/:id", listingController.updateListing);
listingRouter.delete("/:id", listingController.removeListing);

export default listingRouter;