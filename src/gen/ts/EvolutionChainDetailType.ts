import type { ItemSummaryType } from "./ItemSummaryType";

 export type EvolutionChainDetailType = {
    /**
     * @type integer
    */
    readonly id: number;
    /**
     * @type object
    */
    baby_trigger_item: ItemSummaryType;
    /**
     * @type object
    */
    readonly chain: {
        /**
         * @type array
        */
        evolution_details: any[];
        /**
         * @type array
        */
        evolves_to: {
            /**
             * @type array
            */
            evolution_details: {
                /**
                 * @type object
                */
                gender: {
                    /**
                     * @type string
                    */
                    name: string;
                    /**
                     * @type string, uri
                    */
                    url: string;
                } | null;
                /**
                 * @type object
                */
                held_item: {
                    /**
                     * @type string
                    */
                    name: string;
                    /**
                     * @type string, uri
                    */
                    url: string;
                } | null;
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
                } | null;
                known_move: any;
                known_move_type: any;
                /**
                 * @type object
                */
                location: {
                    /**
                     * @type string
                    */
                    name: string;
                    /**
                     * @type string, uri
                    */
                    url: string;
                } | null;
                /**
                 * @type integer, int32
                */
                min_affection: number | null;
                /**
                 * @type integer, int32
                */
                min_beauty: number | null;
                /**
                 * @type integer, int32
                */
                min_happiness: number | null;
                /**
                 * @type integer, int32
                */
                min_level: number | null;
                /**
                 * @type boolean
                */
                needs_overworld_rain: boolean | null;
                /**
                 * @type string
                */
                party_species: string | null;
                /**
                 * @type string
                */
                party_type: string | null;
                /**
                 * @type string
                */
                relative_physical_stats: string | null;
                /**
                 * @type string
                */
                time_of_day: string;
                /**
                 * @type string
                */
                trade_species: string | null;
                /**
                 * @type object
                */
                trigger: {
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
                turn_upside_down: boolean;
            }[];
            /**
             * @type boolean
            */
            is_baby: boolean;
            /**
             * @type object
            */
            species: {
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
         * @type boolean
        */
        is_baby: boolean;
        /**
         * @type object
        */
        species: {
            /**
             * @type string
            */
            name: string;
            /**
             * @type string, uri
            */
            url: string;
        };
    };
};