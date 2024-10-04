import { http } from "msw";
import { createContestTypeListQueryResponse } from "../../mocks/contestsMocks/createContestTypeList";


export const contestTypeListHandler = http.get("*/api/v2/contest-type/", function handler(info) {
    return new Response(JSON.stringify(createContestTypeListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});