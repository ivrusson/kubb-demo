import type { EncounterMethodNameType } from "./EncounterMethodNameType";

 export type EncounterMethodDetailType = {
    /**
     * @type integer
    */
    readonly id: number;
    /**
     * @type string
    */
    name: string;
    /**
     * @type integer | undefined
    */
    order?: number | null;
    /**
     * @type array
    */
    readonly names: EncounterMethodNameType[];
};