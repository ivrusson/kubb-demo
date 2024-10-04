import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { BerryFirmnessListQueryResponseType, BerryFirmnessListQueryParamsType } from "../ts/BerryFirmnessListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type BerryFirmnessListClient = typeof client<BerryFirmnessListQueryResponseType, Error, never>;
type BerryFirmnessList = {
    data: BerryFirmnessListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: BerryFirmnessListQueryParamsType;
    headerParams: never;
    response: BerryFirmnessListQueryResponseType;
    client: {
        parameters: Partial<Parameters<BerryFirmnessListClient>[0]>;
        return: Awaited<ReturnType<BerryFirmnessListClient>>;
    };
};
export const berryFirmnessListQueryKey = (params?: BerryFirmnessList["queryParams"]) => ["v5", { url: "/api/v2/berry-firmness/" }, ...(params ? [params] : [])] as const;
export type BerryFirmnessListQueryKey = ReturnType<typeof berryFirmnessListQueryKey>;
export function berryFirmnessListQueryOptions(params?: BerryFirmnessList["queryParams"], options: BerryFirmnessList["client"]["parameters"] = {}) {
    const queryKey = berryFirmnessListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<BerryFirmnessList["data"], BerryFirmnessList["error"]>({
                method: "get",
                url: `/api/v2/berry-firmness/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Berries can be soft or hard. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail.
 * @summary List berry firmness
 * @link /api/v2/berry-firmness/
 */
export function useBerryFirmnessListHook<TData = BerryFirmnessList["response"], TQueryData = BerryFirmnessList["response"], TQueryKey extends QueryKey = BerryFirmnessListQueryKey>(params?: BerryFirmnessList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<BerryFirmnessList["response"], BerryFirmnessList["error"], TData, TQueryData, TQueryKey>>;
    client?: BerryFirmnessList["client"]["parameters"];
} = {}): UseQueryResult<TData, BerryFirmnessList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? berryFirmnessListQueryKey(params);
    const query = useQuery({
        ...berryFirmnessListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, BerryFirmnessList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const berryFirmnessListSuspenseQueryKey = (params?: BerryFirmnessList["queryParams"]) => ["v5", { url: "/api/v2/berry-firmness/" }, ...(params ? [params] : [])] as const;
export type BerryFirmnessListSuspenseQueryKey = ReturnType<typeof berryFirmnessListSuspenseQueryKey>;
export function berryFirmnessListSuspenseQueryOptions(params?: BerryFirmnessList["queryParams"], options: BerryFirmnessList["client"]["parameters"] = {}) {
    const queryKey = berryFirmnessListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<BerryFirmnessList["data"], BerryFirmnessList["error"]>({
                method: "get",
                url: `/api/v2/berry-firmness/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Berries can be soft or hard. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail.
 * @summary List berry firmness
 * @link /api/v2/berry-firmness/
 */
export function useBerryFirmnessListHookSuspense<TData = BerryFirmnessList["response"], TQueryKey extends QueryKey = BerryFirmnessListSuspenseQueryKey>(params?: BerryFirmnessList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<BerryFirmnessList["response"], BerryFirmnessList["error"], TData, TQueryKey>>;
    client?: BerryFirmnessList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, BerryFirmnessList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? berryFirmnessListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...berryFirmnessListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, BerryFirmnessList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}