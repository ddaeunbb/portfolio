import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const SkillsContainer = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding-top: 7rem;

  background-color: rgb(70 62 216 / 70%);
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleWrap = styled.h1`
  position: relative;
`;

export const Title = styled.h1`
  color: ${Common.colors.mainColor};
  font-size: 1.875rem;
  line-height: 2.25rem;
  letter-spacing: 0.025em;
  font-family: ${Common.fonts.subFont};
  -webkit-text-stroke: 1px ${Common.colors.mainColor};
`;

export const TitleShadow = styled.h1`
  position: absolute;
  top: 1px;
  right: 4px;

  color: white;
  font-size: 1.875rem;
  line-height: 2.25rem;
  letter-spacing: 0.025em;
  font-family: ${Common.fonts.subFont};
  -webkit-text-stroke: 1px ${Common.colors.mainColor};
`;

export const SkillWrap = styled.div`
  display: flex;
  width: 540px;
  margin: auto;
  flex-wrap: wrap;
  column-gap: 1.25rem;
  row-gap: 0.75rem;
`;
