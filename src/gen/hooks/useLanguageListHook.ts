import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { LanguageListQueryResponseType, LanguageListQueryParamsType } from "../ts/LanguageListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type LanguageListClient = typeof client<LanguageListQueryResponseType, Error, never>;
type LanguageList = {
    data: LanguageListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: LanguageListQueryParamsType;
    headerParams: never;
    response: LanguageListQueryResponseType;
    client: {
        parameters: Partial<Parameters<LanguageListClient>[0]>;
        return: Awaited<ReturnType<LanguageListClient>>;
    };
};
export const languageListQueryKey = (params?: LanguageList["queryParams"]) => ["v5", { url: "/api/v2/language/" }, ...(params ? [params] : [])] as const;
export type LanguageListQueryKey = ReturnType<typeof languageListQueryKey>;
export function languageListQueryOptions(params?: LanguageList["queryParams"], options: LanguageList["client"]["parameters"] = {}) {
    const queryKey = languageListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<LanguageList["data"], LanguageList["error"]>({
                method: "get",
                url: `/api/v2/language/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Languages for translations of API resource information.
 * @summary List languages
 * @link /api/v2/language/
 */
export function useLanguageListHook<TData = LanguageList["response"], TQueryData = LanguageList["response"], TQueryKey extends QueryKey = LanguageListQueryKey>(params?: LanguageList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<LanguageList["response"], LanguageList["error"], TData, TQueryData, TQueryKey>>;
    client?: LanguageList["client"]["parameters"];
} = {}): UseQueryResult<TData, LanguageList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? languageListQueryKey(params);
    const query = useQuery({
        ...languageListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, LanguageList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const languageListSuspenseQueryKey = (params?: LanguageList["queryParams"]) => ["v5", { url: "/api/v2/language/" }, ...(params ? [params] : [])] as const;
export type LanguageListSuspenseQueryKey = ReturnType<typeof languageListSuspenseQueryKey>;
export function languageListSuspenseQueryOptions(params?: LanguageList["queryParams"], options: LanguageList["client"]["parameters"] = {}) {
    const queryKey = languageListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<LanguageList["data"], LanguageList["error"]>({
                method: "get",
                url: `/api/v2/language/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Languages for translations of API resource information.
 * @summary List languages
 * @link /api/v2/language/
 */
export function useLanguageListHookSuspense<TData = LanguageList["response"], TQueryKey extends QueryKey = LanguageListSuspenseQueryKey>(params?: LanguageList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<LanguageList["response"], LanguageList["error"], TData, TQueryKey>>;
    client?: LanguageList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, LanguageList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? languageListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...languageListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, LanguageList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}