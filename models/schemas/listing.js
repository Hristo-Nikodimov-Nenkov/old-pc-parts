import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
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