import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { MoveBattleStyleRetrieveQueryResponseType, MoveBattleStyleRetrievePathParamsType } from "../ts/MoveBattleStyleRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type MoveBattleStyleRetrieveClient = typeof client<MoveBattleStyleRetrieveQueryResponseType, Error, never>;
type MoveBattleStyleRetrieve = {
    data: MoveBattleStyleRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: MoveBattleStyleRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: MoveBattleStyleRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<MoveBattleStyleRetrieveClient>[0]>;
        return: Awaited<ReturnType<MoveBattleStyleRetrieveClient>>;
    };
};
export const moveBattleStyleRetrieveQueryKey = (id: MoveBattleStyleRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/move-battle-style/:id/", params: { id: id } }] as const;
export type MoveBattleStyleRetrieveQueryKey = ReturnType<typeof moveBattleStyleRetrieveQueryKey>;
export function moveBattleStyleRetrieveQueryOptions(id: MoveBattleStyleRetrievePathParamsType["id"], options: MoveBattleStyleRetrieve["client"]["parameters"] = {}) {
    const queryKey = moveBattleStyleRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveBattleStyleRetrieve["data"], MoveBattleStyleRetrieve["error"]>({
                method: "get",
                url: `/api/v2/move-battle-style/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail.
 * @summary Get move battle style
 * @link /api/v2/move-battle-style/:id/
 */
export function useMoveBattleStyleRetrieveHook<TData = MoveBattleStyleRetrieve["response"], TQueryData = MoveBattleStyleRetrieve["response"], TQueryKey extends QueryKey = MoveBattleStyleRetrieveQueryKey>(id: MoveBattleStyleRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<MoveBattleStyleRetrieve["response"], MoveBattleStyleRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: MoveBattleStyleRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, MoveBattleStyleRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveBattleStyleRetrieveQueryKey(id);
    const query = useQuery({
        ...moveBattleStyleRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, MoveBattleStyleRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const moveBattleStyleRetrieveSuspenseQueryKey = (id: MoveBattleStyleRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/move-battle-style/:id/", params: { id: id } }] as const;
export type MoveBattleStyleRetrieveSuspenseQueryKey = ReturnType<typeof moveBattleStyleRetrieveSuspenseQueryKey>;
export function moveBattleStyleRetrieveSuspenseQueryOptions(id: MoveBattleStyleRetrievePathParamsType["id"], options: MoveBattleStyleRetrieve["client"]["parameters"] = {}) {
    const queryKey = moveBattleStyleRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveBattleStyleRetrieve["data"], MoveBattleStyleRetrieve["error"]>({
                method: "get",
                url: `/api/v2/move-battle-style/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail.
 * @summary Get move battle style
 * @link /api/v2/move-battle-style/:id/
 */
export function useMoveBattleStyleRetrieveHookSuspense<TData = MoveBattleStyleRetrieve["response"], TQueryKey extends QueryKey = MoveBattleStyleRetrieveSuspenseQueryKey>(id: MoveBattleStyleRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<MoveBattleStyleRetrieve["response"], MoveBattleStyleRetrieve["error"], TData, TQueryKey>>;
    client?: MoveBattleStyleRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, MoveBattleStyleRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveBattleStyleRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...moveBattleStyleRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, MoveBattleStyleRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}