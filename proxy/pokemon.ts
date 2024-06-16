import { PokemonDetails, PokemonResponse } from "../domain/pokemon";
import { getPokemonsMapper } from "../mapper/pokemon-mapper";

const POKEMONS = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonList = async (): Promise<PokemonResponse[]> => {
  const response = await fetch(POKEMONS);
  const data = await response.json();

  if (response.ok) {
    return data.results;
  }
  throw new Error(`Error fetching Pokemon list: ${response.statusText}`);
};

const getPokemonDetails = async (
  url: string,
  name: string
): Promise<PokemonDetails> => {
  const response = await fetch(url);
  const pokemon = await response.json();
  const id = parseInt(url.split("/").slice(-2, -1)[0], 10);
  if (response.ok) {
    return getPokemonsMapper(id, name, pokemon);
  }
  throw new Error(`Error fetching Pokemon details: ${response.statusText}`);
};

const getAllPokemons = async (): Promise<PokemonDetails[]> => {
  const pokemonList = await getPokemonList();
  const pokemonDetailsPromises = pokemonList.map(({ url, name }) =>
    getPokemonDetails(url, name)
  );
  const pokemonDetails = await Promise.all(pokemonDetailsPromises);
  return pokemonDetails;
};

export const pokemonProxy = {
  getAllPokemons,
};
