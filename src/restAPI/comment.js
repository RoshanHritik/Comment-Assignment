import isEmpty from 'lodash/isEmpty';
import { getTokenId } from '../lib/tokenValidity';
import urlConfig from '../lib/urlConfiguration';

export const callRestApiWithToken = async (
  apiEndpoint = '',
  data = {},
  method = '',
  passEmptyData = false
) => {
  const headers = new Headers();
  const bearer = `Bearer ${getTokenId()}`;
  const { baseUrl } = urlConfig;

  headers.append('Authorization', bearer);
  headers.append('Content-Type', 'application/json');

  let options = {};

  if (isEmpty(data) && !passEmptyData) {
    options = {
      method: 'GET',
      headers: headers,
    };
  } else {
    options = {
      method: method || 'POST',
      headers: headers,
      body: JSON.stringify(data),
    };
  }

  return fetch(`${baseUrl}${apiEndpoint}`, options)
    .then(async (response) => {
      if (response.ok) {
        return await response.json();
      }
      throw new Error(
        `HTTP request to ${baseUrl}${apiEndpoint} failed with status ${response.status}`
      );
    })
    .catch((error) => {
      throw error;
    });
};
