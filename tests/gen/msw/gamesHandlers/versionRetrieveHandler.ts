import { http } from "msw";
import { createVersionRetrieveQueryResponse } from "../../mocks/gamesMocks/createVersionRetrieve";


export const versionRetrieveHandler = http.get("*/api/v2/version/:id/", function handler(info) {
    return new Response(JSON.stringify(createVersionRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});