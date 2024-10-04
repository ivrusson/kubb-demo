import { http } from "msw";
import { createMoveBattleStyleRetrieveQueryResponse } from "../../mocks/movesMocks/createMoveBattleStyleRetrieve";


export const moveBattleStyleRetrieveHandler = http.get("*/api/v2/move-battle-style/:id/", function handler(info) {
    return new Response(JSON.stringify(createMoveBattleStyleRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});