export const getListing = (req, res) => {
   const id = req.params.id;

   if (id) {
      res.status(200).json(`Listing with id: ${id}.`);
      return;
   }

   res.status(200).json("All listings.");
}

export const addListing = (req, res) => {
   res.status(201).json("Listing added.");
}

export const updateListing = (req, res) => {
   const id = req.params.id;

   res.status(200).json(`Listing with id: ${id} updated.`);
}

export const removeListing = (req, res) => {
   const id = req.params.id;

   res.status(200).json(`Listing with id: ${id} removed.`);
}

const listingController = {
   getListing,
   addListing,
   updateListing,
   removeListing
}

export default listingController;