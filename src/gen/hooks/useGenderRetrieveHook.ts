import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GenderRetrieveQueryResponseType, GenderRetrievePathParamsType } from "../ts/GenderRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GenderRetrieveClient = typeof client<GenderRetrieveQueryResponseType, Error, never>;
type GenderRetrieve = {
    data: GenderRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: GenderRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: GenderRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<GenderRetrieveClient>[0]>;
        return: Awaited<ReturnType<GenderRetrieveClient>>;
    };
};
export const genderRetrieveQueryKey = (id: GenderRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/gender/:id/", params: { id: id } }] as const;
export type GenderRetrieveQueryKey = ReturnType<typeof genderRetrieveQueryKey>;
export function genderRetrieveQueryOptions(id: GenderRetrievePathParamsType["id"], options: GenderRetrieve["client"]["parameters"] = {}) {
    const queryKey = genderRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GenderRetrieve["data"], GenderRetrieve["error"]>({
                method: "get",
                url: `/api/v2/gender/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Gender) for greater detail.
 * @summary Get gender
 * @link /api/v2/gender/:id/
 */
export function useGenderRetrieveHook<TData = GenderRetrieve["response"], TQueryData = GenderRetrieve["response"], TQueryKey extends QueryKey = GenderRetrieveQueryKey>(id: GenderRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<GenderRetrieve["response"], GenderRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: GenderRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, GenderRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? genderRetrieveQueryKey(id);
    const query = useQuery({
        ...genderRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GenderRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const genderRetrieveSuspenseQueryKey = (id: GenderRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/gender/:id/", params: { id: id } }] as const;
export type GenderRetrieveSuspenseQueryKey = ReturnType<typeof genderRetrieveSuspenseQueryKey>;
export function genderRetrieveSuspenseQueryOptions(id: GenderRetrievePathParamsType["id"], options: GenderRetrieve["client"]["parameters"] = {}) {
    const queryKey = genderRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GenderRetrieve["data"], GenderRetrieve["error"]>({
                method: "get",
                url: `/api/v2/gender/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Gender) for greater detail.
 * @summary Get gender
 * @link /api/v2/gender/:id/
 */
export function useGenderRetrieveHookSuspense<TData = GenderRetrieve["response"], TQueryKey extends QueryKey = GenderRetrieveSuspenseQueryKey>(id: GenderRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<GenderRetrieve["response"], GenderRetrieve["error"], TData, TQueryKey>>;
    client?: GenderRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GenderRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? genderRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...genderRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GenderRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}