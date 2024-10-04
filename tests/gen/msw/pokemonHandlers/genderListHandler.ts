import { http } from "msw";
import { createGenderListQueryResponse } from "../../mocks/pokemonMocks/createGenderList";


export const genderListHandler = http.get("*/api/v2/gender/", function handler(info) {
    return new Response(JSON.stringify(createGenderListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});