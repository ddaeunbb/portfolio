import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const SkillsContainer = styled.section`
  box-sizing: border-box;
  padding-top: 7rem;
  width: 100vw;
  height: 100vh;
  background-color: rgb(70 62 216 / 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleWrap = styled.h1`
  position: relative;
`;

export const Title = styled.h1`
  font-family: ${Common.fonts.subFont};
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: ${Common.colors.mainColor};
  letter-spacing: 0.025em;
  -webkit-text-stroke: 1px ${Common.colors.mainColor};
`;

export const TitleShadow = styled.h1`
  position: absolute;
  font-family: ${Common.fonts.subFont};
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: white;
  letter-spacing: 0.025em;
  top: 1px;
  right: 4px;
  -webkit-text-stroke: 1px ${Common.colors.mainColor};
`;

export const SkillWrap = styled.div`
  width: 540px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 1.25rem;
  row-gap: 0.75rem;
  margin: auto;
`;
