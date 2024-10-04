import { z } from "@/utils/zod.ts";


export const berryFlavorSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type BerryFlavorSummarySchema = z.infer<typeof berryFlavorSummarySchema>;