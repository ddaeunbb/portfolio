import styled from '@emotion/styled';
import { Common } from 'src/style/common';

export const Summary = styled.summary`
  font-family: ${Common.fonts.subFont};
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgb(70 62 216 / 0.7);
  margin-bottom: 0.5rem;
`;

export const ImgWrap = styled.div`
  width: 100%;
  height: 24rem;
  border-radius: 1rem;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  border: 2px solid ${Common.colors.baseBorder};
  overflow: hidden;
`;

export const ImgWebp = styled.source`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
