import { http } from "msw";
import { createItemAttributeListQueryResponse } from "../../mocks/itemsMocks/createItemAttributeList";


export const itemAttributeListHandler = http.get("*/api/v2/item-attribute/", function handler(info) {
    return new Response(JSON.stringify(createItemAttributeListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});