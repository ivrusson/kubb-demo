import { http } from "msw";
import { createItemFlingEffectListQueryResponse } from "../../mocks/itemsMocks/createItemFlingEffectList";


export const itemFlingEffectListHandler = http.get("*/api/v2/item-fling-effect/", function handler(info) {
    return new Response(JSON.stringify(createItemFlingEffectListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});