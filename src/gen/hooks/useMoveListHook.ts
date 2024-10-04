import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { MoveListQueryResponseType, MoveListQueryParamsType } from "../ts/MoveListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type MoveListClient = typeof client<MoveListQueryResponseType, Error, never>;
type MoveList = {
    data: MoveListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: MoveListQueryParamsType;
    headerParams: never;
    response: MoveListQueryResponseType;
    client: {
        parameters: Partial<Parameters<MoveListClient>[0]>;
        return: Awaited<ReturnType<MoveListClient>>;
    };
};
export const moveListQueryKey = (params?: MoveList["queryParams"]) => ["v5", { url: "/api/v2/move/" }, ...(params ? [params] : [])] as const;
export type MoveListQueryKey = ReturnType<typeof moveListQueryKey>;
export function moveListQueryOptions(params?: MoveList["queryParams"], options: MoveList["client"]["parameters"] = {}) {
    const queryKey = moveListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveList["data"], MoveList["error"]>({
                method: "get",
                url: `/api/v2/move/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.
 * @summary List moves
 * @link /api/v2/move/
 */
export function useMoveListHook<TData = MoveList["response"], TQueryData = MoveList["response"], TQueryKey extends QueryKey = MoveListQueryKey>(params?: MoveList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<MoveList["response"], MoveList["error"], TData, TQueryData, TQueryKey>>;
    client?: MoveList["client"]["parameters"];
} = {}): UseQueryResult<TData, MoveList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveListQueryKey(params);
    const query = useQuery({
        ...moveListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, MoveList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const moveListSuspenseQueryKey = (params?: MoveList["queryParams"]) => ["v5", { url: "/api/v2/move/" }, ...(params ? [params] : [])] as const;
export type MoveListSuspenseQueryKey = ReturnType<typeof moveListSuspenseQueryKey>;
export function moveListSuspenseQueryOptions(params?: MoveList["queryParams"], options: MoveList["client"]["parameters"] = {}) {
    const queryKey = moveListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveList["data"], MoveList["error"]>({
                method: "get",
                url: `/api/v2/move/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.
 * @summary List moves
 * @link /api/v2/move/
 */
export function useMoveListHookSuspense<TData = MoveList["response"], TQueryKey extends QueryKey = MoveListSuspenseQueryKey>(params?: MoveList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<MoveList["response"], MoveList["error"], TData, TQueryKey>>;
    client?: MoveList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, MoveList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...moveListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, MoveList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}