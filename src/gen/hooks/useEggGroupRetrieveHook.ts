import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { EggGroupRetrieveQueryResponseType, EggGroupRetrievePathParamsType } from "../ts/EggGroupRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type EggGroupRetrieveClient = typeof client<EggGroupRetrieveQueryResponseType, Error, never>;
type EggGroupRetrieve = {
    data: EggGroupRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: EggGroupRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: EggGroupRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<EggGroupRetrieveClient>[0]>;
        return: Awaited<ReturnType<EggGroupRetrieveClient>>;
    };
};
export const eggGroupRetrieveQueryKey = (id: EggGroupRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/egg-group/:id/", params: { id: id } }] as const;
export type EggGroupRetrieveQueryKey = ReturnType<typeof eggGroupRetrieveQueryKey>;
export function eggGroupRetrieveQueryOptions(id: EggGroupRetrievePathParamsType["id"], options: EggGroupRetrieve["client"]["parameters"] = {}) {
    const queryKey = eggGroupRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<EggGroupRetrieve["data"], EggGroupRetrieve["error"]>({
                method: "get",
                url: `/api/v2/egg-group/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater detail.
 * @summary Get egg group
 * @link /api/v2/egg-group/:id/
 */
export function useEggGroupRetrieveHook<TData = EggGroupRetrieve["response"], TQueryData = EggGroupRetrieve["response"], TQueryKey extends QueryKey = EggGroupRetrieveQueryKey>(id: EggGroupRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<EggGroupRetrieve["response"], EggGroupRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: EggGroupRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, EggGroupRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? eggGroupRetrieveQueryKey(id);
    const query = useQuery({
        ...eggGroupRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, EggGroupRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const eggGroupRetrieveSuspenseQueryKey = (id: EggGroupRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/egg-group/:id/", params: { id: id } }] as const;
export type EggGroupRetrieveSuspenseQueryKey = ReturnType<typeof eggGroupRetrieveSuspenseQueryKey>;
export function eggGroupRetrieveSuspenseQueryOptions(id: EggGroupRetrievePathParamsType["id"], options: EggGroupRetrieve["client"]["parameters"] = {}) {
    const queryKey = eggGroupRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<EggGroupRetrieve["data"], EggGroupRetrieve["error"]>({
                method: "get",
                url: `/api/v2/egg-group/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater detail.
 * @summary Get egg group
 * @link /api/v2/egg-group/:id/
 */
export function useEggGroupRetrieveHookSuspense<TData = EggGroupRetrieve["response"], TQueryKey extends QueryKey = EggGroupRetrieveSuspenseQueryKey>(id: EggGroupRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<EggGroupRetrieve["response"], EggGroupRetrieve["error"], TData, TQueryKey>>;
    client?: EggGroupRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, EggGroupRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? eggGroupRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...eggGroupRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, EggGroupRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}