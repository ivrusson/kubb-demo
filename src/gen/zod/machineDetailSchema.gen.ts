import { itemSummarySchema } from "./itemSummarySchema.gen";
import { versionGroupSummarySchema } from "./versionGroupSummarySchema.gen";
import { moveSummarySchema } from "./moveSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const machineDetailSchema = z.object({ "id": z.number().int(), "item": z.lazy(() => itemSummarySchema), "version_group": z.lazy(() => versionGroupSummarySchema), "move": z.lazy(() => moveSummarySchema) });
export type MachineDetailSchema = z.infer<typeof machineDetailSchema>;