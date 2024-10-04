import { z } from "@/utils/zod.ts";
import { superContestEffectDetailSchema } from "./superContestEffectDetailSchema.gen";


export const superContestEffectRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type SuperContestEffectRetrievePathParamsSchema = z.infer<typeof superContestEffectRetrievePathParamsSchema>;

 export const superContestEffectRetrieve200Schema = z.lazy(() => superContestEffectDetailSchema);
export type SuperContestEffectRetrieve200Schema = z.infer<typeof superContestEffectRetrieve200Schema>;

 export const superContestEffectRetrieveQueryResponseSchema = z.lazy(() => superContestEffectDetailSchema);
export type SuperContestEffectRetrieveQueryResponseSchema = z.infer<typeof superContestEffectRetrieveQueryResponseSchema>;