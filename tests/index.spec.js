import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
sinonStubPromise(sinon);

describe('SpotifyWrapper Library', () => {
  it('should create an instance of SpotifyWrapper', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify).to.be.an.instanceOf(SpotifyWrapper);
  });

  it('should receive apiURL as an option', () => {
    const spotify = new SpotifyWrapper({ apiURL: 'url-test' });
    expect(spotify.apiURL).to.be.equal('url-test');
  });

  it('should use the defaul apiURL when not provided', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
  });

  it('should receive token as an option', () => {
    const spotify = new SpotifyWrapper({ token: 'token-test' });
    expect(spotify.token).to.be.equal('token-test');
  });

  describe('request', () => {
    let fetchedStub;
    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      fetchedStub.returnsPromise();
    });

    afterEach(() => {
      fetchedStub.restore();
    });

    it('should have request method', () => {
      const spotify = new SpotifyWrapper({});
      expect(spotify.request).to.exist;
    });

    it('should call the fetch function', () => {
      const spotify = new SpotifyWrapper({});
      spotify.request('url');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      const spotify = new SpotifyWrapper({});
      spotify.request('url-test');
      expect(fetchedStub).to.have.been.calledWith('url-test');
    });

    it('should call fetch with correct headers', () => {
      const spotify = new SpotifyWrapper({ token: 'token-test' });
      const headers = {
        headers: {
          Authorization: 'Bearer token-test',
        },
      };
      spotify.request('url-test');
      expect(fetchedStub).to.have.been.calledWith('url-test', headers);
    });
  });
});
