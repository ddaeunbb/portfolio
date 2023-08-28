import { motion } from 'framer-motion';
import Lottie from 'react-lottie-player';
import BoldText from '../../components/boldText/BoldText';
import Bubble from '../../components/bubble/Bubble';
import ArrowJson from '../../lottie/arrow.json';
import * as SC from './Main.styled';

export default function Main() {
  return (
    <SC.MainContainer>
      <motion.div
        className="w-[35rem] h-[35rem] max-md:w-[30rem] max-md:h-[30rem] rounded-full bg-lightpurple border-2 border-deeppurple"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      />

      <Bubble style="absolute left-[-200px]" />
      <Bubble style="absolute right-[-200px]" />

      <div className="absolute left-20 top-[40%] max-md:left-3 max-md:top-[45%]">
        <BoldText text="FRONTEND" />
      </div>

      <div className="absolute right-10 bottom-[20%] max-md:right-3 max-md:bottom-[30%]">
        <BoldText text="KIMDAEUN" />
      </div>

      <motion.div
        className="absolute right-0 bottom-0 cursor-pointer"
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
