import { http } from "msw";
import { createMoveRetrieveQueryResponse } from "../../mocks/movesMocks/createMoveRetrieve";


export const moveRetrieveHandler = http.get("*/api/v2/move/:id/", function handler(info) {
    return new Response(JSON.stringify(createMoveRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});