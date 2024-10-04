import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GenderListQueryResponseType, GenderListQueryParamsType } from "../ts/GenderListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GenderListClient = typeof client<GenderListQueryResponseType, Error, never>;
type GenderList = {
    data: GenderListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: GenderListQueryParamsType;
    headerParams: never;
    response: GenderListQueryResponseType;
    client: {
        parameters: Partial<Parameters<GenderListClient>[0]>;
        return: Awaited<ReturnType<GenderListClient>>;
    };
};
export const genderListQueryKey = (params?: GenderList["queryParams"]) => ["v5", { url: "/api/v2/gender/" }, ...(params ? [params] : [])] as const;
export type GenderListQueryKey = ReturnType<typeof genderListQueryKey>;
export function genderListQueryOptions(params?: GenderList["queryParams"], options: GenderList["client"]["parameters"] = {}) {
    const queryKey = genderListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GenderList["data"], GenderList["error"]>({
                method: "get",
                url: `/api/v2/gender/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Gender) for greater detail.
 * @summary List genders
 * @link /api/v2/gender/
 */
export function useGenderListHook<TData = GenderList["response"], TQueryData = GenderList["response"], TQueryKey extends QueryKey = GenderListQueryKey>(params?: GenderList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<GenderList["response"], GenderList["error"], TData, TQueryData, TQueryKey>>;
    client?: GenderList["client"]["parameters"];
} = {}): UseQueryResult<TData, GenderList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? genderListQueryKey(params);
    const query = useQuery({
        ...genderListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GenderList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const genderListSuspenseQueryKey = (params?: GenderList["queryParams"]) => ["v5", { url: "/api/v2/gender/" }, ...(params ? [params] : [])] as const;
export type GenderListSuspenseQueryKey = ReturnType<typeof genderListSuspenseQueryKey>;
export function genderListSuspenseQueryOptions(params?: GenderList["queryParams"], options: GenderList["client"]["parameters"] = {}) {
    const queryKey = genderListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GenderList["data"], GenderList["error"]>({
                method: "get",
                url: `/api/v2/gender/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Gender) for greater detail.
 * @summary List genders
 * @link /api/v2/gender/
 */
export function useGenderListHookSuspense<TData = GenderList["response"], TQueryKey extends QueryKey = GenderListSuspenseQueryKey>(params?: GenderList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<GenderList["response"], GenderList["error"], TData, TQueryKey>>;
    client?: GenderList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GenderList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? genderListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...genderListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GenderList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}