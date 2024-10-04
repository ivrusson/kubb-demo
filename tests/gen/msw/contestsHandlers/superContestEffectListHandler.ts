import { http } from "msw";
import { createSuperContestEffectListQueryResponse } from "../../mocks/contestsMocks/createSuperContestEffectList";


export const superContestEffectListHandler = http.get("*/api/v2/super-contest-effect/", function handler(info) {
    return new Response(JSON.stringify(createSuperContestEffectListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});