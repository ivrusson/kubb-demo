import { http } from "msw";
import { createStatRetrieveQueryResponse } from "../../mocks/pokemonMocks/createStatRetrieve";


export const statRetrieveHandler = http.get("*/api/v2/stat/:id/", function handler(info) {
    return new Response(JSON.stringify(createStatRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});