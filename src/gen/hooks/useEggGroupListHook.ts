import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { EggGroupListQueryResponseType, EggGroupListQueryParamsType } from "../ts/EggGroupListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type EggGroupListClient = typeof client<EggGroupListQueryResponseType, Error, never>;
type EggGroupList = {
    data: EggGroupListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: EggGroupListQueryParamsType;
    headerParams: never;
    response: EggGroupListQueryResponseType;
    client: {
        parameters: Partial<Parameters<EggGroupListClient>[0]>;
        return: Awaited<ReturnType<EggGroupListClient>>;
    };
};
export const eggGroupListQueryKey = (params?: EggGroupList["queryParams"]) => ["v5", { url: "/api/v2/egg-group/" }, ...(params ? [params] : [])] as const;
export type EggGroupListQueryKey = ReturnType<typeof eggGroupListQueryKey>;
export function eggGroupListQueryOptions(params?: EggGroupList["queryParams"], options: EggGroupList["client"]["parameters"] = {}) {
    const queryKey = eggGroupListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<EggGroupList["data"], EggGroupList["error"]>({
                method: "get",
                url: `/api/v2/egg-group/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater detail.
 * @summary List egg groups
 * @link /api/v2/egg-group/
 */
export function useEggGroupListHook<TData = EggGroupList["response"], TQueryData = EggGroupList["response"], TQueryKey extends QueryKey = EggGroupListQueryKey>(params?: EggGroupList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<EggGroupList["response"], EggGroupList["error"], TData, TQueryData, TQueryKey>>;
    client?: EggGroupList["client"]["parameters"];
} = {}): UseQueryResult<TData, EggGroupList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? eggGroupListQueryKey(params);
    const query = useQuery({
        ...eggGroupListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, EggGroupList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const eggGroupListSuspenseQueryKey = (params?: EggGroupList["queryParams"]) => ["v5", { url: "/api/v2/egg-group/" }, ...(params ? [params] : [])] as const;
export type EggGroupListSuspenseQueryKey = ReturnType<typeof eggGroupListSuspenseQueryKey>;
export function eggGroupListSuspenseQueryOptions(params?: EggGroupList["queryParams"], options: EggGroupList["client"]["parameters"] = {}) {
    const queryKey = eggGroupListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<EggGroupList["data"], EggGroupList["error"]>({
                method: "get",
                url: `/api/v2/egg-group/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater detail.
 * @summary List egg groups
 * @link /api/v2/egg-group/
 */
export function useEggGroupListHookSuspense<TData = EggGroupList["response"], TQueryKey extends QueryKey = EggGroupListSuspenseQueryKey>(params?: EggGroupList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<EggGroupList["response"], EggGroupList["error"], TData, TQueryKey>>;
    client?: EggGroupList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, EggGroupList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? eggGroupListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...eggGroupListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, EggGroupList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}