import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { MoveLearnMethodRetrieveQueryResponseType, MoveLearnMethodRetrievePathParamsType } from "../ts/MoveLearnMethodRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type MoveLearnMethodRetrieveClient = typeof client<MoveLearnMethodRetrieveQueryResponseType, Error, never>;
type MoveLearnMethodRetrieve = {
    data: MoveLearnMethodRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: MoveLearnMethodRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: MoveLearnMethodRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<MoveLearnMethodRetrieveClient>[0]>;
        return: Awaited<ReturnType<MoveLearnMethodRetrieveClient>>;
    };
};
export const moveLearnMethodRetrieveQueryKey = (id: MoveLearnMethodRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/move-learn-method/:id/", params: { id: id } }] as const;
export type MoveLearnMethodRetrieveQueryKey = ReturnType<typeof moveLearnMethodRetrieveQueryKey>;
export function moveLearnMethodRetrieveQueryOptions(id: MoveLearnMethodRetrievePathParamsType["id"], options: MoveLearnMethodRetrieve["client"]["parameters"] = {}) {
    const queryKey = moveLearnMethodRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveLearnMethodRetrieve["data"], MoveLearnMethodRetrieve["error"]>({
                method: "get",
                url: `/api/v2/move-learn-method/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Methods by which Pokémon can learn moves.
 * @summary Get move learn method
 * @link /api/v2/move-learn-method/:id/
 */
export function useMoveLearnMethodRetrieveHook<TData = MoveLearnMethodRetrieve["response"], TQueryData = MoveLearnMethodRetrieve["response"], TQueryKey extends QueryKey = MoveLearnMethodRetrieveQueryKey>(id: MoveLearnMethodRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<MoveLearnMethodRetrieve["response"], MoveLearnMethodRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: MoveLearnMethodRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, MoveLearnMethodRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveLearnMethodRetrieveQueryKey(id);
    const query = useQuery({
        ...moveLearnMethodRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, MoveLearnMethodRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const moveLearnMethodRetrieveSuspenseQueryKey = (id: MoveLearnMethodRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/move-learn-method/:id/", params: { id: id } }] as const;
export type MoveLearnMethodRetrieveSuspenseQueryKey = ReturnType<typeof moveLearnMethodRetrieveSuspenseQueryKey>;
export function moveLearnMethodRetrieveSuspenseQueryOptions(id: MoveLearnMethodRetrievePathParamsType["id"], options: MoveLearnMethodRetrieve["client"]["parameters"] = {}) {
    const queryKey = moveLearnMethodRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveLearnMethodRetrieve["data"], MoveLearnMethodRetrieve["error"]>({
                method: "get",
                url: `/api/v2/move-learn-method/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Methods by which Pokémon can learn moves.
 * @summary Get move learn method
 * @link /api/v2/move-learn-method/:id/
 */
export function useMoveLearnMethodRetrieveHookSuspense<TData = MoveLearnMethodRetrieve["response"], TQueryKey extends QueryKey = MoveLearnMethodRetrieveSuspenseQueryKey>(id: MoveLearnMethodRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<MoveLearnMethodRetrieve["response"], MoveLearnMethodRetrieve["error"], TData, TQueryKey>>;
    client?: MoveLearnMethodRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, MoveLearnMethodRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveLearnMethodRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...moveLearnMethodRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, MoveLearnMethodRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}