import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { PalParkAreaListQueryResponseType, PalParkAreaListQueryParamsType } from "../ts/PalParkAreaListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type PalParkAreaListClient = typeof client<PalParkAreaListQueryResponseType, Error, never>;
type PalParkAreaList = {
    data: PalParkAreaListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: PalParkAreaListQueryParamsType;
    headerParams: never;
    response: PalParkAreaListQueryResponseType;
    client: {
        parameters: Partial<Parameters<PalParkAreaListClient>[0]>;
        return: Awaited<ReturnType<PalParkAreaListClient>>;
    };
};
export const palParkAreaListQueryKey = (params?: PalParkAreaList["queryParams"]) => ["v5", { url: "/api/v2/pal-park-area/" }, ...(params ? [params] : [])] as const;
export type PalParkAreaListQueryKey = ReturnType<typeof palParkAreaListQueryKey>;
export function palParkAreaListQueryOptions(params?: PalParkAreaList["queryParams"], options: PalParkAreaList["client"]["parameters"] = {}) {
    const queryKey = palParkAreaListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PalParkAreaList["data"], PalParkAreaList["error"]>({
                method: "get",
                url: `/api/v2/pal-park-area/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Areas used for grouping Pokémon encounters in Pal Park. They're like habitats that are specific to Pal Park.
 * @summary List pal park areas
 * @link /api/v2/pal-park-area/
 */
export function usePalParkAreaListHook<TData = PalParkAreaList["response"], TQueryData = PalParkAreaList["response"], TQueryKey extends QueryKey = PalParkAreaListQueryKey>(params?: PalParkAreaList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<PalParkAreaList["response"], PalParkAreaList["error"], TData, TQueryData, TQueryKey>>;
    client?: PalParkAreaList["client"]["parameters"];
} = {}): UseQueryResult<TData, PalParkAreaList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? palParkAreaListQueryKey(params);
    const query = useQuery({
        ...palParkAreaListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, PalParkAreaList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const palParkAreaListSuspenseQueryKey = (params?: PalParkAreaList["queryParams"]) => ["v5", { url: "/api/v2/pal-park-area/" }, ...(params ? [params] : [])] as const;
export type PalParkAreaListSuspenseQueryKey = ReturnType<typeof palParkAreaListSuspenseQueryKey>;
export function palParkAreaListSuspenseQueryOptions(params?: PalParkAreaList["queryParams"], options: PalParkAreaList["client"]["parameters"] = {}) {
    const queryKey = palParkAreaListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PalParkAreaList["data"], PalParkAreaList["error"]>({
                method: "get",
                url: `/api/v2/pal-park-area/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Areas used for grouping Pokémon encounters in Pal Park. They're like habitats that are specific to Pal Park.
 * @summary List pal park areas
 * @link /api/v2/pal-park-area/
 */
export function usePalParkAreaListHookSuspense<TData = PalParkAreaList["response"], TQueryKey extends QueryKey = PalParkAreaListSuspenseQueryKey>(params?: PalParkAreaList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<PalParkAreaList["response"], PalParkAreaList["error"], TData, TQueryKey>>;
    client?: PalParkAreaList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, PalParkAreaList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? palParkAreaListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...palParkAreaListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, PalParkAreaList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}