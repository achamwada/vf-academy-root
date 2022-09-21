import { FC } from 'react';
import { Block } from './styles';

export interface FooterProps {
  totalPrice: number;
}

const Footer: FC<FooterProps> = ({ totalPrice }) => {
  return (
    <Block>
      <p>{totalPrice}</p>
    </Block>
  );
};

export default Footer;
