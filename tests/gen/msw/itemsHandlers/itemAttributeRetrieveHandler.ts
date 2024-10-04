import { http } from "msw";
import { createItemAttributeRetrieveQueryResponse } from "../../mocks/itemsMocks/createItemAttributeRetrieve";


export const itemAttributeRetrieveHandler = http.get("*/api/v2/item-attribute/:id/", function handler(info) {
    return new Response(JSON.stringify(createItemAttributeRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});