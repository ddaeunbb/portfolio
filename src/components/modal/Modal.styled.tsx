import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const ModalContainer = styled.figure`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgb(82 82 91 / 0.9);
  z-index: 30;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  gap: 1.25rem;
`;

export const CloseBtn = styled.button`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
  background-size: cover;
  background-image: url('/public/icon/close.png');
  &:hover {
    transform: scale(1.1);
  }
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 100ms;
`;

export const Title = styled.h1`
  font-family: ${Common.fonts.subFont};
  font-size: 2.25rem;
  color: white;
  background-color: ${Common.colors.subColor};
  padding: 0.75rem;
  border-radius: 0.75rem;
  -webkit-text-stroke: 2px ${Common.colors.mainColor};
`;

export const Thumbnail = styled.img`
  margin: 0px auto;
  width: 900px;
  height: 500px;
  background-color: ${Common.colors.subColor};
  background-size: contain;
  border: 8px solid ${Common.colors.subColor};
  border-radius: 0.75rem;
`;
