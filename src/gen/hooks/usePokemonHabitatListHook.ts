import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { PokemonHabitatListQueryResponseType, PokemonHabitatListQueryParamsType } from "../ts/PokemonHabitatListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type PokemonHabitatListClient = typeof client<PokemonHabitatListQueryResponseType, Error, never>;
type PokemonHabitatList = {
    data: PokemonHabitatListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: PokemonHabitatListQueryParamsType;
    headerParams: never;
    response: PokemonHabitatListQueryResponseType;
    client: {
        parameters: Partial<Parameters<PokemonHabitatListClient>[0]>;
        return: Awaited<ReturnType<PokemonHabitatListClient>>;
    };
};
export const pokemonHabitatListQueryKey = (params?: PokemonHabitatList["queryParams"]) => ["v5", { url: "/api/v2/pokemon-habitat/" }, ...(params ? [params] : [])] as const;
export type PokemonHabitatListQueryKey = ReturnType<typeof pokemonHabitatListQueryKey>;
export function pokemonHabitatListQueryOptions(params?: PokemonHabitatList["queryParams"], options: PokemonHabitatList["client"]["parameters"] = {}) {
    const queryKey = pokemonHabitatListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonHabitatList["data"], PokemonHabitatList["error"]>({
                method: "get",
                url: `/api/v2/pokemon-habitat/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.
 * @summary List pokemom habitas
 * @link /api/v2/pokemon-habitat/
 */
export function usePokemonHabitatListHook<TData = PokemonHabitatList["response"], TQueryData = PokemonHabitatList["response"], TQueryKey extends QueryKey = PokemonHabitatListQueryKey>(params?: PokemonHabitatList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<PokemonHabitatList["response"], PokemonHabitatList["error"], TData, TQueryData, TQueryKey>>;
    client?: PokemonHabitatList["client"]["parameters"];
} = {}): UseQueryResult<TData, PokemonHabitatList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonHabitatListQueryKey(params);
    const query = useQuery({
        ...pokemonHabitatListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, PokemonHabitatList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const pokemonHabitatListSuspenseQueryKey = (params?: PokemonHabitatList["queryParams"]) => ["v5", { url: "/api/v2/pokemon-habitat/" }, ...(params ? [params] : [])] as const;
export type PokemonHabitatListSuspenseQueryKey = ReturnType<typeof pokemonHabitatListSuspenseQueryKey>;
export function pokemonHabitatListSuspenseQueryOptions(params?: PokemonHabitatList["queryParams"], options: PokemonHabitatList["client"]["parameters"] = {}) {
    const queryKey = pokemonHabitatListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonHabitatList["data"], PokemonHabitatList["error"]>({
                method: "get",
                url: `/api/v2/pokemon-habitat/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.
 * @summary List pokemom habitas
 * @link /api/v2/pokemon-habitat/
 */
export function usePokemonHabitatListHookSuspense<TData = PokemonHabitatList["response"], TQueryKey extends QueryKey = PokemonHabitatListSuspenseQueryKey>(params?: PokemonHabitatList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<PokemonHabitatList["response"], PokemonHabitatList["error"], TData, TQueryKey>>;
    client?: PokemonHabitatList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, PokemonHabitatList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonHabitatListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...pokemonHabitatListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, PokemonHabitatList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}