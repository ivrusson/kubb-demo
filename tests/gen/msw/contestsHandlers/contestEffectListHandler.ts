import { http } from "msw";
import { createContestEffectListQueryResponse } from "../../mocks/contestsMocks/createContestEffectList";


export const contestEffectListHandler = http.get("*/api/v2/contest-effect/", function handler(info) {
    return new Response(JSON.stringify(createContestEffectListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});