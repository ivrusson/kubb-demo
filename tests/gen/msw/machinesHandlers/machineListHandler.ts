import { http } from "msw";
import { createMachineListQueryResponse } from "../../mocks/machinesMocks/createMachineList";


export const machineListHandler = http.get("*/api/v2/machine/", function handler(info) {
    return new Response(JSON.stringify(createMachineListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});