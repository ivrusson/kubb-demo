import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { BerryListQueryResponseType, BerryListQueryParamsType } from "../ts/BerryListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type BerryListClient = typeof client<BerryListQueryResponseType, Error, never>;
type BerryList = {
    data: BerryListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: BerryListQueryParamsType;
    headerParams: never;
    response: BerryListQueryResponseType;
    client: {
        parameters: Partial<Parameters<BerryListClient>[0]>;
        return: Awaited<ReturnType<BerryListClient>>;
    };
};
export const berryListQueryKey = (params?: BerryList["queryParams"]) => ["v5", { url: "/api/v2/berry/" }, ...(params ? [params] : [])] as const;
export type BerryListQueryKey = ReturnType<typeof berryListQueryKey>;
export function berryListQueryOptions(params?: BerryList["queryParams"], options: BerryList["client"]["parameters"] = {}) {
    const queryKey = berryListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<BerryList["data"], BerryList["error"]>({
                method: "get",
                url: `/api/v2/berry/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Berry) for greater detail.
 * @summary List berries
 * @link /api/v2/berry/
 */
export function useBerryListHook<TData = BerryList["response"], TQueryData = BerryList["response"], TQueryKey extends QueryKey = BerryListQueryKey>(params?: BerryList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<BerryList["response"], BerryList["error"], TData, TQueryData, TQueryKey>>;
    client?: BerryList["client"]["parameters"];
} = {}): UseQueryResult<TData, BerryList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? berryListQueryKey(params);
    const query = useQuery({
        ...berryListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, BerryList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const berryListSuspenseQueryKey = (params?: BerryList["queryParams"]) => ["v5", { url: "/api/v2/berry/" }, ...(params ? [params] : [])] as const;
export type BerryListSuspenseQueryKey = ReturnType<typeof berryListSuspenseQueryKey>;
export function berryListSuspenseQueryOptions(params?: BerryList["queryParams"], options: BerryList["client"]["parameters"] = {}) {
    const queryKey = berryListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<BerryList["data"], BerryList["error"]>({
                method: "get",
                url: `/api/v2/berry/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Berry) for greater detail.
 * @summary List berries
 * @link /api/v2/berry/
 */
export function useBerryListHookSuspense<TData = BerryList["response"], TQueryKey extends QueryKey = BerryListSuspenseQueryKey>(params?: BerryList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<BerryList["response"], BerryList["error"], TData, TQueryKey>>;
    client?: BerryList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, BerryList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? berryListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...berryListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, BerryList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}