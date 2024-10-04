import { http } from "msw";
import { createNatureRetrieveQueryResponse } from "../../mocks/pokemonMocks/createNatureRetrieve";


export const natureRetrieveHandler = http.get("*/api/v2/nature/:id/", function handler(info) {
    return new Response(JSON.stringify(createNatureRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});