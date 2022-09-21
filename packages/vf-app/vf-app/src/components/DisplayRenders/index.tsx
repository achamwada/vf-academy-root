import React, { FC } from 'react';
import { MEMORY_LOCATIONS } from '../../constants';
import { Block } from '../Card/styles';

export interface DisplayRendersProps {
  readMemoryFromIndex: (index: number) => number;
  refCalculatedRenders: number;
  mutableRootNumber: number;
  sharedMemoryCalculatedRenders: number;
}

const DisplayRenders: FC<DisplayRendersProps> = ({
  readMemoryFromIndex,
  mutableRootNumber,
  refCalculatedRenders,
  sharedMemoryCalculatedRenders,
}) => {
  const totalRenders = readMemoryFromIndex(MEMORY_LOCATIONS.RENDERS);

  return (
    <Block hasPadding={true}>
      Total number of component renders {totalRenders}
      <pre>
        {JSON.stringify({
          refCalculatedRenders,
          sharedMemoryCalculatedRenders: totalRenders,
          mutableRootNumber,
        })}
      </pre>
    </Block>
  );
};

export default DisplayRenders;
