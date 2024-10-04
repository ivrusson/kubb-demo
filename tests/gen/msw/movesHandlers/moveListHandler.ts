import { http } from "msw";
import { createMoveListQueryResponse } from "../../mocks/movesMocks/createMoveList";


export const moveListHandler = http.get("*/api/v2/move/", function handler(info) {
    return new Response(JSON.stringify(createMoveListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});