import { FC, ReactElement } from "react";
import { CardStyled } from "./Card.styled";

export interface CardsProps {
  src: string;
  title: string;
  number: number;
  onClick?:()=>void
}

const {TextCard,TitleCard,CardContent} = CardStyled;

const Card: FC<CardsProps> = ({ number,src, title,onClick }): ReactElement => {
  return (
      <CardContent onClick={onClick} >
        <img src={src} alt='image'/>
        <TitleCard>{title}</TitleCard>
      <TextCard>00{number}</TextCard>
    </CardContent>
  );
};

export default Card;
