export const getBangForBuck = (item) => {
   const {price, shipping, includesTaxes, taxesMultiplier, coreCount, frequency} = item;

   const bang = coreCount * frequency;
   const totalPrice = (price + shipping);
   const totalPriceWithTaxes = totalPrice * includesTaxes ? taxesMultiplier : 1;

   return bang / totalPriceWithTaxes;
}

export const getBangForBuckEfficiency = (item) => {

   return getBangForBuck(item) / item.tdp;
}

export const orderByBangForBuck = ((a, b) => getBangForBuck(a) - getBangForBuck(b));
export const orderByBangForBuckEfficiency = ((a, b) => getBangForBuckEfficiency(a) - getBangForBuckEfficiency(b));

const sortingService = {
   getBangForBuck,
   getBangForBuckEfficiency,
   orderByBangForBuck,
   orderByBangForBuckEfficiency
}

export default sortingService;