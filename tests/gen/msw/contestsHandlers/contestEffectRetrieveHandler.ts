import { http } from "msw";
import { createContestEffectRetrieveQueryResponse } from "../../mocks/contestsMocks/createContestEffectRetrieve";


export const contestEffectRetrieveHandler = http.get("*/api/v2/contest-effect/:id/", function handler(info) {
    return new Response(JSON.stringify(createContestEffectRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});