const API_KEY = '8523cbb8';

const getSearchedPosts = async (query, page) =>
  fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}`)
    .then((res) => res.json())
    .then(
      (res) => {
        return res
      }
    );

export default getSearchedPosts;