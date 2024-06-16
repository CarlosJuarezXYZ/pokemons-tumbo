import { FC, useEffect, useState } from "react";
import { pokemonProxy } from "../../proxy/pokemon";
import Card from "../../components/card/Card";
import { PokemonDetails } from "../../domain/pokemon";
import { HomeStyled } from "./Home.styled";

const {ContentHome} = HomeStyled;

const Home: FC = () => {
  const [pokemons, setPokemons] = useState<PokemonDetails[]>();

  useEffect(() => {
    const PokemonsAll = async (): Promise<void> => {
      try {
        setPokemons(await pokemonProxy.getAllPokemons());
      } catch (error) {
        throw new Error(error as string);
      }
    };

    PokemonsAll();
  }, []);



  return (
    <ContentHome>
      {pokemons?.map(({ id,name, imageUrl }: PokemonDetails) => (
        <Card src={imageUrl} title={name} number={id} />
      ))}
    </ContentHome>
  );
};

export default Home;
