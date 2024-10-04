import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ItemAttributeListQueryResponseType, ItemAttributeListQueryParamsType } from "../ts/ItemAttributeListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ItemAttributeListClient = typeof client<ItemAttributeListQueryResponseType, Error, never>;
type ItemAttributeList = {
    data: ItemAttributeListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: ItemAttributeListQueryParamsType;
    headerParams: never;
    response: ItemAttributeListQueryResponseType;
    client: {
        parameters: Partial<Parameters<ItemAttributeListClient>[0]>;
        return: Awaited<ReturnType<ItemAttributeListClient>>;
    };
};
export const itemAttributeListQueryKey = (params?: ItemAttributeList["queryParams"]) => ["v5", { url: "/api/v2/item-attribute/" }, ...(params ? [params] : [])] as const;
export type ItemAttributeListQueryKey = ReturnType<typeof itemAttributeListQueryKey>;
export function itemAttributeListQueryOptions(params?: ItemAttributeList["queryParams"], options: ItemAttributeList["client"]["parameters"] = {}) {
    const queryKey = itemAttributeListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ItemAttributeList["data"], ItemAttributeList["error"]>({
                method: "get",
                url: `/api/v2/item-attribute/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Item attributes define particular aspects of items, e.g."usable in battle" or "consumable".
 * @summary List item attributes
 * @link /api/v2/item-attribute/
 */
export function useItemAttributeListHook<TData = ItemAttributeList["response"], TQueryData = ItemAttributeList["response"], TQueryKey extends QueryKey = ItemAttributeListQueryKey>(params?: ItemAttributeList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ItemAttributeList["response"], ItemAttributeList["error"], TData, TQueryData, TQueryKey>>;
    client?: ItemAttributeList["client"]["parameters"];
} = {}): UseQueryResult<TData, ItemAttributeList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? itemAttributeListQueryKey(params);
    const query = useQuery({
        ...itemAttributeListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ItemAttributeList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const itemAttributeListSuspenseQueryKey = (params?: ItemAttributeList["queryParams"]) => ["v5", { url: "/api/v2/item-attribute/" }, ...(params ? [params] : [])] as const;
export type ItemAttributeListSuspenseQueryKey = ReturnType<typeof itemAttributeListSuspenseQueryKey>;
export function itemAttributeListSuspenseQueryOptions(params?: ItemAttributeList["queryParams"], options: ItemAttributeList["client"]["parameters"] = {}) {
    const queryKey = itemAttributeListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ItemAttributeList["data"], ItemAttributeList["error"]>({
                method: "get",
                url: `/api/v2/item-attribute/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Item attributes define particular aspects of items, e.g."usable in battle" or "consumable".
 * @summary List item attributes
 * @link /api/v2/item-attribute/
 */
export function useItemAttributeListHookSuspense<TData = ItemAttributeList["response"], TQueryKey extends QueryKey = ItemAttributeListSuspenseQueryKey>(params?: ItemAttributeList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ItemAttributeList["response"], ItemAttributeList["error"], TData, TQueryKey>>;
    client?: ItemAttributeList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ItemAttributeList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? itemAttributeListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...itemAttributeListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ItemAttributeList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}