import { API_URL, HEADER } from './config';
import toJSON from './utils';

export const getAlbum = id =>
  fetch(`${API_URL}/albums/${id}`, HEADER)
    .then(data => toJSON(data));

export const getAlbums = ids =>
  fetch(`${API_URL}/albums?ids=${ids}`, HEADER)
    .then(data => toJSON(data));

export const getAlbumTracks = id =>
  fetch(`${API_URL}/albums/${id}/tracks`, HEADER)
    .then(data => toJSON(data));
