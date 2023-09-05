import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const SkillBox = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1.5rem;
  background-color: #f4f4f5;
  border: 2px solid ${Common.colors.baseBorder};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1rem;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

export const SkillOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: white;
  background-color: #27272a;
  border-radius: 1.5rem;
  opacity: 0;
  text-align: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  &:hover {
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
