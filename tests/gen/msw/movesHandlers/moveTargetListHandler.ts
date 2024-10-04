import { http } from "msw";
import { createMoveTargetListQueryResponse } from "../../mocks/movesMocks/createMoveTargetList";


export const moveTargetListHandler = http.get("*/api/v2/move-target/", function handler(info) {
    return new Response(JSON.stringify(createMoveTargetListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});