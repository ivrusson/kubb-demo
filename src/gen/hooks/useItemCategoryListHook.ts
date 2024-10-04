import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ItemCategoryListQueryResponseType, ItemCategoryListQueryParamsType } from "../ts/ItemCategoryListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ItemCategoryListClient = typeof client<ItemCategoryListQueryResponseType, Error, never>;
type ItemCategoryList = {
    data: ItemCategoryListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: ItemCategoryListQueryParamsType;
    headerParams: never;
    response: ItemCategoryListQueryResponseType;
    client: {
        parameters: Partial<Parameters<ItemCategoryListClient>[0]>;
        return: Awaited<ReturnType<ItemCategoryListClient>>;
    };
};
export const itemCategoryListQueryKey = (params?: ItemCategoryList["queryParams"]) => ["v5", { url: "/api/v2/item-category/" }, ...(params ? [params] : [])] as const;
export type ItemCategoryListQueryKey = ReturnType<typeof itemCategoryListQueryKey>;
export function itemCategoryListQueryOptions(params?: ItemCategoryList["queryParams"], options: ItemCategoryList["client"]["parameters"] = {}) {
    const queryKey = itemCategoryListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ItemCategoryList["data"], ItemCategoryList["error"]>({
                method: "get",
                url: `/api/v2/item-category/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Item categories determine where items will be placed in the players bag.
 * @summary List item categories
 * @link /api/v2/item-category/
 */
export function useItemCategoryListHook<TData = ItemCategoryList["response"], TQueryData = ItemCategoryList["response"], TQueryKey extends QueryKey = ItemCategoryListQueryKey>(params?: ItemCategoryList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ItemCategoryList["response"], ItemCategoryList["error"], TData, TQueryData, TQueryKey>>;
    client?: ItemCategoryList["client"]["parameters"];
} = {}): UseQueryResult<TData, ItemCategoryList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? itemCategoryListQueryKey(params);
    const query = useQuery({
        ...itemCategoryListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ItemCategoryList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const itemCategoryListSuspenseQueryKey = (params?: ItemCategoryList["queryParams"]) => ["v5", { url: "/api/v2/item-category/" }, ...(params ? [params] : [])] as const;
export type ItemCategoryListSuspenseQueryKey = ReturnType<typeof itemCategoryListSuspenseQueryKey>;
export function itemCategoryListSuspenseQueryOptions(params?: ItemCategoryList["queryParams"], options: ItemCategoryList["client"]["parameters"] = {}) {
    const queryKey = itemCategoryListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ItemCategoryList["data"], ItemCategoryList["error"]>({
                method: "get",
                url: `/api/v2/item-category/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Item categories determine where items will be placed in the players bag.
 * @summary List item categories
 * @link /api/v2/item-category/
 */
export function useItemCategoryListHookSuspense<TData = ItemCategoryList["response"], TQueryKey extends QueryKey = ItemCategoryListSuspenseQueryKey>(params?: ItemCategoryList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ItemCategoryList["response"], ItemCategoryList["error"], TData, TQueryKey>>;
    client?: ItemCategoryList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ItemCategoryList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? itemCategoryListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...itemCategoryListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ItemCategoryList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}