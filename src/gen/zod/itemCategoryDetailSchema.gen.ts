import { itemSummarySchema } from "./itemSummarySchema.gen";
import { itemCategoryNameSchema } from "./itemCategoryNameSchema.gen";
import { itemPocketSummarySchema } from "./itemPocketSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const itemCategoryDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "items": z.array(z.lazy(() => itemSummarySchema)), "names": z.array(z.lazy(() => itemCategoryNameSchema)), "pocket": z.lazy(() => itemPocketSummarySchema) });
export type ItemCategoryDetailSchema = z.infer<typeof itemCategoryDetailSchema>;