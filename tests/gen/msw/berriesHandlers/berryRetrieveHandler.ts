import { http } from "msw";
import { createBerryRetrieveQueryResponse } from "../../mocks/berriesMocks/createBerryRetrieve";


export const berryRetrieveHandler = http.get("*/api/v2/berry/:id/", function handler(info) {
    return new Response(JSON.stringify(createBerryRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});