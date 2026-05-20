import axios from 'axios';

const API_URL = 'https://realworld.habsida.net/api';

export const fetchArticles = async (page) => {
  const limit = 10;
  const offset = (page - 1) * limit;

  const response = await axios.get(
    `${API_URL}/articles?limit=${limit}&offset=${offset}`
  );

  return response.data;
};

export const fetchSingleArticle = async (slug) => {
  const response = await axios.get(
    `${API_URL}/articles/${slug}`
  );

  return response.data;
};