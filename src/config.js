export const API_URL = 'https://api.spotify.com/v1';

export const HEADER = {
  headers: {
    Authorization: `Bearer ${process.env.SPOTIFY_TOKEN}`,
  },
};
