import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { MoveRetrieveQueryResponseType, MoveRetrievePathParamsType } from "../ts/MoveRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type MoveRetrieveClient = typeof client<MoveRetrieveQueryResponseType, Error, never>;
type MoveRetrieve = {
    data: MoveRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: MoveRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: MoveRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<MoveRetrieveClient>[0]>;
        return: Awaited<ReturnType<MoveRetrieveClient>>;
    };
};
export const moveRetrieveQueryKey = (id: MoveRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/move/:id/", params: { id: id } }] as const;
export type MoveRetrieveQueryKey = ReturnType<typeof moveRetrieveQueryKey>;
export function moveRetrieveQueryOptions(id: MoveRetrievePathParamsType["id"], options: MoveRetrieve["client"]["parameters"] = {}) {
    const queryKey = moveRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveRetrieve["data"], MoveRetrieve["error"]>({
                method: "get",
                url: `/api/v2/move/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.
 * @summary Get move
 * @link /api/v2/move/:id/
 */
export function useMoveRetrieveHook<TData = MoveRetrieve["response"], TQueryData = MoveRetrieve["response"], TQueryKey extends QueryKey = MoveRetrieveQueryKey>(id: MoveRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<MoveRetrieve["response"], MoveRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: MoveRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, MoveRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveRetrieveQueryKey(id);
    const query = useQuery({
        ...moveRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, MoveRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const moveRetrieveSuspenseQueryKey = (id: MoveRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/move/:id/", params: { id: id } }] as const;
export type MoveRetrieveSuspenseQueryKey = ReturnType<typeof moveRetrieveSuspenseQueryKey>;
export function moveRetrieveSuspenseQueryOptions(id: MoveRetrievePathParamsType["id"], options: MoveRetrieve["client"]["parameters"] = {}) {
    const queryKey = moveRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveRetrieve["data"], MoveRetrieve["error"]>({
                method: "get",
                url: `/api/v2/move/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.
 * @summary Get move
 * @link /api/v2/move/:id/
 */
export function useMoveRetrieveHookSuspense<TData = MoveRetrieve["response"], TQueryKey extends QueryKey = MoveRetrieveSuspenseQueryKey>(id: MoveRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<MoveRetrieve["response"], MoveRetrieve["error"], TData, TQueryKey>>;
    client?: MoveRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, MoveRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...moveRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, MoveRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}