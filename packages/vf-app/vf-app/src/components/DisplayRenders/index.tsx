import React, { FC } from 'react';
import { MEMORY_LOCATIONS } from '../../constants';
import { Block } from '../Card/styles';

export interface DisplayRendersProps {
  readMemoryFromIndex: (index: number) => number;
}
const DisplayRenders: FC<DisplayRendersProps> = ({ readMemoryFromIndex }) => {
  const totalRenders = readMemoryFromIndex(MEMORY_LOCATIONS.RENDERS);
  return (
    <Block hasPadding={true}>
      Total number of component renders {totalRenders}
    </Block>
  );
};

export default DisplayRenders;
