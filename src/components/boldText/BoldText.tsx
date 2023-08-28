import { motion } from 'framer-motion';
import * as SC from './BoldText.styled';

interface BoldTextProp {
  text: string;
}

const textVariant = {
  hidden: { opacity: 0, y: 15 },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      delay: 0.5,
      stiffness: 100,
    },
  },
};

export default function BoldText({ text }: BoldTextProp) {
  return (
    <motion.div
      className="relative
      t"
      variants={textVariant}
      initial="hidden"
      animate="end">
      <SC.Text>{text}</SC.Text>
      <SC.BackText style={{ WebkitTextStroke: '1px black' }}>
        {text}
      </SC.BackText>
    </motion.div>
  );
}
