import type { MoveBattleStyleNameType } from "./MoveBattleStyleNameType";

 export type MoveBattleStyleDetailType = {
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
    readonly names: MoveBattleStyleNameType[];
};