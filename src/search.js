import { API_URL, HEADER } from './config';
import toJSON from './utils';

export const search = (query, type) => {
  const apiUrl = `${API_URL}/search?q=${query}&type=${type}`;

  return fetch(apiUrl, HEADER)
    .then(data => toJSON(data));
};

export const searchAlbums = query => search(query, 'album');
export const searchArtists = query => search(query, 'artist');
export const searchTracks = query => search(query, 'track');
export const searchPlaylists = query => search(query, 'playlist');
