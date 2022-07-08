import sendRequest from './send-request';

const BASE_URL = '/api/favorites';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function addToFavorites(animalData) {
  console.log('running addToFavorites in utilities/favorites-api !')
  return sendRequest(BASE_URL, 'POST', animalData)
}