import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #fff;
  margin: 0 3rem;
  h1 {
    font-size: 1.2em;
    line-height: 1.1;
  }
`;
export interface BlockProps {
  hasPadding?: boolean;
}
export const Block = styled.div<BlockProps>(
  ({ hasPadding = false }): FlattenSimpleInterpolation => css`
    display: block;
    ${hasPadding && 'padding: 1.5rem;'}
  `,
);

export const ImageStyle = styled.img`
  width: 100%;
  object-fit: cover;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`;
