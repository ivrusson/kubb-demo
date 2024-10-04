import { locationSummarySchema } from "./locationSummarySchema.gen";
import { generationSummarySchema } from "./generationSummarySchema.gen";
import { regionNameSchema } from "./regionNameSchema.gen";
import { pokedexSummarySchema } from "./pokedexSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const regionDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "locations": z.array(z.lazy(() => locationSummarySchema)), "main_generation": z.lazy(() => generationSummarySchema), "names": z.array(z.lazy(() => regionNameSchema)), "pokedexes": z.array(z.lazy(() => pokedexSummarySchema)), "version_groups": z.array(z.object({ "name": z.string(), "url": z.string().url() })) });
export type RegionDetailSchema = z.infer<typeof regionDetailSchema>;