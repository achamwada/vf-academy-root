import { FC } from 'react';
import { Property } from '../../data';
import { TotalPriceFunc } from '../Cards';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import { Container } from './styles';

export interface CardProps extends Property {
  totalPrice: TotalPriceFunc;
}
const Card: FC<CardProps> = ({
  deposit,
  title,
  value,
  totalPrice,
  ...bodyProps
}) => {
  const totalCost = totalPrice(value, deposit);
  return (
    <Container>
      <Header heading={title} />
      <Body {...bodyProps} />
      <Footer totalPrice={totalCost} />
    </Container>
  );
};

export default Card;
