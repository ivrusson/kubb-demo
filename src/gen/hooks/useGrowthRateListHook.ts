import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GrowthRateListQueryResponseType, GrowthRateListQueryParamsType } from "../ts/GrowthRateListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GrowthRateListClient = typeof client<GrowthRateListQueryResponseType, Error, never>;
type GrowthRateList = {
    data: GrowthRateListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: GrowthRateListQueryParamsType;
    headerParams: never;
    response: GrowthRateListQueryResponseType;
    client: {
        parameters: Partial<Parameters<GrowthRateListClient>[0]>;
        return: Awaited<ReturnType<GrowthRateListClient>>;
    };
};
export const growthRateListQueryKey = (params?: GrowthRateList["queryParams"]) => ["v5", { url: "/api/v2/growth-rate/" }, ...(params ? [params] : [])] as const;
export type GrowthRateListQueryKey = ReturnType<typeof growthRateListQueryKey>;
export function growthRateListQueryOptions(params?: GrowthRateList["queryParams"], options: GrowthRateList["client"]["parameters"] = {}) {
    const queryKey = growthRateListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GrowthRateList["data"], GrowthRateList["error"]>({
                method: "get",
                url: `/api/v2/growth-rate/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Growth rates are the speed with which Pokémon gain levels through experience. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Experience) for greater detail.
 * @summary List growth rates
 * @link /api/v2/growth-rate/
 */
export function useGrowthRateListHook<TData = GrowthRateList["response"], TQueryData = GrowthRateList["response"], TQueryKey extends QueryKey = GrowthRateListQueryKey>(params?: GrowthRateList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<GrowthRateList["response"], GrowthRateList["error"], TData, TQueryData, TQueryKey>>;
    client?: GrowthRateList["client"]["parameters"];
} = {}): UseQueryResult<TData, GrowthRateList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? growthRateListQueryKey(params);
    const query = useQuery({
        ...growthRateListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GrowthRateList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const growthRateListSuspenseQueryKey = (params?: GrowthRateList["queryParams"]) => ["v5", { url: "/api/v2/growth-rate/" }, ...(params ? [params] : [])] as const;
export type GrowthRateListSuspenseQueryKey = ReturnType<typeof growthRateListSuspenseQueryKey>;
export function growthRateListSuspenseQueryOptions(params?: GrowthRateList["queryParams"], options: GrowthRateList["client"]["parameters"] = {}) {
    const queryKey = growthRateListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GrowthRateList["data"], GrowthRateList["error"]>({
                method: "get",
                url: `/api/v2/growth-rate/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Growth rates are the speed with which Pokémon gain levels through experience. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Experience) for greater detail.
 * @summary List growth rates
 * @link /api/v2/growth-rate/
 */
export function useGrowthRateListHookSuspense<TData = GrowthRateList["response"], TQueryKey extends QueryKey = GrowthRateListSuspenseQueryKey>(params?: GrowthRateList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<GrowthRateList["response"], GrowthRateList["error"], TData, TQueryKey>>;
    client?: GrowthRateList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GrowthRateList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? growthRateListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...growthRateListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GrowthRateList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}