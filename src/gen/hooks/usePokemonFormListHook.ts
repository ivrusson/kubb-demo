import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { PokemonFormListQueryResponseType, PokemonFormListQueryParamsType } from "../ts/PokemonFormListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type PokemonFormListClient = typeof client<PokemonFormListQueryResponseType, Error, never>;
type PokemonFormList = {
    data: PokemonFormListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: PokemonFormListQueryParamsType;
    headerParams: never;
    response: PokemonFormListQueryResponseType;
    client: {
        parameters: Partial<Parameters<PokemonFormListClient>[0]>;
        return: Awaited<ReturnType<PokemonFormListClient>>;
    };
};
export const pokemonFormListQueryKey = (params?: PokemonFormList["queryParams"]) => ["v5", { url: "/api/v2/pokemon-form/" }, ...(params ? [params] : [])] as const;
export type PokemonFormListQueryKey = ReturnType<typeof pokemonFormListQueryKey>;
export function pokemonFormListQueryOptions(params?: PokemonFormList["queryParams"], options: PokemonFormList["client"]["parameters"] = {}) {
    const queryKey = pokemonFormListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonFormList["data"], PokemonFormList["error"]>({
                method: "get",
                url: `/api/v2/pokemon-form/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety.
 * @summary List pokemon forms
 * @link /api/v2/pokemon-form/
 */
export function usePokemonFormListHook<TData = PokemonFormList["response"], TQueryData = PokemonFormList["response"], TQueryKey extends QueryKey = PokemonFormListQueryKey>(params?: PokemonFormList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<PokemonFormList["response"], PokemonFormList["error"], TData, TQueryData, TQueryKey>>;
    client?: PokemonFormList["client"]["parameters"];
} = {}): UseQueryResult<TData, PokemonFormList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonFormListQueryKey(params);
    const query = useQuery({
        ...pokemonFormListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, PokemonFormList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const pokemonFormListSuspenseQueryKey = (params?: PokemonFormList["queryParams"]) => ["v5", { url: "/api/v2/pokemon-form/" }, ...(params ? [params] : [])] as const;
export type PokemonFormListSuspenseQueryKey = ReturnType<typeof pokemonFormListSuspenseQueryKey>;
export function pokemonFormListSuspenseQueryOptions(params?: PokemonFormList["queryParams"], options: PokemonFormList["client"]["parameters"] = {}) {
    const queryKey = pokemonFormListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonFormList["data"], PokemonFormList["error"]>({
                method: "get",
                url: `/api/v2/pokemon-form/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety.
 * @summary List pokemon forms
 * @link /api/v2/pokemon-form/
 */
export function usePokemonFormListHookSuspense<TData = PokemonFormList["response"], TQueryKey extends QueryKey = PokemonFormListSuspenseQueryKey>(params?: PokemonFormList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<PokemonFormList["response"], PokemonFormList["error"], TData, TQueryKey>>;
    client?: PokemonFormList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, PokemonFormList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonFormListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...pokemonFormListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, PokemonFormList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}