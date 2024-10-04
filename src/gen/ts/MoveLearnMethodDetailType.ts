import type { MoveLearnMethodNameType } from "./MoveLearnMethodNameType";
import type { MoveLearnMethodDescriptionType } from "./MoveLearnMethodDescriptionType";

 export type MoveLearnMethodDetailType = {
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
    readonly names: MoveLearnMethodNameType[];
    /**
     * @type array
    */
    readonly descriptions: MoveLearnMethodDescriptionType[];
    /**
     * @type array
    */
    readonly version_groups: {
        /**
         * @type string
        */
        name: string;
        /**
         * @type string, uri
        */
        url: string;
    }[];
};