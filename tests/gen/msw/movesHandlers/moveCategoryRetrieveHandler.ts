import { http } from "msw";
import { createMoveCategoryRetrieveQueryResponse } from "../../mocks/movesMocks/createMoveCategoryRetrieve";


export const moveCategoryRetrieveHandler = http.get("*/api/v2/move-category/:id/", function handler(info) {
    return new Response(JSON.stringify(createMoveCategoryRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});