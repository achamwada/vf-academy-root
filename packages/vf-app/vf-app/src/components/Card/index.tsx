import { FC } from 'react';
import { MEMORY_LOCATIONS } from '../../constants';
import { Property } from '../../data';
import { TotalPriceFunc } from '../Cards';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import { Container } from './styles';

export interface CardProps extends Property {
  totalPrice: TotalPriceFunc;
  sharedArrayBuffer: Int8Array;
}
const Card: FC<CardProps> = ({
  deposit,
  title,
  value,
  totalPrice,
  sharedArrayBuffer,
  ...bodyProps
}) => {
  const totalCost = totalPrice(value, deposit);
  // sharedArrayBuffer[MEMORY_LOCATIONS.RENDERS]++;
  return (
    <Container>
      <Header heading={title} />
      <Body {...bodyProps} />
      <Footer totalPrice={totalCost} />
    </Container>
  );
};

export default Card;
