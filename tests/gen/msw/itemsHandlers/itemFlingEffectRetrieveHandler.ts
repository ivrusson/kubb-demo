import { http } from "msw";
import { createItemFlingEffectRetrieveQueryResponse } from "../../mocks/itemsMocks/createItemFlingEffectRetrieve";


export const itemFlingEffectRetrieveHandler = http.get("*/api/v2/item-fling-effect/:id/", function handler(info) {
    return new Response(JSON.stringify(createItemFlingEffectRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});