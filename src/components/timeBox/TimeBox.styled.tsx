import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const LeftBox = styled.div`
  width: 480px;
  position: relative;
  display: flex;
  align-items: center;
  left: calc(50% - 480px);
`;

export const RightBox = styled.div`
  position: relative;
  left: 50%;
  width: 600px;
  display: flex;
  align-items: center;
`;

export const Container = styled.article`
  width: 400px;
  background-color: ${Common.colors.zinc100};
  padding: 1rem 2rem;
  border: 4px solid ${Common.colors.mainColor};
  color: ${Common.colors.zinc700};
  border-radius: 1.5rem;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  font-weight: 900;
  line-height: 1.5rem;
`;

export const Title = styled.h1`
  font-family: ${Common.fonts.subFont};
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: ${Common.colors.mainColor};
  margin-bottom: 0.25rem;
`;

export const Line = styled.div`
  width: 60px;
  height: 0.25rem;
  background-color: ${Common.colors.subColor};
  border-radius: 9999px;
`;

interface DirectionProp {
  direction: 'left' | 'right';
  length?: 'leftlong' | 'rightlong';
}

export const Circle = styled.div<DirectionProp>`
  width: 19px;
  height: 19px;
  border-radius: 9999px;
  background-color: ${Common.colors.zinc100};
  position: relative;
  z-index: 20;
  left: ${({ direction }) => direction === 'left' && '10px'};
  right: ${({ direction }) => direction === 'right' && '10px'};
`;

export const Date = styled.span<DirectionProp>`
  display: flex;
  position: absolute;
  font-family: ${Common.fonts.subFont};
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: ${Common.colors.zinc100};
  ${prop => (prop.direction === 'left' ? 'right: -20%;' : 'left: -16%;')}
  ${prop =>
    prop.length === 'leftlong' ? 'right: -38%;' : prop.length && 'left: -30%;'};
  -webkit-text-stroke: 1px ${Common.colors.mainColor};
`;
