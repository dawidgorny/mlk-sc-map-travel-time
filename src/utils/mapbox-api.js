import ky from 'ky';
import buildUrl from 'build-url';
import merge from './merge';

function makeUrl (accessToken, endpoint, parameters = {}) {
  return buildUrl('https://api.mapbox.com', {
    path: endpoint,
    queryParams: merge([{ access_token: accessToken }, parameters])
  });
}

/**
 * https://www.mapbox.com/api-playground/#/forward-geocoding
 */
export function geocode (accessToken, query, parameters) {
  const endpoint = `geocoding/v5/mapbox.places/${query}.json`;
  const url = makeUrl(accessToken, endpoint, parameters);
  return ky.get(url, { method: 'GET' });
}
