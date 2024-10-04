import { http } from "msw";
import { createTypeListQueryResponse } from "../../mocks/pokemonMocks/createTypeList";


export const typeListHandler = http.get("*/api/v2/type/", function handler(info) {
    return new Response(JSON.stringify(createTypeListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});