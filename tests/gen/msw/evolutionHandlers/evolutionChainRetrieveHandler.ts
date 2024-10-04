import { http } from "msw";
import { createEvolutionChainRetrieveQueryResponse } from "../../mocks/evolutionMocks/createEvolutionChainRetrieve";


export const evolutionChainRetrieveHandler = http.get("*/api/v2/evolution-chain/:id/", function handler(info) {
    return new Response(JSON.stringify(createEvolutionChainRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});