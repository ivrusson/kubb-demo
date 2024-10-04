import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GenerationRetrieveQueryResponseType, GenerationRetrievePathParamsType } from "../ts/GenerationRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GenerationRetrieveClient = typeof client<GenerationRetrieveQueryResponseType, Error, never>;
type GenerationRetrieve = {
    data: GenerationRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: GenerationRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: GenerationRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<GenerationRetrieveClient>[0]>;
        return: Awaited<ReturnType<GenerationRetrieveClient>>;
    };
};
export const generationRetrieveQueryKey = (id: GenerationRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/generation/:id/", params: { id: id } }] as const;
export type GenerationRetrieveQueryKey = ReturnType<typeof generationRetrieveQueryKey>;
export function generationRetrieveQueryOptions(id: GenerationRetrievePathParamsType["id"], options: GenerationRetrieve["client"]["parameters"] = {}) {
    const queryKey = generationRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GenerationRetrieve["data"], GenerationRetrieve["error"]>({
                method: "get",
                url: `/api/v2/generation/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.
 * @summary Get genration
 * @link /api/v2/generation/:id/
 */
export function useGenerationRetrieveHook<TData = GenerationRetrieve["response"], TQueryData = GenerationRetrieve["response"], TQueryKey extends QueryKey = GenerationRetrieveQueryKey>(id: GenerationRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<GenerationRetrieve["response"], GenerationRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: GenerationRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, GenerationRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? generationRetrieveQueryKey(id);
    const query = useQuery({
        ...generationRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GenerationRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const generationRetrieveSuspenseQueryKey = (id: GenerationRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/generation/:id/", params: { id: id } }] as const;
export type GenerationRetrieveSuspenseQueryKey = ReturnType<typeof generationRetrieveSuspenseQueryKey>;
export function generationRetrieveSuspenseQueryOptions(id: GenerationRetrievePathParamsType["id"], options: GenerationRetrieve["client"]["parameters"] = {}) {
    const queryKey = generationRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GenerationRetrieve["data"], GenerationRetrieve["error"]>({
                method: "get",
                url: `/api/v2/generation/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.
 * @summary Get genration
 * @link /api/v2/generation/:id/
 */
export function useGenerationRetrieveHookSuspense<TData = GenerationRetrieve["response"], TQueryKey extends QueryKey = GenerationRetrieveSuspenseQueryKey>(id: GenerationRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<GenerationRetrieve["response"], GenerationRetrieve["error"], TData, TQueryKey>>;
    client?: GenerationRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GenerationRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? generationRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...generationRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GenerationRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}