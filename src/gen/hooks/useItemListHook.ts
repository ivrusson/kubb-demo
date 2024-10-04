import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ItemListQueryResponseType, ItemListQueryParamsType } from "../ts/ItemListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ItemListClient = typeof client<ItemListQueryResponseType, Error, never>;
type ItemList = {
    data: ItemListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: ItemListQueryParamsType;
    headerParams: never;
    response: ItemListQueryResponseType;
    client: {
        parameters: Partial<Parameters<ItemListClient>[0]>;
        return: Awaited<ReturnType<ItemListClient>>;
    };
};
export const itemListQueryKey = (params?: ItemList["queryParams"]) => ["v5", { url: "/api/v2/item/" }, ...(params ? [params] : [])] as const;
export type ItemListQueryKey = ReturnType<typeof itemListQueryKey>;
export function itemListQueryOptions(params?: ItemList["queryParams"], options: ItemList["client"]["parameters"] = {}) {
    const queryKey = itemListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ItemList["data"], ItemList["error"]>({
                method: "get",
                url: `/api/v2/item/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.
 * @summary List items
 * @link /api/v2/item/
 */
export function useItemListHook<TData = ItemList["response"], TQueryData = ItemList["response"], TQueryKey extends QueryKey = ItemListQueryKey>(params?: ItemList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ItemList["response"], ItemList["error"], TData, TQueryData, TQueryKey>>;
    client?: ItemList["client"]["parameters"];
} = {}): UseQueryResult<TData, ItemList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? itemListQueryKey(params);
    const query = useQuery({
        ...itemListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ItemList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const itemListSuspenseQueryKey = (params?: ItemList["queryParams"]) => ["v5", { url: "/api/v2/item/" }, ...(params ? [params] : [])] as const;
export type ItemListSuspenseQueryKey = ReturnType<typeof itemListSuspenseQueryKey>;
export function itemListSuspenseQueryOptions(params?: ItemList["queryParams"], options: ItemList["client"]["parameters"] = {}) {
    const queryKey = itemListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ItemList["data"], ItemList["error"]>({
                method: "get",
                url: `/api/v2/item/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.
 * @summary List items
 * @link /api/v2/item/
 */
export function useItemListHookSuspense<TData = ItemList["response"], TQueryKey extends QueryKey = ItemListSuspenseQueryKey>(params?: ItemList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ItemList["response"], ItemList["error"], TData, TQueryKey>>;
    client?: ItemList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ItemList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? itemListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...itemListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ItemList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}