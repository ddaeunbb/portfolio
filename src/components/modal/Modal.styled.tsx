import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const ModalContainer = styled.figure`
  display: flex;
  position: fixed;
  z-index: 30;
  width: 100vw;
  height: 100vh;

  background-color: rgb(82 82 91 / 90%);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  gap: 1.25rem;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 2rem;
  height: 2rem;
  border: none;
  background-color: transparent;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 100ms;

  &:hover {
    /* stylelint-disable-next-line declaration-empty-line-before */
    transform: scale(1.1);
  }
`;

export const CloseSVG = css`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  padding: 0.75rem;

  background-color: ${Common.colors.subColor};

  color: white;
  font-size: 2.25rem;
  font-family: ${Common.fonts.subFont};
  border-radius: 0.75rem;
  -webkit-text-stroke: 2px ${Common.colors.mainColor};
  @media (max-width: 768px) {
    width: 80%;
    font-size: 1.25rem;
    text-align: center;
    line-height: 1.75rem;
  }
`;

export const Thumbnail = styled.img`
  width: 900px;
  height: 500px;
  margin: 0 auto;
  border: 8px solid ${Common.colors.subColor};

  background-color: ${Common.colors.subColor};
  background-size: contain;
  border-radius: 0.75rem;

  @media (max-width: 768px) {
    width: 90%;
    height: 18rem;
    border: 3px solid ${Common.colors.subColor};
    background-size: cover;
  }
`;
