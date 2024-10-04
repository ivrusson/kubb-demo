import { http } from "msw";
import { createItemCategoryListQueryResponse } from "../../mocks/itemsMocks/createItemCategoryList";


export const itemCategoryListHandler = http.get("*/api/v2/item-category/", function handler(info) {
    return new Response(JSON.stringify(createItemCategoryListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});