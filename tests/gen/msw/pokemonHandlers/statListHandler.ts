import { http } from "msw";
import { createStatListQueryResponse } from "../../mocks/pokemonMocks/createStatList";


export const statListHandler = http.get("*/api/v2/stat/", function handler(info) {
    return new Response(JSON.stringify(createStatListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});