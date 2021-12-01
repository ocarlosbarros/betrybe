import { GET_IMAGE, REQUEST_IMAGE, FAILED_REQUEST } from './actionTypes';

function getImage(json) {
  return { type: GET_IMAGE, payload: json.message };
}

function requestDog(){
  return { type: REQUEST_IMAGE };
}

function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error };
}

function fetchDog() {
  return (dispatch) => {
    dispatch(requestDog());
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then((r) => r.json()
        .then(
          (json) => dispatch(getImage(json)),
          (error) => dispatch(failedRequest(error)),
        ));
  };
}

export { getImage, requestDog, failedRequest, fetchDog }