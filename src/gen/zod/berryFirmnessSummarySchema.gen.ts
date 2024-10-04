import { z } from "@/utils/zod.ts";


export const berryFirmnessSummarySchema = z.object({ "name": z.string().max(100), "url": z.string().url() });
export type BerryFirmnessSummarySchema = z.infer<typeof berryFirmnessSummarySchema>;