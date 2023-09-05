import { motion } from 'framer-motion';
import * as SC from './TimeBox.styled';
import { useObserver } from 'src/hooks/useObserver';
import { spin } from 'src/variants/variants';

interface TimeBoxProp {
  direction?: 'left' | 'right';
  title: string;
  text: string;
  sub?: string;
  date: string;
  length?: 'leftlong' | 'rightlong';
}

export default function TimeBox({
  direction = 'left',
  title,
  text,
  sub,
  date,
  length,
}: TimeBoxProp) {
  const { ref, animation } = useObserver();

  switch (direction) {
    case 'left':
      return (
        <>
          <motion.div initial="hidden" animate={animation} variants={spin}>
            <SC.LeftBox>
              <SC.Container>
                <SC.Title>{title}</SC.Title>
                {text}
                <br />
                {sub}
              </SC.Container>
              <SC.Line />
              <SC.Circle direction="left" />
              <SC.Date direction="left" length={length}>
                {date}
              </SC.Date>
              <div ref={ref} />
            </SC.LeftBox>
          </motion.div>
        </>
      );
    case 'right':
      return (
        <motion.div initial="hidden" animate={animation} variants={spin}>
          <SC.RightBox>
            <SC.Date direction="right" length={length}>
              {date}
            </SC.Date>
            <SC.Circle direction="right" />
            <SC.Line />
            <SC.Container>
              <SC.Title>{title}</SC.Title>
              {text}
              <br />
              {sub}
            </SC.Container>
            <div ref={ref} />
          </SC.RightBox>
        </motion.div>
      );
  }
}
