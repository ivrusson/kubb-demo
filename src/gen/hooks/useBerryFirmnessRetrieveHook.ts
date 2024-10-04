import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { BerryFirmnessRetrieveQueryResponseType, BerryFirmnessRetrievePathParamsType } from "../ts/BerryFirmnessRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type BerryFirmnessRetrieveClient = typeof client<BerryFirmnessRetrieveQueryResponseType, Error, never>;
type BerryFirmnessRetrieve = {
    data: BerryFirmnessRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: BerryFirmnessRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: BerryFirmnessRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<BerryFirmnessRetrieveClient>[0]>;
        return: Awaited<ReturnType<BerryFirmnessRetrieveClient>>;
    };
};
export const berryFirmnessRetrieveQueryKey = (id: BerryFirmnessRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/berry-firmness/:id/", params: { id: id } }] as const;
export type BerryFirmnessRetrieveQueryKey = ReturnType<typeof berryFirmnessRetrieveQueryKey>;
export function berryFirmnessRetrieveQueryOptions(id: BerryFirmnessRetrievePathParamsType["id"], options: BerryFirmnessRetrieve["client"]["parameters"] = {}) {
    const queryKey = berryFirmnessRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<BerryFirmnessRetrieve["data"], BerryFirmnessRetrieve["error"]>({
                method: "get",
                url: `/api/v2/berry-firmness/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Berries can be soft or hard. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail.
 * @summary Get berry by firmness
 * @link /api/v2/berry-firmness/:id/
 */
export function useBerryFirmnessRetrieveHook<TData = BerryFirmnessRetrieve["response"], TQueryData = BerryFirmnessRetrieve["response"], TQueryKey extends QueryKey = BerryFirmnessRetrieveQueryKey>(id: BerryFirmnessRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<BerryFirmnessRetrieve["response"], BerryFirmnessRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: BerryFirmnessRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, BerryFirmnessRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? berryFirmnessRetrieveQueryKey(id);
    const query = useQuery({
        ...berryFirmnessRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, BerryFirmnessRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const berryFirmnessRetrieveSuspenseQueryKey = (id: BerryFirmnessRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/berry-firmness/:id/", params: { id: id } }] as const;
export type BerryFirmnessRetrieveSuspenseQueryKey = ReturnType<typeof berryFirmnessRetrieveSuspenseQueryKey>;
export function berryFirmnessRetrieveSuspenseQueryOptions(id: BerryFirmnessRetrievePathParamsType["id"], options: BerryFirmnessRetrieve["client"]["parameters"] = {}) {
    const queryKey = berryFirmnessRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<BerryFirmnessRetrieve["data"], BerryFirmnessRetrieve["error"]>({
                method: "get",
                url: `/api/v2/berry-firmness/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Berries can be soft or hard. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail.
 * @summary Get berry by firmness
 * @link /api/v2/berry-firmness/:id/
 */
export function useBerryFirmnessRetrieveHookSuspense<TData = BerryFirmnessRetrieve["response"], TQueryKey extends QueryKey = BerryFirmnessRetrieveSuspenseQueryKey>(id: BerryFirmnessRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<BerryFirmnessRetrieve["response"], BerryFirmnessRetrieve["error"], TData, TQueryKey>>;
    client?: BerryFirmnessRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, BerryFirmnessRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? berryFirmnessRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...berryFirmnessRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, BerryFirmnessRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}