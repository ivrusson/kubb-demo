import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ContestTypeRetrieveQueryResponseType, ContestTypeRetrievePathParamsType } from "../ts/ContestTypeRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ContestTypeRetrieveClient = typeof client<ContestTypeRetrieveQueryResponseType, Error, never>;
type ContestTypeRetrieve = {
    data: ContestTypeRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: ContestTypeRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: ContestTypeRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<ContestTypeRetrieveClient>[0]>;
        return: Awaited<ReturnType<ContestTypeRetrieveClient>>;
    };
};
export const contestTypeRetrieveQueryKey = (id: ContestTypeRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/contest-type/:id/", params: { id: id } }] as const;
export type ContestTypeRetrieveQueryKey = ReturnType<typeof contestTypeRetrieveQueryKey>;
export function contestTypeRetrieveQueryOptions(id: ContestTypeRetrievePathParamsType["id"], options: ContestTypeRetrieve["client"]["parameters"] = {}) {
    const queryKey = contestTypeRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ContestTypeRetrieve["data"], ContestTypeRetrieve["error"]>({
                method: "get",
                url: `/api/v2/contest-type/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail.
 * @summary Get contest type
 * @link /api/v2/contest-type/:id/
 */
export function useContestTypeRetrieveHook<TData = ContestTypeRetrieve["response"], TQueryData = ContestTypeRetrieve["response"], TQueryKey extends QueryKey = ContestTypeRetrieveQueryKey>(id: ContestTypeRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<ContestTypeRetrieve["response"], ContestTypeRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: ContestTypeRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, ContestTypeRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? contestTypeRetrieveQueryKey(id);
    const query = useQuery({
        ...contestTypeRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ContestTypeRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const contestTypeRetrieveSuspenseQueryKey = (id: ContestTypeRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/contest-type/:id/", params: { id: id } }] as const;
export type ContestTypeRetrieveSuspenseQueryKey = ReturnType<typeof contestTypeRetrieveSuspenseQueryKey>;
export function contestTypeRetrieveSuspenseQueryOptions(id: ContestTypeRetrievePathParamsType["id"], options: ContestTypeRetrieve["client"]["parameters"] = {}) {
    const queryKey = contestTypeRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ContestTypeRetrieve["data"], ContestTypeRetrieve["error"]>({
                method: "get",
                url: `/api/v2/contest-type/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail.
 * @summary Get contest type
 * @link /api/v2/contest-type/:id/
 */
export function useContestTypeRetrieveHookSuspense<TData = ContestTypeRetrieve["response"], TQueryKey extends QueryKey = ContestTypeRetrieveSuspenseQueryKey>(id: ContestTypeRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<ContestTypeRetrieve["response"], ContestTypeRetrieve["error"], TData, TQueryKey>>;
    client?: ContestTypeRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ContestTypeRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? contestTypeRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...contestTypeRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ContestTypeRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}