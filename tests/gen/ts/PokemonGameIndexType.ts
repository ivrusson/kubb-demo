import type { VersionSummaryType } from "./VersionSummaryType";

 export type PokemonGameIndexType = {
    /**
     * @type integer
    */
    game_index: number;
    /**
     * @type object
    */
    version: VersionSummaryType;
};