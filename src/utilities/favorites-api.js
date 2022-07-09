import sendRequest from './send-request';

const BASE_URL = '/api/favorites';

export function getAll(user) {
  console.log('Running favorites-api getAll')
  console.log(user)
  return sendRequest(BASE_URL);
}

export function getById(id, user) {
  return sendRequest(`${BASE_URL}/${id}`, 'POST', user);
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