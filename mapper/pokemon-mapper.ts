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
    type: pokemon?.types.map(({ type }: any) => {
      return {
        name: type.name,
        url: type.url,
      };
    }),
    abilities: pokemon?.abilities.map(({ ability }: any) => {
      return {
        name: ability.name,
        url: ability.url,
      };
    }),
  };
};
