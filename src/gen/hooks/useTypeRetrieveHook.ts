import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { TypeRetrieveQueryResponseType, TypeRetrievePathParamsType } from "../ts/TypeRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type TypeRetrieveClient = typeof client<TypeRetrieveQueryResponseType, Error, never>;
type TypeRetrieve = {
    data: TypeRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: TypeRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: TypeRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<TypeRetrieveClient>[0]>;
        return: Awaited<ReturnType<TypeRetrieveClient>>;
    };
};
export const typeRetrieveQueryKey = (id: TypeRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/type/:id/", params: { id: id } }] as const;
export type TypeRetrieveQueryKey = ReturnType<typeof typeRetrieveQueryKey>;
export function typeRetrieveQueryOptions(id: TypeRetrievePathParamsType["id"], options: TypeRetrieve["client"]["parameters"] = {}) {
    const queryKey = typeRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<TypeRetrieve["data"], TypeRetrieve["error"]>({
                method: "get",
                url: `/api/v2/type/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against.
 * @summary Get types
 * @link /api/v2/type/:id/
 */
export function useTypeRetrieveHook<TData = TypeRetrieve["response"], TQueryData = TypeRetrieve["response"], TQueryKey extends QueryKey = TypeRetrieveQueryKey>(id: TypeRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<TypeRetrieve["response"], TypeRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: TypeRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, TypeRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? typeRetrieveQueryKey(id);
    const query = useQuery({
        ...typeRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, TypeRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const typeRetrieveSuspenseQueryKey = (id: TypeRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/type/:id/", params: { id: id } }] as const;
export type TypeRetrieveSuspenseQueryKey = ReturnType<typeof typeRetrieveSuspenseQueryKey>;
export function typeRetrieveSuspenseQueryOptions(id: TypeRetrievePathParamsType["id"], options: TypeRetrieve["client"]["parameters"] = {}) {
    const queryKey = typeRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<TypeRetrieve["data"], TypeRetrieve["error"]>({
                method: "get",
                url: `/api/v2/type/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against.
 * @summary Get types
 * @link /api/v2/type/:id/
 */
export function useTypeRetrieveHookSuspense<TData = TypeRetrieve["response"], TQueryKey extends QueryKey = TypeRetrieveSuspenseQueryKey>(id: TypeRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<TypeRetrieve["response"], TypeRetrieve["error"], TData, TQueryKey>>;
    client?: TypeRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, TypeRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? typeRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...typeRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, TypeRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}