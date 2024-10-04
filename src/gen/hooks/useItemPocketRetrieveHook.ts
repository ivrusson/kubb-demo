import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ItemPocketRetrieveQueryResponseType, ItemPocketRetrievePathParamsType } from "../ts/ItemPocketRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ItemPocketRetrieveClient = typeof client<ItemPocketRetrieveQueryResponseType, Error, never>;
type ItemPocketRetrieve = {
    data: ItemPocketRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: ItemPocketRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: ItemPocketRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<ItemPocketRetrieveClient>[0]>;
        return: Awaited<ReturnType<ItemPocketRetrieveClient>>;
    };
};
export const itemPocketRetrieveQueryKey = (id: ItemPocketRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/item-pocket/:id/", params: { id: id } }] as const;
export type ItemPocketRetrieveQueryKey = ReturnType<typeof itemPocketRetrieveQueryKey>;
export function itemPocketRetrieveQueryOptions(id: ItemPocketRetrievePathParamsType["id"], options: ItemPocketRetrieve["client"]["parameters"] = {}) {
    const queryKey = itemPocketRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ItemPocketRetrieve["data"], ItemPocketRetrieve["error"]>({
                method: "get",
                url: `/api/v2/item-pocket/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Pockets within the players bag used for storing items by category.
 * @summary Get item pocket
 * @link /api/v2/item-pocket/:id/
 */
export function useItemPocketRetrieveHook<TData = ItemPocketRetrieve["response"], TQueryData = ItemPocketRetrieve["response"], TQueryKey extends QueryKey = ItemPocketRetrieveQueryKey>(id: ItemPocketRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<ItemPocketRetrieve["response"], ItemPocketRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: ItemPocketRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, ItemPocketRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? itemPocketRetrieveQueryKey(id);
    const query = useQuery({
        ...itemPocketRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ItemPocketRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const itemPocketRetrieveSuspenseQueryKey = (id: ItemPocketRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/item-pocket/:id/", params: { id: id } }] as const;
export type ItemPocketRetrieveSuspenseQueryKey = ReturnType<typeof itemPocketRetrieveSuspenseQueryKey>;
export function itemPocketRetrieveSuspenseQueryOptions(id: ItemPocketRetrievePathParamsType["id"], options: ItemPocketRetrieve["client"]["parameters"] = {}) {
    const queryKey = itemPocketRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ItemPocketRetrieve["data"], ItemPocketRetrieve["error"]>({
                method: "get",
                url: `/api/v2/item-pocket/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Pockets within the players bag used for storing items by category.
 * @summary Get item pocket
 * @link /api/v2/item-pocket/:id/
 */
export function useItemPocketRetrieveHookSuspense<TData = ItemPocketRetrieve["response"], TQueryKey extends QueryKey = ItemPocketRetrieveSuspenseQueryKey>(id: ItemPocketRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<ItemPocketRetrieve["response"], ItemPocketRetrieve["error"], TData, TQueryKey>>;
    client?: ItemPocketRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ItemPocketRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? itemPocketRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...itemPocketRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ItemPocketRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}