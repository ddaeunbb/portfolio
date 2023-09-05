import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

export const BackCss = css`
  stroke: ${Common.colors.mainColor};
  fill: ${Common.colors.mainColor};
`;
