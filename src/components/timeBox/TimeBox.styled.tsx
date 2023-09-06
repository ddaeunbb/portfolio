import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const LeftBox = styled.div`
  display: flex;
  position: relative;
  left: calc(50% - 480px);
  width: 480px;
  align-items: center;
`;

export const RightBox = styled.div`
  display: flex;
  position: relative;
  left: 50%;
  width: 600px;
  align-items: center;
`;

export const Container = styled.article`
  width: 400px;
  padding: 1rem 2rem;
  border: 4px solid ${Common.colors.mainColor};

  background-color: ${Common.colors.zinc100};

  color: ${Common.colors.zinc700};
  font-weight: 900;
  line-height: 1.5rem;
  border-radius: 1.5rem;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 10%),
    0 2px 4px -2px rgb(0 0 0 / 10%);
`;

export const Title = styled.h1`
  margin-bottom: 0.25rem;

  color: ${Common.colors.mainColor};
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-family: ${Common.fonts.subFont};
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
  position: relative;
  right: ${({ direction }) => direction === 'right' && '10px'};
  left: ${({ direction }) => direction === 'left' && '10px'};
  z-index: 20;
  width: 19px;
  height: 19px;

  background-color: ${Common.colors.zinc100};
  border-radius: 9999px;
`;

export const Date = styled.span<DirectionProp>`
  display: flex;
  position: absolute;
  font-family: ${Common.fonts.subFont};

  color: ${Common.colors.zinc100};
  font-size: 1.125rem;
  line-height: 1.75rem;

  ${prop => (prop.direction === 'left' ? 'right: -20%;' : 'left: -16%;')}
  ${prop =>
    prop.length === 'leftlong' ? 'right: -38%;' : prop.length && 'left: -30%;'};
  -webkit-text-stroke: 1px ${Common.colors.mainColor};
`;
