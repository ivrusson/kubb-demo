import { http } from "msw";
import { createItemRetrieveQueryResponse } from "../../mocks/itemsMocks/createItemRetrieve";


export const itemRetrieveHandler = http.get("*/api/v2/item/:id/", function handler(info) {
    return new Response(JSON.stringify(createItemRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});