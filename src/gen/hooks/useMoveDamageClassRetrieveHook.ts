import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { MoveDamageClassRetrieveQueryResponseType, MoveDamageClassRetrievePathParamsType } from "../ts/MoveDamageClassRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type MoveDamageClassRetrieveClient = typeof client<MoveDamageClassRetrieveQueryResponseType, Error, never>;
type MoveDamageClassRetrieve = {
    data: MoveDamageClassRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: MoveDamageClassRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: MoveDamageClassRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<MoveDamageClassRetrieveClient>[0]>;
        return: Awaited<ReturnType<MoveDamageClassRetrieveClient>>;
    };
};
export const moveDamageClassRetrieveQueryKey = (id: MoveDamageClassRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/move-damage-class/:id/", params: { id: id } }] as const;
export type MoveDamageClassRetrieveQueryKey = ReturnType<typeof moveDamageClassRetrieveQueryKey>;
export function moveDamageClassRetrieveQueryOptions(id: MoveDamageClassRetrievePathParamsType["id"], options: MoveDamageClassRetrieve["client"]["parameters"] = {}) {
    const queryKey = moveDamageClassRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveDamageClassRetrieve["data"], MoveDamageClassRetrieve["error"]>({
                method: "get",
                url: `/api/v2/move-damage-class/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Damage classes moves can have, e.g. physical, special, or non-damaging.
 * @summary Get move damage class
 * @link /api/v2/move-damage-class/:id/
 */
export function useMoveDamageClassRetrieveHook<TData = MoveDamageClassRetrieve["response"], TQueryData = MoveDamageClassRetrieve["response"], TQueryKey extends QueryKey = MoveDamageClassRetrieveQueryKey>(id: MoveDamageClassRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<MoveDamageClassRetrieve["response"], MoveDamageClassRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: MoveDamageClassRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, MoveDamageClassRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveDamageClassRetrieveQueryKey(id);
    const query = useQuery({
        ...moveDamageClassRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, MoveDamageClassRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const moveDamageClassRetrieveSuspenseQueryKey = (id: MoveDamageClassRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/move-damage-class/:id/", params: { id: id } }] as const;
export type MoveDamageClassRetrieveSuspenseQueryKey = ReturnType<typeof moveDamageClassRetrieveSuspenseQueryKey>;
export function moveDamageClassRetrieveSuspenseQueryOptions(id: MoveDamageClassRetrievePathParamsType["id"], options: MoveDamageClassRetrieve["client"]["parameters"] = {}) {
    const queryKey = moveDamageClassRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveDamageClassRetrieve["data"], MoveDamageClassRetrieve["error"]>({
                method: "get",
                url: `/api/v2/move-damage-class/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Damage classes moves can have, e.g. physical, special, or non-damaging.
 * @summary Get move damage class
 * @link /api/v2/move-damage-class/:id/
 */
export function useMoveDamageClassRetrieveHookSuspense<TData = MoveDamageClassRetrieve["response"], TQueryKey extends QueryKey = MoveDamageClassRetrieveSuspenseQueryKey>(id: MoveDamageClassRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<MoveDamageClassRetrieve["response"], MoveDamageClassRetrieve["error"], TData, TQueryKey>>;
    client?: MoveDamageClassRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, MoveDamageClassRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveDamageClassRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...moveDamageClassRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, MoveDamageClassRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}