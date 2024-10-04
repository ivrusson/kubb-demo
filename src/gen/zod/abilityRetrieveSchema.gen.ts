import { z } from "@/utils/zod.ts";
import { abilityDetailSchema } from "./abilityDetailSchema.gen";


export const abilityRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type AbilityRetrievePathParamsSchema = z.infer<typeof abilityRetrievePathParamsSchema>;

 export const abilityRetrieve200Schema = z.lazy(() => abilityDetailSchema);
export type AbilityRetrieve200Schema = z.infer<typeof abilityRetrieve200Schema>;

 export const abilityRetrieveQueryResponseSchema = z.lazy(() => abilityDetailSchema);
export type AbilityRetrieveQueryResponseSchema = z.infer<typeof abilityRetrieveQueryResponseSchema>;