const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '35178291-396a475acbd7be5fd5986a1bd';

const getImages = (query, page) => {
  return fetch(
    `${BASE_URL}/?key=${API_KEY}&q=${query}&image_type=photo&page=${page}&per_page=12`
  );
};

export default getImages;
