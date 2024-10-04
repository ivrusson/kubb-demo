import { http } from "msw";
import { createMoveTargetRetrieveQueryResponse } from "../../mocks/movesMocks/createMoveTargetRetrieve";


export const moveTargetRetrieveHandler = http.get("*/api/v2/move-target/:id/", function handler(info) {
    return new Response(JSON.stringify(createMoveTargetRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});