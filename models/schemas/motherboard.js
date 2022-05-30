import mongoose from "mongoose";

const motherboardSchema = new mongoose.Schema({
   type: {
      type: String,
      required: true
   },
   manufacturer: {
      type: String,
      required: true,
   },
   model: {
      type: String,
      required: true,
      unique: true
   },
   sockets: [String],
   cpuManufacturer: {
      type: String,
      required: true
   },
   cpuFamilies: [],
   processors: [
      {
         processor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Processor",
            required: true
         },
         revision: {
            type: String,
            required: true,
         },
         biosVersion: {
            type: String,
            required: true
         }
      }
   ],
   specifications: mongoose.Schema.Types.Mixed
})

export default motherboardSchema;