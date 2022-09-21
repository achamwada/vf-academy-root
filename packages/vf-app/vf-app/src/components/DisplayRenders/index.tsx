import React, { FC } from 'react';
import { MEMORY_LOCATIONS } from '../../constants';
import { Block } from '../Card/styles';

export interface DisplayRendersProps {
  readMemoryFromIndex: (index: number) => number;
  refCalculatedRenders: number;
  mutableRootNumber: number;
  sharedMemoryCalculatedRenders: number;
}

let num = 0;

const DisplayRenders: FC<DisplayRendersProps> = ({
  readMemoryFromIndex,
  mutableRootNumber,
  refCalculatedRenders,
  sharedMemoryCalculatedRenders,
}) => {
  const totalRenders = readMemoryFromIndex(MEMORY_LOCATIONS.RENDERS);
  num++;
  console.log('runns ', num);
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
