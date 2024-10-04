import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { MoveTargetRetrieveQueryResponseType, MoveTargetRetrievePathParamsType } from "../ts/MoveTargetRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type MoveTargetRetrieveClient = typeof client<MoveTargetRetrieveQueryResponseType, Error, never>;
type MoveTargetRetrieve = {
    data: MoveTargetRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: MoveTargetRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: MoveTargetRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<MoveTargetRetrieveClient>[0]>;
        return: Awaited<ReturnType<MoveTargetRetrieveClient>>;
    };
};
export const moveTargetRetrieveQueryKey = (id: MoveTargetRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/move-target/:id/", params: { id: id } }] as const;
export type MoveTargetRetrieveQueryKey = ReturnType<typeof moveTargetRetrieveQueryKey>;
export function moveTargetRetrieveQueryOptions(id: MoveTargetRetrievePathParamsType["id"], options: MoveTargetRetrieve["client"]["parameters"] = {}) {
    const queryKey = moveTargetRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveTargetRetrieve["data"], MoveTargetRetrieve["error"]>({
                method: "get",
                url: `/api/v2/move-target/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.
 * @summary Get move target
 * @link /api/v2/move-target/:id/
 */
export function useMoveTargetRetrieveHook<TData = MoveTargetRetrieve["response"], TQueryData = MoveTargetRetrieve["response"], TQueryKey extends QueryKey = MoveTargetRetrieveQueryKey>(id: MoveTargetRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<MoveTargetRetrieve["response"], MoveTargetRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: MoveTargetRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, MoveTargetRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveTargetRetrieveQueryKey(id);
    const query = useQuery({
        ...moveTargetRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, MoveTargetRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const moveTargetRetrieveSuspenseQueryKey = (id: MoveTargetRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/move-target/:id/", params: { id: id } }] as const;
export type MoveTargetRetrieveSuspenseQueryKey = ReturnType<typeof moveTargetRetrieveSuspenseQueryKey>;
export function moveTargetRetrieveSuspenseQueryOptions(id: MoveTargetRetrievePathParamsType["id"], options: MoveTargetRetrieve["client"]["parameters"] = {}) {
    const queryKey = moveTargetRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveTargetRetrieve["data"], MoveTargetRetrieve["error"]>({
                method: "get",
                url: `/api/v2/move-target/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.
 * @summary Get move target
 * @link /api/v2/move-target/:id/
 */
export function useMoveTargetRetrieveHookSuspense<TData = MoveTargetRetrieve["response"], TQueryKey extends QueryKey = MoveTargetRetrieveSuspenseQueryKey>(id: MoveTargetRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<MoveTargetRetrieve["response"], MoveTargetRetrieve["error"], TData, TQueryKey>>;
    client?: MoveTargetRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, MoveTargetRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveTargetRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...moveTargetRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, MoveTargetRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}