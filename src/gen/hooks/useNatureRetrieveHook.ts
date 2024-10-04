import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { NatureRetrieveQueryResponseType, NatureRetrievePathParamsType } from "../ts/NatureRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type NatureRetrieveClient = typeof client<NatureRetrieveQueryResponseType, Error, never>;
type NatureRetrieve = {
    data: NatureRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: NatureRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: NatureRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<NatureRetrieveClient>[0]>;
        return: Awaited<ReturnType<NatureRetrieveClient>>;
    };
};
export const natureRetrieveQueryKey = (id: NatureRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/nature/:id/", params: { id: id } }] as const;
export type NatureRetrieveQueryKey = ReturnType<typeof natureRetrieveQueryKey>;
export function natureRetrieveQueryOptions(id: NatureRetrievePathParamsType["id"], options: NatureRetrieve["client"]["parameters"] = {}) {
    const queryKey = natureRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<NatureRetrieve["data"], NatureRetrieve["error"]>({
                method: "get",
                url: `/api/v2/nature/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Natures influence how a Pokémon's stats grow. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail.
 * @summary Get nature
 * @link /api/v2/nature/:id/
 */
export function useNatureRetrieveHook<TData = NatureRetrieve["response"], TQueryData = NatureRetrieve["response"], TQueryKey extends QueryKey = NatureRetrieveQueryKey>(id: NatureRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<NatureRetrieve["response"], NatureRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: NatureRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, NatureRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? natureRetrieveQueryKey(id);
    const query = useQuery({
        ...natureRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, NatureRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const natureRetrieveSuspenseQueryKey = (id: NatureRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/nature/:id/", params: { id: id } }] as const;
export type NatureRetrieveSuspenseQueryKey = ReturnType<typeof natureRetrieveSuspenseQueryKey>;
export function natureRetrieveSuspenseQueryOptions(id: NatureRetrievePathParamsType["id"], options: NatureRetrieve["client"]["parameters"] = {}) {
    const queryKey = natureRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<NatureRetrieve["data"], NatureRetrieve["error"]>({
                method: "get",
                url: `/api/v2/nature/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Natures influence how a Pokémon's stats grow. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail.
 * @summary Get nature
 * @link /api/v2/nature/:id/
 */
export function useNatureRetrieveHookSuspense<TData = NatureRetrieve["response"], TQueryKey extends QueryKey = NatureRetrieveSuspenseQueryKey>(id: NatureRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<NatureRetrieve["response"], NatureRetrieve["error"], TData, TQueryKey>>;
    client?: NatureRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, NatureRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? natureRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...natureRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, NatureRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}