import { http } from "msw";
import { createMoveAilmentListQueryResponse } from "../../mocks/movesMocks/createMoveAilmentList";


export const moveAilmentListHandler = http.get("*/api/v2/move-ailment/", function handler(info) {
    return new Response(JSON.stringify(createMoveAilmentListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});