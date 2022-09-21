import React, { FC } from 'react';
import { Property } from '../../data';
import { Block, ImageStyle } from './styles';

type BodyProps = Pick<Property, 'description' | 'location' | 'primaryAsset'>;
const Body: FC<BodyProps> = ({ description, location, primaryAsset }) => {
  return (
    <Block>
      <ImageStyle alt={location} src={primaryAsset} />
      <p>{description}</p>
    </Block>
  );
};

export default Body;
