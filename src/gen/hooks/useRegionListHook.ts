import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { RegionListQueryResponseType, RegionListQueryParamsType } from "../ts/RegionListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type RegionListClient = typeof client<RegionListQueryResponseType, Error, never>;
type RegionList = {
    data: RegionListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: RegionListQueryParamsType;
    headerParams: never;
    response: RegionListQueryResponseType;
    client: {
        parameters: Partial<Parameters<RegionListClient>[0]>;
        return: Awaited<ReturnType<RegionListClient>>;
    };
};
export const regionListQueryKey = (params?: RegionList["queryParams"]) => ["v5", { url: "/api/v2/region/" }, ...(params ? [params] : [])] as const;
export type RegionListQueryKey = ReturnType<typeof regionListQueryKey>;
export function regionListQueryOptions(params?: RegionList["queryParams"], options: RegionList["client"]["parameters"] = {}) {
    const queryKey = regionListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<RegionList["data"], RegionList["error"]>({
                method: "get",
                url: `/api/v2/region/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them.
 * @summary List regions
 * @link /api/v2/region/
 */
export function useRegionListHook<TData = RegionList["response"], TQueryData = RegionList["response"], TQueryKey extends QueryKey = RegionListQueryKey>(params?: RegionList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<RegionList["response"], RegionList["error"], TData, TQueryData, TQueryKey>>;
    client?: RegionList["client"]["parameters"];
} = {}): UseQueryResult<TData, RegionList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? regionListQueryKey(params);
    const query = useQuery({
        ...regionListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, RegionList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const regionListSuspenseQueryKey = (params?: RegionList["queryParams"]) => ["v5", { url: "/api/v2/region/" }, ...(params ? [params] : [])] as const;
export type RegionListSuspenseQueryKey = ReturnType<typeof regionListSuspenseQueryKey>;
export function regionListSuspenseQueryOptions(params?: RegionList["queryParams"], options: RegionList["client"]["parameters"] = {}) {
    const queryKey = regionListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<RegionList["data"], RegionList["error"]>({
                method: "get",
                url: `/api/v2/region/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them.
 * @summary List regions
 * @link /api/v2/region/
 */
export function useRegionListHookSuspense<TData = RegionList["response"], TQueryKey extends QueryKey = RegionListSuspenseQueryKey>(params?: RegionList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<RegionList["response"], RegionList["error"], TData, TQueryKey>>;
    client?: RegionList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, RegionList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? regionListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...regionListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, RegionList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}