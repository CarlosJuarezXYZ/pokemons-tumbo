export interface PokemonResponse {
  name: string;
  url: string;
}

export interface PokemonDetails {
  id: number;
  name: string;
  imageUrl: string;
  height?: string;
  weight?: string;
  type?: PokemonResponse[];
  abilities?: PokemonResponse[];
}
