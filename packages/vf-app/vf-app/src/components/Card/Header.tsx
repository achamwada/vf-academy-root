import { FC } from 'react';

export interface HeaderProps {
  heading: string;
}

const Header: FC<HeaderProps> = ({ heading }) => {
  return <h1>{heading}</h1>;
};

export default Header;
