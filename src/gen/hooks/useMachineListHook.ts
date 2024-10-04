import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { MachineListQueryResponseType, MachineListQueryParamsType } from "../ts/MachineListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type MachineListClient = typeof client<MachineListQueryResponseType, Error, never>;
type MachineList = {
    data: MachineListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: MachineListQueryParamsType;
    headerParams: never;
    response: MachineListQueryResponseType;
    client: {
        parameters: Partial<Parameters<MachineListClient>[0]>;
        return: Awaited<ReturnType<MachineListClient>>;
    };
};
export const machineListQueryKey = (params?: MachineList["queryParams"]) => ["v5", { url: "/api/v2/machine/" }, ...(params ? [params] : [])] as const;
export type MachineListQueryKey = ReturnType<typeof machineListQueryKey>;
export function machineListQueryOptions(params?: MachineList["queryParams"], options: MachineList["client"]["parameters"] = {}) {
    const queryKey = machineListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MachineList["data"], MachineList["error"]>({
                method: "get",
                url: `/api/v2/machine/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.
 * @summary List machines
 * @link /api/v2/machine/
 */
export function useMachineListHook<TData = MachineList["response"], TQueryData = MachineList["response"], TQueryKey extends QueryKey = MachineListQueryKey>(params?: MachineList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<MachineList["response"], MachineList["error"], TData, TQueryData, TQueryKey>>;
    client?: MachineList["client"]["parameters"];
} = {}): UseQueryResult<TData, MachineList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? machineListQueryKey(params);
    const query = useQuery({
        ...machineListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, MachineList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const machineListSuspenseQueryKey = (params?: MachineList["queryParams"]) => ["v5", { url: "/api/v2/machine/" }, ...(params ? [params] : [])] as const;
export type MachineListSuspenseQueryKey = ReturnType<typeof machineListSuspenseQueryKey>;
export function machineListSuspenseQueryOptions(params?: MachineList["queryParams"], options: MachineList["client"]["parameters"] = {}) {
    const queryKey = machineListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MachineList["data"], MachineList["error"]>({
                method: "get",
                url: `/api/v2/machine/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.
 * @summary List machines
 * @link /api/v2/machine/
 */
export function useMachineListHookSuspense<TData = MachineList["response"], TQueryKey extends QueryKey = MachineListSuspenseQueryKey>(params?: MachineList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<MachineList["response"], MachineList["error"], TData, TQueryKey>>;
    client?: MachineList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, MachineList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? machineListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...machineListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, MachineList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}