import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { PokemonSpeciesListQueryResponseType, PokemonSpeciesListQueryParamsType } from "../ts/PokemonSpeciesListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type PokemonSpeciesListClient = typeof client<PokemonSpeciesListQueryResponseType, Error, never>;
type PokemonSpeciesList = {
    data: PokemonSpeciesListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: PokemonSpeciesListQueryParamsType;
    headerParams: never;
    response: PokemonSpeciesListQueryResponseType;
    client: {
        parameters: Partial<Parameters<PokemonSpeciesListClient>[0]>;
        return: Awaited<ReturnType<PokemonSpeciesListClient>>;
    };
};
export const pokemonSpeciesListQueryKey = (params?: PokemonSpeciesList["queryParams"]) => ["v5", { url: "/api/v2/pokemon-species/" }, ...(params ? [params] : [])] as const;
export type PokemonSpeciesListQueryKey = ReturnType<typeof pokemonSpeciesListQueryKey>;
export function pokemonSpeciesListQueryOptions(params?: PokemonSpeciesList["queryParams"], options: PokemonSpeciesList["client"]["parameters"] = {}) {
    const queryKey = pokemonSpeciesListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonSpeciesList["data"], PokemonSpeciesList["error"]>({
                method: "get",
                url: `/api/v2/pokemon-species/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species. A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.
 * @summary List pokemon species
 * @link /api/v2/pokemon-species/
 */
export function usePokemonSpeciesListHook<TData = PokemonSpeciesList["response"], TQueryData = PokemonSpeciesList["response"], TQueryKey extends QueryKey = PokemonSpeciesListQueryKey>(params?: PokemonSpeciesList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<PokemonSpeciesList["response"], PokemonSpeciesList["error"], TData, TQueryData, TQueryKey>>;
    client?: PokemonSpeciesList["client"]["parameters"];
} = {}): UseQueryResult<TData, PokemonSpeciesList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonSpeciesListQueryKey(params);
    const query = useQuery({
        ...pokemonSpeciesListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, PokemonSpeciesList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const pokemonSpeciesListSuspenseQueryKey = (params?: PokemonSpeciesList["queryParams"]) => ["v5", { url: "/api/v2/pokemon-species/" }, ...(params ? [params] : [])] as const;
export type PokemonSpeciesListSuspenseQueryKey = ReturnType<typeof pokemonSpeciesListSuspenseQueryKey>;
export function pokemonSpeciesListSuspenseQueryOptions(params?: PokemonSpeciesList["queryParams"], options: PokemonSpeciesList["client"]["parameters"] = {}) {
    const queryKey = pokemonSpeciesListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonSpeciesList["data"], PokemonSpeciesList["error"]>({
                method: "get",
                url: `/api/v2/pokemon-species/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species. A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.
 * @summary List pokemon species
 * @link /api/v2/pokemon-species/
 */
export function usePokemonSpeciesListHookSuspense<TData = PokemonSpeciesList["response"], TQueryKey extends QueryKey = PokemonSpeciesListSuspenseQueryKey>(params?: PokemonSpeciesList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<PokemonSpeciesList["response"], PokemonSpeciesList["error"], TData, TQueryKey>>;
    client?: PokemonSpeciesList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, PokemonSpeciesList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonSpeciesListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...pokemonSpeciesListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, PokemonSpeciesList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}