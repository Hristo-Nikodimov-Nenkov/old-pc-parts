export {default as account} from "./account.js";
export {default as processor} from "./processor.js";
export {default as motherboard } from "./motherboard.js";
export {default as listing} from "./listing.js";

import account from "./account.js";
import processor from "./processor.js";
import listing from "./listing.js";
import motherboard from "./motherboard.js";

const modelConstants = {
   account,
   processor,
   motherboard,
   listing
}

export default modelConstants;