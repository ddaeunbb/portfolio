import { motion } from 'framer-motion';
import Lottie from 'react-lottie-player';
import BubbleJson from 'src/lottie/bubble.json';

interface BubbleProp {
  style: string;
}

export default function Bubble({ style }: BubbleProp) {
  return (
    <motion.div
      className={style}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}>
      <Lottie
        loop
        animationData={BubbleJson}
        play
        style={{ width: 800, height: 800 }}
      />
    </motion.div>
  );
}
