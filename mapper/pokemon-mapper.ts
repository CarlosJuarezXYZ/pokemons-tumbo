import { PokemonDetails, PokemonResponse } from "../domain/pokemon";

export const getPokemonsMapper = (
  id: number,
  name: string,
  pokemon: any
): PokemonDetails => {
  return {
    id,
    name,
    imageUrl: pokemon.sprites.front_default,
    height: pokemon.height,
    weight: pokemon.weight,
    type: pokemon.types.map(({ name, url }: PokemonResponse) => {
      return {
        name,
        url,
      };
    }),
    abilities: pokemon.abilities.map(({ name, url }: PokemonResponse) => {
      return {
        name,
        url,
      };
    }),
  };
};
