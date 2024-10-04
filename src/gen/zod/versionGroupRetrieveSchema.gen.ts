import { z } from "@/utils/zod.ts";
import { versionGroupDetailSchema } from "./versionGroupDetailSchema.gen";


export const versionGroupRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type VersionGroupRetrievePathParamsSchema = z.infer<typeof versionGroupRetrievePathParamsSchema>;

 export const versionGroupRetrieve200Schema = z.lazy(() => versionGroupDetailSchema);
export type VersionGroupRetrieve200Schema = z.infer<typeof versionGroupRetrieve200Schema>;

 export const versionGroupRetrieveQueryResponseSchema = z.lazy(() => versionGroupDetailSchema);
export type VersionGroupRetrieveQueryResponseSchema = z.infer<typeof versionGroupRetrieveQueryResponseSchema>;