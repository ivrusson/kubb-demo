import type { PokemonFormSummaryType } from "./PokemonFormSummaryType";
import type { PokemonGameIndexType } from "./PokemonGameIndexType";
import type { PokemonSpeciesSummaryType } from "./PokemonSpeciesSummaryType";
import type { PokemonStatType } from "./PokemonStatType";

 export type PokemonDetailType = {
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
    base_experience?: number | null;
    /**
     * @type integer | undefined
    */
    height?: number | null;
    /**
     * @type boolean | undefined
    */
    is_default?: boolean;
    /**
     * @type integer | undefined
    */
    order?: number | null;
    /**
     * @type integer | undefined
    */
    weight?: number | null;
    /**
     * @type array
    */
    readonly abilities: {
        /**
         * @type object
        */
        ability: {
            /**
             * @type string
            */
            name: string;
            /**
             * @type string, uri
            */
            url: string;
        };
        /**
         * @type boolean
        */
        is_hidden: boolean;
        /**
         * @type integer, int32
        */
        slot: number;
    }[];
    /**
     * @type array
    */
    readonly past_abilities: {
        /**
         * @type array
        */
        abilities: {
            /**
             * @type object
            */
            ability: {
                /**
                 * @type string
                */
                name: string;
                /**
                 * @type string, uri
                */
                url: string;
            };
            /**
             * @type boolean
            */
            is_hidden: boolean;
            /**
             * @type integer, int32
            */
            slot: number;
        }[];
        /**
         * @type object
        */
        generation: {
            /**
             * @type string
            */
            name: string;
            /**
             * @type string, uri
            */
            url: string;
        };
    }[];
    /**
     * @type array
    */
    readonly forms: PokemonFormSummaryType[];
    /**
     * @type array
    */
    readonly game_indices: PokemonGameIndexType[];
    /**
     * @type object
    */
    readonly held_items: {
        /**
         * @type object
        */
        item: {
            /**
             * @type string
            */
            name: string;
            /**
             * @type string, uri
            */
            url: string;
        };
        /**
         * @type array
        */
        version_details: {
            /**
             * @type integer, int32
            */
            rarity: number;
            /**
             * @type object
            */
            version: {
                /**
                 * @type string
                */
                name: string;
                /**
                 * @type string, uri
                */
                url: string;
            };
        }[];
    };
    /**
     * @type string
    */
    readonly location_area_encounters: string;
    /**
     * @type array
    */
    readonly moves: {
        /**
         * @type object
        */
        move: {
            /**
             * @type string
            */
            name: string;
            /**
             * @type string, uri
            */
            url: string;
        };
        /**
         * @type array
        */
        version_group_details: {
            /**
             * @type integer, int32
            */
            level_learned_at: number;
            /**
             * @type object
            */
            move_learn_method: {
                /**
                 * @type string
                */
                name: string;
                /**
                 * @type string, uri
                */
                url: string;
            };
            /**
             * @type object
            */
            version_group: {
                /**
                 * @type string
                */
                name: string;
                /**
                 * @type string, uri
                */
                url: string;
            };
        }[];
    }[];
    /**
     * @type object
    */
    species: PokemonSpeciesSummaryType;
    /**
     * @type object
    */
    readonly sprites: {
        /**
         * @type string | undefined, uri
        */
        front_default?: string;
        [key: string]: string;
    };
    /**
     * @type object
    */
    readonly cries: {
        /**
         * @type string, uri
        */
        latest: string;
        /**
         * @type string, uri
        */
        legacy: string;
    };
    /**
     * @type array
    */
    readonly stats: PokemonStatType[];
    /**
     * @type array
    */
    readonly types: {
        /**
         * @type integer, int32
        */
        slot: number;
        /**
         * @type object
        */
        type: {
            /**
             * @type string
            */
            name: string;
            /**
             * @type string, uri
            */
            url: string;
        };
    }[];
    /**
     * @type array
    */
    readonly past_types: {
        /**
         * @type object
        */
        generation: {
            /**
             * @type string
            */
            name: string;
            /**
             * @type string, uri
            */
            url: string;
        };
        /**
         * @type array
        */
        types: {
            /**
             * @type integer, int32
            */
            slot: number;
            /**
             * @type object
            */
            type: {
                /**
                 * @type string
                */
                name: string;
                /**
                 * @type string, uri
                */
                url: string;
            };
        }[];
    }[];
};