import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ItemPocketListQueryResponseType, ItemPocketListQueryParamsType } from "../ts/ItemPocketListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ItemPocketListClient = typeof client<ItemPocketListQueryResponseType, Error, never>;
type ItemPocketList = {
    data: ItemPocketListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: ItemPocketListQueryParamsType;
    headerParams: never;
    response: ItemPocketListQueryResponseType;
    client: {
        parameters: Partial<Parameters<ItemPocketListClient>[0]>;
        return: Awaited<ReturnType<ItemPocketListClient>>;
    };
};
export const itemPocketListQueryKey = (params?: ItemPocketList["queryParams"]) => ["v5", { url: "/api/v2/item-pocket/" }, ...(params ? [params] : [])] as const;
export type ItemPocketListQueryKey = ReturnType<typeof itemPocketListQueryKey>;
export function itemPocketListQueryOptions(params?: ItemPocketList["queryParams"], options: ItemPocketList["client"]["parameters"] = {}) {
    const queryKey = itemPocketListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ItemPocketList["data"], ItemPocketList["error"]>({
                method: "get",
                url: `/api/v2/item-pocket/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Pockets within the players bag used for storing items by category.
 * @summary List item pockets
 * @link /api/v2/item-pocket/
 */
export function useItemPocketListHook<TData = ItemPocketList["response"], TQueryData = ItemPocketList["response"], TQueryKey extends QueryKey = ItemPocketListQueryKey>(params?: ItemPocketList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ItemPocketList["response"], ItemPocketList["error"], TData, TQueryData, TQueryKey>>;
    client?: ItemPocketList["client"]["parameters"];
} = {}): UseQueryResult<TData, ItemPocketList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? itemPocketListQueryKey(params);
    const query = useQuery({
        ...itemPocketListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ItemPocketList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const itemPocketListSuspenseQueryKey = (params?: ItemPocketList["queryParams"]) => ["v5", { url: "/api/v2/item-pocket/" }, ...(params ? [params] : [])] as const;
export type ItemPocketListSuspenseQueryKey = ReturnType<typeof itemPocketListSuspenseQueryKey>;
export function itemPocketListSuspenseQueryOptions(params?: ItemPocketList["queryParams"], options: ItemPocketList["client"]["parameters"] = {}) {
    const queryKey = itemPocketListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ItemPocketList["data"], ItemPocketList["error"]>({
                method: "get",
                url: `/api/v2/item-pocket/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Pockets within the players bag used for storing items by category.
 * @summary List item pockets
 * @link /api/v2/item-pocket/
 */
export function useItemPocketListHookSuspense<TData = ItemPocketList["response"], TQueryKey extends QueryKey = ItemPocketListSuspenseQueryKey>(params?: ItemPocketList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ItemPocketList["response"], ItemPocketList["error"], TData, TQueryKey>>;
    client?: ItemPocketList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ItemPocketList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? itemPocketListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...itemPocketListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ItemPocketList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}