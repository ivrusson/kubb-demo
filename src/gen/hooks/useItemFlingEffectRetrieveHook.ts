import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ItemFlingEffectRetrieveQueryResponseType, ItemFlingEffectRetrievePathParamsType } from "../ts/ItemFlingEffectRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ItemFlingEffectRetrieveClient = typeof client<ItemFlingEffectRetrieveQueryResponseType, Error, never>;
type ItemFlingEffectRetrieve = {
    data: ItemFlingEffectRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: ItemFlingEffectRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: ItemFlingEffectRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<ItemFlingEffectRetrieveClient>[0]>;
        return: Awaited<ReturnType<ItemFlingEffectRetrieveClient>>;
    };
};
export const itemFlingEffectRetrieveQueryKey = (id: ItemFlingEffectRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/item-fling-effect/:id/", params: { id: id } }] as const;
export type ItemFlingEffectRetrieveQueryKey = ReturnType<typeof itemFlingEffectRetrieveQueryKey>;
export function itemFlingEffectRetrieveQueryOptions(id: ItemFlingEffectRetrievePathParamsType["id"], options: ItemFlingEffectRetrieve["client"]["parameters"] = {}) {
    const queryKey = itemFlingEffectRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ItemFlingEffectRetrieve["data"], ItemFlingEffectRetrieve["error"]>({
                method: "get",
                url: `/api/v2/item-fling-effect/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description The various effects of the move"Fling" when used with different items.
 * @summary Get item fling effect
 * @link /api/v2/item-fling-effect/:id/
 */
export function useItemFlingEffectRetrieveHook<TData = ItemFlingEffectRetrieve["response"], TQueryData = ItemFlingEffectRetrieve["response"], TQueryKey extends QueryKey = ItemFlingEffectRetrieveQueryKey>(id: ItemFlingEffectRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<ItemFlingEffectRetrieve["response"], ItemFlingEffectRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: ItemFlingEffectRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, ItemFlingEffectRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? itemFlingEffectRetrieveQueryKey(id);
    const query = useQuery({
        ...itemFlingEffectRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ItemFlingEffectRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const itemFlingEffectRetrieveSuspenseQueryKey = (id: ItemFlingEffectRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/item-fling-effect/:id/", params: { id: id } }] as const;
export type ItemFlingEffectRetrieveSuspenseQueryKey = ReturnType<typeof itemFlingEffectRetrieveSuspenseQueryKey>;
export function itemFlingEffectRetrieveSuspenseQueryOptions(id: ItemFlingEffectRetrievePathParamsType["id"], options: ItemFlingEffectRetrieve["client"]["parameters"] = {}) {
    const queryKey = itemFlingEffectRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ItemFlingEffectRetrieve["data"], ItemFlingEffectRetrieve["error"]>({
                method: "get",
                url: `/api/v2/item-fling-effect/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description The various effects of the move"Fling" when used with different items.
 * @summary Get item fling effect
 * @link /api/v2/item-fling-effect/:id/
 */
export function useItemFlingEffectRetrieveHookSuspense<TData = ItemFlingEffectRetrieve["response"], TQueryKey extends QueryKey = ItemFlingEffectRetrieveSuspenseQueryKey>(id: ItemFlingEffectRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<ItemFlingEffectRetrieve["response"], ItemFlingEffectRetrieve["error"], TData, TQueryKey>>;
    client?: ItemFlingEffectRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ItemFlingEffectRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? itemFlingEffectRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...itemFlingEffectRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ItemFlingEffectRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}