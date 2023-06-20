import { useState, useEffect } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button';
import getImages from 'services/getImages';
import Loader from './Loader';

const Status = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const INITIAL_STATE = {
  query: '',
  images: [],
  page: 1,
  status: Status.IDLE,
  total: 0,
  error: '',
};

export default function App() {
  const [query, setQuery] = useState(INITIAL_STATE.query);
  const [images, setImages] = useState(INITIAL_STATE.images);
  const [page, setPage] = useState(INITIAL_STATE.page);
  const [status, setStatus] = useState(INITIAL_STATE.status);
  const [total, setTotal] = useState(INITIAL_STATE.total);
  const [error, setError] = useState(INITIAL_STATE.error);

  useEffect(() => {
    if (query === '') {
      return;
    }

    setStatus(Status.LOADING);
    getImages(query, page)
      .then(res => res.json())
      .then(({ hits, totalHits }) => {
        if (totalHits === 0) {
          throw new Error("Couldn't find the image you requested!");
        } else {
          setImages([...images, ...hits]);
          setTotal(totalHits);
          setStatus(Status.SUCCESS);
        }
      })
      .catch(({ message }) => {
        setError(message);
        setStatus(Status.ERROR);
      });
  }, [page, query]);

  const handleFormSubmit = newQuery => {
    if (newQuery === '' || newQuery === query) {
      return;
    }

    setImages(INITIAL_STATE.images);
    setPage(INITIAL_STATE.page);
    setQuery(newQuery);
    setTotal(INITIAL_STATE.total);
    setError(INITIAL_STATE.error);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery images={images} />
      {images.length < total && <Button onClick={nextPage} />}
      {status === Status.LOADING && <Loader />}
      {status === Status.ERROR && <p>{error}</p>}
    </>
  );
}
