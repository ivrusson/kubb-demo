import { http } from "msw";
import { createGenderRetrieveQueryResponse } from "../../mocks/pokemonMocks/createGenderRetrieve";


export const genderRetrieveHandler = http.get("*/api/v2/gender/:id/", function handler(info) {
    return new Response(JSON.stringify(createGenderRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});