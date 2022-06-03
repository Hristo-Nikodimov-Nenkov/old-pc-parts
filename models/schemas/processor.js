import mongoose from "mongoose";

const processorSchema = new mongoose.Schema({
   manufacturer: {
      type: String,
      required: true,
      trim: true,
   },
   family: {
      type: String,
      required: true,
      trim: true,
   },
   model: {
      type: String,
      required: true,
      trim: true,
   },
   modelNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true
   },
   image: {
      type: String,
   },
   specifications: mongoose.Schema.Types.Mixed
})

export default processorSchema;