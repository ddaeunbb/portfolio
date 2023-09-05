import { motion } from 'framer-motion';
import Lottie from 'react-lottie-player';
import * as SC from './Main.styled';
import BoldText from 'src/components/boldText/BoldText';
import Bubble from 'src/components/bubble/Bubble';
import ArrowJson from 'src/lottie/arrow.json';

export default function Main() {
  return (
    <SC.MainContainer>
      <motion.div
        css={SC.MotionCss1}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      />

      <Bubble style={SC.LeftBubble} />
      <Bubble style={SC.RightBubble} />

      <SC.TopTitleWrap>
        <BoldText text="FRONTEND" />
      </SC.TopTitleWrap>

      <SC.BottomTitleWrap>
        <BoldText text="KIMDAEUN" />
      </SC.BottomTitleWrap>

      <motion.div
        css={SC.MotionCss2}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}>
        <Lottie
          loop
          animationData={ArrowJson}
          play
          style={{ width: 120, height: 120 }}
        />
      </motion.div>
    </SC.MainContainer>
  );
}
