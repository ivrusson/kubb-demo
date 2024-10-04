import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ItemCategoryRetrieveQueryResponseType, ItemCategoryRetrievePathParamsType } from "../ts/ItemCategoryRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ItemCategoryRetrieveClient = typeof client<ItemCategoryRetrieveQueryResponseType, Error, never>;
type ItemCategoryRetrieve = {
    data: ItemCategoryRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: ItemCategoryRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: ItemCategoryRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<ItemCategoryRetrieveClient>[0]>;
        return: Awaited<ReturnType<ItemCategoryRetrieveClient>>;
    };
};
export const itemCategoryRetrieveQueryKey = (id: ItemCategoryRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/item-category/:id/", params: { id: id } }] as const;
export type ItemCategoryRetrieveQueryKey = ReturnType<typeof itemCategoryRetrieveQueryKey>;
export function itemCategoryRetrieveQueryOptions(id: ItemCategoryRetrievePathParamsType["id"], options: ItemCategoryRetrieve["client"]["parameters"] = {}) {
    const queryKey = itemCategoryRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ItemCategoryRetrieve["data"], ItemCategoryRetrieve["error"]>({
                method: "get",
                url: `/api/v2/item-category/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Item categories determine where items will be placed in the players bag.
 * @summary Get item category
 * @link /api/v2/item-category/:id/
 */
export function useItemCategoryRetrieveHook<TData = ItemCategoryRetrieve["response"], TQueryData = ItemCategoryRetrieve["response"], TQueryKey extends QueryKey = ItemCategoryRetrieveQueryKey>(id: ItemCategoryRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<ItemCategoryRetrieve["response"], ItemCategoryRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: ItemCategoryRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, ItemCategoryRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? itemCategoryRetrieveQueryKey(id);
    const query = useQuery({
        ...itemCategoryRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ItemCategoryRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const itemCategoryRetrieveSuspenseQueryKey = (id: ItemCategoryRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/item-category/:id/", params: { id: id } }] as const;
export type ItemCategoryRetrieveSuspenseQueryKey = ReturnType<typeof itemCategoryRetrieveSuspenseQueryKey>;
export function itemCategoryRetrieveSuspenseQueryOptions(id: ItemCategoryRetrievePathParamsType["id"], options: ItemCategoryRetrieve["client"]["parameters"] = {}) {
    const queryKey = itemCategoryRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ItemCategoryRetrieve["data"], ItemCategoryRetrieve["error"]>({
                method: "get",
                url: `/api/v2/item-category/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Item categories determine where items will be placed in the players bag.
 * @summary Get item category
 * @link /api/v2/item-category/:id/
 */
export function useItemCategoryRetrieveHookSuspense<TData = ItemCategoryRetrieve["response"], TQueryKey extends QueryKey = ItemCategoryRetrieveSuspenseQueryKey>(id: ItemCategoryRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<ItemCategoryRetrieve["response"], ItemCategoryRetrieve["error"], TData, TQueryKey>>;
    client?: ItemCategoryRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ItemCategoryRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? itemCategoryRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...itemCategoryRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ItemCategoryRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}