import { FC } from "react";

type Props  = {
  id: string;
  name:  string;
};

export const PokemonListItem: FC<Props> = ({ id, name }) => {
  return (
    <article className="border border-primary rounded px-4 py-2 shadow-md justify-center flex flex-col items-center">
      <h3 className="text-xl font-bold mb-1">{name.toUpperCase()}</h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={`pokemon ${name}`}
        className="w-32 h-32 object-cover"
      />
    </article>
  );
};
