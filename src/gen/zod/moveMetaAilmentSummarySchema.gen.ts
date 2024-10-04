import { z } from "@/utils/zod.ts";


export const moveMetaAilmentSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type MoveMetaAilmentSummarySchema = z.infer<typeof moveMetaAilmentSummarySchema>;