import { http } from "msw";
import { createVersionGroupRetrieveQueryResponse } from "../../mocks/gamesMocks/createVersionGroupRetrieve";


export const versionGroupRetrieveHandler = http.get("*/api/v2/version-group/:id/", function handler(info) {
    return new Response(JSON.stringify(createVersionGroupRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});