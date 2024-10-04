import { http } from "msw";
import { createVersionGroupListQueryResponse } from "../../mocks/gamesMocks/createVersionGroupList";


export const versionGroupListHandler = http.get("*/api/v2/version-group/", function handler(info) {
    return new Response(JSON.stringify(createVersionGroupListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});