import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
sinonStubPromise(sinon);

describe('Album', () => {
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
    it('should exists getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist;
    });

    it('should exists getTracks method', () => {
      expect(spotify.album.getTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call the fetch function', () => {
      spotify.album.getAlbum();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      spotify.album.getAlbum('5LkRK3RLauOU3LjwZOnc5j');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/5LkRK3RLauOU3LjwZOnc5j');
    });

    it('should return the JSON data of the request', () => {
      promise.resolves({ body: 'json' });
      const album = spotify.album.getAlbum();
      expect(album.resolveValue).to.be.eql({ body: 'json' });
    });
  });

  describe('getAlbums', () => {
    it('should call the fetch function', () => {
      spotify.album.getAlbums([]);
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      spotify.album.getAlbums(['5LkRK3RLauOU3LjwZOnc5j', '5LkRK3RLauOU3LjwZOnc5k']);
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums?ids=5LkRK3RLauOU3LjwZOnc5j,5LkRK3RLauOU3LjwZOnc5k');
    });

    it('should return the JSON data of the request', () => {
      promise.resolves({ body: 'json' });
      const album = spotify.album.getAlbums(['5LkRK3RLauOU3LjwZOnc5j', '5LkRK3RLauOU3LjwZOnc5k']);
      expect(album.resolveValue).to.be.eql({ body: 'json' });
    });
  });

  describe('getTracks', () => {
    it('should call the fetch function', () => {
      spotify.album.getTracks();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      spotify.album.getTracks('5LkRK3RLauOU3LjwZOnc5j');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/5LkRK3RLauOU3LjwZOnc5j/tracks');
    });

    it('should return the JSON data of the request', () => {
      promise.resolves({ body: 'json' });
      const album = spotify.album.getTracks();
      expect(album.resolveValue).to.be.eql({ body: 'json' });
    });
  });
});
