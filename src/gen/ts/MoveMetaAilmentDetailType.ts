import type { MoveMetaAilmentNameType } from "./MoveMetaAilmentNameType";

 export type MoveMetaAilmentDetailType = {
    /**
     * @type integer
    */
    readonly id: number;
    /**
     * @type string
    */
    name: string;
    /**
     * @type array
    */
    readonly moves: {
        /**
         * @type string
        */
        name: string;
        /**
         * @type string, uri
        */
        url: string;
    }[];
    /**
     * @type array
    */
    readonly names: MoveMetaAilmentNameType[];
};