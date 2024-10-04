import { http } from "msw";
import { createMoveBattleStyleListQueryResponse } from "../../mocks/movesMocks/createMoveBattleStyleList";


export const moveBattleStyleListHandler = http.get("*/api/v2/move-battle-style/", function handler(info) {
    return new Response(JSON.stringify(createMoveBattleStyleListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});