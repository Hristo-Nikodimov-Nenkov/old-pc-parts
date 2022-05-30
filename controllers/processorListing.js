const getListing = (req, res) => {
   const listingId = req.params.id;
   const processorId = req.params.processorId;

   if (listingId) {
      res.status(200).json(`Listing with id: ${listingId} of processor with id: ${processorId}`);
      return;
   }

   res.status(200).json(`All listings of processor with id: ${processorId}`);
}

const createListing = (req, res) => {
   const processorId = req.params.processorId;

   res.status(201).json(`Added new listing of processor with id: ${processorId}`);
}

export default {
   getListing,
   createListing,
}