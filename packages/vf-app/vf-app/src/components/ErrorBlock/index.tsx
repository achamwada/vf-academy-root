import { FC } from 'react';
import { Block } from './styles';

export enum Level {
  INFO = '#04d8fe',
  WARN = '#f84e02',
  ERROR = '#dc143c',
}
export interface ErrorBlockProps {
  message?: string;
  level?: Level;
  hasError: boolean;
}
const ErrorBlock: FC<ErrorBlockProps> = ({ level, message, hasError }) => {
  return hasError ? <Block borderColor={level!}>{message}</Block> : null;
};

export default ErrorBlock;
