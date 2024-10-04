import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { PokemonHabitatRetrieveQueryResponseType, PokemonHabitatRetrievePathParamsType } from "../ts/PokemonHabitatRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type PokemonHabitatRetrieveClient = typeof client<PokemonHabitatRetrieveQueryResponseType, Error, never>;
type PokemonHabitatRetrieve = {
    data: PokemonHabitatRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: PokemonHabitatRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: PokemonHabitatRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<PokemonHabitatRetrieveClient>[0]>;
        return: Awaited<ReturnType<PokemonHabitatRetrieveClient>>;
    };
};
export const pokemonHabitatRetrieveQueryKey = (id: PokemonHabitatRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/pokemon-habitat/:id/", params: { id: id } }] as const;
export type PokemonHabitatRetrieveQueryKey = ReturnType<typeof pokemonHabitatRetrieveQueryKey>;
export function pokemonHabitatRetrieveQueryOptions(id: PokemonHabitatRetrievePathParamsType["id"], options: PokemonHabitatRetrieve["client"]["parameters"] = {}) {
    const queryKey = pokemonHabitatRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonHabitatRetrieve["data"], PokemonHabitatRetrieve["error"]>({
                method: "get",
                url: `/api/v2/pokemon-habitat/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.
 * @summary Get pokemom habita
 * @link /api/v2/pokemon-habitat/:id/
 */
export function usePokemonHabitatRetrieveHook<TData = PokemonHabitatRetrieve["response"], TQueryData = PokemonHabitatRetrieve["response"], TQueryKey extends QueryKey = PokemonHabitatRetrieveQueryKey>(id: PokemonHabitatRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<PokemonHabitatRetrieve["response"], PokemonHabitatRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: PokemonHabitatRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, PokemonHabitatRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonHabitatRetrieveQueryKey(id);
    const query = useQuery({
        ...pokemonHabitatRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, PokemonHabitatRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const pokemonHabitatRetrieveSuspenseQueryKey = (id: PokemonHabitatRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/pokemon-habitat/:id/", params: { id: id } }] as const;
export type PokemonHabitatRetrieveSuspenseQueryKey = ReturnType<typeof pokemonHabitatRetrieveSuspenseQueryKey>;
export function pokemonHabitatRetrieveSuspenseQueryOptions(id: PokemonHabitatRetrievePathParamsType["id"], options: PokemonHabitatRetrieve["client"]["parameters"] = {}) {
    const queryKey = pokemonHabitatRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonHabitatRetrieve["data"], PokemonHabitatRetrieve["error"]>({
                method: "get",
                url: `/api/v2/pokemon-habitat/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.
 * @summary Get pokemom habita
 * @link /api/v2/pokemon-habitat/:id/
 */
export function usePokemonHabitatRetrieveHookSuspense<TData = PokemonHabitatRetrieve["response"], TQueryKey extends QueryKey = PokemonHabitatRetrieveSuspenseQueryKey>(id: PokemonHabitatRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<PokemonHabitatRetrieve["response"], PokemonHabitatRetrieve["error"], TData, TQueryKey>>;
    client?: PokemonHabitatRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, PokemonHabitatRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonHabitatRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...pokemonHabitatRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, PokemonHabitatRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}