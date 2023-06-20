import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

export default function ImageGallery({ images }) {
  return (
    <ul className={css.ImageGallery}>
      {images.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} src={webformatURL} alt={tags} />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
