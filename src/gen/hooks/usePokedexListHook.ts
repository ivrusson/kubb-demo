import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { PokedexListQueryResponseType, PokedexListQueryParamsType } from "../ts/PokedexListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type PokedexListClient = typeof client<PokedexListQueryResponseType, Error, never>;
type PokedexList = {
    data: PokedexListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: PokedexListQueryParamsType;
    headerParams: never;
    response: PokedexListQueryResponseType;
    client: {
        parameters: Partial<Parameters<PokedexListClient>[0]>;
        return: Awaited<ReturnType<PokedexListClient>>;
    };
};
export const pokedexListQueryKey = (params?: PokedexList["queryParams"]) => ["v5", { url: "/api/v2/pokedex/" }, ...(params ? [params] : [])] as const;
export type PokedexListQueryKey = ReturnType<typeof pokedexListQueryKey>;
export function pokedexListQueryOptions(params?: PokedexList["queryParams"], options: PokedexList["client"]["parameters"] = {}) {
    const queryKey = pokedexListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokedexList["data"], PokedexList["error"]>({
                method: "get",
                url: `/api/v2/pokedex/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pokedex) for greater detail.
 * @summary List pokedex
 * @link /api/v2/pokedex/
 */
export function usePokedexListHook<TData = PokedexList["response"], TQueryData = PokedexList["response"], TQueryKey extends QueryKey = PokedexListQueryKey>(params?: PokedexList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<PokedexList["response"], PokedexList["error"], TData, TQueryData, TQueryKey>>;
    client?: PokedexList["client"]["parameters"];
} = {}): UseQueryResult<TData, PokedexList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokedexListQueryKey(params);
    const query = useQuery({
        ...pokedexListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, PokedexList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const pokedexListSuspenseQueryKey = (params?: PokedexList["queryParams"]) => ["v5", { url: "/api/v2/pokedex/" }, ...(params ? [params] : [])] as const;
export type PokedexListSuspenseQueryKey = ReturnType<typeof pokedexListSuspenseQueryKey>;
export function pokedexListSuspenseQueryOptions(params?: PokedexList["queryParams"], options: PokedexList["client"]["parameters"] = {}) {
    const queryKey = pokedexListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokedexList["data"], PokedexList["error"]>({
                method: "get",
                url: `/api/v2/pokedex/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pokedex) for greater detail.
 * @summary List pokedex
 * @link /api/v2/pokedex/
 */
export function usePokedexListHookSuspense<TData = PokedexList["response"], TQueryKey extends QueryKey = PokedexListSuspenseQueryKey>(params?: PokedexList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<PokedexList["response"], PokedexList["error"], TData, TQueryKey>>;
    client?: PokedexList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, PokedexList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokedexListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...pokedexListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, PokedexList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}