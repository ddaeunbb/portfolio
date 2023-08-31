import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import * as SC from './Modal.styled';

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

  return createPortal(
    <SC.ModalContainer>
      <SC.CloseBtn onClick={() => setter(false)} />
      <SC.Title style={{ WebkitTextStroke: '2px #463ED8' }}>{title}</SC.Title>
      <SC.Thumbnail className={bg} />
    </SC.ModalContainer>,
    portalElement,
  );
}
