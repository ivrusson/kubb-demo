import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { LanguageRetrieveQueryResponseType, LanguageRetrievePathParamsType } from "../ts/LanguageRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type LanguageRetrieveClient = typeof client<LanguageRetrieveQueryResponseType, Error, never>;
type LanguageRetrieve = {
    data: LanguageRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: LanguageRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: LanguageRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<LanguageRetrieveClient>[0]>;
        return: Awaited<ReturnType<LanguageRetrieveClient>>;
    };
};
export const languageRetrieveQueryKey = (id: LanguageRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/language/:id/", params: { id: id } }] as const;
export type LanguageRetrieveQueryKey = ReturnType<typeof languageRetrieveQueryKey>;
export function languageRetrieveQueryOptions(id: LanguageRetrievePathParamsType["id"], options: LanguageRetrieve["client"]["parameters"] = {}) {
    const queryKey = languageRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<LanguageRetrieve["data"], LanguageRetrieve["error"]>({
                method: "get",
                url: `/api/v2/language/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Languages for translations of API resource information.
 * @summary Get language
 * @link /api/v2/language/:id/
 */
export function useLanguageRetrieveHook<TData = LanguageRetrieve["response"], TQueryData = LanguageRetrieve["response"], TQueryKey extends QueryKey = LanguageRetrieveQueryKey>(id: LanguageRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<LanguageRetrieve["response"], LanguageRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: LanguageRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, LanguageRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? languageRetrieveQueryKey(id);
    const query = useQuery({
        ...languageRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, LanguageRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const languageRetrieveSuspenseQueryKey = (id: LanguageRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/language/:id/", params: { id: id } }] as const;
export type LanguageRetrieveSuspenseQueryKey = ReturnType<typeof languageRetrieveSuspenseQueryKey>;
export function languageRetrieveSuspenseQueryOptions(id: LanguageRetrievePathParamsType["id"], options: LanguageRetrieve["client"]["parameters"] = {}) {
    const queryKey = languageRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<LanguageRetrieve["data"], LanguageRetrieve["error"]>({
                method: "get",
                url: `/api/v2/language/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Languages for translations of API resource information.
 * @summary Get language
 * @link /api/v2/language/:id/
 */
export function useLanguageRetrieveHookSuspense<TData = LanguageRetrieve["response"], TQueryKey extends QueryKey = LanguageRetrieveSuspenseQueryKey>(id: LanguageRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<LanguageRetrieve["response"], LanguageRetrieve["error"], TData, TQueryKey>>;
    client?: LanguageRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, LanguageRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? languageRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...languageRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, LanguageRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}