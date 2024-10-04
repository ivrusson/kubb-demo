import { berryFirmnessSummarySchema } from "./berryFirmnessSummarySchema.gen";
import { itemSummarySchema } from "./itemSummarySchema.gen";
import { typeSummarySchema } from "./typeSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const berryDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "growth_time": z.number().int(), "max_harvest": z.number().int(), "natural_gift_power": z.number().int(), "size": z.number().int(), "smoothness": z.number().int(), "soil_dryness": z.number().int(), "firmness": z.lazy(() => berryFirmnessSummarySchema), "flavors": z.array(z.object({ "potency": z.number().int(), "flavor": z.object({ "name": z.string().describe("The name of the flavor").optional(), "url": z.string().url().describe("The URL to get more information about the flavor").optional() }) })), "item": z.lazy(() => itemSummarySchema), "natural_gift_type": z.lazy(() => typeSummarySchema) });
export type BerryDetailSchema = z.infer<typeof berryDetailSchema>;