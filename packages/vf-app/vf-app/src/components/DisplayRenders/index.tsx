import { FC } from 'react';
import { MEMORY_LOCATIONS } from '../../constants';
import { Block } from '../Card/styles';

export interface DisplayRendersProps {
  readMemoryFromIndex: (index: number) => number;
  refCalculatedRenders: number;
  mutableRootNumber: number;
  sharedMemoryDataViewValue: number;
}

const DisplayRenders: FC<DisplayRendersProps> = ({
  readMemoryFromIndex,
  mutableRootNumber,
  refCalculatedRenders,
  sharedMemoryDataViewValue,
}) => {
  const valueStoredInMemory = readMemoryFromIndex(MEMORY_LOCATIONS.RENDERS);

  return (
    <Block hasPadding={true}>
      Retrieved from Web Assembly memory {valueStoredInMemory}
      <pre>
        {JSON.stringify({
          refCalculatedRenders,
          sharedMemoryCalculatedRenders: valueStoredInMemory,
          mutableRootNumber,
          sharedMemoryDataViewValue,
        })}
      </pre>
    </Block>
  );
};

export default DisplayRenders;
