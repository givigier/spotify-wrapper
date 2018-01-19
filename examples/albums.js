import SpotifyWrapper from '../src/index';

global.fetch = require('node-fetch');

const spotify = new SpotifyWrapper({
  token: 'BQB5wiW4PecgI9LzIG7fUwYHaR_bpqvy54k9VkwfLAQ1elgHM0jS8K-hg7f_kaWsWCQwPIBLprb60f6hjNTkD4HiAlrpkmJNz87D0jaN9aSkBa2YnT3cRM2BmTNw0emur9x_Mq4QV-Yv4wk',
});
const albums = spotify.search.albums('Muse');
albums.then(data => console.log(data));
