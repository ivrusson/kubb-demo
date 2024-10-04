import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { PokeathlonStatListQueryResponseType, PokeathlonStatListQueryParamsType } from "../ts/PokeathlonStatListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type PokeathlonStatListClient = typeof client<PokeathlonStatListQueryResponseType, Error, never>;
type PokeathlonStatList = {
    data: PokeathlonStatListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: PokeathlonStatListQueryParamsType;
    headerParams: never;
    response: PokeathlonStatListQueryResponseType;
    client: {
        parameters: Partial<Parameters<PokeathlonStatListClient>[0]>;
        return: Awaited<ReturnType<PokeathlonStatListClient>>;
    };
};
export const pokeathlonStatListQueryKey = (params?: PokeathlonStatList["queryParams"]) => ["v5", { url: "/api/v2/pokeathlon-stat/" }, ...(params ? [params] : [])] as const;
export type PokeathlonStatListQueryKey = ReturnType<typeof pokeathlonStatListQueryKey>;
export function pokeathlonStatListQueryOptions(params?: PokeathlonStatList["queryParams"], options: PokeathlonStatList["client"]["parameters"] = {}) {
    const queryKey = pokeathlonStatListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokeathlonStatList["data"], PokeathlonStatList["error"]>({
                method: "get",
                url: `/api/v2/pokeathlon-stat/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon) for greater detail.
 * @summary List pokeathlon stats
 * @link /api/v2/pokeathlon-stat/
 */
export function usePokeathlonStatListHook<TData = PokeathlonStatList["response"], TQueryData = PokeathlonStatList["response"], TQueryKey extends QueryKey = PokeathlonStatListQueryKey>(params?: PokeathlonStatList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<PokeathlonStatList["response"], PokeathlonStatList["error"], TData, TQueryData, TQueryKey>>;
    client?: PokeathlonStatList["client"]["parameters"];
} = {}): UseQueryResult<TData, PokeathlonStatList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokeathlonStatListQueryKey(params);
    const query = useQuery({
        ...pokeathlonStatListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, PokeathlonStatList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const pokeathlonStatListSuspenseQueryKey = (params?: PokeathlonStatList["queryParams"]) => ["v5", { url: "/api/v2/pokeathlon-stat/" }, ...(params ? [params] : [])] as const;
export type PokeathlonStatListSuspenseQueryKey = ReturnType<typeof pokeathlonStatListSuspenseQueryKey>;
export function pokeathlonStatListSuspenseQueryOptions(params?: PokeathlonStatList["queryParams"], options: PokeathlonStatList["client"]["parameters"] = {}) {
    const queryKey = pokeathlonStatListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokeathlonStatList["data"], PokeathlonStatList["error"]>({
                method: "get",
                url: `/api/v2/pokeathlon-stat/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon) for greater detail.
 * @summary List pokeathlon stats
 * @link /api/v2/pokeathlon-stat/
 */
export function usePokeathlonStatListHookSuspense<TData = PokeathlonStatList["response"], TQueryKey extends QueryKey = PokeathlonStatListSuspenseQueryKey>(params?: PokeathlonStatList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<PokeathlonStatList["response"], PokeathlonStatList["error"], TData, TQueryKey>>;
    client?: PokeathlonStatList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, PokeathlonStatList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokeathlonStatListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...pokeathlonStatListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, PokeathlonStatList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}