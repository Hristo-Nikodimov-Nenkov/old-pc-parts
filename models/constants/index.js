export {default as account} from "./account.js";
export {default as listing} from "./listing.js";
export {default as processor} from "./processor.js";

import account from "./account.js";
import listing from "./listing.js";
import processor from "./processor.js";

const modelConstants = {
   account,
   listing,
   processor
}

export default modelConstants;