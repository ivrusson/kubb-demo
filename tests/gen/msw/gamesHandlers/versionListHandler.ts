import { http } from "msw";
import { createVersionListQueryResponse } from "../../mocks/gamesMocks/createVersionList";


export const versionListHandler = http.get("*/api/v2/version/", function handler(info) {
    return new Response(JSON.stringify(createVersionListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});