import { z } from "@/utils/zod.ts";
import { machineDetailSchema } from "./machineDetailSchema.gen";


export const machineRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type MachineRetrievePathParamsSchema = z.infer<typeof machineRetrievePathParamsSchema>;

 export const machineRetrieve200Schema = z.lazy(() => machineDetailSchema);
export type MachineRetrieve200Schema = z.infer<typeof machineRetrieve200Schema>;

 export const machineRetrieveQueryResponseSchema = z.lazy(() => machineDetailSchema);
export type MachineRetrieveQueryResponseSchema = z.infer<typeof machineRetrieveQueryResponseSchema>;