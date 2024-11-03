import axios from 'axios';

const token = '626a414a53916a0fbdf7e48a';

const contactsInstance = axios.create({
  baseURL: 'https://626a414a53916a0fbdf7e48a.mockapi.io/',
  headers: { 'content-type': 'application/json' },
  method: 'GET',
  // params: {
  //   include_adult: false,
  //   language: 'en-US',
  //   limit: 10,
  // },
});

// export const imageURL = 'https://image.tmdb.org/t/p/w500';

export const getAllContacts = async params => {
  const { data } = await contactsInstance.get('/contacts', {
    // params,
  });

  return data;
};

export const searchMovies = async query => {
  const { data } = await contactsInstance.get('/search/movie', {
    params: {
      query,
    },
  });
  return data;
};

export const getMovieById = async id => {
  const { data } = await contactsInstance.get(`/movie/${id}`);
  return data;
};

export const getMovieCast = async id => {
  const { data } = await contactsInstance.get(`/movie/${id}/credits`);
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await contactsInstance.get(`/movie/${id}/reviews`);
  return data;
};
