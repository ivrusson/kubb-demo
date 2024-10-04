import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { EncounterConditionListQueryResponseType, EncounterConditionListQueryParamsType } from "../ts/EncounterConditionListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type EncounterConditionListClient = typeof client<EncounterConditionListQueryResponseType, Error, never>;
type EncounterConditionList = {
    data: EncounterConditionListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: EncounterConditionListQueryParamsType;
    headerParams: never;
    response: EncounterConditionListQueryResponseType;
    client: {
        parameters: Partial<Parameters<EncounterConditionListClient>[0]>;
        return: Awaited<ReturnType<EncounterConditionListClient>>;
    };
};
export const encounterConditionListQueryKey = (params?: EncounterConditionList["queryParams"]) => ["v5", { url: "/api/v2/encounter-condition/" }, ...(params ? [params] : [])] as const;
export type EncounterConditionListQueryKey = ReturnType<typeof encounterConditionListQueryKey>;
export function encounterConditionListQueryOptions(params?: EncounterConditionList["queryParams"], options: EncounterConditionList["client"]["parameters"] = {}) {
    const queryKey = encounterConditionListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<EncounterConditionList["data"], EncounterConditionList["error"]>({
                method: "get",
                url: `/api/v2/encounter-condition/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Conditions which affect what pokemon might appear in the wild, e.g., day or night.
 * @summary List encounter conditions
 * @link /api/v2/encounter-condition/
 */
export function useEncounterConditionListHook<TData = EncounterConditionList["response"], TQueryData = EncounterConditionList["response"], TQueryKey extends QueryKey = EncounterConditionListQueryKey>(params?: EncounterConditionList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<EncounterConditionList["response"], EncounterConditionList["error"], TData, TQueryData, TQueryKey>>;
    client?: EncounterConditionList["client"]["parameters"];
} = {}): UseQueryResult<TData, EncounterConditionList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? encounterConditionListQueryKey(params);
    const query = useQuery({
        ...encounterConditionListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, EncounterConditionList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const encounterConditionListSuspenseQueryKey = (params?: EncounterConditionList["queryParams"]) => ["v5", { url: "/api/v2/encounter-condition/" }, ...(params ? [params] : [])] as const;
export type EncounterConditionListSuspenseQueryKey = ReturnType<typeof encounterConditionListSuspenseQueryKey>;
export function encounterConditionListSuspenseQueryOptions(params?: EncounterConditionList["queryParams"], options: EncounterConditionList["client"]["parameters"] = {}) {
    const queryKey = encounterConditionListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<EncounterConditionList["data"], EncounterConditionList["error"]>({
                method: "get",
                url: `/api/v2/encounter-condition/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Conditions which affect what pokemon might appear in the wild, e.g., day or night.
 * @summary List encounter conditions
 * @link /api/v2/encounter-condition/
 */
export function useEncounterConditionListHookSuspense<TData = EncounterConditionList["response"], TQueryKey extends QueryKey = EncounterConditionListSuspenseQueryKey>(params?: EncounterConditionList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<EncounterConditionList["response"], EncounterConditionList["error"], TData, TQueryKey>>;
    client?: EncounterConditionList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, EncounterConditionList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? encounterConditionListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...encounterConditionListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, EncounterConditionList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}