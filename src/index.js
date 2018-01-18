import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists,
} from './search';

import {
  getAlbum,
  getAlbums,
  getAlbumTracks,
} from './album';

require('dotenv').config();

module.exports = {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists,
  getAlbum,
  getAlbums,
  getAlbumTracks,
};
