import {Router} from "express";
import {processorListingController} from "../controllers/index.js";

const router = Router({mergeParams: true});

router.get("/:id?", processorListingController.getListing);
router.post("/", processorListingController.createListing);

export default router;