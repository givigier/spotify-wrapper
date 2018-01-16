import { expect } from 'chai';
import * as spotify from '../src/index';

describe('Spotify Wrapper', () => {
  describe('Smoke tests', () => {
    it('should exist the search method', () => {
      expect(spotify.search).to.exist;
    });

    it('should exist the searchAlbums method', () => {
      expect(spotify.searchAlbums).to.exist;
    });

    it('should exist the searchArtists method', () => {
      expect(spotify.searchArtists).to.exist;
    });

    it('should exist the searchTracks method', () => {
      expect(spotify.searchTracks).to.exist;
    });

    it('should exist the searchPlaylists method', () => {
      expect(spotify.searchPlaylists).to.exist;
    });
  });
});
