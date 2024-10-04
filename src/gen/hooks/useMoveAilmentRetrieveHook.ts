import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { MoveAilmentRetrieveQueryResponseType, MoveAilmentRetrievePathParamsType } from "../ts/MoveAilmentRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type MoveAilmentRetrieveClient = typeof client<MoveAilmentRetrieveQueryResponseType, Error, never>;
type MoveAilmentRetrieve = {
    data: MoveAilmentRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: MoveAilmentRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: MoveAilmentRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<MoveAilmentRetrieveClient>[0]>;
        return: Awaited<ReturnType<MoveAilmentRetrieveClient>>;
    };
};
export const moveAilmentRetrieveQueryKey = (id: MoveAilmentRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/move-ailment/:id/", params: { id: id } }] as const;
export type MoveAilmentRetrieveQueryKey = ReturnType<typeof moveAilmentRetrieveQueryKey>;
export function moveAilmentRetrieveQueryOptions(id: MoveAilmentRetrievePathParamsType["id"], options: MoveAilmentRetrieve["client"]["parameters"] = {}) {
    const queryKey = moveAilmentRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveAilmentRetrieve["data"], MoveAilmentRetrieve["error"]>({
                method: "get",
                url: `/api/v2/move-ailment/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail.
 * @summary Get move meta ailment
 * @link /api/v2/move-ailment/:id/
 */
export function useMoveAilmentRetrieveHook<TData = MoveAilmentRetrieve["response"], TQueryData = MoveAilmentRetrieve["response"], TQueryKey extends QueryKey = MoveAilmentRetrieveQueryKey>(id: MoveAilmentRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<MoveAilmentRetrieve["response"], MoveAilmentRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: MoveAilmentRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, MoveAilmentRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveAilmentRetrieveQueryKey(id);
    const query = useQuery({
        ...moveAilmentRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, MoveAilmentRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const moveAilmentRetrieveSuspenseQueryKey = (id: MoveAilmentRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/move-ailment/:id/", params: { id: id } }] as const;
export type MoveAilmentRetrieveSuspenseQueryKey = ReturnType<typeof moveAilmentRetrieveSuspenseQueryKey>;
export function moveAilmentRetrieveSuspenseQueryOptions(id: MoveAilmentRetrievePathParamsType["id"], options: MoveAilmentRetrieve["client"]["parameters"] = {}) {
    const queryKey = moveAilmentRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveAilmentRetrieve["data"], MoveAilmentRetrieve["error"]>({
                method: "get",
                url: `/api/v2/move-ailment/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail.
 * @summary Get move meta ailment
 * @link /api/v2/move-ailment/:id/
 */
export function useMoveAilmentRetrieveHookSuspense<TData = MoveAilmentRetrieve["response"], TQueryKey extends QueryKey = MoveAilmentRetrieveSuspenseQueryKey>(id: MoveAilmentRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<MoveAilmentRetrieve["response"], MoveAilmentRetrieve["error"], TData, TQueryKey>>;
    client?: MoveAilmentRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, MoveAilmentRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveAilmentRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...moveAilmentRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, MoveAilmentRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}