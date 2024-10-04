import { http } from "msw";
import { createMoveAilmentRetrieveQueryResponse } from "../../mocks/movesMocks/createMoveAilmentRetrieve";


export const moveAilmentRetrieveHandler = http.get("*/api/v2/move-ailment/:id/", function handler(info) {
    return new Response(JSON.stringify(createMoveAilmentRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});