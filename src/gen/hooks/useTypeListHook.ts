import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { TypeListQueryResponseType, TypeListQueryParamsType } from "../ts/TypeListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type TypeListClient = typeof client<TypeListQueryResponseType, Error, never>;
type TypeList = {
    data: TypeListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: TypeListQueryParamsType;
    headerParams: never;
    response: TypeListQueryResponseType;
    client: {
        parameters: Partial<Parameters<TypeListClient>[0]>;
        return: Awaited<ReturnType<TypeListClient>>;
    };
};
export const typeListQueryKey = (params?: TypeList["queryParams"]) => ["v5", { url: "/api/v2/type/" }, ...(params ? [params] : [])] as const;
export type TypeListQueryKey = ReturnType<typeof typeListQueryKey>;
export function typeListQueryOptions(params?: TypeList["queryParams"], options: TypeList["client"]["parameters"] = {}) {
    const queryKey = typeListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<TypeList["data"], TypeList["error"]>({
                method: "get",
                url: `/api/v2/type/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against.
 * @summary List types
 * @link /api/v2/type/
 */
export function useTypeListHook<TData = TypeList["response"], TQueryData = TypeList["response"], TQueryKey extends QueryKey = TypeListQueryKey>(params?: TypeList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<TypeList["response"], TypeList["error"], TData, TQueryData, TQueryKey>>;
    client?: TypeList["client"]["parameters"];
} = {}): UseQueryResult<TData, TypeList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? typeListQueryKey(params);
    const query = useQuery({
        ...typeListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, TypeList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const typeListSuspenseQueryKey = (params?: TypeList["queryParams"]) => ["v5", { url: "/api/v2/type/" }, ...(params ? [params] : [])] as const;
export type TypeListSuspenseQueryKey = ReturnType<typeof typeListSuspenseQueryKey>;
export function typeListSuspenseQueryOptions(params?: TypeList["queryParams"], options: TypeList["client"]["parameters"] = {}) {
    const queryKey = typeListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<TypeList["data"], TypeList["error"]>({
                method: "get",
                url: `/api/v2/type/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against.
 * @summary List types
 * @link /api/v2/type/
 */
export function useTypeListHookSuspense<TData = TypeList["response"], TQueryKey extends QueryKey = TypeListSuspenseQueryKey>(params?: TypeList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<TypeList["response"], TypeList["error"], TData, TQueryKey>>;
    client?: TypeList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, TypeList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? typeListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...typeListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, TypeList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}