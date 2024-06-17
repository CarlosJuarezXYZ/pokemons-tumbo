import { FC, useEffect, useState } from "react";
import { pokemonProxy } from "../../proxy/pokemon";
import Card from "../../components/card/Card";
import { PokemonDetails } from "../../domain/pokemon";
import { Flex, Modal } from "antd";
import { HomeStyled } from "./Home.styled";
import { CardStyled } from "../../components/card/Card.styled";
import {  useNavigate } from "react-router-dom";

const { ContentHome } = HomeStyled;
const { TitleCard,TextCard } = CardStyled;

const Home: FC = () => {
  const [pokemons, setPokemons] = useState<PokemonDetails[]>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailPokemon, setDetailPokeom] = useState<any>();
  const navigate = useNavigate();

  const showModal = (pokemon: PokemonDetails) => {
    setDetailPokeom(pokemon);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
      {pokemons?.map(
        ({
          id,
          name,
          imageUrl,
          height,
          weight,
          type,
          abilities,
        }: PokemonDetails) => (
          <div key={id}>
            <Card
              src={imageUrl}
              title={name}
              number={id}
              onClick={() =>
                showModal({
                  id,
                  name,
                  imageUrl,
                  height,
                  weight,
                  type,
                  abilities,
                })
              }
            />
          </div>
        )
      )}
      <Modal
        title={`${detailPokemon?.name} #${detailPokemon?.id}`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Flex gap={10}>
          <img src={detailPokemon?.imageUrl} width={200} height={300} />
          <div>
            <TitleCard>
              {detailPokemon?.name} #{detailPokemon?.id}
            </TitleCard>
            <Flex justify="space-between">
              <div>
                <div>
                  <TextCard>height</TextCard>
                  <p>{detailPokemon?.height}</p>
                </div>
                <div>
                  <TextCard>weight</TextCard>
                  <p>{detailPokemon?.weight}</p>
                </div>
              </div>

              <div>
                <div>
                  <TextCard>type</TextCard>
                  <p>{detailPokemon?.type[0]?.name as string}</p>
                </div>
                <div>
                  <TextCard>abilities</TextCard>
                  <p>{detailPokemon?.abilities[0]?.name}</p>
                </div>
              </div>
            </Flex>
          </div>
        </Flex>
      </Modal>
    </ContentHome>
  );
};

export default Home;
