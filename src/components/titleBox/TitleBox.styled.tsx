import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const Prologue = styled.article`
  position: relative;
  width: 800px;
  height: 5.5rem;
  padding-top: 2rem;
  padding-right: 2.5rem;
  padding-left: 2.5rem;
  border: 4px solid rgb(70 62 216 / 70%);

  background-color: white;
  border-radius: 1.5rem;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 10%),
    0 4px 6px -4px rgb(0 0 0 / 10%);

  @media (max-width: 640px) {
    width: 280px;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

export const TitleShadow = styled.h1`
  position: absolute;
  top: -19px;
  left: 1.75rem;
  padding: 0 0.75rem;

  color: ${Common.colors.mainColor};
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-family: ${Common.fonts.subFont};
  -webkit-text-stroke: 1px ${Common.colors.mainColor};

  @media (max-width: 640px) {
    font-size: 1.25rem;
  }
`;

export const Title = styled.h1`
  position: absolute;
  top: -22px;
  left: 2.25rem;

  color: white;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-family: ${Common.fonts.subFont};

  @media (max-width: 640px) {
    font-size: 1.25rem;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Text = styled.p`
  font-weight: 900;
  font-size: 1.125rem;
  line-height: 1.75rem;
  @media (max-width: 640px) {
    font-weight: 500;
    width: 100%;
    font-size: 0.5rem;
    line-height: 1rem;
  }
`;
