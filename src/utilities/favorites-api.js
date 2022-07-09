import sendRequest from './send-request';

const BASE_URL = '/api/favorites';

export function getAll(user) {
  return sendRequest(BASE_URL, 'GET', user);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function addToFavorites(animalData, user) {
  console.log('running addToFavorites in utilities/favorites-api !')
  console.log(user)
  const data = {
    animalData: animalData,
    user: user
  }
  console.log(data)
  return sendRequest(`${BASE_URL}/create`, 'POST', data)
}