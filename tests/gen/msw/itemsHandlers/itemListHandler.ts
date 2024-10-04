import { http } from "msw";
import { createItemListQueryResponse } from "../../mocks/itemsMocks/createItemList";


export const itemListHandler = http.get("*/api/v2/item/", function handler(info) {
    return new Response(JSON.stringify(createItemListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});