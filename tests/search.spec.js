import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');

describe('Search', () => {
  let fetchedStub;
  let promise;
  let spotify;

  beforeEach(() => {
    spotify = new SpotifyWrapper({ token: 'token-test' });
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Smoke tests', () => {
    it('should exist the searchAlbums method', () => {
      expect(spotify.search.albums).to.exist;
    });

    it('should exist the searchArtists method', () => {
      expect(spotify.search.artists).to.exist;
    });

    it('should exist the searchTracks method', () => {
      expect(spotify.search.tracks).to.exist;
    });

    it('should exist the searchPlaylists method', () => {
      expect(spotify.search.playlists).to.exist;
    });
  });

  describe('search albums', () => {
    it('should call fetch function', () => {
      spotify.search.albums();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      spotify.search.albums('Drone');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Drone&type=album');
    });

    it('should return the JSON data of the request', () => {
      promise.resolves({ body: 'json' });
      const artists = spotify.search.albums('Drone');
      expect(artists.resolveValue).to.be.eql({ body: 'json' });
    });
  });

  describe('search artists', () => {
    it('should call fetch function', () => {
      spotify.search.artists();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      spotify.search.artists('Muse');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');
    });

    it('should return the JSON data of the request', () => {
      promise.resolves({ body: 'json' });
      const artists = spotify.search.artists('Drone');
      expect(artists.resolveValue).to.be.eql({ body: 'json' });
    });
  });

  describe('search tracks', () => {
    it('should call fetch function', () => {
      spotify.search.tracks();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      spotify.search.tracks('Muse');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=track');
    });

    it('should return the JSON data of the request', () => {
      promise.resolves({ body: 'json' });
      const artists = spotify.search.tracks('Drone');
      expect(artists.resolveValue).to.be.eql({ body: 'json' });
    });
  });

  describe('search playlists', () => {
    it('should call fetch function', () => {
      spotify.search.playlists();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      spotify.search.playlists('Playlist');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Playlist&type=playlist');
    });

    it('should return the JSON data of the request', () => {
      promise.resolves({ body: 'json' });
      const artists = spotify.search.playlists('Drone');
      expect(artists.resolveValue).to.be.eql({ body: 'json' });
    });
  });
});
