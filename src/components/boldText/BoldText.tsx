import { motion } from 'framer-motion';
import * as SC from './BoldText.styled';
import { textVariant } from 'src/variants/variants';

interface BoldTextProp {
  text: string;
}

export default function BoldText({ text }: BoldTextProp) {
  return (
    <motion.div
      css={SC.MotionCss}
      variants={textVariant}
      initial="hidden"
      animate="end">
      <SC.Text>{text}</SC.Text>
      <SC.BackText>{text}</SC.BackText>
    </motion.div>
  );
}
