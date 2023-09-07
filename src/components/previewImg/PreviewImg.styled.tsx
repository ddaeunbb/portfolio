import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const Summary = styled.summary`
  margin-bottom: 0.5rem;

  color: rgb(70 62 216 / 70%);
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: ${Common.fonts.subFont};
  @media (max-width: 640px) {
    font-size: 0.75rem;
  }
`;

export const ImgWrap = styled.div`
  overflow: hidden;
  width: 100%;
  height: 24rem;
  border: 2px solid ${Common.colors.baseBorder};
  border-radius: 1rem;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 10%),
    0 2px 4px -2px rgb(0 0 0 / 10%);

  @media (max-width: 640px) {
    /* stylelint-disable-next-line declaration-empty-line-before */
    width: 20rem;
    height: 13rem;
    margin: auto;
  }
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
