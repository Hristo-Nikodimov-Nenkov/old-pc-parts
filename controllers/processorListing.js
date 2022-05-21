export const getListing = (req, res) => {
   const processorId = req.params.processorId;
   const listingId = req.params.id;

   if (listingId) {
      res.status(200).json(`Listing with id: ${listingId} of processor with id: ${processorId}.`);
      return;
   }

   res.status(200).json(`All listings of processor with id: ${processorId}.`);
}

export const addListing = (req, res) => {
   const processorId = req.params.processorId;

   res.status(201).json(`Added listing of processor with id: ${processorId}.`);
}

export const updateListing = (req, res) => {
   const processorId = req.params.processorId;
   const listingId = req.params.id;

   res.status(200).json(`Updated listing with id: ${listingId} of processor with id: ${processorId}.`);
}

export const removeListing = (req, res) => {
   const processorId = req.params.processorId;
   const listingId = req.params.id;

   res.status(200).json(`Removed listing with id: ${listingId} of processor with id: ${processorId}.`);
}

const processorListingController = {
   getListing,
   addListing,
   updateListing,
   removeListing
}

export default processorListingController;