import { versionNameSchema } from "./versionNameSchema.gen";
import { versionGroupSummarySchema } from "./versionGroupSummarySchema.gen";
import { z } from "@/utils/zod.ts";

 /**
 * @description Should have a link to Version Group info but the Circular\ndependency and compilation order fight eachother and I\'m\nnot sure how to add anything other than a hyperlink
 */
export const versionDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "names": z.array(z.lazy(() => versionNameSchema)), "version_group": z.lazy(() => versionGroupSummarySchema) }).describe("Should have a link to Version Group info but the Circular\ndependency and compilation order fight eachother and I'm\nnot sure how to add anything other than a hyperlink");
export type VersionDetailSchema = z.infer<typeof versionDetailSchema>;