import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { EncounterConditionRetrieveQueryResponseType, EncounterConditionRetrievePathParamsType } from "../ts/EncounterConditionRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type EncounterConditionRetrieveClient = typeof client<EncounterConditionRetrieveQueryResponseType, Error, never>;
type EncounterConditionRetrieve = {
    data: EncounterConditionRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: EncounterConditionRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: EncounterConditionRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<EncounterConditionRetrieveClient>[0]>;
        return: Awaited<ReturnType<EncounterConditionRetrieveClient>>;
    };
};
export const encounterConditionRetrieveQueryKey = (id: EncounterConditionRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/encounter-condition/:id/", params: { id: id } }] as const;
export type EncounterConditionRetrieveQueryKey = ReturnType<typeof encounterConditionRetrieveQueryKey>;
export function encounterConditionRetrieveQueryOptions(id: EncounterConditionRetrievePathParamsType["id"], options: EncounterConditionRetrieve["client"]["parameters"] = {}) {
    const queryKey = encounterConditionRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<EncounterConditionRetrieve["data"], EncounterConditionRetrieve["error"]>({
                method: "get",
                url: `/api/v2/encounter-condition/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Conditions which affect what pokemon might appear in the wild, e.g., day or night.
 * @summary Get encounter condition
 * @link /api/v2/encounter-condition/:id/
 */
export function useEncounterConditionRetrieveHook<TData = EncounterConditionRetrieve["response"], TQueryData = EncounterConditionRetrieve["response"], TQueryKey extends QueryKey = EncounterConditionRetrieveQueryKey>(id: EncounterConditionRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<EncounterConditionRetrieve["response"], EncounterConditionRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: EncounterConditionRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, EncounterConditionRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? encounterConditionRetrieveQueryKey(id);
    const query = useQuery({
        ...encounterConditionRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, EncounterConditionRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const encounterConditionRetrieveSuspenseQueryKey = (id: EncounterConditionRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/encounter-condition/:id/", params: { id: id } }] as const;
export type EncounterConditionRetrieveSuspenseQueryKey = ReturnType<typeof encounterConditionRetrieveSuspenseQueryKey>;
export function encounterConditionRetrieveSuspenseQueryOptions(id: EncounterConditionRetrievePathParamsType["id"], options: EncounterConditionRetrieve["client"]["parameters"] = {}) {
    const queryKey = encounterConditionRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<EncounterConditionRetrieve["data"], EncounterConditionRetrieve["error"]>({
                method: "get",
                url: `/api/v2/encounter-condition/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Conditions which affect what pokemon might appear in the wild, e.g., day or night.
 * @summary Get encounter condition
 * @link /api/v2/encounter-condition/:id/
 */
export function useEncounterConditionRetrieveHookSuspense<TData = EncounterConditionRetrieve["response"], TQueryKey extends QueryKey = EncounterConditionRetrieveSuspenseQueryKey>(id: EncounterConditionRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<EncounterConditionRetrieve["response"], EncounterConditionRetrieve["error"], TData, TQueryKey>>;
    client?: EncounterConditionRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, EncounterConditionRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? encounterConditionRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...encounterConditionRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, EncounterConditionRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}