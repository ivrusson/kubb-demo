import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { PokemonShapeListQueryResponseType, PokemonShapeListQueryParamsType } from "../ts/PokemonShapeListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type PokemonShapeListClient = typeof client<PokemonShapeListQueryResponseType, Error, never>;
type PokemonShapeList = {
    data: PokemonShapeListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: PokemonShapeListQueryParamsType;
    headerParams: never;
    response: PokemonShapeListQueryResponseType;
    client: {
        parameters: Partial<Parameters<PokemonShapeListClient>[0]>;
        return: Awaited<ReturnType<PokemonShapeListClient>>;
    };
};
export const pokemonShapeListQueryKey = (params?: PokemonShapeList["queryParams"]) => ["v5", { url: "/api/v2/pokemon-shape/" }, ...(params ? [params] : [])] as const;
export type PokemonShapeListQueryKey = ReturnType<typeof pokemonShapeListQueryKey>;
export function pokemonShapeListQueryOptions(params?: PokemonShapeList["queryParams"], options: PokemonShapeList["client"]["parameters"] = {}) {
    const queryKey = pokemonShapeListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonShapeList["data"], PokemonShapeList["error"]>({
                method: "get",
                url: `/api/v2/pokemon-shape/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Shapes used for sorting Pokémon in a Pokédex.
 * @summary List pokemon shapes
 * @link /api/v2/pokemon-shape/
 */
export function usePokemonShapeListHook<TData = PokemonShapeList["response"], TQueryData = PokemonShapeList["response"], TQueryKey extends QueryKey = PokemonShapeListQueryKey>(params?: PokemonShapeList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<PokemonShapeList["response"], PokemonShapeList["error"], TData, TQueryData, TQueryKey>>;
    client?: PokemonShapeList["client"]["parameters"];
} = {}): UseQueryResult<TData, PokemonShapeList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonShapeListQueryKey(params);
    const query = useQuery({
        ...pokemonShapeListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, PokemonShapeList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const pokemonShapeListSuspenseQueryKey = (params?: PokemonShapeList["queryParams"]) => ["v5", { url: "/api/v2/pokemon-shape/" }, ...(params ? [params] : [])] as const;
export type PokemonShapeListSuspenseQueryKey = ReturnType<typeof pokemonShapeListSuspenseQueryKey>;
export function pokemonShapeListSuspenseQueryOptions(params?: PokemonShapeList["queryParams"], options: PokemonShapeList["client"]["parameters"] = {}) {
    const queryKey = pokemonShapeListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonShapeList["data"], PokemonShapeList["error"]>({
                method: "get",
                url: `/api/v2/pokemon-shape/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Shapes used for sorting Pokémon in a Pokédex.
 * @summary List pokemon shapes
 * @link /api/v2/pokemon-shape/
 */
export function usePokemonShapeListHookSuspense<TData = PokemonShapeList["response"], TQueryKey extends QueryKey = PokemonShapeListSuspenseQueryKey>(params?: PokemonShapeList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<PokemonShapeList["response"], PokemonShapeList["error"], TData, TQueryKey>>;
    client?: PokemonShapeList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, PokemonShapeList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonShapeListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...pokemonShapeListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, PokemonShapeList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}