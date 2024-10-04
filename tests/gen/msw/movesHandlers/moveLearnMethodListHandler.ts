import { http } from "msw";
import { createMoveLearnMethodListQueryResponse } from "../../mocks/movesMocks/createMoveLearnMethodList";


export const moveLearnMethodListHandler = http.get("*/api/v2/move-learn-method/", function handler(info) {
    return new Response(JSON.stringify(createMoveLearnMethodListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});