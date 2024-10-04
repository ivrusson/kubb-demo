import { itemCategorySummarySchema } from "./itemCategorySummarySchema.gen";
import { itemPocketNameSchema } from "./itemPocketNameSchema.gen";
import { z } from "@/utils/zod.ts";


export const itemPocketDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "categories": z.array(z.lazy(() => itemCategorySummarySchema)), "names": z.array(z.lazy(() => itemPocketNameSchema)) });
export type ItemPocketDetailSchema = z.infer<typeof itemPocketDetailSchema>;