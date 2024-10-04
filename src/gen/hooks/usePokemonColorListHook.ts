import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { PokemonColorListQueryResponseType, PokemonColorListQueryParamsType } from "../ts/PokemonColorListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type PokemonColorListClient = typeof client<PokemonColorListQueryResponseType, Error, never>;
type PokemonColorList = {
    data: PokemonColorListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: PokemonColorListQueryParamsType;
    headerParams: never;
    response: PokemonColorListQueryResponseType;
    client: {
        parameters: Partial<Parameters<PokemonColorListClient>[0]>;
        return: Awaited<ReturnType<PokemonColorListClient>>;
    };
};
export const pokemonColorListQueryKey = (params?: PokemonColorList["queryParams"]) => ["v5", { url: "/api/v2/pokemon-color/" }, ...(params ? [params] : [])] as const;
export type PokemonColorListQueryKey = ReturnType<typeof pokemonColorListQueryKey>;
export function pokemonColorListQueryOptions(params?: PokemonColorList["queryParams"], options: PokemonColorList["client"]["parameters"] = {}) {
    const queryKey = pokemonColorListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonColorList["data"], PokemonColorList["error"]>({
                method: "get",
                url: `/api/v2/pokemon-color/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body. No orange category exists; Pokémon that are primarily orange are listed as red or brown.
 * @summary List pokemon colors
 * @link /api/v2/pokemon-color/
 */
export function usePokemonColorListHook<TData = PokemonColorList["response"], TQueryData = PokemonColorList["response"], TQueryKey extends QueryKey = PokemonColorListQueryKey>(params?: PokemonColorList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<PokemonColorList["response"], PokemonColorList["error"], TData, TQueryData, TQueryKey>>;
    client?: PokemonColorList["client"]["parameters"];
} = {}): UseQueryResult<TData, PokemonColorList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonColorListQueryKey(params);
    const query = useQuery({
        ...pokemonColorListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, PokemonColorList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const pokemonColorListSuspenseQueryKey = (params?: PokemonColorList["queryParams"]) => ["v5", { url: "/api/v2/pokemon-color/" }, ...(params ? [params] : [])] as const;
export type PokemonColorListSuspenseQueryKey = ReturnType<typeof pokemonColorListSuspenseQueryKey>;
export function pokemonColorListSuspenseQueryOptions(params?: PokemonColorList["queryParams"], options: PokemonColorList["client"]["parameters"] = {}) {
    const queryKey = pokemonColorListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonColorList["data"], PokemonColorList["error"]>({
                method: "get",
                url: `/api/v2/pokemon-color/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body. No orange category exists; Pokémon that are primarily orange are listed as red or brown.
 * @summary List pokemon colors
 * @link /api/v2/pokemon-color/
 */
export function usePokemonColorListHookSuspense<TData = PokemonColorList["response"], TQueryKey extends QueryKey = PokemonColorListSuspenseQueryKey>(params?: PokemonColorList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<PokemonColorList["response"], PokemonColorList["error"], TData, TQueryKey>>;
    client?: PokemonColorList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, PokemonColorList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonColorListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...pokemonColorListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, PokemonColorList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}