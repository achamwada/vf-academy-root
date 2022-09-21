import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
export interface BlockStyleProps {
  borderColor: string;
}
export const Block = styled.div<BlockStyleProps>(
  ({ borderColor }): FlattenSimpleInterpolation => css`
    display: block;
    border: 1px solid ${borderColor};
    padding: 2rem;
    text-align: center;
  `,
);
