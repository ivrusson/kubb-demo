import { http } from "msw";
import { createEvolutionChainListQueryResponse } from "../../mocks/evolutionMocks/createEvolutionChainList";


export const evolutionChainListHandler = http.get("*/api/v2/evolution-chain/", function handler(info) {
    return new Response(JSON.stringify(createEvolutionChainListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});