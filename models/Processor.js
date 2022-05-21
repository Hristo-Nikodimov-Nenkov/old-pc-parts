import mongoose from "mongoose";

import processorSchema from "./schemas/processor.js";
import instanceMethods from "./methods/processor.js";
import staticMethods from "./statics/processor.js";

for (const methodName in instanceMethods) {
   processorSchema.methods[methodName] = instanceMethods[methodName];
}

for (const methodName in staticMethods) {
   processorSchema.statics[methodName] = staticMethods[methodName];
}

const Processor = mongoose.model("Processor", processorSchema, "processors", false);
export default Processor;