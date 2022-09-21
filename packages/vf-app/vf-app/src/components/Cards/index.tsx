import { FC } from 'react';
import { MEMORY_LOCATIONS } from '../../constants';
import { Property } from '../../data';
import Card from '../Card';
import { Container } from './styles';

export type TotalPriceFunc = (a: number, b: number) => number;
export interface CardsProps {
  properties: Property[];
  totalPrice: TotalPriceFunc;
  sharedArrayBuffer: Int8Array;
}

const Cards: FC<CardsProps> = ({
  properties,
  totalPrice,
  sharedArrayBuffer,
}) => {
  // sharedArrayBuffer[MEMORY_LOCATIONS.RENDERS]++;

  return (
    <Container>
      {properties.map((property, key) => (
        <Card
          key={key}
          totalPrice={totalPrice}
          sharedArrayBuffer={sharedArrayBuffer}
          {...property}
        />
      ))}
    </Container>
  );
};

export default Cards;
