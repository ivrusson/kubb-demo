import { contestTypeSummarySchema } from "./contestTypeSummarySchema.gen";
import { berryFlavorNameSchema } from "./berryFlavorNameSchema.gen";
import { z } from "@/utils/zod.ts";


export const berryFlavorDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "berries": z.array(z.object({ "potency": z.number().int(), "berry": z.object({ "name": z.string().describe("The name of the berry").optional(), "url": z.string().url().describe("The URL to get more information about the berry").optional() }) })), "contest_type": z.lazy(() => contestTypeSummarySchema), "names": z.array(z.lazy(() => berryFlavorNameSchema)) });
export type BerryFlavorDetailSchema = z.infer<typeof berryFlavorDetailSchema>;