import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const ProjectContainer = styled.div`
  margin: 0 auto;
  padding-top: 8rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
`;

export const IntroImg = styled.div`
  width: 90%;
  max-width: 700px;
  height: 20rem;
  background-color: ${Common.colors.subColor};
  border: 1px solid ${Common.colors.mainColor};
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
