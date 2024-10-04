import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { BerryFlavorListQueryResponseType, BerryFlavorListQueryParamsType } from "../ts/BerryFlavorListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type BerryFlavorListClient = typeof client<BerryFlavorListQueryResponseType, Error, never>;
type BerryFlavorList = {
    data: BerryFlavorListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: BerryFlavorListQueryParamsType;
    headerParams: never;
    response: BerryFlavorListQueryResponseType;
    client: {
        parameters: Partial<Parameters<BerryFlavorListClient>[0]>;
        return: Awaited<ReturnType<BerryFlavorListClient>>;
    };
};
export const berryFlavorListQueryKey = (params?: BerryFlavorList["queryParams"]) => ["v5", { url: "/api/v2/berry-flavor/" }, ...(params ? [params] : [])] as const;
export type BerryFlavorListQueryKey = ReturnType<typeof berryFlavorListQueryKey>;
export function berryFlavorListQueryOptions(params?: BerryFlavorList["queryParams"], options: BerryFlavorList["client"]["parameters"] = {}) {
    const queryKey = berryFlavorListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<BerryFlavorList["data"], BerryFlavorList["error"]>({
                method: "get",
                url: `/api/v2/berry-flavor/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their **nature**. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.
 * @summary List berry flavors
 * @link /api/v2/berry-flavor/
 */
export function useBerryFlavorListHook<TData = BerryFlavorList["response"], TQueryData = BerryFlavorList["response"], TQueryKey extends QueryKey = BerryFlavorListQueryKey>(params?: BerryFlavorList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<BerryFlavorList["response"], BerryFlavorList["error"], TData, TQueryData, TQueryKey>>;
    client?: BerryFlavorList["client"]["parameters"];
} = {}): UseQueryResult<TData, BerryFlavorList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? berryFlavorListQueryKey(params);
    const query = useQuery({
        ...berryFlavorListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, BerryFlavorList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const berryFlavorListSuspenseQueryKey = (params?: BerryFlavorList["queryParams"]) => ["v5", { url: "/api/v2/berry-flavor/" }, ...(params ? [params] : [])] as const;
export type BerryFlavorListSuspenseQueryKey = ReturnType<typeof berryFlavorListSuspenseQueryKey>;
export function berryFlavorListSuspenseQueryOptions(params?: BerryFlavorList["queryParams"], options: BerryFlavorList["client"]["parameters"] = {}) {
    const queryKey = berryFlavorListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<BerryFlavorList["data"], BerryFlavorList["error"]>({
                method: "get",
                url: `/api/v2/berry-flavor/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their **nature**. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.
 * @summary List berry flavors
 * @link /api/v2/berry-flavor/
 */
export function useBerryFlavorListHookSuspense<TData = BerryFlavorList["response"], TQueryKey extends QueryKey = BerryFlavorListSuspenseQueryKey>(params?: BerryFlavorList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<BerryFlavorList["response"], BerryFlavorList["error"], TData, TQueryKey>>;
    client?: BerryFlavorList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, BerryFlavorList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? berryFlavorListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...berryFlavorListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, BerryFlavorList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}