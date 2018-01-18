import { searchAlbums } from '../src/index';

global.fetch = require('node-fetch');

const albums = searchAlbums('Muse');
albums.then(data => console.log(data));
