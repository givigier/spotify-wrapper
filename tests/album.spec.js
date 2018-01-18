// getAlbum(id)
// getAlbumTracks(id)
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import * as spotify from '../src/album';

chai.use(sinonChai);
sinonStubPromise(sinon);

describe('Album', () => {
  let fetchedStub;
  let promise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Smoke tests', () => {
    it('should exists getAlbum method', () => {
      expect(spotify.getAlbum).to.exist;
    });

    it('should exists getAlbumTracks method', () => {
      expect(spotify.getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call the fetch function', () => {
      spotify.getAlbum();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      spotify.getAlbum('5LkRK3RLauOU3LjwZOnc5j');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/5LkRK3RLauOU3LjwZOnc5j');
    });

    it('should return the JSON data of the request', () => {
      promise.resolves({ body: 'json' });
      const album = spotify.getAlbum();
      expect(album.resolveValue).to.be.eql({ body: 'json' });
    });
  });

  describe('getAlbums', () => {
    it('should call the fetch function', () => {
      spotify.getAlbums([]);
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      spotify.getAlbums(['5LkRK3RLauOU3LjwZOnc5j', '5LkRK3RLauOU3LjwZOnc5k']);
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums?ids=5LkRK3RLauOU3LjwZOnc5j,5LkRK3RLauOU3LjwZOnc5k');
    });

    it('should return the JSON data of the request', () => {
      promise.resolves({ body: 'json' });
      const album = spotify.getAlbums(['5LkRK3RLauOU3LjwZOnc5j', '5LkRK3RLauOU3LjwZOnc5k']);
      expect(album.resolveValue).to.be.eql({ body: 'json' });
    });
  });

  describe('getAlbumTracks', () => {
    it('should call the fetch function', () => {
      spotify.getAlbumTracks();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      spotify.getAlbumTracks('5LkRK3RLauOU3LjwZOnc5j');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/5LkRK3RLauOU3LjwZOnc5j/tracks');
    });

    it('should return the JSON data of the request', () => {
      promise.resolves({ body: 'json' });
      const album = spotify.getAlbumTracks();
      expect(album.resolveValue).to.be.eql({ body: 'json' });
    });
  });
});
