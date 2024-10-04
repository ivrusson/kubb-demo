import { http } from "msw";
import { createContestTypeRetrieveQueryResponse } from "../../mocks/contestsMocks/createContestTypeRetrieve";


export const contestTypeRetrieveHandler = http.get("*/api/v2/contest-type/:id/", function handler(info) {
    return new Response(JSON.stringify(createContestTypeRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});