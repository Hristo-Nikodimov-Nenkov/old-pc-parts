import mongoose from "mongoose";

import listingSchema from "./schemas/listing.js";
import instanceMethods from "./methods/listing.js";
import staticMethods from "./statics/listing.js";

for (const methodName in instanceMethods) {
   listingSchema.methods[methodName] = instanceMethods[methodName];
}

for (const methodName in staticMethods) {
   listingSchema.statics[methodName] = staticMethods[methodName];
}

const Listing = mongoose.model("Listing", listingSchema, "listings", false);
export default Listing;