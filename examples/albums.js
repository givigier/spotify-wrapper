import { searchAlbums } from '../src/index';

global.fetch = require('node-fetch');

searchAlbums('Muse').then(data => console.log(data));
