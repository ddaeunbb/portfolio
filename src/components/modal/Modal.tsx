import { motion } from 'framer-motion';
import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import * as SC from './Modal.styled';
import { opacityFastVisible } from 'src/variants/variants';

const portalElement = document.getElementById('modal') as HTMLElement;

interface ModalProp {
  title: string;
  bg: string;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ title, bg, setter }: ModalProp) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // 모달창 닫는 핸들러
  const handleModalClose = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (e.currentTarget === e.target) setter(false);
    },
    [setter],
  );

  return createPortal(
    <motion.div
      variants={opacityFastVisible}
      initial="hidden"
      animate="visible">
      <SC.ModalContainer onClick={e => handleModalClose(e)}>
        <SC.CloseBtn onClick={() => setter(false)} />
        <SC.Title>{title}</SC.Title>
        <SC.Thumbnail src={bg} />
      </SC.ModalContainer>
    </motion.div>,
    portalElement,
  );
}
