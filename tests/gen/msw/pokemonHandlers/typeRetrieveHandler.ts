import { http } from "msw";
import { createTypeRetrieveQueryResponse } from "../../mocks/pokemonMocks/createTypeRetrieve";


export const typeRetrieveHandler = http.get("*/api/v2/type/:id/", function handler(info) {
    return new Response(JSON.stringify(createTypeRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});