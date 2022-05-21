export {default as accountRouter} from "./account.js";
export {default as processorRouter} from "./processor.js";
export {default as listingRouter} from "./listing.js";

import accountRouter from "./account.js";
import processorRouter from "./processor.js";
import listingRouter from "./listing.js";

export default {
   accountRouter,
   listingRouter,
   processorRouter
}