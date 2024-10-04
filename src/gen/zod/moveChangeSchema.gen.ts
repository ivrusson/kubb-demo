import { typeSummarySchema } from "./typeSummarySchema.gen";
import { versionGroupSummarySchema } from "./versionGroupSummarySchema.gen";
import { z } from "@/utils/zod.ts";


export const moveChangeSchema = z.object({ "accuracy": z.number().int().optional().nullable(), "power": z.number().int().optional().nullable(), "pp": z.number().int().optional().nullable(), "effect_chance": z.number().int(), "effect_entries": z.array(z.object({ "effect": z.string(), "short_effect": z.string(), "language": z.object({ "name": z.string(), "url": z.string().url() }) })), "type": z.lazy(() => typeSummarySchema), "version_group": z.lazy(() => versionGroupSummarySchema) });
export type MoveChangeSchema = z.infer<typeof moveChangeSchema>;