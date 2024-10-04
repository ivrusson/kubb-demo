import { z } from "@/utils/zod.ts";
import { growthRateDetailSchema } from "./growthRateDetailSchema.gen";


export const growthRateRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type GrowthRateRetrievePathParamsSchema = z.infer<typeof growthRateRetrievePathParamsSchema>;

 export const growthRateRetrieve200Schema = z.lazy(() => growthRateDetailSchema);
export type GrowthRateRetrieve200Schema = z.infer<typeof growthRateRetrieve200Schema>;

 export const growthRateRetrieveQueryResponseSchema = z.lazy(() => growthRateDetailSchema);
export type GrowthRateRetrieveQueryResponseSchema = z.infer<typeof growthRateRetrieveQueryResponseSchema>;