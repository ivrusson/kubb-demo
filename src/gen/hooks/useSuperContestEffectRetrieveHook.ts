import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { SuperContestEffectRetrieveQueryResponseType, SuperContestEffectRetrievePathParamsType } from "../ts/SuperContestEffectRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type SuperContestEffectRetrieveClient = typeof client<SuperContestEffectRetrieveQueryResponseType, Error, never>;
type SuperContestEffectRetrieve = {
    data: SuperContestEffectRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: SuperContestEffectRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: SuperContestEffectRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<SuperContestEffectRetrieveClient>[0]>;
        return: Awaited<ReturnType<SuperContestEffectRetrieveClient>>;
    };
};
export const superContestEffectRetrieveQueryKey = (id: SuperContestEffectRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/super-contest-effect/:id/", params: { id: id } }] as const;
export type SuperContestEffectRetrieveQueryKey = ReturnType<typeof superContestEffectRetrieveQueryKey>;
export function superContestEffectRetrieveQueryOptions(id: SuperContestEffectRetrievePathParamsType["id"], options: SuperContestEffectRetrieve["client"]["parameters"] = {}) {
    const queryKey = superContestEffectRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<SuperContestEffectRetrieve["data"], SuperContestEffectRetrieve["error"]>({
                method: "get",
                url: `/api/v2/super-contest-effect/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Super contest effects refer to the effects of moves when used in super contests.
 * @summary Get super contest effect
 * @link /api/v2/super-contest-effect/:id/
 */
export function useSuperContestEffectRetrieveHook<TData = SuperContestEffectRetrieve["response"], TQueryData = SuperContestEffectRetrieve["response"], TQueryKey extends QueryKey = SuperContestEffectRetrieveQueryKey>(id: SuperContestEffectRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<SuperContestEffectRetrieve["response"], SuperContestEffectRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: SuperContestEffectRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, SuperContestEffectRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? superContestEffectRetrieveQueryKey(id);
    const query = useQuery({
        ...superContestEffectRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, SuperContestEffectRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const superContestEffectRetrieveSuspenseQueryKey = (id: SuperContestEffectRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/super-contest-effect/:id/", params: { id: id } }] as const;
export type SuperContestEffectRetrieveSuspenseQueryKey = ReturnType<typeof superContestEffectRetrieveSuspenseQueryKey>;
export function superContestEffectRetrieveSuspenseQueryOptions(id: SuperContestEffectRetrievePathParamsType["id"], options: SuperContestEffectRetrieve["client"]["parameters"] = {}) {
    const queryKey = superContestEffectRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<SuperContestEffectRetrieve["data"], SuperContestEffectRetrieve["error"]>({
                method: "get",
                url: `/api/v2/super-contest-effect/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Super contest effects refer to the effects of moves when used in super contests.
 * @summary Get super contest effect
 * @link /api/v2/super-contest-effect/:id/
 */
export function useSuperContestEffectRetrieveHookSuspense<TData = SuperContestEffectRetrieve["response"], TQueryKey extends QueryKey = SuperContestEffectRetrieveSuspenseQueryKey>(id: SuperContestEffectRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<SuperContestEffectRetrieve["response"], SuperContestEffectRetrieve["error"], TData, TQueryKey>>;
    client?: SuperContestEffectRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, SuperContestEffectRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? superContestEffectRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...superContestEffectRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, SuperContestEffectRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}