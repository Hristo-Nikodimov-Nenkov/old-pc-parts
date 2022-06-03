export const getCreateModel = (partId, model) => {
   const {
      price,
      shipping,
      includesTaxes,
      link
   } = model;

   return {
      partId,
      price,
      shipping,
      includesTaxes,
      link
   }
}

export const getUpdateModel = (model) => {
   const {
      partId,
      listingId,
      price,
      shipping,
      includesTaxes,
      link
   } = model;

   return {
      partId,
      listingId,
      price,
      shipping,
      includesTaxes,
      link
   }
}

export const getRemoveModel = (model) => {
   const {
      userId,
      partId,
      listingId
   } = model;

   return {
      userId,
      partId,
      listingId
   }
}

export const getServiceModel = (dbModel) => {
   const {
      _id,
      partId,
      price,
      shipping,
      includesTaxes,
      link
   } = dbModel;

   return {
      id: _id,
      partId,
      price,
      shipping,
      includesTaxes,
      link
   }
}

export const getViewModel = (dbModel) => {
   const viewModel = getServiceModel(dbModel);
   delete viewModel.id;

   return viewModel
}

const listingMapper = {
   getCreateModel,
   getUpdateModel,
   getRemoveModel,
   getServiceModel,
   getViewModel
}

export default listingMapper;