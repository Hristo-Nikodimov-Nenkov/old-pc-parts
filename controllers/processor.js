export const getProcessor = (req, res) => {
   const id = req.params.id;
   if (id) {
      res.status(200).json(`Processor with id: ${id}.`);
      return;
   }

   res.status(200).json("All processors");
}

export const addProcessor = (req, res) => {
   res.status(201).json("Processor added.");
}

export const updateProcessor = (req, res) => {
   const id = req.params.id;
   res.status(200).json(`Processor with id: ${id} updated.`);
}

export const removeProcessor = (req, res) => {
   const id = req.params.id;
   res.status(200).json(`Processor with id: ${id} removed.`);
}


const processorController = {
   getProcessor,
   addProcessor,
   updateProcessor,
   removeProcessor
}

export default processorController;