import {Listing} from "../models/index.js";
import {getViewModel} from "../mappers/listing.js";

export const create = async (model) => {
   try {
      const listing = new Listing(model);
      await listing.save();

      return getViewModel(listing);
   } catch (err) {
      console.log(err.message);
   }
}

const listingService = {}
export default listingService;