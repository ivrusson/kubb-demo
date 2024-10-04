import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ItemAttributeRetrieveQueryResponseType, ItemAttributeRetrievePathParamsType } from "../ts/ItemAttributeRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ItemAttributeRetrieveClient = typeof client<ItemAttributeRetrieveQueryResponseType, Error, never>;
type ItemAttributeRetrieve = {
    data: ItemAttributeRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: ItemAttributeRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: ItemAttributeRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<ItemAttributeRetrieveClient>[0]>;
        return: Awaited<ReturnType<ItemAttributeRetrieveClient>>;
    };
};
export const itemAttributeRetrieveQueryKey = (id: ItemAttributeRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/item-attribute/:id/", params: { id: id } }] as const;
export type ItemAttributeRetrieveQueryKey = ReturnType<typeof itemAttributeRetrieveQueryKey>;
export function itemAttributeRetrieveQueryOptions(id: ItemAttributeRetrievePathParamsType["id"], options: ItemAttributeRetrieve["client"]["parameters"] = {}) {
    const queryKey = itemAttributeRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ItemAttributeRetrieve["data"], ItemAttributeRetrieve["error"]>({
                method: "get",
                url: `/api/v2/item-attribute/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Item attributes define particular aspects of items, e.g."usable in battle" or "consumable".
 * @summary Get item attribute
 * @link /api/v2/item-attribute/:id/
 */
export function useItemAttributeRetrieveHook<TData = ItemAttributeRetrieve["response"], TQueryData = ItemAttributeRetrieve["response"], TQueryKey extends QueryKey = ItemAttributeRetrieveQueryKey>(id: ItemAttributeRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<ItemAttributeRetrieve["response"], ItemAttributeRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: ItemAttributeRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, ItemAttributeRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? itemAttributeRetrieveQueryKey(id);
    const query = useQuery({
        ...itemAttributeRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ItemAttributeRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const itemAttributeRetrieveSuspenseQueryKey = (id: ItemAttributeRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/item-attribute/:id/", params: { id: id } }] as const;
export type ItemAttributeRetrieveSuspenseQueryKey = ReturnType<typeof itemAttributeRetrieveSuspenseQueryKey>;
export function itemAttributeRetrieveSuspenseQueryOptions(id: ItemAttributeRetrievePathParamsType["id"], options: ItemAttributeRetrieve["client"]["parameters"] = {}) {
    const queryKey = itemAttributeRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ItemAttributeRetrieve["data"], ItemAttributeRetrieve["error"]>({
                method: "get",
                url: `/api/v2/item-attribute/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Item attributes define particular aspects of items, e.g."usable in battle" or "consumable".
 * @summary Get item attribute
 * @link /api/v2/item-attribute/:id/
 */
export function useItemAttributeRetrieveHookSuspense<TData = ItemAttributeRetrieve["response"], TQueryKey extends QueryKey = ItemAttributeRetrieveSuspenseQueryKey>(id: ItemAttributeRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<ItemAttributeRetrieve["response"], ItemAttributeRetrieve["error"], TData, TQueryKey>>;
    client?: ItemAttributeRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ItemAttributeRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? itemAttributeRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...itemAttributeRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ItemAttributeRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}