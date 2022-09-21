import { FC } from 'react';
import { Property } from '../../data';
import Card from '../Card';
import { Container } from './styles';

export type TotalPriceFunc = (a: number, b: number) => number;
export interface CardsProps {
  properties: Property[];
  totalPrice: TotalPriceFunc;
}

const Cards: FC<CardsProps> = ({ properties, totalPrice }) => {
  return (
    <Container>
      {properties.map((property, key) => (
        <Card key={key} totalPrice={totalPrice} {...property} />
      ))}
    </Container>
  );
};

export default Cards;
