import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ closeModal, src, alt }) {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [closeModal]);

  const handleOverlayClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <div className={css.ModalOverlay} onClick={handleOverlayClick}>
      <div>
        <img className={css.Modal} src={src} alt={alt} />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
