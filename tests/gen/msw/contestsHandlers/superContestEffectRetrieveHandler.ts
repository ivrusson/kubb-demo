import { http } from "msw";
import { createSuperContestEffectRetrieveQueryResponse } from "../../mocks/contestsMocks/createSuperContestEffectRetrieve";


export const superContestEffectRetrieveHandler = http.get("*/api/v2/super-contest-effect/:id/", function handler(info) {
    return new Response(JSON.stringify(createSuperContestEffectRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});