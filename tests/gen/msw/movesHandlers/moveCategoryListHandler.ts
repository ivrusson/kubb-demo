import { http } from "msw";
import { createMoveCategoryListQueryResponse } from "../../mocks/movesMocks/createMoveCategoryList";


export const moveCategoryListHandler = http.get("*/api/v2/move-category/", function handler(info) {
    return new Response(JSON.stringify(createMoveCategoryListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});