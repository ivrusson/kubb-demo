import { http } from "msw";
import { createItemPocketListQueryResponse } from "../../mocks/itemsMocks/createItemPocketList";


export const itemPocketListHandler = http.get("*/api/v2/item-pocket/", function handler(info) {
    return new Response(JSON.stringify(createItemPocketListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});