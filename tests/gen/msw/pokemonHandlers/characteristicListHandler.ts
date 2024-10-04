import { http } from "msw";
import { createCharacteristicListQueryResponse } from "../../mocks/pokemonMocks/createCharacteristicList";


export const characteristicListHandler = http.get("*/api/v2/characteristic/", function handler(info) {
    return new Response(JSON.stringify(createCharacteristicListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});