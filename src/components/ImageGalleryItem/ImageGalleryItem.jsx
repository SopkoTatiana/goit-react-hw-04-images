import { useState } from 'react';
import Modal from '..//Modal';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ src, alt }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <li>
      <img
        src={src}
        alt={alt}
        className={css.ImageGalleryItemImage}
        onClick={() => {
          setShowModal(!showModal);
        }}
      />
      {showModal && (
        <Modal
          src={src}
          alt={alt}
          closeModal={() => {
            setShowModal(!showModal);
          }}
        />
      )}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
