import motherboards from "./motherboards.js";
import Motherboard from "../../../../models/Motherboard.js";
import Processor from "../../../../models/Processor.js";

const seedMotherboards = async () => {
   for (const mb of motherboards) {
      const motherboard = new Motherboard(mb.motherboard);

      for (const cpu of mb.cpuList) {
         const processor = await Processor.findOne({modelNumber: cpu.modelNumber}).exec();

         if (!processor) {
            console.log(`Processor with modelNumber:${cpu.modelNumber} NOT FOUND!`);
            continue;
         }

         if (!motherboard.cpuFamilies.includes(processor.family)) {
            motherboard.cpuFamilies.push(processor.family);
         }

         motherboard.processors.push({
            processor,
            revision: cpu.revision,
            biosVersion: cpu.biosVersion
         })
      }

      try {
         await motherboard.save();
         console.log("Motherboards seeded.");
      } catch (err) {
         console.log(err.message);
      }
   }
}

export default seedMotherboards;