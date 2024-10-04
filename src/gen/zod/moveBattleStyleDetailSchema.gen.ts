import { moveBattleStyleNameSchema } from "./moveBattleStyleNameSchema.gen";
import { z } from "@/utils/zod.ts";


export const moveBattleStyleDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "names": z.array(z.lazy(() => moveBattleStyleNameSchema)) });
export type MoveBattleStyleDetailSchema = z.infer<typeof moveBattleStyleDetailSchema>;