import mongoose from "mongoose";

import motherboardSchema from "./schemas/motherboard.js";
import instanceMethods from "./methods/motherboard.js";
import staticMethods from "./statics/motherboard.js";

for (const methodName in instanceMethods) {
   motherboardSchema.methods[methodName] = instanceMethods[methodName];
}

for (const methodName in staticMethods) {
   motherboardSchema.statics[methodName] = staticMethods[methodName];
}

const Motherboard = mongoose.model("Motherboard", motherboardSchema, "motherboards", false);
export default Motherboard;