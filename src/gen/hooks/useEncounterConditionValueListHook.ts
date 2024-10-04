import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { EncounterConditionValueListQueryResponseType, EncounterConditionValueListQueryParamsType } from "../ts/EncounterConditionValueListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type EncounterConditionValueListClient = typeof client<EncounterConditionValueListQueryResponseType, Error, never>;
type EncounterConditionValueList = {
    data: EncounterConditionValueListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: EncounterConditionValueListQueryParamsType;
    headerParams: never;
    response: EncounterConditionValueListQueryResponseType;
    client: {
        parameters: Partial<Parameters<EncounterConditionValueListClient>[0]>;
        return: Awaited<ReturnType<EncounterConditionValueListClient>>;
    };
};
export const encounterConditionValueListQueryKey = (params?: EncounterConditionValueList["queryParams"]) => ["v5", { url: "/api/v2/encounter-condition-value/" }, ...(params ? [params] : [])] as const;
export type EncounterConditionValueListQueryKey = ReturnType<typeof encounterConditionValueListQueryKey>;
export function encounterConditionValueListQueryOptions(params?: EncounterConditionValueList["queryParams"], options: EncounterConditionValueList["client"]["parameters"] = {}) {
    const queryKey = encounterConditionValueListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<EncounterConditionValueList["data"], EncounterConditionValueList["error"]>({
                method: "get",
                url: `/api/v2/encounter-condition-value/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.
 * @summary List encounter condition values
 * @link /api/v2/encounter-condition-value/
 */
export function useEncounterConditionValueListHook<TData = EncounterConditionValueList["response"], TQueryData = EncounterConditionValueList["response"], TQueryKey extends QueryKey = EncounterConditionValueListQueryKey>(params?: EncounterConditionValueList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<EncounterConditionValueList["response"], EncounterConditionValueList["error"], TData, TQueryData, TQueryKey>>;
    client?: EncounterConditionValueList["client"]["parameters"];
} = {}): UseQueryResult<TData, EncounterConditionValueList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? encounterConditionValueListQueryKey(params);
    const query = useQuery({
        ...encounterConditionValueListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, EncounterConditionValueList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const encounterConditionValueListSuspenseQueryKey = (params?: EncounterConditionValueList["queryParams"]) => ["v5", { url: "/api/v2/encounter-condition-value/" }, ...(params ? [params] : [])] as const;
export type EncounterConditionValueListSuspenseQueryKey = ReturnType<typeof encounterConditionValueListSuspenseQueryKey>;
export function encounterConditionValueListSuspenseQueryOptions(params?: EncounterConditionValueList["queryParams"], options: EncounterConditionValueList["client"]["parameters"] = {}) {
    const queryKey = encounterConditionValueListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<EncounterConditionValueList["data"], EncounterConditionValueList["error"]>({
                method: "get",
                url: `/api/v2/encounter-condition-value/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.
 * @summary List encounter condition values
 * @link /api/v2/encounter-condition-value/
 */
export function useEncounterConditionValueListHookSuspense<TData = EncounterConditionValueList["response"], TQueryKey extends QueryKey = EncounterConditionValueListSuspenseQueryKey>(params?: EncounterConditionValueList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<EncounterConditionValueList["response"], EncounterConditionValueList["error"], TData, TQueryKey>>;
    client?: EncounterConditionValueList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, EncounterConditionValueList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? encounterConditionValueListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...encounterConditionValueListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, EncounterConditionValueList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}