import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GenerationListQueryResponseType, GenerationListQueryParamsType } from "../ts/GenerationListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GenerationListClient = typeof client<GenerationListQueryResponseType, Error, never>;
type GenerationList = {
    data: GenerationListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: GenerationListQueryParamsType;
    headerParams: never;
    response: GenerationListQueryResponseType;
    client: {
        parameters: Partial<Parameters<GenerationListClient>[0]>;
        return: Awaited<ReturnType<GenerationListClient>>;
    };
};
export const generationListQueryKey = (params?: GenerationList["queryParams"]) => ["v5", { url: "/api/v2/generation/" }, ...(params ? [params] : [])] as const;
export type GenerationListQueryKey = ReturnType<typeof generationListQueryKey>;
export function generationListQueryOptions(params?: GenerationList["queryParams"], options: GenerationList["client"]["parameters"] = {}) {
    const queryKey = generationListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GenerationList["data"], GenerationList["error"]>({
                method: "get",
                url: `/api/v2/generation/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.
 * @summary List genrations
 * @link /api/v2/generation/
 */
export function useGenerationListHook<TData = GenerationList["response"], TQueryData = GenerationList["response"], TQueryKey extends QueryKey = GenerationListQueryKey>(params?: GenerationList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<GenerationList["response"], GenerationList["error"], TData, TQueryData, TQueryKey>>;
    client?: GenerationList["client"]["parameters"];
} = {}): UseQueryResult<TData, GenerationList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? generationListQueryKey(params);
    const query = useQuery({
        ...generationListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GenerationList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const generationListSuspenseQueryKey = (params?: GenerationList["queryParams"]) => ["v5", { url: "/api/v2/generation/" }, ...(params ? [params] : [])] as const;
export type GenerationListSuspenseQueryKey = ReturnType<typeof generationListSuspenseQueryKey>;
export function generationListSuspenseQueryOptions(params?: GenerationList["queryParams"], options: GenerationList["client"]["parameters"] = {}) {
    const queryKey = generationListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GenerationList["data"], GenerationList["error"]>({
                method: "get",
                url: `/api/v2/generation/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.
 * @summary List genrations
 * @link /api/v2/generation/
 */
export function useGenerationListHookSuspense<TData = GenerationList["response"], TQueryKey extends QueryKey = GenerationListSuspenseQueryKey>(params?: GenerationList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<GenerationList["response"], GenerationList["error"], TData, TQueryKey>>;
    client?: GenerationList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GenerationList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? generationListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...generationListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GenerationList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}