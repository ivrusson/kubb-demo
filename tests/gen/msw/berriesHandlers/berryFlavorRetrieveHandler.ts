import { http } from "msw";
import { createBerryFlavorRetrieveQueryResponse } from "../../mocks/berriesMocks/createBerryFlavorRetrieve";


export const berryFlavorRetrieveHandler = http.get("*/api/v2/berry-flavor/:id/", function handler(info) {
    return new Response(JSON.stringify(createBerryFlavorRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});