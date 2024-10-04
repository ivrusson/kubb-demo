import { http } from "msw";
import { createBerryFlavorListQueryResponse } from "../../mocks/berriesMocks/createBerryFlavorList";


export const berryFlavorListHandler = http.get("*/api/v2/berry-flavor/", function handler(info) {
    return new Response(JSON.stringify(createBerryFlavorListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});