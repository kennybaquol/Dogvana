import sendRequest from './send-request';

const BASE_URL = '/api/favorites';

export function getAll() {
  console.log('Running favorites-api getAll')
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function updateNote(id, note) {
  console.log('Running favorites-api updateNote')
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', note);
}

export function addToFavorites(animalData, note) {
  console.log('running addToFavorites in utilities/favorites-api !')
  console.log(note)
  const data = {
    animalData: animalData,
    note: note
  }
  console.log(data)
  return sendRequest(`${BASE_URL}/create`, 'POST', data)
}

export function removeFromFavorites(id) {
  console.log('running removeFromFavorites in utilities/favorites-api !')
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}