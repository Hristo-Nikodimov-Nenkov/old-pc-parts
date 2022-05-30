import processors from "./processors.js";
import Processor from "../../../../models/Processor.js";

const seedProcessors = async () => {
   for (const cpu of processors) {
      let dbProcessor = await Processor.findOne({modelNumber: cpu.modelNumber}).exec();
      if (!dbProcessor) {
         dbProcessor = new Processor(cpu);
      } else {
         dbProcessor.update(cpu);
      }

      try {
         await dbProcessor.save();
      } catch (err) {
         console.log(p.modelNumber);
         console.log(err.message);
      }
   }

   console.log("Processors seeded.");
}

export default seedProcessors;