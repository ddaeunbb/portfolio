import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const SkillBox = styled.div`
  display: flex;
  position: relative;
  width: 3.5rem;
  height: 3.5rem;
  padding: 1rem;
  border: 2px solid ${Common.colors.baseBorder};

  background-color: #f4f4f5;
  border-radius: 1.5rem;
  justify-content: center;
  align-items: center;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 10%),
    0 4px 6px -4px rgb(0 0 0 / 10%);
  @media (max-width: 640px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const SkillOverlay = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: #27272a;

  color: white;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 1.5rem;
  opacity: 0;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &:hover {
    /* stylelint-disable-next-line declaration-empty-line-before */
    opacity: 1;
  }
`;

export const SkillWebp = styled.source`
  width: 100%;
  height: 100%;
`;

export const SkillImg = styled.img`
  width: 100%;
  height: 100%;
`;
