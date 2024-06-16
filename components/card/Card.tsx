import { FC, ReactElement } from "react";
import { CardStyled } from "./Card.styled";

export interface CardsProps {
  src: string;
  title: string;
  number: number;
}

const {TextCard,TitleCard,CardContent} = CardStyled;

const Card: FC<CardsProps> = ({ number,src, title }): ReactElement => {
  return (
      <CardContent>
        <img src={src} alt='image'/>
        <TitleCard>{title}</TitleCard>
      <TextCard>00{number}</TextCard>
    </CardContent>
  );
};

export default Card;
