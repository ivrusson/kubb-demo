import { z } from "@/utils/zod.ts";
import { versionDetailSchema } from "./versionDetailSchema.gen";


export const versionRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type VersionRetrievePathParamsSchema = z.infer<typeof versionRetrievePathParamsSchema>;

 export const versionRetrieve200Schema = z.lazy(() => versionDetailSchema);
export type VersionRetrieve200Schema = z.infer<typeof versionRetrieve200Schema>;

 export const versionRetrieveQueryResponseSchema = z.lazy(() => versionDetailSchema);
export type VersionRetrieveQueryResponseSchema = z.infer<typeof versionRetrieveQueryResponseSchema>;