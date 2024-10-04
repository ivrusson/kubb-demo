import { http } from "msw";
import { createItemPocketRetrieveQueryResponse } from "../../mocks/itemsMocks/createItemPocketRetrieve";


export const itemPocketRetrieveHandler = http.get("*/api/v2/item-pocket/:id/", function handler(info) {
    return new Response(JSON.stringify(createItemPocketRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});