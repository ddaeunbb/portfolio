import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const Prologue = styled.article`
  position: relative;
  width: 900px;
  height: 8rem;
  border-radius: 1.5rem;
  border: 4px solid rgb(70 62 216 / 0.7);
  background-color: white;
  padding-top: 2rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

export const TitleShadow = styled.h1`
  font-family: ${Common.fonts.subFont};
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: ${Common.colors.mainColor};
  position: absolute;
  top: -19px;
  left: 1.75rem;
  padding: 0 0.75rem;
  -webkit-text-stroke: 1px ${Common.colors.mainColor};
`;

export const Title = styled.h1`
  position: absolute;
  font-family: ${Common.fonts.subFont};
  left: 2.25rem;
  top: -22px;
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: white;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Text = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 900;
`;
