import { http } from "msw";
import { createItemCategoryRetrieveQueryResponse } from "../../mocks/itemsMocks/createItemCategoryRetrieve";


export const itemCategoryRetrieveHandler = http.get("*/api/v2/item-category/:id/", function handler(info) {
    return new Response(JSON.stringify(createItemCategoryRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});