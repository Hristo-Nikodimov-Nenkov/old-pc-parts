import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
   part: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "onModel",
      required: true
   },
   price: {
      type: Number,
      required: true
   },
   shipping: {
      type: Number,
      required: true,
      default: 0
   },
   includesTaxes: {
      type: Boolean,
      required: true,
      default: false
   },
   link: {
      type: String,
      required: true
   }
});

export default listingSchema;