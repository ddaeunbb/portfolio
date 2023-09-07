import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const ProjectContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding-top: 8rem;
  padding-bottom: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
`;

export const IntroImg = styled.img`
  display: flex;
  width: 90%;
  height: 18rem;
  border: 1px solid ${Common.colors.baseBorder};

  background-color: ${Common.colors.subColor};
  max-width: 700px;
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  object-position: center;

  @media (max-width: 640px) {
    /* stylelint-disable-next-line declaration-empty-line-before */
    height: 9rem;
  }
`;
