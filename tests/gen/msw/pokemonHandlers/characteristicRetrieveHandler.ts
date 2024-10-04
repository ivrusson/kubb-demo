import { http } from "msw";
import { createCharacteristicRetrieveQueryResponse } from "../../mocks/pokemonMocks/createCharacteristicRetrieve";


export const characteristicRetrieveHandler = http.get("*/api/v2/characteristic/:id/", function handler(info) {
    return new Response(JSON.stringify(createCharacteristicRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});