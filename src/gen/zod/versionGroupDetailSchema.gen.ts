import { generationSummarySchema } from "./generationSummarySchema.gen";
import { versionSummarySchema } from "./versionSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const versionGroupDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "order": z.number().int().optional().nullable(), "generation": z.lazy(() => generationSummarySchema), "move_learn_methods": z.array(z.object({ "name": z.string(), "url": z.string().url() })), "pokedexes": z.array(z.object({ "name": z.string(), "url": z.string().url() })), "regions": z.array(z.object({ "name": z.string(), "url": z.string().url() })), "versions": z.array(z.lazy(() => versionSummarySchema)) });
export type VersionGroupDetailSchema = z.infer<typeof versionGroupDetailSchema>;