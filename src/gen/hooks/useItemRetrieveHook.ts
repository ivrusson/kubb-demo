import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ItemRetrieveQueryResponseType, ItemRetrievePathParamsType } from "../ts/ItemRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ItemRetrieveClient = typeof client<ItemRetrieveQueryResponseType, Error, never>;
type ItemRetrieve = {
    data: ItemRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: ItemRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: ItemRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<ItemRetrieveClient>[0]>;
        return: Awaited<ReturnType<ItemRetrieveClient>>;
    };
};
export const itemRetrieveQueryKey = (id: ItemRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/item/:id/", params: { id: id } }] as const;
export type ItemRetrieveQueryKey = ReturnType<typeof itemRetrieveQueryKey>;
export function itemRetrieveQueryOptions(id: ItemRetrievePathParamsType["id"], options: ItemRetrieve["client"]["parameters"] = {}) {
    const queryKey = itemRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ItemRetrieve["data"], ItemRetrieve["error"]>({
                method: "get",
                url: `/api/v2/item/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.
 * @summary Get item
 * @link /api/v2/item/:id/
 */
export function useItemRetrieveHook<TData = ItemRetrieve["response"], TQueryData = ItemRetrieve["response"], TQueryKey extends QueryKey = ItemRetrieveQueryKey>(id: ItemRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<ItemRetrieve["response"], ItemRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: ItemRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, ItemRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? itemRetrieveQueryKey(id);
    const query = useQuery({
        ...itemRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ItemRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const itemRetrieveSuspenseQueryKey = (id: ItemRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/item/:id/", params: { id: id } }] as const;
export type ItemRetrieveSuspenseQueryKey = ReturnType<typeof itemRetrieveSuspenseQueryKey>;
export function itemRetrieveSuspenseQueryOptions(id: ItemRetrievePathParamsType["id"], options: ItemRetrieve["client"]["parameters"] = {}) {
    const queryKey = itemRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ItemRetrieve["data"], ItemRetrieve["error"]>({
                method: "get",
                url: `/api/v2/item/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.
 * @summary Get item
 * @link /api/v2/item/:id/
 */
export function useItemRetrieveHookSuspense<TData = ItemRetrieve["response"], TQueryKey extends QueryKey = ItemRetrieveSuspenseQueryKey>(id: ItemRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<ItemRetrieve["response"], ItemRetrieve["error"], TData, TQueryKey>>;
    client?: ItemRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ItemRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? itemRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...itemRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ItemRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}