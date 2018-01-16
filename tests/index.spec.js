import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import * as spotify from '../src/index';

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');

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

  describe('Generic Search', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      promise = fetchedStub.returnsPromise();
    });

    afterEach(() => {
      fetchedStub.restore();
    });

    it('should call fetch function', () => {
      spotify.search();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    context('passing one type', () => {
      it('should receive the correct url to fetch', () => {
        spotify.search('Muse', 'artist');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');
      });
    });

    context('passing multiple types', () => {
      it('should receive the correct url to fetch', () => {
        spotify.search('Muse', ['artist', 'album']);
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist,album');
      });
    });

    it('should return the JSON data of the request', () => {
      promise.resolves({ body: 'json' });
      const artists = spotify.search('Muse', 'artist');
      expect(artists.resolveValue).to.be.eql({ body: 'json' });
    });
  });
});
