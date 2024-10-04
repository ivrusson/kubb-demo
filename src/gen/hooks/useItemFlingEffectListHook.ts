import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ItemFlingEffectListQueryResponseType, ItemFlingEffectListQueryParamsType } from "../ts/ItemFlingEffectListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ItemFlingEffectListClient = typeof client<ItemFlingEffectListQueryResponseType, Error, never>;
type ItemFlingEffectList = {
    data: ItemFlingEffectListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: ItemFlingEffectListQueryParamsType;
    headerParams: never;
    response: ItemFlingEffectListQueryResponseType;
    client: {
        parameters: Partial<Parameters<ItemFlingEffectListClient>[0]>;
        return: Awaited<ReturnType<ItemFlingEffectListClient>>;
    };
};
export const itemFlingEffectListQueryKey = (params?: ItemFlingEffectList["queryParams"]) => ["v5", { url: "/api/v2/item-fling-effect/" }, ...(params ? [params] : [])] as const;
export type ItemFlingEffectListQueryKey = ReturnType<typeof itemFlingEffectListQueryKey>;
export function itemFlingEffectListQueryOptions(params?: ItemFlingEffectList["queryParams"], options: ItemFlingEffectList["client"]["parameters"] = {}) {
    const queryKey = itemFlingEffectListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ItemFlingEffectList["data"], ItemFlingEffectList["error"]>({
                method: "get",
                url: `/api/v2/item-fling-effect/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description The various effects of the move"Fling" when used with different items.
 * @summary List item fling effects
 * @link /api/v2/item-fling-effect/
 */
export function useItemFlingEffectListHook<TData = ItemFlingEffectList["response"], TQueryData = ItemFlingEffectList["response"], TQueryKey extends QueryKey = ItemFlingEffectListQueryKey>(params?: ItemFlingEffectList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ItemFlingEffectList["response"], ItemFlingEffectList["error"], TData, TQueryData, TQueryKey>>;
    client?: ItemFlingEffectList["client"]["parameters"];
} = {}): UseQueryResult<TData, ItemFlingEffectList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? itemFlingEffectListQueryKey(params);
    const query = useQuery({
        ...itemFlingEffectListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ItemFlingEffectList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const itemFlingEffectListSuspenseQueryKey = (params?: ItemFlingEffectList["queryParams"]) => ["v5", { url: "/api/v2/item-fling-effect/" }, ...(params ? [params] : [])] as const;
export type ItemFlingEffectListSuspenseQueryKey = ReturnType<typeof itemFlingEffectListSuspenseQueryKey>;
export function itemFlingEffectListSuspenseQueryOptions(params?: ItemFlingEffectList["queryParams"], options: ItemFlingEffectList["client"]["parameters"] = {}) {
    const queryKey = itemFlingEffectListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ItemFlingEffectList["data"], ItemFlingEffectList["error"]>({
                method: "get",
                url: `/api/v2/item-fling-effect/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description The various effects of the move"Fling" when used with different items.
 * @summary List item fling effects
 * @link /api/v2/item-fling-effect/
 */
export function useItemFlingEffectListHookSuspense<TData = ItemFlingEffectList["response"], TQueryKey extends QueryKey = ItemFlingEffectListSuspenseQueryKey>(params?: ItemFlingEffectList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ItemFlingEffectList["response"], ItemFlingEffectList["error"], TData, TQueryKey>>;
    client?: ItemFlingEffectList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ItemFlingEffectList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? itemFlingEffectListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...itemFlingEffectListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ItemFlingEffectList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}