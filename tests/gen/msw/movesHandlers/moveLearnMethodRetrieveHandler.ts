import { http } from "msw";
import { createMoveLearnMethodRetrieveQueryResponse } from "../../mocks/movesMocks/createMoveLearnMethodRetrieve";


export const moveLearnMethodRetrieveHandler = http.get("*/api/v2/move-learn-method/:id/", function handler(info) {
    return new Response(JSON.stringify(createMoveLearnMethodRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});