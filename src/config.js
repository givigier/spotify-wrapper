export const API_URL = 'https://api.spotify.com/v1';
const spotifyToken = 'BQBHzOi4U5xQWFbEXl0-fs1vODIhMvbTfsfbOwVeKY6V2dYfl0UfRflNplfOwNMehgbi2yyJxldbEhKDOPTh--mUe3p4Vn4X77NI8lYFDxScQjIYb-M4AzCl-ncLPEBdPLXRIulqIZjyjTE';

export const HEADER = {
  headers: {
    Authorization: `Bearer ${spotifyToken}`,
  },
};
