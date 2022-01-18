const token = '4979601472092147';
const BASE_URL =  `https://www.superheroapi.com/api.php/${token}/search`;

const fetchApi = (name) => {
  fetch(`${BASE_URL}/${ name }`)
  .then((response) => response.json())
  .then(({ results }) => results)
  .catch((error) => error);

}

export default fetchApi;

